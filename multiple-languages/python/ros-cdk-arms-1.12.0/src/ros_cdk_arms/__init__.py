'''
## Aliyun ROS ARMS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ARMS from '@alicloud/ros-cdk-arms';
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
    jsii_type="@alicloud/ros-cdk-arms.AddonReleaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "addon_version": "addonVersion",
        "environment_id": "environmentId",
        "name": "name",
        "release_name": "releaseName",
        "values": "values",
    },
)
class AddonReleaseProps:
    def __init__(
        self,
        *,
        addon_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        release_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``AddonRelease``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease

        :param addon_version: Property addonVersion: The version of the add-on.
        :param environment_id: Property environmentId: The id of the environment.
        :param name: Property name: The name of the add-on.
        :param release_name: Property releaseName: The name of the add-on after it is installed. If you do not specify this parameter, a default rule name is generated.
        :param values: Property values: The metadata.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6122eadf859556f23c0eb13714814dae7bd4f68b5b1e79314da146c6f3bd29a)
            check_type(argname="argument addon_version", value=addon_version, expected_type=type_hints["addon_version"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument release_name", value=release_name, expected_type=type_hints["release_name"])
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "addon_version": addon_version,
            "environment_id": environment_id,
            "name": name,
        }
        if release_name is not None:
            self._values["release_name"] = release_name
        if values is not None:
            self._values["values"] = values

    @builtins.property
    def addon_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property addonVersion: The version of the add-on.'''
        result = self._values.get("addon_version")
        assert result is not None, "Required property 'addon_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentId: The id of the environment.'''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the add-on.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def release_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property releaseName: The name of the add-on after it is installed.

        If you do not specify this parameter, a default rule name is generated.
        '''
        result = self._values.get("release_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def values(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property values: The metadata.'''
        result = self._values.get("values")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AddonReleaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.ApplyAlertRuleTemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_ids": "clusterIds",
        "template_ids": "templateIds",
        "update": "update",
    },
)
class ApplyAlertRuleTemplateProps:
    def __init__(
        self,
        *,
        cluster_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        template_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        update: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ApplyAlertRuleTemplate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate

        :param cluster_ids: Property clusterIds: The IDs list of Prometheus Instances.
        :param template_ids: Property templateIds: The IDs list of Prometheus alert rule templates.
        :param update: Property update: Whether to update created alert rules. Default false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74895326d5c4050036bef206f76163fb7003c73e9a15a8a90f49319f2d053cb9)
            check_type(argname="argument cluster_ids", value=cluster_ids, expected_type=type_hints["cluster_ids"])
            check_type(argname="argument template_ids", value=template_ids, expected_type=type_hints["template_ids"])
            check_type(argname="argument update", value=update, expected_type=type_hints["update"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cluster_ids is not None:
            self._values["cluster_ids"] = cluster_ids
        if template_ids is not None:
            self._values["template_ids"] = template_ids
        if update is not None:
            self._values["update"] = update

    @builtins.property
    def cluster_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property clusterIds: The IDs list of Prometheus Instances.'''
        result = self._values.get("cluster_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def template_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property templateIds: The IDs list of Prometheus alert rule templates.'''
        result = self._values.get("template_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def update(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property update: Whether to update created alert rules.

        Default false.
        '''
        result = self._values.get("update")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApplyAlertRuleTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.DeliverTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "target_list": "targetList",
        "task_name": "taskName",
        "data_source_id": "dataSourceId",
        "data_source_name": "dataSourceName",
        "external_label": "externalLabel",
        "filter_list": "filterList",
        "filter_type": "filterType",
        "task_description": "taskDescription",
    },
)
class DeliverTaskProps:
    def __init__(
        self,
        *,
        target_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDeliverTask.TargetListProperty", typing.Dict[builtins.str, typing.Any]]]]],
        task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_source_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        external_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filter_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filter_type: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        task_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DeliverTask``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask

        :param target_list: Property targetList: The list of the target.
        :param task_name: Property taskName: The name of the task.
        :param data_source_id: Property dataSourceId: The ID of the data source.
        :param data_source_name: Property dataSourceName: The name of the data source.
        :param external_label: Property externalLabel: The external label of the task.
        :param filter_list: Property filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.
        :param filter_type: Property filterType: Whether the data filtering adopts the whitelist mechanism. Default value: true.
        :param task_description: Property taskDescription: The description of the task.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db90022be78248be19070a49ed152b29bf9e9729690a10f1fda0811dbbdb6128)
            check_type(argname="argument target_list", value=target_list, expected_type=type_hints["target_list"])
            check_type(argname="argument task_name", value=task_name, expected_type=type_hints["task_name"])
            check_type(argname="argument data_source_id", value=data_source_id, expected_type=type_hints["data_source_id"])
            check_type(argname="argument data_source_name", value=data_source_name, expected_type=type_hints["data_source_name"])
            check_type(argname="argument external_label", value=external_label, expected_type=type_hints["external_label"])
            check_type(argname="argument filter_list", value=filter_list, expected_type=type_hints["filter_list"])
            check_type(argname="argument filter_type", value=filter_type, expected_type=type_hints["filter_type"])
            check_type(argname="argument task_description", value=task_description, expected_type=type_hints["task_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "target_list": target_list,
            "task_name": task_name,
        }
        if data_source_id is not None:
            self._values["data_source_id"] = data_source_id
        if data_source_name is not None:
            self._values["data_source_name"] = data_source_name
        if external_label is not None:
            self._values["external_label"] = external_label
        if filter_list is not None:
            self._values["filter_list"] = filter_list
        if filter_type is not None:
            self._values["filter_type"] = filter_type
        if task_description is not None:
            self._values["task_description"] = task_description

    @builtins.property
    def target_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliverTask.TargetListProperty"]]]:
        '''Property targetList: The list of the target.'''
        result = self._values.get("target_list")
        assert result is not None, "Required property 'target_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliverTask.TargetListProperty"]]], result)

    @builtins.property
    def task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property taskName: The name of the task.'''
        result = self._values.get("task_name")
        assert result is not None, "Required property 'task_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataSourceId: The ID of the data source.'''
        result = self._values.get("data_source_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_source_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataSourceName: The name of the data source.'''
        result = self._values.get("data_source_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def external_label(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property externalLabel: The external label of the task.'''
        result = self._values.get("external_label")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filter_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.'''
        result = self._values.get("filter_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filter_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property filterType: Whether the data filtering adopts the whitelist mechanism.

        Default value: true.
        '''
        result = self._values.get("filter_type")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def task_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property taskDescription: The description of the task.'''
        result = self._values.get("task_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DeliverTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.EnvCustomJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_yaml": "configYaml",
        "env_custom_job_name": "envCustomJobName",
        "environment_id": "environmentId",
        "aliyun_lang": "aliyunLang",
    },
)
class EnvCustomJobProps:
    def __init__(
        self,
        *,
        config_yaml: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        env_custom_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        aliyun_lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``EnvCustomJob``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envcustomjob

        :param config_yaml: Property configYaml: The YAML configuration string of the custom job.
        :param env_custom_job_name: Property envCustomJobName: The name of the custom job.
        :param environment_id: Property environmentId: The ID of the environment instance.
        :param aliyun_lang: Property aliyunLang: The language. Valid values: zh and en. Default value: zh.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fc83aa6388ee68c3e525dc36f62cc7a8bf4e12833aae8adf7afb0bae14e8212)
            check_type(argname="argument config_yaml", value=config_yaml, expected_type=type_hints["config_yaml"])
            check_type(argname="argument env_custom_job_name", value=env_custom_job_name, expected_type=type_hints["env_custom_job_name"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument aliyun_lang", value=aliyun_lang, expected_type=type_hints["aliyun_lang"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "config_yaml": config_yaml,
            "env_custom_job_name": env_custom_job_name,
            "environment_id": environment_id,
        }
        if aliyun_lang is not None:
            self._values["aliyun_lang"] = aliyun_lang

    @builtins.property
    def config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property configYaml: The YAML configuration string of the custom job.'''
        result = self._values.get("config_yaml")
        assert result is not None, "Required property 'config_yaml' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def env_custom_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property envCustomJobName: The name of the custom job.'''
        result = self._values.get("env_custom_job_name")
        assert result is not None, "Required property 'env_custom_job_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentId: The ID of the environment instance.'''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def aliyun_lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aliyunLang: The language.

        Valid values: zh and en. Default value: zh.
        '''
        result = self._values.get("aliyun_lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EnvCustomJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.EnvPodMonitorProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_yaml": "configYaml",
        "environment_id": "environmentId",
        "aliyun_lang": "aliyunLang",
    },
)
class EnvPodMonitorProps:
    def __init__(
        self,
        *,
        config_yaml: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        aliyun_lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``EnvPodMonitor``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envpodmonitor

        :param config_yaml: Property configYaml: The YAML configuration string of the PodMonitor.
        :param environment_id: Property environmentId: The ID of the environment instance.
        :param aliyun_lang: Property aliyunLang: The language. Valid values: zh and en. Default value: zh.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b00b5314814adee04d3c2b40cb64453e721fefb9081c803f4896980639035615)
            check_type(argname="argument config_yaml", value=config_yaml, expected_type=type_hints["config_yaml"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument aliyun_lang", value=aliyun_lang, expected_type=type_hints["aliyun_lang"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "config_yaml": config_yaml,
            "environment_id": environment_id,
        }
        if aliyun_lang is not None:
            self._values["aliyun_lang"] = aliyun_lang

    @builtins.property
    def config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property configYaml: The YAML configuration string of the PodMonitor.'''
        result = self._values.get("config_yaml")
        assert result is not None, "Required property 'config_yaml' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentId: The ID of the environment instance.'''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def aliyun_lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aliyunLang: The language.

        Valid values: zh and en. Default value: zh.
        '''
        result = self._values.get("aliyun_lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EnvPodMonitorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.EnvServiceMonitorProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_yaml": "configYaml",
        "environment_id": "environmentId",
        "aliyun_lang": "aliyunLang",
    },
)
class EnvServiceMonitorProps:
    def __init__(
        self,
        *,
        config_yaml: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        aliyun_lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``EnvServiceMonitor``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envservicemonitor

        :param config_yaml: Property configYaml: The YAML configuration string of the ServiceMonitor.
        :param environment_id: Property environmentId: The ID of the environment instance.
        :param aliyun_lang: Property aliyunLang: The language. Valid values: zh and en. Default value: zh.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8fae8b5fbd6f25cf8c1e31049bb0458cfe11b158bcad0a8a3c76f236e29e36e)
            check_type(argname="argument config_yaml", value=config_yaml, expected_type=type_hints["config_yaml"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument aliyun_lang", value=aliyun_lang, expected_type=type_hints["aliyun_lang"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "config_yaml": config_yaml,
            "environment_id": environment_id,
        }
        if aliyun_lang is not None:
            self._values["aliyun_lang"] = aliyun_lang

    @builtins.property
    def config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property configYaml: The YAML configuration string of the ServiceMonitor.'''
        result = self._values.get("config_yaml")
        assert result is not None, "Required property 'config_yaml' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentId: The ID of the environment instance.'''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def aliyun_lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aliyunLang: The language.

        Valid values: zh and en. Default value: zh.
        '''
        result = self._values.get("aliyun_lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EnvServiceMonitorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.EnvironmentFeatureProps",
    jsii_struct_bases=[],
    name_mapping={
        "environment_id": "environmentId",
        "feature_name": "featureName",
        "feature_version": "featureVersion",
        "config": "config",
    },
)
class EnvironmentFeatureProps:
    def __init__(
        self,
        *,
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        feature_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        feature_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``EnvironmentFeature``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature

        :param environment_id: Property environmentId: The id of the environment.
        :param feature_name: Property featureName: The name of the feature. Valid values: app-agent-pilot metric-agent
        :param feature_version: Property featureVersion: The version of the feature.
        :param config: Property config: The metadata of the feature.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e2d94b030d2619b05bb9cdfd5c7863ab2d45ad4ab44578cedaf31202eadfd1a)
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument feature_name", value=feature_name, expected_type=type_hints["feature_name"])
            check_type(argname="argument feature_version", value=feature_version, expected_type=type_hints["feature_version"])
            check_type(argname="argument config", value=config, expected_type=type_hints["config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "environment_id": environment_id,
            "feature_name": feature_name,
            "feature_version": feature_version,
        }
        if config is not None:
            self._values["config"] = config

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentId: The id of the environment.'''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def feature_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property featureName: The name of the feature.

        Valid values:
        app-agent-pilot
        metric-agent
        '''
        result = self._values.get("feature_name")
        assert result is not None, "Required property 'feature_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def feature_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property featureVersion: The version of the feature.'''
        result = self._values.get("feature_version")
        assert result is not None, "Required property 'feature_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property config: The metadata of the feature.'''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EnvironmentFeatureProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.EnvironmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "bind_resource_id": "bindResourceId",
        "environment_name": "environmentName",
        "environment_sub_type": "environmentSubType",
        "environment_type": "environmentType",
        "delete_prom_instance": "deletePromInstance",
        "fee_package": "feePackage",
        "grafana_workspace_id": "grafanaWorkspaceId",
        "managed_type": "managedType",
        "prometheus_instance_id": "prometheusInstanceId",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class EnvironmentProps:
    def __init__(
        self,
        *,
        bind_resource_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_sub_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delete_prom_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fee_package: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grafana_workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        managed_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        prometheus_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosEnvironment.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Environment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment

        :param bind_resource_id: Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID. For a Cloud environment, specify the region ID.
        :param environment_name: Property environmentName: The name of the environment.
        :param environment_sub_type: Property environmentSubType: The subtype of the environment. Valid values: One: CS type environment ACK: CS type environment ECS: ECS type environment Cloud: cloud service
        :param environment_type: Property environmentType: The type of the environment. Valid values: CS: ACK ECS: ECS Cloud: cloud service
        :param delete_prom_instance: Property deletePromInstance: Cascade delete Prometheus instance. Default value: true.
        :param fee_package: Property feePackage: The payable resource plan. Valid values: If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic. Otherwise, leave the parameter empty.
        :param grafana_workspace_id: Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment. When passing space, the default share grafana is used.
        :param managed_type: Property managedType: Specifies whether agents or exporters are managed. Valid values: none: No. By default, no managed agents or exporters are provided for ACK clusters. agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters. agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
        :param prometheus_instance_id: Property prometheusInstanceId: The ID of the Prometheus instance. If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags of Environment.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e55af6d122555673c36bb4b27447bd4eb0cadc5c7ad6efc585864857378b4778)
            check_type(argname="argument bind_resource_id", value=bind_resource_id, expected_type=type_hints["bind_resource_id"])
            check_type(argname="argument environment_name", value=environment_name, expected_type=type_hints["environment_name"])
            check_type(argname="argument environment_sub_type", value=environment_sub_type, expected_type=type_hints["environment_sub_type"])
            check_type(argname="argument environment_type", value=environment_type, expected_type=type_hints["environment_type"])
            check_type(argname="argument delete_prom_instance", value=delete_prom_instance, expected_type=type_hints["delete_prom_instance"])
            check_type(argname="argument fee_package", value=fee_package, expected_type=type_hints["fee_package"])
            check_type(argname="argument grafana_workspace_id", value=grafana_workspace_id, expected_type=type_hints["grafana_workspace_id"])
            check_type(argname="argument managed_type", value=managed_type, expected_type=type_hints["managed_type"])
            check_type(argname="argument prometheus_instance_id", value=prometheus_instance_id, expected_type=type_hints["prometheus_instance_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bind_resource_id": bind_resource_id,
            "environment_name": environment_name,
            "environment_sub_type": environment_sub_type,
            "environment_type": environment_type,
        }
        if delete_prom_instance is not None:
            self._values["delete_prom_instance"] = delete_prom_instance
        if fee_package is not None:
            self._values["fee_package"] = fee_package
        if grafana_workspace_id is not None:
            self._values["grafana_workspace_id"] = grafana_workspace_id
        if managed_type is not None:
            self._values["managed_type"] = managed_type
        if prometheus_instance_id is not None:
            self._values["prometheus_instance_id"] = prometheus_instance_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def bind_resource_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID.

        For a Cloud environment, specify the region ID.
        '''
        result = self._values.get("bind_resource_id")
        assert result is not None, "Required property 'bind_resource_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentName: The name of the environment.'''
        result = self._values.get("environment_name")
        assert result is not None, "Required property 'environment_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentSubType: The subtype of the environment.

        Valid values:
        One: CS type environment
        ACK: CS type environment
        ECS: ECS type environment
        Cloud: cloud service
        '''
        result = self._values.get("environment_sub_type")
        assert result is not None, "Required property 'environment_sub_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentType: The type of the environment.

        Valid values:
        CS: ACK
        ECS: ECS
        Cloud: cloud service
        '''
        result = self._values.get("environment_type")
        assert result is not None, "Required property 'environment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delete_prom_instance(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletePromInstance: Cascade delete Prometheus instance.

        Default value: true.
        '''
        result = self._values.get("delete_prom_instance")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fee_package(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property feePackage: The payable resource plan.

        Valid values:
        If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
        Otherwise, leave the parameter empty.
        '''
        result = self._values.get("fee_package")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grafana_workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment.

        When passing space, the default share grafana is used.
        '''
        result = self._values.get("grafana_workspace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def managed_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property managedType: Specifies whether agents or exporters are managed.

        Valid values:
        none: No. By default, no managed agents or exporters are provided for ACK clusters.
        agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
        agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
        '''
        result = self._values.get("managed_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def prometheus_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property prometheusInstanceId: The ID of the Prometheus instance.

        If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
        '''
        result = self._values.get("prometheus_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosEnvironment.TagsProperty"]]:
        '''Property tags: Tags of Environment.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosEnvironment.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EnvironmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-arms.IAddonRelease")
class IAddonRelease(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AddonRelease``.'''

    @builtins.property
    @jsii.member(jsii_name="attrConfig")
    def attr_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Config: AddonRelease configuration information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The environment ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRelease")
    def attr_release(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Release: Release information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReleaseName")
    def attr_release_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReleaseName: The name of the add-on.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AddonReleaseProps:
        ...


class _IAddonReleaseProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AddonRelease``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-arms.IAddonRelease"

    @builtins.property
    @jsii.member(jsii_name="attrConfig")
    def attr_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Config: AddonRelease configuration information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The environment ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrRelease")
    def attr_release(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Release: Release information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRelease"))

    @builtins.property
    @jsii.member(jsii_name="attrReleaseName")
    def attr_release_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReleaseName: The name of the add-on.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReleaseName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AddonReleaseProps:
        return typing.cast(AddonReleaseProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAddonRelease).__jsii_proxy_class__ = lambda : _IAddonReleaseProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-arms.IApplyAlertRuleTemplate")
class IApplyAlertRuleTemplate(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ApplyAlertRuleTemplate``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApplyAlertRuleTemplateProps:
        ...


class _IApplyAlertRuleTemplateProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ApplyAlertRuleTemplate``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-arms.IApplyAlertRuleTemplate"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApplyAlertRuleTemplateProps:
        return typing.cast(ApplyAlertRuleTemplateProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IApplyAlertRuleTemplate).__jsii_proxy_class__ = lambda : _IApplyAlertRuleTemplateProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-arms.IDeliverTask")
class IDeliverTask(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DeliverTask``.'''

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: The ID of the task.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DeliverTaskProps:
        ...


class _IDeliverTaskProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DeliverTask``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-arms.IDeliverTask"

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: The ID of the task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DeliverTaskProps:
        return typing.cast(DeliverTaskProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDeliverTask).__jsii_proxy_class__ = lambda : _IDeliverTaskProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-arms.IEnvCustomJob")
class IEnvCustomJob(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``EnvCustomJob``.'''

    @builtins.property
    @jsii.member(jsii_name="attrConfigYaml")
    def attr_config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigYaml: The YAML configuration string of the custom job.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvCustomJobName")
    def attr_env_custom_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvCustomJobName: The name of the custom job.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvCustomJobProps:
        ...


class _IEnvCustomJobProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``EnvCustomJob``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-arms.IEnvCustomJob"

    @builtins.property
    @jsii.member(jsii_name="attrConfigYaml")
    def attr_config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigYaml: The YAML configuration string of the custom job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigYaml"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvCustomJobName")
    def attr_env_custom_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvCustomJobName: The name of the custom job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvCustomJobName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvCustomJobProps:
        return typing.cast(EnvCustomJobProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEnvCustomJob).__jsii_proxy_class__ = lambda : _IEnvCustomJobProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-arms.IEnvPodMonitor")
class IEnvPodMonitor(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``EnvPodMonitor``.'''

    @builtins.property
    @jsii.member(jsii_name="attrConfigYaml")
    def attr_config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigYaml: The YAML configuration string of the PodMonitor.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvPodMonitorName")
    def attr_env_pod_monitor_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvPodMonitorName: The name of the PodMonitor.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace of the PodMonitor.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvPodMonitorProps:
        ...


class _IEnvPodMonitorProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``EnvPodMonitor``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-arms.IEnvPodMonitor"

    @builtins.property
    @jsii.member(jsii_name="attrConfigYaml")
    def attr_config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigYaml: The YAML configuration string of the PodMonitor.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigYaml"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvPodMonitorName")
    def attr_env_pod_monitor_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvPodMonitorName: The name of the PodMonitor.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvPodMonitorName"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace of the PodMonitor.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvPodMonitorProps:
        return typing.cast(EnvPodMonitorProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEnvPodMonitor).__jsii_proxy_class__ = lambda : _IEnvPodMonitorProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-arms.IEnvServiceMonitor")
class IEnvServiceMonitor(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``EnvServiceMonitor``.'''

    @builtins.property
    @jsii.member(jsii_name="attrConfigYaml")
    def attr_config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigYaml: The YAML configuration string of the ServiceMonitor.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvServiceMonitorName")
    def attr_env_service_monitor_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvServiceMonitorName: The name of the ServiceMonitor.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace of the ServiceMonitor.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvServiceMonitorProps:
        ...


class _IEnvServiceMonitorProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``EnvServiceMonitor``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-arms.IEnvServiceMonitor"

    @builtins.property
    @jsii.member(jsii_name="attrConfigYaml")
    def attr_config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigYaml: The YAML configuration string of the ServiceMonitor.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigYaml"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvServiceMonitorName")
    def attr_env_service_monitor_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvServiceMonitorName: The name of the ServiceMonitor.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvServiceMonitorName"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace of the ServiceMonitor.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvServiceMonitorProps:
        return typing.cast(EnvServiceMonitorProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEnvServiceMonitor).__jsii_proxy_class__ = lambda : _IEnvServiceMonitorProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-arms.IEnvironment")
class IEnvironment(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Environment``.'''

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The id of the environment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentName")
    def attr_environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentName: The name of the environment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentSubType")
    def attr_environment_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentSubType: The subtype of the environment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentType")
    def attr_environment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentType: The type of the environment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFeePackage")
    def attr_fee_package(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FeePackage: The payable resource plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGrafanaWorkspaceId")
    def attr_grafana_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrManagedType")
    def attr_managed_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ManagedType: Specifies whether agents or exporters are managed.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusInstanceId")
    def attr_prometheus_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrometheusInstanceId: The ID of the Prometheus instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvironmentProps:
        ...


class _IEnvironmentProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Environment``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-arms.IEnvironment"

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The id of the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentName")
    def attr_environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentName: The name of the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentSubType")
    def attr_environment_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentSubType: The subtype of the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentSubType"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentType")
    def attr_environment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentType: The type of the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentType"))

    @builtins.property
    @jsii.member(jsii_name="attrFeePackage")
    def attr_fee_package(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FeePackage: The payable resource plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFeePackage"))

    @builtins.property
    @jsii.member(jsii_name="attrGrafanaWorkspaceId")
    def attr_grafana_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGrafanaWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrManagedType")
    def attr_managed_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ManagedType: Specifies whether agents or exporters are managed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrManagedType"))

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusInstanceId")
    def attr_prometheus_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrometheusInstanceId: The ID of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrometheusInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvironmentProps:
        return typing.cast(EnvironmentProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEnvironment).__jsii_proxy_class__ = lambda : _IEnvironmentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-arms.IEnvironmentFeature")
class IEnvironmentFeature(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``EnvironmentFeature``.'''

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The environment ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFeature")
    def attr_feature(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Feature: The installation information of the feature.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFeatureName")
    def attr_feature_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FeatureName: The name of the feature.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFeatureStatus")
    def attr_feature_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FeatureStatus: The status of the feature.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvironmentFeatureProps:
        ...


class _IEnvironmentFeatureProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``EnvironmentFeature``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-arms.IEnvironmentFeature"

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The environment ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrFeature")
    def attr_feature(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Feature: The installation information of the feature.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFeature"))

    @builtins.property
    @jsii.member(jsii_name="attrFeatureName")
    def attr_feature_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FeatureName: The name of the feature.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFeatureName"))

    @builtins.property
    @jsii.member(jsii_name="attrFeatureStatus")
    def attr_feature_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FeatureStatus: The status of the feature.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFeatureStatus"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvironmentFeatureProps:
        return typing.cast(EnvironmentFeatureProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEnvironmentFeature).__jsii_proxy_class__ = lambda : _IEnvironmentFeatureProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-arms.IManagedPrometheus")
class IManagedPrometheus(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ManagedPrometheus``.'''

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: The type of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The vpc ID of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ManagedPrometheusProps":
        ...


class _IManagedPrometheusProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ManagedPrometheus``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-arms.IManagedPrometheus"

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: The type of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The vpc ID of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ManagedPrometheusProps":
        return typing.cast("ManagedPrometheusProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IManagedPrometheus).__jsii_proxy_class__ = lambda : _IManagedPrometheusProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-arms.IPrometheus")
class IPrometheus(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Prometheus``.'''

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: The ID of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: Instance type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGrafanaInstanceId")
    def attr_grafana_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GrafanaInstanceId: Grafana workspace ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: Payment Type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusName")
    def attr_prometheus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrometheusName: The name of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupId: The ID of the security group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSubClustersJson")
    def attr_sub_clusters_json(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SubClustersJson: Subcluster information of globalVeiw cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the prometheus.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: User ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the virtual private cloud (VPC).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The ID of the vSwitch.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PrometheusProps":
        ...


class _IPrometheusProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Prometheus``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-arms.IPrometheus"

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: The ID of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: Instance type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrGrafanaInstanceId")
    def attr_grafana_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GrafanaInstanceId: Grafana workspace ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGrafanaInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: Payment Type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusName")
    def attr_prometheus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrometheusName: The name of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrometheusName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupId: The ID of the security group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSubClustersJson")
    def attr_sub_clusters_json(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SubClustersJson: Subcluster information of globalVeiw cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSubClustersJson"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the prometheus.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: User ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the virtual private cloud (VPC).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The ID of the vSwitch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PrometheusProps":
        return typing.cast("PrometheusProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPrometheus).__jsii_proxy_class__ = lambda : _IPrometheusProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-arms.IRetcodeApp")
class IRetcodeApp(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``RetcodeApp``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppId: The ID of the application for which you created the browser monitoring job.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPid")
    def attr_pid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Pid: The PID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RetcodeAppProps":
        ...


class _IRetcodeAppProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``RetcodeApp``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-arms.IRetcodeApp"

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppId: The ID of the application for which you created the browser monitoring job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrPid")
    def attr_pid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Pid: The PID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPid"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RetcodeAppProps":
        return typing.cast("RetcodeAppProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRetcodeApp).__jsii_proxy_class__ = lambda : _IRetcodeAppProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-arms.IRum")
class IRum(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Rum``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCdnDomain")
    def attr_cdn_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CdnDomain: The CDN domain of the RUM application.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Endpoint: The endpoint of the RUM application.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPid")
    def attr_pid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Pid: The PID of the RUM application.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RumProps":
        ...


class _IRumProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Rum``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-arms.IRum"

    @builtins.property
    @jsii.member(jsii_name="attrCdnDomain")
    def attr_cdn_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CdnDomain: The CDN domain of the RUM application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCdnDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Endpoint: The endpoint of the RUM application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrPid")
    def attr_pid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Pid: The PID of the RUM application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPid"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RumProps":
        return typing.cast("RumProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRum).__jsii_proxy_class__ = lambda : _IRumProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-arms.IXTraceApp")
class IXTraceApp(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``XTraceApp``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPid")
    def attr_pid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Pid: the identify of application.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrXTraceAppName")
    def attr_x_trace_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute XTraceAppName: The name of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "XTraceAppProps":
        ...


class _IXTraceAppProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``XTraceApp``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-arms.IXTraceApp"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPid")
    def attr_pid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Pid: the identify of application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPid"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrXTraceAppName")
    def attr_x_trace_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute XTraceAppName: The name of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrXTraceAppName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "XTraceAppProps":
        return typing.cast("XTraceAppProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IXTraceApp).__jsii_proxy_class__ = lambda : _IXTraceAppProxy


@jsii.implements(IManagedPrometheus)
class ManagedPrometheus(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.ManagedPrometheus",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::ManagedPrometheus``, which is used to install a Prometheus instance to monitor a serverless Kubernetes (ASK) cluster or an Elastic Compute Service (ECS) instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosManagedPrometheus``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ManagedPrometheusProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__574d14511392d4184a9491d6aee452adc93df49874b10f8c8db48ffcc740135e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: The type of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The vpc ID of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ManagedPrometheusProps":
        return typing.cast("ManagedPrometheusProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14ce6522743923c949ca0a1915c55f91587131b4ece3b407e233765f8d8fc1c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59621b1a3c1c1e4d09a9e58af22baeb5afc5789fd12f59522e560a68807ab726)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa8250cf835f654c507a3b978d301d2ef077a6eb9ef6f47245b320a3b34af476)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.ManagedPrometheusProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_type": "clusterType",
        "security_group_id": "securityGroupId",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "cluster_id": "clusterId",
        "cluster_name": "clusterName",
        "grafana_instance_id": "grafanaInstanceId",
    },
)
class ManagedPrometheusProps:
    def __init__(
        self,
        *,
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grafana_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ManagedPrometheus``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus

        :param cluster_type: Property clusterType: The type of the cluster. Currently, only ask, ecs and one clusters are supported. Default is ecs.
        :param security_group_id: Property securityGroupId: The security group ID of the cluster.
        :param vpc_id: Property vpcId: The vpc ID of the cluster.
        :param v_switch_id: Property vSwitchId: The vswith ID of the cluster.
        :param cluster_id: Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
        :param cluster_name: Property clusterName: The name of the cluster. Required when the ClusterType is ecs.
        :param grafana_instance_id: Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74232a4cb080d86977f96e69cb3738a4abb82019ddd7faefa7b60dfa2ee6a4a8)
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument grafana_instance_id", value=grafana_instance_id, expected_type=type_hints["grafana_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_type": cluster_type,
            "security_group_id": security_group_id,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if cluster_name is not None:
            self._values["cluster_name"] = cluster_name
        if grafana_instance_id is not None:
            self._values["grafana_instance_id"] = grafana_instance_id

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterType: The type of the cluster.

        Currently, only ask, ecs and one clusters are supported. Default is ecs.
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property securityGroupId: The security group ID of the cluster.'''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The vpc ID of the cluster.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: The vswith ID of the cluster.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.'''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterName: The name of the cluster.

        Required when the ClusterType is ecs.
        '''
        result = self._values.get("cluster_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grafana_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster.

        When empty or "free", binds to the shared version of Grafana.
        '''
        result = self._values.get("grafana_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ManagedPrometheusProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IPrometheus)
class Prometheus(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.Prometheus",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::Prometheus``, which is used to create a Prometheus instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPrometheus``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PrometheusProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9be4c45d2f08efc612eaad0a59d3243036b147ec2517db7d892f64aa769db24)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: The ID of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: Instance type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrGrafanaInstanceId")
    def attr_grafana_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GrafanaInstanceId: Grafana workspace ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGrafanaInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: Payment Type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusName")
    def attr_prometheus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrometheusName: The name of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrometheusName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupId: The ID of the security group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSubClustersJson")
    def attr_sub_clusters_json(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SubClustersJson: Subcluster information of globalVeiw cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSubClustersJson"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the prometheus.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: User ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the virtual private cloud (VPC).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The ID of the vSwitch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PrometheusProps":
        return typing.cast("PrometheusProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__954110826c48a2907e61a304c02790cbcd3b00b48110ded258fd505dbea8b52a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9090667fe02e6fccccc59ffd0d2f82e67ecbf898004f11206f8eb06a0da80559)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8ddf442f5ea8b9bec9d3dd221445674447bec4b5b7a3c8ecb22cc2ab0c239db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.PrometheusProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_type": "clusterType",
        "grafana_instance_id": "grafanaInstanceId",
        "prometheus_name": "prometheusName",
        "cluster_id": "clusterId",
        "resource_group_id": "resourceGroupId",
        "security_group_id": "securityGroupId",
        "sub_clusters_json": "subClustersJson",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class PrometheusProps:
    def __init__(
        self,
        *,
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        grafana_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        prometheus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sub_clusters_json: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosPrometheus.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Prometheus``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus

        :param cluster_type: Property clusterType: Instance type.
        :param grafana_instance_id: Property grafanaInstanceId: Grafana workspace ID.
        :param prometheus_name: Property prometheusName: The name of the resource.
        :param cluster_id: Property clusterId: The ID of the cluster. This parameter is required if you set ClusterType to ManagedKubernetes.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param security_group_id: Property securityGroupId: The ID of the custom resource group. You can specify this parameter to bind the instance to the resource group.
        :param sub_clusters_json: Property subClustersJson: The child instances of the Prometheus instance for GlobalView.
        :param tags: Property tags: Tags of prometheus.
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
        :param v_switch_id: Property vSwitchId: The ID of the vSwitch. This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__283d86259dc300424cb92cf68a636df7ec53a8c48128f05ac0b9dc676e00cef0)
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument grafana_instance_id", value=grafana_instance_id, expected_type=type_hints["grafana_instance_id"])
            check_type(argname="argument prometheus_name", value=prometheus_name, expected_type=type_hints["prometheus_name"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument sub_clusters_json", value=sub_clusters_json, expected_type=type_hints["sub_clusters_json"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_type": cluster_type,
            "grafana_instance_id": grafana_instance_id,
            "prometheus_name": prometheus_name,
        }
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if sub_clusters_json is not None:
            self._values["sub_clusters_json"] = sub_clusters_json
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterType: Instance type.'''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def grafana_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property grafanaInstanceId: Grafana workspace ID.'''
        result = self._values.get("grafana_instance_id")
        assert result is not None, "Required property 'grafana_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def prometheus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property prometheusName: The name of the resource.'''
        result = self._values.get("prometheus_name")
        assert result is not None, "Required property 'prometheus_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterId: The ID of the cluster.

        This parameter is required if you set ClusterType to ManagedKubernetes.
        '''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: The ID of the custom resource group.

        You can specify this parameter to bind the instance to the resource group.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sub_clusters_json(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property subClustersJson: The child instances of the Prometheus instance for GlobalView.'''
        result = self._values.get("sub_clusters_json")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosPrometheus.TagsProperty"]]:
        '''Property tags: Tags of prometheus.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosPrometheus.TagsProperty"]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the virtual private cloud (VPC).

        This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the vSwitch.

        This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PrometheusProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IRetcodeApp)
class RetcodeApp(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RetcodeApp",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::RetcodeApp``, which is used to create a browser monitoring task.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRetcodeApp``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RetcodeAppProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__101d34d9bcb274b7150f42451bdab201e579ddc3cb2b0a9d52a18de1f8079300)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppId: The ID of the application for which you created the browser monitoring job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrPid")
    def attr_pid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Pid: The PID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPid"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RetcodeAppProps":
        return typing.cast("RetcodeAppProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e52455ce158ae5d7ad728c70bdf5ab65ca564336f910b13a69e4c6b8e18c5f40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2dfe88b51cb40ad7fdabd592d0b91079e4f9a638c214c28a06df217c1a7f8338)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bad594662bf02fc1091964cde44e961eac925be1820342c26e6016f29b24f242)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RetcodeAppProps",
    jsii_struct_bases=[],
    name_mapping={
        "region_id": "regionId",
        "retcode_app_name": "retcodeAppName",
        "retcode_app_type": "retcodeAppType",
    },
)
class RetcodeAppProps:
    def __init__(
        self,
        *,
        region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retcode_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retcode_app_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RetcodeApp``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp

        :param region_id: Property regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        :param retcode_app_name: Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
        :param retcode_app_type: Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab6b08b3ffe1d5e363595e1f9e6208847b2fcbb035b9cc4b5e667200c6042021)
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            check_type(argname="argument retcode_app_name", value=retcode_app_name, expected_type=type_hints["retcode_app_name"])
            check_type(argname="argument retcode_app_type", value=retcode_app_type, expected_type=type_hints["retcode_app_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "region_id": region_id,
            "retcode_app_name": retcode_app_name,
            "retcode_app_type": retcode_app_type,
        }

    @builtins.property
    def region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property regionId: Region ID.

        Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        '''
        result = self._values.get("region_id")
        assert result is not None, "Required property 'region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retcode_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.'''
        result = self._values.get("retcode_app_name")
        assert result is not None, "Required property 'retcode_app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retcode_app_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property retcodeAppType: The type of the application for which you want to create the browser monitoring job.

        Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        '''
        result = self._values.get("retcode_app_type")
        assert result is not None, "Required property 'retcode_app_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RetcodeAppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAddonRelease(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosAddonRelease",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::AddonRelease``, which is used to install an add-on release.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AddonRelease`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAddonReleaseProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdffbd1318e094a0b8fe6c54cced687387d5e5570b40560e51d65e7d94fddabf)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8a418659eac90b2142f1302add45d33d81690ff04a6a4f34bfe9a12cc2b88f2c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConfig")
    def attr_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Config: AddonRelease configuration information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentId: The environment ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrRelease")
    def attr_release(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Release: Release information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRelease"))

    @builtins.property
    @jsii.member(jsii_name="attrReleaseName")
    def attr_release_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReleaseName: The name of the add-on.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReleaseName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="addonVersion")
    def addon_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: addonVersion: The version of the add-on.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "addonVersion"))

    @addon_version.setter
    def addon_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30210a55e4b244f50db4f27ae2293524cea11e82ed8490664408d65019f68f86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addonVersion", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48955b87e14754c5f6d4c34598feb5ab849788d13f35fb22023b29d1b7e79bb3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="environmentId")
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The id of the environment.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentId"))

    @environment_id.setter
    def environment_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbc415128f34dc7ecce0c2f65124578ca6d3dae0bf609ee002f00f19f3c61c17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentId", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the add-on.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b384a58d5e055a13d3c707d9be3cc162df6761556c59ff94531f9eb41fa4b0e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="releaseName")
    def release_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: releaseName: The name of the add-on after it is installed. If you do not specify this parameter, a default rule name is generated.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "releaseName"))

    @release_name.setter
    def release_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9930c70c7196af5964ad284bbb22dcdcdd6524f659d5bd8c9908b5168c921b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "releaseName", value)

    @builtins.property
    @jsii.member(jsii_name="values")
    def values(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: values: The metadata.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "values"))

    @values.setter
    def values(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e619d4c92a04796337a88e623f62f3d3ff7f54c4a299d268091d644f9efec2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "values", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosAddonReleaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "addon_version": "addonVersion",
        "environment_id": "environmentId",
        "name": "name",
        "release_name": "releaseName",
        "values": "values",
    },
)
class RosAddonReleaseProps:
    def __init__(
        self,
        *,
        addon_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        release_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosAddonRelease``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease

        :param addon_version: 
        :param environment_id: 
        :param name: 
        :param release_name: 
        :param values: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__963f5e4f91af190c660e240decdc3e77e1bda80f211f7c16469fc966c1914fb7)
            check_type(argname="argument addon_version", value=addon_version, expected_type=type_hints["addon_version"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument release_name", value=release_name, expected_type=type_hints["release_name"])
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "addon_version": addon_version,
            "environment_id": environment_id,
            "name": name,
        }
        if release_name is not None:
            self._values["release_name"] = release_name
        if values is not None:
            self._values["values"] = values

    @builtins.property
    def addon_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: addonVersion: The version of the add-on.
        '''
        result = self._values.get("addon_version")
        assert result is not None, "Required property 'addon_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The id of the environment.
        '''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the add-on.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def release_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: releaseName: The name of the add-on after it is installed. If you do not specify this parameter, a default rule name is generated.
        '''
        result = self._values.get("release_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def values(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: values: The metadata.
        '''
        result = self._values.get("values")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAddonReleaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApplyAlertRuleTemplate(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosApplyAlertRuleTemplate",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::ApplyAlertRuleTemplate``, which is used to create an alert rule of Alibaba Cloud Managed Service for Prometheus.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ApplyAlertRuleTemplate`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosApplyAlertRuleTemplateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ef84253a4845887471fa4f515785b744cb89c2d8fbb7c258a5ba11ab8f136b1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c493295b3c9022a991160b8acaf5c5ee3fe2986b7d41154eeed3450b07769efb)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5ee663aa029af6900d763bc251f30cd93104a31514de6a7403afb6e476955d01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="clusterIds")
    def cluster_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: clusterIds: The IDs list of Prometheus Instances.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "clusterIds"))

    @cluster_ids.setter
    def cluster_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5b522ffe2d9685a749f0b1eaab5413edf22eb26245adc815f54b2088422ce6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterIds", value)

    @builtins.property
    @jsii.member(jsii_name="templateIds")
    def template_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: templateIds: The IDs list of Prometheus alert rule templates.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "templateIds"))

    @template_ids.setter
    def template_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ead3025d9420923e6ea376a8de045e9a0a5a788010013cb317c2b5d9a9950b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateIds", value)

    @builtins.property
    @jsii.member(jsii_name="update")
    def update(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: update: Whether to update created alert rules. Default false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "update"))

    @update.setter
    def update(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64be8ed118e3e74d45fac92fdd6bd99ec7d02d3af8e3ae161b8b91d9bb2547e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "update", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosApplyAlertRuleTemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_ids": "clusterIds",
        "template_ids": "templateIds",
        "update": "update",
    },
)
class RosApplyAlertRuleTemplateProps:
    def __init__(
        self,
        *,
        cluster_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        template_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        update: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApplyAlertRuleTemplate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate

        :param cluster_ids: 
        :param template_ids: 
        :param update: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06e7ee9fba7d54d9047e4e8071afaf63c7d3e27c3d519a44de623bbd34f17148)
            check_type(argname="argument cluster_ids", value=cluster_ids, expected_type=type_hints["cluster_ids"])
            check_type(argname="argument template_ids", value=template_ids, expected_type=type_hints["template_ids"])
            check_type(argname="argument update", value=update, expected_type=type_hints["update"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cluster_ids is not None:
            self._values["cluster_ids"] = cluster_ids
        if template_ids is not None:
            self._values["template_ids"] = template_ids
        if update is not None:
            self._values["update"] = update

    @builtins.property
    def cluster_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: clusterIds: The IDs list of Prometheus Instances.
        '''
        result = self._values.get("cluster_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def template_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: templateIds: The IDs list of Prometheus alert rule templates.
        '''
        result = self._values.get("template_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def update(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: update: Whether to update created alert rules. Default false.
        '''
        result = self._values.get("update")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApplyAlertRuleTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDeliverTask(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosDeliverTask",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::DeliverTask``, which is used to create a delivery task.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DeliverTask`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDeliverTaskProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5bbd6c1acf07a4bbf4022fcc84c40c6767683e4024dc3ef1e88c8802a87e5b6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__294bde051da7416871b82ee23fbe8775f57f133d978dab5ecb9b590d9f0fd562)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TaskId: The ID of the task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__20bcf1838f3bdc8d744192a32a5a05f09926c96facfb6b18069ea12114790729)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="targetList")
    def target_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliverTask.TargetListProperty"]]]:
        '''
        :Property: targetList: The list of the target.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliverTask.TargetListProperty"]]], jsii.get(self, "targetList"))

    @target_list.setter
    def target_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliverTask.TargetListProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1271bcfa28d4e943a1430fe5e7473fc840035686ea05b90309222dde27a4ccd6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetList", value)

    @builtins.property
    @jsii.member(jsii_name="taskName")
    def task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: taskName: The name of the task.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "taskName"))

    @task_name.setter
    def task_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb0ed4aa55f38de686094a08f823a5ec5e0ba758526fc939818dcf33dfe50f43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "taskName", value)

    @builtins.property
    @jsii.member(jsii_name="dataSourceId")
    def data_source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataSourceId: The ID of the data source.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataSourceId"))

    @data_source_id.setter
    def data_source_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1fac6eeccb7d5476505cbee54b54a212c918edb7a5e92e69d5a17b030177530)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataSourceId", value)

    @builtins.property
    @jsii.member(jsii_name="dataSourceName")
    def data_source_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataSourceName: The name of the data source.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataSourceName"))

    @data_source_name.setter
    def data_source_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__278eea1c379a13b5953a950be24d5f01d99ce181643dc59767361d5b560f2fa1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataSourceName", value)

    @builtins.property
    @jsii.member(jsii_name="externalLabel")
    def external_label(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: externalLabel: The external label of the task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "externalLabel"))

    @external_label.setter
    def external_label(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96f7b4e8fe40d8e609cdccf842ae7fff9a3d7408a3d8eda624958bba8856aee3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "externalLabel", value)

    @builtins.property
    @jsii.member(jsii_name="filterList")
    def filter_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "filterList"))

    @filter_list.setter
    def filter_list(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c3ce9b200c0f70acbbcb2c29a32f363d46c03b6fc12afda0f00538a0f151d40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filterList", value)

    @builtins.property
    @jsii.member(jsii_name="filterType")
    def filter_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: filterType: Whether the data filtering adopts the whitelist mechanism. Default value: true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "filterType"))

    @filter_type.setter
    def filter_type(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80a0f2dc9a91c9b82fbe06cf057930eabbc0193505eae9b36373cbabdb2e560b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filterType", value)

    @builtins.property
    @jsii.member(jsii_name="taskDescription")
    def task_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: taskDescription: The description of the task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "taskDescription"))

    @task_description.setter
    def task_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__795811bacf149ff11b4fff7d875982ac1cd3db2ed94b6f2c250879ab844f04cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "taskDescription", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-arms.RosDeliverTask.TargetListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "target_type": "targetType",
            "fault_tolerant_policy": "faultTolerantPolicy",
            "retry_policy": "retryPolicy",
            "target_name": "targetName",
            "target_param": "targetParam",
        },
    )
    class TargetListProperty:
        def __init__(
            self,
            *,
            target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            fault_tolerant_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            retry_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            target_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            target_param: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param target_type: 
            :param fault_tolerant_policy: 
            :param retry_policy: 
            :param target_name: 
            :param target_param: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4453d195f4e32db8becb9c7a357c9ad58cfac7cabe907e78fd52c53af2f893cf)
                check_type(argname="argument target_type", value=target_type, expected_type=type_hints["target_type"])
                check_type(argname="argument fault_tolerant_policy", value=fault_tolerant_policy, expected_type=type_hints["fault_tolerant_policy"])
                check_type(argname="argument retry_policy", value=retry_policy, expected_type=type_hints["retry_policy"])
                check_type(argname="argument target_name", value=target_name, expected_type=type_hints["target_name"])
                check_type(argname="argument target_param", value=target_param, expected_type=type_hints["target_param"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "target_type": target_type,
            }
            if fault_tolerant_policy is not None:
                self._values["fault_tolerant_policy"] = fault_tolerant_policy
            if retry_policy is not None:
                self._values["retry_policy"] = retry_policy
            if target_name is not None:
                self._values["target_name"] = target_name
            if target_param is not None:
                self._values["target_param"] = target_param

        @builtins.property
        def target_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: targetType: The type of the target.
            '''
            result = self._values.get("target_type")
            assert result is not None, "Required property 'target_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def fault_tolerant_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            faultTolerantPolicy: The fault tolerant policy of the target. Valid values:

            - ALL (default): Exception tolerance is allowed. When an exception occurs, the execution will not be blocked, and the message will be delivered to the dead message queue or dropped directly according to the configuration after exceeding the retry policy.
            - NONE: Fault tolerance is not allowed and execution is blocked when an exception occurs and exceeds the retry policy configuration.
            '''
            result = self._values.get("fault_tolerant_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def retry_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            retryPolicy: The retry policy of the target. Valid values:

            - BACKOFF_RETRY: retry three times, with a random interval between 10 and 20 seconds
            - EXPONENTIAL_DECAY_RETRY (default): retry 176 times, each retry interval exponentially increased to 512 seconds, total retry time is 1 day; The interval for each retry is: 1,2,4,8,... 512 seconds.
            '''
            result = self._values.get("retry_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def target_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: targetName: The name of the target.
            '''
            result = self._values.get("target_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def target_param(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: targetParam: The parameter of the target.
            '''
            result = self._values.get("target_param")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TargetListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosDeliverTaskProps",
    jsii_struct_bases=[],
    name_mapping={
        "target_list": "targetList",
        "task_name": "taskName",
        "data_source_id": "dataSourceId",
        "data_source_name": "dataSourceName",
        "external_label": "externalLabel",
        "filter_list": "filterList",
        "filter_type": "filterType",
        "task_description": "taskDescription",
    },
)
class RosDeliverTaskProps:
    def __init__(
        self,
        *,
        target_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDeliverTask.TargetListProperty, typing.Dict[builtins.str, typing.Any]]]]],
        task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_source_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        external_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filter_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filter_type: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        task_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDeliverTask``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask

        :param target_list: 
        :param task_name: 
        :param data_source_id: 
        :param data_source_name: 
        :param external_label: 
        :param filter_list: 
        :param filter_type: 
        :param task_description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5767fa2140ceff676865f4d5cdf9967cd1e47deca319532a3d59a710ea609d2)
            check_type(argname="argument target_list", value=target_list, expected_type=type_hints["target_list"])
            check_type(argname="argument task_name", value=task_name, expected_type=type_hints["task_name"])
            check_type(argname="argument data_source_id", value=data_source_id, expected_type=type_hints["data_source_id"])
            check_type(argname="argument data_source_name", value=data_source_name, expected_type=type_hints["data_source_name"])
            check_type(argname="argument external_label", value=external_label, expected_type=type_hints["external_label"])
            check_type(argname="argument filter_list", value=filter_list, expected_type=type_hints["filter_list"])
            check_type(argname="argument filter_type", value=filter_type, expected_type=type_hints["filter_type"])
            check_type(argname="argument task_description", value=task_description, expected_type=type_hints["task_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "target_list": target_list,
            "task_name": task_name,
        }
        if data_source_id is not None:
            self._values["data_source_id"] = data_source_id
        if data_source_name is not None:
            self._values["data_source_name"] = data_source_name
        if external_label is not None:
            self._values["external_label"] = external_label
        if filter_list is not None:
            self._values["filter_list"] = filter_list
        if filter_type is not None:
            self._values["filter_type"] = filter_type
        if task_description is not None:
            self._values["task_description"] = task_description

    @builtins.property
    def target_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDeliverTask.TargetListProperty]]]:
        '''
        :Property: targetList: The list of the target.
        '''
        result = self._values.get("target_list")
        assert result is not None, "Required property 'target_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDeliverTask.TargetListProperty]]], result)

    @builtins.property
    def task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: taskName: The name of the task.
        '''
        result = self._values.get("task_name")
        assert result is not None, "Required property 'task_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataSourceId: The ID of the data source.
        '''
        result = self._values.get("data_source_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_source_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataSourceName: The name of the data source.
        '''
        result = self._values.get("data_source_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def external_label(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: externalLabel: The external label of the task.
        '''
        result = self._values.get("external_label")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filter_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.
        '''
        result = self._values.get("filter_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filter_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: filterType: Whether the data filtering adopts the whitelist mechanism. Default value: true.
        '''
        result = self._values.get("filter_type")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def task_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: taskDescription: The description of the task.
        '''
        result = self._values.get("task_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDeliverTaskProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEnvCustomJob(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosEnvCustomJob",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::EnvCustomJob``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EnvCustomJob`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envcustomjob
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEnvCustomJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c832c72921654331734b4b0c76752381fa606e2546cd824a0f9b39da385dd5a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__07c86898a87257bfe9d3254ef22a5cc6ae80156b3c1a94679e1b9414c001235a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigYaml")
    def attr_config_yaml(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigYaml: The YAML configuration string of the custom job.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigYaml"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvCustomJobName")
    def attr_env_custom_job_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvCustomJobName: The name of the custom job.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvCustomJobName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentId: The ID of the environment instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="configYaml")
    def config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: configYaml: The YAML configuration string of the custom job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "configYaml"))

    @config_yaml.setter
    def config_yaml(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8635eafc0d5e40ecacc9e7abd76d63f6ce39df70480dca5b01522d4523e0930c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configYaml", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f212c4dea70c83b012759fb865c05218647e7958130fa13b2d1bfa50cf3cb18d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="envCustomJobName")
    def env_custom_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: envCustomJobName: The name of the custom job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "envCustomJobName"))

    @env_custom_job_name.setter
    def env_custom_job_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7def84aef44183b497d48bf33fc1ef18da8cc2c1f9a96cbe79f569c275ded2df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "envCustomJobName", value)

    @builtins.property
    @jsii.member(jsii_name="environmentId")
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The ID of the environment instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentId"))

    @environment_id.setter
    def environment_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__173caf448d80c0cd5994b2c97d044a2d1908bb623f1ec3bf46a74b15cb49f4a4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentId", value)

    @builtins.property
    @jsii.member(jsii_name="aliyunLang")
    def aliyun_lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aliyunLang: The language. Valid values: zh and en. Default value: zh.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aliyunLang"))

    @aliyun_lang.setter
    def aliyun_lang(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31642a42d96a53fd99db7fb39b54e33022a3fa657e1dacf895e22ba41489372d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aliyunLang", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosEnvCustomJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_yaml": "configYaml",
        "env_custom_job_name": "envCustomJobName",
        "environment_id": "environmentId",
        "aliyun_lang": "aliyunLang",
    },
)
class RosEnvCustomJobProps:
    def __init__(
        self,
        *,
        config_yaml: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        env_custom_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        aliyun_lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosEnvCustomJob``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envcustomjob

        :param config_yaml: 
        :param env_custom_job_name: 
        :param environment_id: 
        :param aliyun_lang: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17583ebc810ad1a7b968d3ee55218d5c4eef7efccef17b0bee66198bd4cfe71a)
            check_type(argname="argument config_yaml", value=config_yaml, expected_type=type_hints["config_yaml"])
            check_type(argname="argument env_custom_job_name", value=env_custom_job_name, expected_type=type_hints["env_custom_job_name"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument aliyun_lang", value=aliyun_lang, expected_type=type_hints["aliyun_lang"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "config_yaml": config_yaml,
            "env_custom_job_name": env_custom_job_name,
            "environment_id": environment_id,
        }
        if aliyun_lang is not None:
            self._values["aliyun_lang"] = aliyun_lang

    @builtins.property
    def config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: configYaml: The YAML configuration string of the custom job.
        '''
        result = self._values.get("config_yaml")
        assert result is not None, "Required property 'config_yaml' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def env_custom_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: envCustomJobName: The name of the custom job.
        '''
        result = self._values.get("env_custom_job_name")
        assert result is not None, "Required property 'env_custom_job_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The ID of the environment instance.
        '''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def aliyun_lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aliyunLang: The language. Valid values: zh and en. Default value: zh.
        '''
        result = self._values.get("aliyun_lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEnvCustomJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEnvPodMonitor(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosEnvPodMonitor",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::EnvPodMonitor``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EnvPodMonitor`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envpodmonitor
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEnvPodMonitorProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78b330542f2dc4eafddf39c423cbd13394bda78fbdeb7275186b397ee4f11418)
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
            type_hints = typing.get_type_hints(_typecheckingstub__72f7ea8e828f819c865c8023031f866ac85f02a778f079d88e9545d167306e62)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigYaml")
    def attr_config_yaml(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigYaml: The YAML configuration string of the PodMonitor.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigYaml"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentId: The ID of the environment instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvPodMonitorName")
    def attr_env_pod_monitor_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvPodMonitorName: The name of the PodMonitor.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvPodMonitorName"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Namespace: The namespace of the PodMonitor.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="configYaml")
    def config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: configYaml: The YAML configuration string of the PodMonitor.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "configYaml"))

    @config_yaml.setter
    def config_yaml(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9360b77ba646eb05c917ceadbfd9f300935d9d1a1dd0d5d911c689a04e5799b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configYaml", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__721c07751c76ec4201ecf28ea6d468312d413184dfce4932667d9361a5ccc2b4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="environmentId")
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The ID of the environment instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentId"))

    @environment_id.setter
    def environment_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ada7bfe9a2c67b2166b1a01c4b743c4bcc53d1f849f9994414700eb4398524a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentId", value)

    @builtins.property
    @jsii.member(jsii_name="aliyunLang")
    def aliyun_lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aliyunLang: The language. Valid values: zh and en. Default value: zh.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aliyunLang"))

    @aliyun_lang.setter
    def aliyun_lang(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11222a7d779e9fbd76506e1a1ee616ef9c2a3f1b968360a3a2e10d21a6a66795)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aliyunLang", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosEnvPodMonitorProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_yaml": "configYaml",
        "environment_id": "environmentId",
        "aliyun_lang": "aliyunLang",
    },
)
class RosEnvPodMonitorProps:
    def __init__(
        self,
        *,
        config_yaml: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        aliyun_lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosEnvPodMonitor``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envpodmonitor

        :param config_yaml: 
        :param environment_id: 
        :param aliyun_lang: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63f678b872e1495f71e6169c8884d4b3992ed044c168ee18dc367d638d231f2a)
            check_type(argname="argument config_yaml", value=config_yaml, expected_type=type_hints["config_yaml"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument aliyun_lang", value=aliyun_lang, expected_type=type_hints["aliyun_lang"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "config_yaml": config_yaml,
            "environment_id": environment_id,
        }
        if aliyun_lang is not None:
            self._values["aliyun_lang"] = aliyun_lang

    @builtins.property
    def config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: configYaml: The YAML configuration string of the PodMonitor.
        '''
        result = self._values.get("config_yaml")
        assert result is not None, "Required property 'config_yaml' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The ID of the environment instance.
        '''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def aliyun_lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aliyunLang: The language. Valid values: zh and en. Default value: zh.
        '''
        result = self._values.get("aliyun_lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEnvPodMonitorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEnvServiceMonitor(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosEnvServiceMonitor",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::EnvServiceMonitor``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EnvServiceMonitor`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envservicemonitor
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEnvServiceMonitorProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43b48d2e65cbb4fc41906076062487080b7df7e5b88abf3d4f4c8807087665dc)
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
            type_hints = typing.get_type_hints(_typecheckingstub__47d404d0be9023711bd6dd5a65a9cec7aac664baff93fd8f1a55c5abad840185)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigYaml")
    def attr_config_yaml(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigYaml: The YAML configuration string of the ServiceMonitor.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigYaml"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentId: The ID of the environment instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvServiceMonitorName")
    def attr_env_service_monitor_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvServiceMonitorName: The name of the ServiceMonitor.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvServiceMonitorName"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Namespace: The namespace of the ServiceMonitor.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="configYaml")
    def config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: configYaml: The YAML configuration string of the ServiceMonitor.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "configYaml"))

    @config_yaml.setter
    def config_yaml(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9570cdd4a71b5b85b9b1c8c622f0e89d0b7bbb1527be238adc5cc5e72b9930e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configYaml", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__123a918a62372d9671fa82ff81f9b9fc7398b1e71a69dedf845f3c64edd79f18)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="environmentId")
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The ID of the environment instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentId"))

    @environment_id.setter
    def environment_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9918fa473c88b7165ef99c1f3866fb8b0afb21e6f3d67e0640deac50eac255e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentId", value)

    @builtins.property
    @jsii.member(jsii_name="aliyunLang")
    def aliyun_lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aliyunLang: The language. Valid values: zh and en. Default value: zh.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aliyunLang"))

    @aliyun_lang.setter
    def aliyun_lang(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a01a54c4a68f25c189c369a6d9ef4c5eb5b2a4e150a68df2ecb5f0167e815f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aliyunLang", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosEnvServiceMonitorProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_yaml": "configYaml",
        "environment_id": "environmentId",
        "aliyun_lang": "aliyunLang",
    },
)
class RosEnvServiceMonitorProps:
    def __init__(
        self,
        *,
        config_yaml: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        aliyun_lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosEnvServiceMonitor``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envservicemonitor

        :param config_yaml: 
        :param environment_id: 
        :param aliyun_lang: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2cb4a986175422a721011d8a207a5f273a4d7e3d355f581b0b4c6aa3051f7d32)
            check_type(argname="argument config_yaml", value=config_yaml, expected_type=type_hints["config_yaml"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument aliyun_lang", value=aliyun_lang, expected_type=type_hints["aliyun_lang"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "config_yaml": config_yaml,
            "environment_id": environment_id,
        }
        if aliyun_lang is not None:
            self._values["aliyun_lang"] = aliyun_lang

    @builtins.property
    def config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: configYaml: The YAML configuration string of the ServiceMonitor.
        '''
        result = self._values.get("config_yaml")
        assert result is not None, "Required property 'config_yaml' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The ID of the environment instance.
        '''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def aliyun_lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aliyunLang: The language. Valid values: zh and en. Default value: zh.
        '''
        result = self._values.get("aliyun_lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEnvServiceMonitorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEnvironment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosEnvironment",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::Environment``, which is used to create an environment.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Environment`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEnvironmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06a08fecc8b2564f8b398ee485b956949b16c74ccc485def4a6f07abc4d7a450)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c442d50c5b62e726129ac431281e3eac850dd78d5708c61ba9ff963cd52c6ee6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentId: The id of the environment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentName")
    def attr_environment_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentName: The name of the environment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentSubType")
    def attr_environment_sub_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentSubType: The subtype of the environment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentSubType"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentType")
    def attr_environment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentType: The type of the environment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentType"))

    @builtins.property
    @jsii.member(jsii_name="attrFeePackage")
    def attr_fee_package(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FeePackage: The payable resource plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFeePackage"))

    @builtins.property
    @jsii.member(jsii_name="attrGrafanaWorkspaceId")
    def attr_grafana_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGrafanaWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrManagedType")
    def attr_managed_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ManagedType: Specifies whether agents or exporters are managed.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrManagedType"))

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusInstanceId")
    def attr_prometheus_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrometheusInstanceId: The ID of the Prometheus instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrometheusInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bindResourceId")
    def bind_resource_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID. For a Cloud environment, specify the region ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bindResourceId"))

    @bind_resource_id.setter
    def bind_resource_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c621dcf2981196487a7cbe7952ace9e4bb6f807e969b1bfd6151224a58e7881b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bindResourceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__035e6185ea8417a22ef5a6cadf9878bdbfcfd524d8b4469e9b75dfe945304409)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="environmentName")
    def environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentName: The name of the environment.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentName"))

    @environment_name.setter
    def environment_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75db566f4bcbe961b2570b27c50912795c42a88031e22e2170a5a2b5f3f578ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentName", value)

    @builtins.property
    @jsii.member(jsii_name="environmentSubType")
    def environment_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        environmentSubType: The subtype of the environment. Valid values:
        One: CS type environment
        ACK: CS type environment
        ECS: ECS type environment
        Cloud: cloud service
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentSubType"))

    @environment_sub_type.setter
    def environment_sub_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3cdd6f9e580b69f7057fce4d27ba6e37b978bd0b988bc849d0faae62b27ce3cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentSubType", value)

    @builtins.property
    @jsii.member(jsii_name="environmentType")
    def environment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        environmentType: The type of the environment. Valid values:
        CS: ACK
        ECS: ECS
        Cloud: cloud service
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentType"))

    @environment_type.setter
    def environment_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eadbf80c61c6469f3029fff8a00cdbabfa07a0c17dff3535c44f3157c3421e7a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentType", value)

    @builtins.property
    @jsii.member(jsii_name="deletePromInstance")
    def delete_prom_instance(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletePromInstance: Cascade delete Prometheus instance. Default value: true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletePromInstance"))

    @delete_prom_instance.setter
    def delete_prom_instance(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__baa1f8d8ac3740cacd295b8aa9d7af8db15c2a2908cd6bb7f596d1fa6af6a491)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletePromInstance", value)

    @builtins.property
    @jsii.member(jsii_name="feePackage")
    def fee_package(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        feePackage: The payable resource plan. Valid values:
        If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
        Otherwise, leave the parameter empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "feePackage"))

    @fee_package.setter
    def fee_package(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e01785f6132fff03093ae4803a5a6c760ae866b67f497e2c306326603321e547)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "feePackage", value)

    @builtins.property
    @jsii.member(jsii_name="grafanaWorkspaceId")
    def grafana_workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: grafanaWorkspaceId: The ID of the grafana workspace bound to the environment. When passing space, the default share grafana is used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "grafanaWorkspaceId"))

    @grafana_workspace_id.setter
    def grafana_workspace_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9232aef8af4d244f46e06376791bd12c1d23cf810187b1517df28ce280cbfc3f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "grafanaWorkspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="managedType")
    def managed_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        managedType: Specifies whether agents or exporters are managed. Valid values:
        none: No. By default, no managed agents or exporters are provided for ACK clusters.
        agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
        agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "managedType"))

    @managed_type.setter
    def managed_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8151816aa30673f5eefa4ded1603d1a478370443a42c148b46268069eed4333d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "managedType", value)

    @builtins.property
    @jsii.member(jsii_name="prometheusInstanceId")
    def prometheus_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: prometheusInstanceId: The ID of the Prometheus instance. If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "prometheusInstanceId"))

    @prometheus_instance_id.setter
    def prometheus_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad8fa197856ff48e430b7c7ba236799a929781e10406267237ad6f009b37aed8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "prometheusInstanceId", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__8001c7e2936379f65ab7f43ae039abc9cf7d87e8249123620ef7930ea6574fbd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosEnvironment.TagsProperty"]]:
        '''
        :Property: tags: Tags of Environment.
        '''
        return typing.cast(typing.Optional[typing.List["RosEnvironment.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosEnvironment.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b13b6dc9298c39d1eb7816f4e6173d634a9d07382c07f1856acbb70a1b67f6f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-arms.RosEnvironment.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__2cfc40d3cc49f64de2b2d97be13c23a5cedaae0e124feac5aedec83d0d9b1acf)
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


class RosEnvironmentFeature(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosEnvironmentFeature",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::EnvironmentFeature``, which is used to install a feature.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EnvironmentFeature`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEnvironmentFeatureProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bacf867621ce3dd2746ab41c20728b595e8cd3738066fe2c73d2cd9897df01bc)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2781bc8a405cb8f9dd1ce9861e2db9a4a966c2ad021d36af79c66366ea2e1f1c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentId: The environment ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrFeature")
    def attr_feature(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Feature: The installation information of the feature.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFeature"))

    @builtins.property
    @jsii.member(jsii_name="attrFeatureName")
    def attr_feature_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FeatureName: The name of the feature.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFeatureName"))

    @builtins.property
    @jsii.member(jsii_name="attrFeatureStatus")
    def attr_feature_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FeatureStatus: The status of the feature.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFeatureStatus"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__1fd825cb0db45f1d1b7e79659d2f3ad3aa99f90bc5e0a1a6be89d5114e4f9138)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="environmentId")
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The id of the environment.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentId"))

    @environment_id.setter
    def environment_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42e8e7840eef5b4f6fa47cd5c5492eb1709904621352e6796e8cd707a430eb41)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentId", value)

    @builtins.property
    @jsii.member(jsii_name="featureName")
    def feature_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        featureName: The name of the feature. Valid values:
        app-agent-pilot
        metric-agent
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "featureName"))

    @feature_name.setter
    def feature_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f2a2f2607bacd54f6df0cc31113c77c93445ac5d175c3c4ceff79bcec9e0066)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "featureName", value)

    @builtins.property
    @jsii.member(jsii_name="featureVersion")
    def feature_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: featureVersion: The version of the feature.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "featureVersion"))

    @feature_version.setter
    def feature_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8627634e3c6669318328af96c23660319b3768447fba79b06f4864cadd014e75)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "featureVersion", value)

    @builtins.property
    @jsii.member(jsii_name="config")
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: config: The metadata of the feature.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "config"))

    @config.setter
    def config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3b766119c52a39ed6397fc26e08d297505ce7c22c167677b88fc25883331e2e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "config", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosEnvironmentFeatureProps",
    jsii_struct_bases=[],
    name_mapping={
        "environment_id": "environmentId",
        "feature_name": "featureName",
        "feature_version": "featureVersion",
        "config": "config",
    },
)
class RosEnvironmentFeatureProps:
    def __init__(
        self,
        *,
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        feature_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        feature_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosEnvironmentFeature``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature

        :param environment_id: 
        :param feature_name: 
        :param feature_version: 
        :param config: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b1a68a60d316e238a929de738aa083d4c49e4f6bc3820a59816b3d3d837d2d8)
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument feature_name", value=feature_name, expected_type=type_hints["feature_name"])
            check_type(argname="argument feature_version", value=feature_version, expected_type=type_hints["feature_version"])
            check_type(argname="argument config", value=config, expected_type=type_hints["config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "environment_id": environment_id,
            "feature_name": feature_name,
            "feature_version": feature_version,
        }
        if config is not None:
            self._values["config"] = config

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The id of the environment.
        '''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def feature_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        featureName: The name of the feature. Valid values:
        app-agent-pilot
        metric-agent
        '''
        result = self._values.get("feature_name")
        assert result is not None, "Required property 'feature_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def feature_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: featureVersion: The version of the feature.
        '''
        result = self._values.get("feature_version")
        assert result is not None, "Required property 'feature_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: config: The metadata of the feature.
        '''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEnvironmentFeatureProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosEnvironmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "bind_resource_id": "bindResourceId",
        "environment_name": "environmentName",
        "environment_sub_type": "environmentSubType",
        "environment_type": "environmentType",
        "delete_prom_instance": "deletePromInstance",
        "fee_package": "feePackage",
        "grafana_workspace_id": "grafanaWorkspaceId",
        "managed_type": "managedType",
        "prometheus_instance_id": "prometheusInstanceId",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosEnvironmentProps:
    def __init__(
        self,
        *,
        bind_resource_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_sub_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delete_prom_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fee_package: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grafana_workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        managed_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        prometheus_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosEnvironment.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosEnvironment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment

        :param bind_resource_id: 
        :param environment_name: 
        :param environment_sub_type: 
        :param environment_type: 
        :param delete_prom_instance: 
        :param fee_package: 
        :param grafana_workspace_id: 
        :param managed_type: 
        :param prometheus_instance_id: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e190f5b770f632f93e43d8303778a79d64f1e5cfbeeda8266487cc1247c0627)
            check_type(argname="argument bind_resource_id", value=bind_resource_id, expected_type=type_hints["bind_resource_id"])
            check_type(argname="argument environment_name", value=environment_name, expected_type=type_hints["environment_name"])
            check_type(argname="argument environment_sub_type", value=environment_sub_type, expected_type=type_hints["environment_sub_type"])
            check_type(argname="argument environment_type", value=environment_type, expected_type=type_hints["environment_type"])
            check_type(argname="argument delete_prom_instance", value=delete_prom_instance, expected_type=type_hints["delete_prom_instance"])
            check_type(argname="argument fee_package", value=fee_package, expected_type=type_hints["fee_package"])
            check_type(argname="argument grafana_workspace_id", value=grafana_workspace_id, expected_type=type_hints["grafana_workspace_id"])
            check_type(argname="argument managed_type", value=managed_type, expected_type=type_hints["managed_type"])
            check_type(argname="argument prometheus_instance_id", value=prometheus_instance_id, expected_type=type_hints["prometheus_instance_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bind_resource_id": bind_resource_id,
            "environment_name": environment_name,
            "environment_sub_type": environment_sub_type,
            "environment_type": environment_type,
        }
        if delete_prom_instance is not None:
            self._values["delete_prom_instance"] = delete_prom_instance
        if fee_package is not None:
            self._values["fee_package"] = fee_package
        if grafana_workspace_id is not None:
            self._values["grafana_workspace_id"] = grafana_workspace_id
        if managed_type is not None:
            self._values["managed_type"] = managed_type
        if prometheus_instance_id is not None:
            self._values["prometheus_instance_id"] = prometheus_instance_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def bind_resource_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID. For a Cloud environment, specify the region ID.
        '''
        result = self._values.get("bind_resource_id")
        assert result is not None, "Required property 'bind_resource_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentName: The name of the environment.
        '''
        result = self._values.get("environment_name")
        assert result is not None, "Required property 'environment_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        environmentSubType: The subtype of the environment. Valid values:
        One: CS type environment
        ACK: CS type environment
        ECS: ECS type environment
        Cloud: cloud service
        '''
        result = self._values.get("environment_sub_type")
        assert result is not None, "Required property 'environment_sub_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        environmentType: The type of the environment. Valid values:
        CS: ACK
        ECS: ECS
        Cloud: cloud service
        '''
        result = self._values.get("environment_type")
        assert result is not None, "Required property 'environment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delete_prom_instance(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletePromInstance: Cascade delete Prometheus instance. Default value: true.
        '''
        result = self._values.get("delete_prom_instance")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fee_package(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        feePackage: The payable resource plan. Valid values:
        If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
        Otherwise, leave the parameter empty.
        '''
        result = self._values.get("fee_package")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grafana_workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: grafanaWorkspaceId: The ID of the grafana workspace bound to the environment. When passing space, the default share grafana is used.
        '''
        result = self._values.get("grafana_workspace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def managed_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        managedType: Specifies whether agents or exporters are managed. Valid values:
        none: No. By default, no managed agents or exporters are provided for ACK clusters.
        agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
        agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
        '''
        result = self._values.get("managed_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def prometheus_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: prometheusInstanceId: The ID of the Prometheus instance. If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
        '''
        result = self._values.get("prometheus_instance_id")
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
    def tags(self) -> typing.Optional[typing.List[RosEnvironment.TagsProperty]]:
        '''
        :Property: tags: Tags of Environment.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosEnvironment.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEnvironmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosManagedPrometheus(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosManagedPrometheus",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::ManagedPrometheus``, which is used to install a Prometheus instance to monitor a serverless Kubernetes (ASK) cluster or an Elastic Compute Service (ECS) instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ManagedPrometheus`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosManagedPrometheusProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae79ecda0cd5ebe9f5c05b0f9d5a767e2d3e12b3bd917e7b8fbbeedb283de477)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8dd5e85e4d8c76022fb75b0ecf3fe095e15e11ecafd6c285a076ccb22807a713)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterType: The type of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The vpc ID of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterType")
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: The type of the cluster. Currently, only ask, ecs and one clusters are supported. Default is ecs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31658e302281a016656317916f6a54c4898612470b47fd4092cd0fbc23f8113b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7f975cbda33d6f16d5ea4e3d9ca17830c20010f506fc0d5c15a5e94f25a8d7b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityGroupId: The security group ID of the cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc461db8bcd096e31a52e1d946bb7c654009a04b22b934623bdb64908b9b0c60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The vpc ID of the cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a87fb71634f32182fdb46c295d57a9c4f866cfd08c017879a554d07f1c759a25)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The vswith ID of the cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e941c2c6b88adb777f50c31fd409d59af951b5c676b3a79d2f52bd895f447eaa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b1fd13d0d92d74c97450cb778e282cdf553eb116c8693169a244cf01b4d9372)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="clusterName")
    def cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterName: The name of the cluster. Required when the ClusterType is ecs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterName"))

    @cluster_name.setter
    def cluster_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94100230e2861fde91d40b5f829459e199f125d1c92a4f83a1ced562c351d39f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterName", value)

    @builtins.property
    @jsii.member(jsii_name="grafanaInstanceId")
    def grafana_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "grafanaInstanceId"))

    @grafana_instance_id.setter
    def grafana_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ba04c8aa2773b6e0d85f02ac2e8e001887375c8806f3d1f0042c4ab6c61bbf3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "grafanaInstanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosManagedPrometheusProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_type": "clusterType",
        "security_group_id": "securityGroupId",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "cluster_id": "clusterId",
        "cluster_name": "clusterName",
        "grafana_instance_id": "grafanaInstanceId",
    },
)
class RosManagedPrometheusProps:
    def __init__(
        self,
        *,
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grafana_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosManagedPrometheus``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus

        :param cluster_type: 
        :param security_group_id: 
        :param vpc_id: 
        :param v_switch_id: 
        :param cluster_id: 
        :param cluster_name: 
        :param grafana_instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d5b5d9574a9747e9cbe7b9bcb574dade3a5833888b781c52fde015ab9015ff7)
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument grafana_instance_id", value=grafana_instance_id, expected_type=type_hints["grafana_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_type": cluster_type,
            "security_group_id": security_group_id,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if cluster_name is not None:
            self._values["cluster_name"] = cluster_name
        if grafana_instance_id is not None:
            self._values["grafana_instance_id"] = grafana_instance_id

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: The type of the cluster. Currently, only ask, ecs and one clusters are supported. Default is ecs.
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityGroupId: The security group ID of the cluster.
        '''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The vpc ID of the cluster.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The vswith ID of the cluster.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
        '''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterName: The name of the cluster. Required when the ClusterType is ecs.
        '''
        result = self._values.get("cluster_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grafana_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
        '''
        result = self._values.get("grafana_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosManagedPrometheusProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPrometheus(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosPrometheus",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::Prometheus``, which is used to create a Prometheus instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Prometheus`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPrometheusProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf9bef7f0ece97a0b5c6603a11c19d2d09cb505a641bc2d9c8e1e89adcdd7183)
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
            type_hints = typing.get_type_hints(_typecheckingstub__59ad0a29d18189edd94f7921fad68e32e9533e6525d13e4ea8d178dc655b5e2d)
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
        :Attribute: ClusterId: The ID of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterType: Instance type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrGrafanaInstanceId")
    def attr_grafana_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GrafanaInstanceId: Grafana workspace ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGrafanaInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: Payment Type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusName")
    def attr_prometheus_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrometheusName: The name of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrometheusName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityGroupId: The ID of the security group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSubClustersJson")
    def attr_sub_clusters_json(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SubClustersJson: Subcluster information of globalVeiw cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubClustersJson"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of the prometheus.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: User ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The ID of the virtual private cloud (VPC).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The ID of the vSwitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterType")
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: Instance type.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a4a44fd080bc78bb0e58aa534e81c2dc55c8a4053e629739f09eae0d246da74)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75b5b0258f3c6ce3480b7d55a8ef322e62d9b74181f4931147e4ef9afa7b8726)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="grafanaInstanceId")
    def grafana_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: grafanaInstanceId: Grafana workspace ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "grafanaInstanceId"))

    @grafana_instance_id.setter
    def grafana_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4afd112953c081978c131b4cc594a89b5b14d2a3428e6087c03028c9c85a3876)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "grafanaInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="prometheusName")
    def prometheus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: prometheusName: The name of the resource.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "prometheusName"))

    @prometheus_name.setter
    def prometheus_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20bcb22ddd461f19a17ff52994a410e60dab0d06cf15024664f7c7af01b2e0d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "prometheusName", value)

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: The ID of the cluster. This parameter is required if you set ClusterType to ManagedKubernetes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ada070b848400e153bb940718ae023d162093a54dd2fe28bb2b56e78cdc38fcd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__0b598209e6e92e9cb6b2a7a625f396bab5861a107deb0cffc0db213bcdbd2859)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: The ID of the custom resource group. You can specify this parameter to bind the instance to the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__020761a2f6a82b9ae5b45e50e6fde5a4f25c69b288848457d2a0cb7c5028fdd8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="subClustersJson")
    def sub_clusters_json(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: subClustersJson: The child instances of the Prometheus instance for GlobalView.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "subClustersJson"))

    @sub_clusters_json.setter
    def sub_clusters_json(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6bdb292bfd0deb5e90e4efa62274114274f48f0e37319a176240e0dc3568639)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "subClustersJson", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosPrometheus.TagsProperty"]]:
        '''
        :Property: tags: Tags of prometheus.
        '''
        return typing.cast(typing.Optional[typing.List["RosPrometheus.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosPrometheus.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b029915618771c5061aa18cba037dc08b7bf79c8818a06aca7bf9d1e752fe11c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC). This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98a3c2b865647a0809451a6cbf4228fa326171a273b2e178b85d25818109283b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch. This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f3f055e49dfcd99cef7fa826850a0cebbb13e4078ea880edcda71625afe3c8f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-arms.RosPrometheus.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__852cd5e7c9c82345b6f8878f01f589fdd79f45e42b9a0203af2d16c49886ee38)
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
    jsii_type="@alicloud/ros-cdk-arms.RosPrometheusProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_type": "clusterType",
        "grafana_instance_id": "grafanaInstanceId",
        "prometheus_name": "prometheusName",
        "cluster_id": "clusterId",
        "resource_group_id": "resourceGroupId",
        "security_group_id": "securityGroupId",
        "sub_clusters_json": "subClustersJson",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class RosPrometheusProps:
    def __init__(
        self,
        *,
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        grafana_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        prometheus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sub_clusters_json: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosPrometheus.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPrometheus``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus

        :param cluster_type: 
        :param grafana_instance_id: 
        :param prometheus_name: 
        :param cluster_id: 
        :param resource_group_id: 
        :param security_group_id: 
        :param sub_clusters_json: 
        :param tags: 
        :param vpc_id: 
        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__daa9f001665cee0a8b1bd8ea146b2d05d92dc2f288fea54f3b98460095962c02)
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument grafana_instance_id", value=grafana_instance_id, expected_type=type_hints["grafana_instance_id"])
            check_type(argname="argument prometheus_name", value=prometheus_name, expected_type=type_hints["prometheus_name"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument sub_clusters_json", value=sub_clusters_json, expected_type=type_hints["sub_clusters_json"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_type": cluster_type,
            "grafana_instance_id": grafana_instance_id,
            "prometheus_name": prometheus_name,
        }
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if sub_clusters_json is not None:
            self._values["sub_clusters_json"] = sub_clusters_json
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: Instance type.
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def grafana_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: grafanaInstanceId: Grafana workspace ID.
        '''
        result = self._values.get("grafana_instance_id")
        assert result is not None, "Required property 'grafana_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def prometheus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: prometheusName: The name of the resource.
        '''
        result = self._values.get("prometheus_name")
        assert result is not None, "Required property 'prometheus_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: The ID of the cluster. This parameter is required if you set ClusterType to ManagedKubernetes.
        '''
        result = self._values.get("cluster_id")
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
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: The ID of the custom resource group. You can specify this parameter to bind the instance to the resource group.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sub_clusters_json(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: subClustersJson: The child instances of the Prometheus instance for GlobalView.
        '''
        result = self._values.get("sub_clusters_json")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosPrometheus.TagsProperty]]:
        '''
        :Property: tags: Tags of prometheus.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosPrometheus.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC). This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch. This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPrometheusProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRetcodeApp(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosRetcodeApp",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::RetcodeApp``, which is used to create a browser monitoring task.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``RetcodeApp`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRetcodeAppProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d00d0d9dcea4132905fb0f64a3f153d011a9ae6eac0ec81ba860d6d2633c9d63)
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
            type_hints = typing.get_type_hints(_typecheckingstub__20678a81332316974bf70acbc966a3be54acc4e7079b806730af53efe39f168c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppId: The ID of the application for which you created the browser monitoring job.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrPid")
    def attr_pid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Pid: The PID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPid"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8e4fb871f5c489550245500854278d6568a0e8393c44c8358d2e3909770060dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="regionId")
    def region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "regionId"))

    @region_id.setter
    def region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cea6b9afafce04c49f22d0477e333e6eb175bc5442f2fe024f478b754654649f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "regionId", value)

    @builtins.property
    @jsii.member(jsii_name="retcodeAppName")
    def retcode_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retcodeAppName: The name of the application for which you want to create the browser monitoring job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "retcodeAppName"))

    @retcode_app_name.setter
    def retcode_app_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eccab2ef6e6736615178c83bf1b8406edc17e0307f845ba08f7ae45913c0246b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "retcodeAppName", value)

    @builtins.property
    @jsii.member(jsii_name="retcodeAppType")
    def retcode_app_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "retcodeAppType"))

    @retcode_app_type.setter
    def retcode_app_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2130f5c7426430cefac29013d939a3d1a87fe601092fa0467777503b661f6ed7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "retcodeAppType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosRetcodeAppProps",
    jsii_struct_bases=[],
    name_mapping={
        "region_id": "regionId",
        "retcode_app_name": "retcodeAppName",
        "retcode_app_type": "retcodeAppType",
    },
)
class RosRetcodeAppProps:
    def __init__(
        self,
        *,
        region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retcode_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retcode_app_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosRetcodeApp``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp

        :param region_id: 
        :param retcode_app_name: 
        :param retcode_app_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2e30483a6766787335447bbe1ba424e7b165381bd5bf992cab4c18af9cc2026)
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            check_type(argname="argument retcode_app_name", value=retcode_app_name, expected_type=type_hints["retcode_app_name"])
            check_type(argname="argument retcode_app_type", value=retcode_app_type, expected_type=type_hints["retcode_app_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "region_id": region_id,
            "retcode_app_name": retcode_app_name,
            "retcode_app_type": retcode_app_type,
        }

    @builtins.property
    def region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        '''
        result = self._values.get("region_id")
        assert result is not None, "Required property 'region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retcode_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retcodeAppName: The name of the application for which you want to create the browser monitoring job.
        '''
        result = self._values.get("retcode_app_name")
        assert result is not None, "Required property 'retcode_app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retcode_app_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        '''
        result = self._values.get("retcode_app_type")
        assert result is not None, "Required property 'retcode_app_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRetcodeAppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRum(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosRum",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::Rum``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Rum`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-rum
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRumProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7ebef21a7dbe476dea199198e509b08d5b8f3bd07131d5fac66ee14b5611ac7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__29da82b471164ba93a4bf15836bca6c8fdc329a76e6445df8c41a2c95b06afea)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCdnDomain")
    def attr_cdn_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CdnDomain: The CDN domain of the RUM application.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCdnDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Endpoint: The endpoint of the RUM application.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrPid")
    def attr_pid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Pid: The PID of the RUM application.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPid"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="appName")
    def app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        appName: The name of the RUM application.
        The value can be up to 64 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "appName"))

    @app_name.setter
    def app_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6f0bc52e067efe810dbf489bb6eb5e1d6b7d53bd3e88dfa01ce0a2f56f1af5a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed748ee408348f2acb05647d0ae269e9d73b38db9bbd6e4aaf1da09325b4c00f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="siteType")
    def site_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: siteType: The type of the website.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "siteType"))

    @site_type.setter
    def site_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa64b8a9b062e4ad5b996149d02dde83ed5d5c2b187911307e98bce2c1ba9e84)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "siteType", value)

    @builtins.property
    @jsii.member(jsii_name="appGroup")
    def app_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appGroup: The group to which the RUM application belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appGroup"))

    @app_group.setter
    def app_group(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fcccec5dc5cbcca9c1123b66bad3f50aad2835ada3d0793256c80bc878c49c6a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appGroup", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the RUM application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5143d6edff8ac6f7e321efc8c9a7afd3e22b936e9748cead20125f6231b7bd3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="language")
    def language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: language: The programming language of the RUM application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "language"))

    @language.setter
    def language(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb6207749db051994b453e8a7e53d6470beb832e5b0ca45be6968925bf27b1ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "language", value)

    @builtins.property
    @jsii.member(jsii_name="nickName")
    def nick_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: nickName: The nickname of the RUM application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nickName"))

    @nick_name.setter
    def nick_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b359ccbf9d27290db793003421cbbe0e841640abd415320cde48a21e13312ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nickName", value)

    @builtins.property
    @jsii.member(jsii_name="packageName")
    def package_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: packageName: The package name of the RUM application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "packageName"))

    @package_name.setter
    def package_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0932a4bdaaa5f1b4c10f276535d076918ff8fa74a4aa20c4930ecec1f4ab02a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "packageName", value)

    @builtins.property
    @jsii.member(jsii_name="realRegionId")
    def real_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: realRegionId: The actual region ID for internal use.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "realRegionId"))

    @real_region_id.setter
    def real_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f15318b5cbb85b1c60c4b6fcf2e85a4eb5d01526a59f4a800047769eaa1a2ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "realRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the RUM application belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce09653c84aaee907eb70d4349cd9995532d264eb0beee24c7fce4d390b6bbfa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="source")
    def source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: source: The source of the RUM application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "source"))

    @source.setter
    def source(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8cd638ccb96a977b622d4bb7c7567beb08131eca639c5ec173f9bcdffb6dbc60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "source", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosRum.TagsProperty"]]:
        '''
        :Property:

        tags: A list of tags to attach to the RUM application.
        Each tag is a key-value pair.
        '''
        return typing.cast(typing.Optional[typing.List["RosRum.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(self, value: typing.Optional[typing.List["RosRum.TagsProperty"]]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ffa7d2ff7048d2e54a6eac85149df553715f86276058b8a2fe8b6423162a6368)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-arms.RosRum.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__94cfe6311ae69ad8b75b1fd4ce059919b7ec1549e261e83154773e0b5606c160)
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
            :Property: key: The key of the tag.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the tag.
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
    jsii_type="@alicloud/ros-cdk-arms.RosRumProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_name": "appName",
        "site_type": "siteType",
        "app_group": "appGroup",
        "description": "description",
        "language": "language",
        "nick_name": "nickName",
        "package_name": "packageName",
        "real_region_id": "realRegionId",
        "resource_group_id": "resourceGroupId",
        "source": "source",
        "tags": "tags",
    },
)
class RosRumProps:
    def __init__(
        self,
        *,
        app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        site_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nick_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        package_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        real_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosRum.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosRum``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-rum

        :param app_name: 
        :param site_type: 
        :param app_group: 
        :param description: 
        :param language: 
        :param nick_name: 
        :param package_name: 
        :param real_region_id: 
        :param resource_group_id: 
        :param source: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20d4efd69d27fefd1a6b50218d7fe5c7fd67f483721816df3a124556a2307a65)
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument site_type", value=site_type, expected_type=type_hints["site_type"])
            check_type(argname="argument app_group", value=app_group, expected_type=type_hints["app_group"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument language", value=language, expected_type=type_hints["language"])
            check_type(argname="argument nick_name", value=nick_name, expected_type=type_hints["nick_name"])
            check_type(argname="argument package_name", value=package_name, expected_type=type_hints["package_name"])
            check_type(argname="argument real_region_id", value=real_region_id, expected_type=type_hints["real_region_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "app_name": app_name,
            "site_type": site_type,
        }
        if app_group is not None:
            self._values["app_group"] = app_group
        if description is not None:
            self._values["description"] = description
        if language is not None:
            self._values["language"] = language
        if nick_name is not None:
            self._values["nick_name"] = nick_name
        if package_name is not None:
            self._values["package_name"] = package_name
        if real_region_id is not None:
            self._values["real_region_id"] = real_region_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if source is not None:
            self._values["source"] = source
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        appName: The name of the RUM application.
        The value can be up to 64 characters in length.
        '''
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def site_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: siteType: The type of the website.
        '''
        result = self._values.get("site_type")
        assert result is not None, "Required property 'site_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appGroup: The group to which the RUM application belongs.
        '''
        result = self._values.get("app_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the RUM application.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: language: The programming language of the RUM application.
        '''
        result = self._values.get("language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nick_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: nickName: The nickname of the RUM application.
        '''
        result = self._values.get("nick_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def package_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: packageName: The package name of the RUM application.
        '''
        result = self._values.get("package_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def real_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: realRegionId: The actual region ID for internal use.
        '''
        result = self._values.get("real_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the RUM application belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: source: The source of the RUM application.
        '''
        result = self._values.get("source")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosRum.TagsProperty]]:
        '''
        :Property:

        tags: A list of tags to attach to the RUM application.
        Each tag is a key-value pair.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosRum.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRumProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosXTraceApp(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosXTraceApp",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::XTraceApp``, which is used to create an application monitoring task.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``XTraceApp`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosXTraceAppProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__647c30cfbe6951829f013e370c9c24160fd9cf66f451340ff2b568e08c173fc1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d5ef0bca5000511e6445bcf238a02b418a66423d3a9b18eb09513c702653e20f)
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
        :Attribute: CreateTime: The creation time of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPid")
    def attr_pid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Pid: the identify of application.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPid"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrXTraceAppName")
    def attr_x_trace_app_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: XTraceAppName: The name of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrXTraceAppName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__d550ae99dc4146a7bfcb91fe9d2d6194dd3b8f5efa02298f79d6ac15c59505a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="xTraceAppName")
    def x_trace_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: xTraceAppName: The name of the resource.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "xTraceAppName"))

    @x_trace_app_name.setter
    def x_trace_app_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b2d5bccfe5060d08dc46608a4f91401d3b814b071247406af2bf11664a2d2e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "xTraceAppName", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__7413042c39e42fe9d2978f3a59d1ea2c087c4ca75ebb111dc618a7c3d62de0ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosXTraceApp.TagsProperty"]]:
        '''
        :Property: tags: Tags of The tags of the resource..
        '''
        return typing.cast(typing.Optional[typing.List["RosXTraceApp.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosXTraceApp.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__666366a36635915a7be29303ed016daf1c4857d2a5cedb9e13071fc80133bbee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-arms.RosXTraceApp.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__033c92926a130e7a48bdcbfecf2787650c5d38266776a0f862472971750e2e87)
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
    jsii_type="@alicloud/ros-cdk-arms.RosXTraceAppProps",
    jsii_struct_bases=[],
    name_mapping={
        "x_trace_app_name": "xTraceAppName",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosXTraceAppProps:
    def __init__(
        self,
        *,
        x_trace_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosXTraceApp.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosXTraceApp``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp

        :param x_trace_app_name: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__777026391470b5e11c8f4f7d14e908e3beee942fd6ef2d56bd67273e2cea4b08)
            check_type(argname="argument x_trace_app_name", value=x_trace_app_name, expected_type=type_hints["x_trace_app_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "x_trace_app_name": x_trace_app_name,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def x_trace_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: xTraceAppName: The name of the resource.
        '''
        result = self._values.get("x_trace_app_name")
        assert result is not None, "Required property 'x_trace_app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    def tags(self) -> typing.Optional[typing.List[RosXTraceApp.TagsProperty]]:
        '''
        :Property: tags: Tags of The tags of the resource..
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosXTraceApp.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosXTraceAppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IRum)
class Rum(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.Rum",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::Rum``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRum``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-rum
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RumProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5b05a021f7d177469e0584ebbdb70a98041d6f75c4a710c996740ff1716312a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCdnDomain")
    def attr_cdn_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CdnDomain: The CDN domain of the RUM application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCdnDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Endpoint: The endpoint of the RUM application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrPid")
    def attr_pid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Pid: The PID of the RUM application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPid"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RumProps":
        return typing.cast("RumProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d0961f03392fa112dfc2179c6024933886d24a8f2f4b9316abc6949ee11d5ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1b3962b710ac3114a0cf34cb3f0ddab2411d9d93a49307ee87b292f16f54df5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3094c2699404a1625cdf6683683e084e32b317878275f546333fb0af6314417c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RumProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_name": "appName",
        "site_type": "siteType",
        "app_group": "appGroup",
        "description": "description",
        "language": "language",
        "nick_name": "nickName",
        "package_name": "packageName",
        "real_region_id": "realRegionId",
        "resource_group_id": "resourceGroupId",
        "source": "source",
        "tags": "tags",
    },
)
class RumProps:
    def __init__(
        self,
        *,
        app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        site_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nick_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        package_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        real_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosRum.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Rum``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-rum

        :param app_name: Property appName: The name of the RUM application. The value can be up to 64 characters in length.
        :param site_type: Property siteType: The type of the website.
        :param app_group: Property appGroup: The group to which the RUM application belongs.
        :param description: Property description: The description of the RUM application.
        :param language: Property language: The programming language of the RUM application.
        :param nick_name: Property nickName: The nickname of the RUM application.
        :param package_name: Property packageName: The package name of the RUM application.
        :param real_region_id: Property realRegionId: The actual region ID for internal use.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the RUM application belongs.
        :param source: Property source: The source of the RUM application.
        :param tags: Property tags: A list of tags to attach to the RUM application. Each tag is a key-value pair.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3e769d55ca0fc4507778c1eae79d845428e199ff1c8cb7db7c2aa99f84e2a02)
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument site_type", value=site_type, expected_type=type_hints["site_type"])
            check_type(argname="argument app_group", value=app_group, expected_type=type_hints["app_group"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument language", value=language, expected_type=type_hints["language"])
            check_type(argname="argument nick_name", value=nick_name, expected_type=type_hints["nick_name"])
            check_type(argname="argument package_name", value=package_name, expected_type=type_hints["package_name"])
            check_type(argname="argument real_region_id", value=real_region_id, expected_type=type_hints["real_region_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "app_name": app_name,
            "site_type": site_type,
        }
        if app_group is not None:
            self._values["app_group"] = app_group
        if description is not None:
            self._values["description"] = description
        if language is not None:
            self._values["language"] = language
        if nick_name is not None:
            self._values["nick_name"] = nick_name
        if package_name is not None:
            self._values["package_name"] = package_name
        if real_region_id is not None:
            self._values["real_region_id"] = real_region_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if source is not None:
            self._values["source"] = source
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property appName: The name of the RUM application.

        The value can be up to 64 characters in length.
        '''
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def site_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property siteType: The type of the website.'''
        result = self._values.get("site_type")
        assert result is not None, "Required property 'site_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appGroup: The group to which the RUM application belongs.'''
        result = self._values.get("app_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the RUM application.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property language: The programming language of the RUM application.'''
        result = self._values.get("language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nick_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nickName: The nickname of the RUM application.'''
        result = self._values.get("nick_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def package_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property packageName: The package name of the RUM application.'''
        result = self._values.get("package_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def real_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property realRegionId: The actual region ID for internal use.'''
        result = self._values.get("real_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the RUM application belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property source: The source of the RUM application.'''
        result = self._values.get("source")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosRum.TagsProperty]]:
        '''Property tags: A list of tags to attach to the RUM application.

        Each tag is a key-value pair.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosRum.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RumProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IXTraceApp)
class XTraceApp(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.XTraceApp",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::XTraceApp``, which is used to create an application monitoring task.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosXTraceApp``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["XTraceAppProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__078bd106d08bc3b8a5dbc713758cc186d1c6b6379f5070a82d6b1cd9dd67e75d)
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
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPid")
    def attr_pid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Pid: the identify of application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPid"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrXTraceAppName")
    def attr_x_trace_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute XTraceAppName: The name of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrXTraceAppName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "XTraceAppProps":
        return typing.cast("XTraceAppProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24bc0d30f324448e9f19e5f924218817e27fe8f5f7d69a788c4b1f89a9b259f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__807e6958b60dd01ba9aef20ca6d4efae6c535365790296d56bda8822ad8b5af6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59fb7c70bf743df3f2ca6753d26df56d9a5e75c932c48831b2843d06476cd84e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.XTraceAppProps",
    jsii_struct_bases=[],
    name_mapping={
        "x_trace_app_name": "xTraceAppName",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class XTraceAppProps:
    def __init__(
        self,
        *,
        x_trace_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosXTraceApp.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``XTraceApp``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp

        :param x_trace_app_name: Property xTraceAppName: The name of the resource.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags of The tags of the resource..
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3eeb6b749695a0d1697cdbe0bb9c4e2c93023f4618842e08b3cabefb0302cbf0)
            check_type(argname="argument x_trace_app_name", value=x_trace_app_name, expected_type=type_hints["x_trace_app_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "x_trace_app_name": x_trace_app_name,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def x_trace_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property xTraceAppName: The name of the resource.'''
        result = self._values.get("x_trace_app_name")
        assert result is not None, "Required property 'x_trace_app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosXTraceApp.TagsProperty]]:
        '''Property tags: Tags of The tags of the resource..'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosXTraceApp.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "XTraceAppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAddonRelease)
class AddonRelease(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.AddonRelease",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::AddonRelease``, which is used to install an add-on release.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAddonRelease``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AddonReleaseProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__106fe0aebf827d2a7f9fd342f2fdce965e7d1df85821365e743cff0e0c4ac935)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConfig")
    def attr_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Config: AddonRelease configuration information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The environment ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrRelease")
    def attr_release(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Release: Release information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRelease"))

    @builtins.property
    @jsii.member(jsii_name="attrReleaseName")
    def attr_release_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReleaseName: The name of the add-on.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReleaseName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AddonReleaseProps:
        return typing.cast(AddonReleaseProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__571b08154ed9bf66bea439ea070a693bb1cc1e688aacf3daee17811c5b89ce7a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__026b103f60117b974e018e2081b1fad62815f6b3f6f2a0bb2e7602b556d2301c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__abe405547ac769ccacd874d214f44b2bd6de602107e6b4ab54a2001848d5f3e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IApplyAlertRuleTemplate)
class ApplyAlertRuleTemplate(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.ApplyAlertRuleTemplate",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::ApplyAlertRuleTemplate``, which is used to create an alert rule of Alibaba Cloud Managed Service for Prometheus.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApplyAlertRuleTemplate``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[ApplyAlertRuleTemplateProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a376e4ae1171d0112874fc15af1ae7e16bf68d9593f66a3d27681616471e4b4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApplyAlertRuleTemplateProps:
        return typing.cast(ApplyAlertRuleTemplateProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dfbe01e47e19afea48b3b694c2b889cc48f3f6f5694ea663193376e8357ee205)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc00a367c23b8dd684f8fe6ca0b6dec7ec69223ced8e5b46a323992ad55f2f92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9b707c25f01b55d700f688ffcab77c2e80c400229aea4514bbdfe36edae1561)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDeliverTask)
class DeliverTask(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.DeliverTask",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::DeliverTask``, which is used to create a delivery task.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDeliverTask``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DeliverTaskProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a30228821ec7a0b8bdf52ee00bd9d09ef3635e0fbf326676457bcc554e14a790)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: The ID of the task.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DeliverTaskProps:
        return typing.cast(DeliverTaskProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__734da36aa67b35f3a1472aba66d970ddd64f134ce6b90f9c88e0fc069d2a1442)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d71b6564f4c480a19c094fe97b198ddbc2e2f4a48aa13243885b01bbff282ee1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a858b5333135815995c516f94b3bdc296465047e082579733b3af8a7f58ec040)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEnvCustomJob)
class EnvCustomJob(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.EnvCustomJob",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::EnvCustomJob``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEnvCustomJob``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envcustomjob
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EnvCustomJobProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__734b979270e0f89eac76f8cc9d404aea9a9fc1a1dbf9c21db1736f3972314f2c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConfigYaml")
    def attr_config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigYaml: The YAML configuration string of the custom job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigYaml"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvCustomJobName")
    def attr_env_custom_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvCustomJobName: The name of the custom job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvCustomJobName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvCustomJobProps:
        return typing.cast(EnvCustomJobProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__858b5982d60efa2809953a3923b8985cd1bbc80b65a69998548fea3e6dca57af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__057aea5eba1c10d04377a9dc87de5896768216d3b89546c2d6aa20d60919daed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4903d9f80ebe5a0ce5fff3e7dc5f9a64a88156db15f38b621b64a3aa07f469b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEnvPodMonitor)
class EnvPodMonitor(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.EnvPodMonitor",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::EnvPodMonitor``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEnvPodMonitor``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envpodmonitor
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EnvPodMonitorProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82a3108a9632f71ce242006f9015e0b8b5c5e7794bb35ccfb92a54c17559bf03)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConfigYaml")
    def attr_config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigYaml: The YAML configuration string of the PodMonitor.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigYaml"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvPodMonitorName")
    def attr_env_pod_monitor_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvPodMonitorName: The name of the PodMonitor.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvPodMonitorName"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace of the PodMonitor.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvPodMonitorProps:
        return typing.cast(EnvPodMonitorProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c96374e0446d4e402cf9d32c55ded7e39a23a57658bfbf412a04bf2b92cc275e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb202aff9825fa698ee3a02631ad8d4a50fa3319a15f979ce345224dd84454bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3208acf2e7abff618b268536ad56457f9ab446a768e134a29375d86b182cc7a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEnvServiceMonitor)
class EnvServiceMonitor(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.EnvServiceMonitor",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::EnvServiceMonitor``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEnvServiceMonitor``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envservicemonitor
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EnvServiceMonitorProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf633b23f61d21873bd0759688cbe6f106e77cb7dee0de25bf0d9cc0af593dcd)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConfigYaml")
    def attr_config_yaml(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigYaml: The YAML configuration string of the ServiceMonitor.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigYaml"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The ID of the environment instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvServiceMonitorName")
    def attr_env_service_monitor_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvServiceMonitorName: The name of the ServiceMonitor.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvServiceMonitorName"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace of the ServiceMonitor.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvServiceMonitorProps:
        return typing.cast(EnvServiceMonitorProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25c3b35bca9ab5d9deabc3fcc19c93336e6799473b751cce6d8b4570e0664409)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9fcc1f1b9c3c9eec0de38e69f0ae3a34ed453071f370026145396c40b27933d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__149bf703deed6cf041c1f966edf2d729c1eae9e0d56cd9faf0dde3ddb889681e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEnvironment)
class Environment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.Environment",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::Environment``, which is used to create an environment.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEnvironment``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EnvironmentProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0cb10aa246a4337fa70d3c14855064a22c8bbe09546ae069423966fa9aab402b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The id of the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentName")
    def attr_environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentName: The name of the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentSubType")
    def attr_environment_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentSubType: The subtype of the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentSubType"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentType")
    def attr_environment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentType: The type of the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentType"))

    @builtins.property
    @jsii.member(jsii_name="attrFeePackage")
    def attr_fee_package(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FeePackage: The payable resource plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFeePackage"))

    @builtins.property
    @jsii.member(jsii_name="attrGrafanaWorkspaceId")
    def attr_grafana_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGrafanaWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrManagedType")
    def attr_managed_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ManagedType: Specifies whether agents or exporters are managed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrManagedType"))

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusInstanceId")
    def attr_prometheus_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrometheusInstanceId: The ID of the Prometheus instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrometheusInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvironmentProps:
        return typing.cast(EnvironmentProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc9838c31e5918b4298b3017bf9d38bce8e7ef937c088acdfb1b5fdba9f98c92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3d4cbe45ff6b7dda19e6a42657dbcca2eff5329b5dd4ddd73ea7600a3ad0a35)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f4f53a240089dbe4354db094f3ee7016b14caa23345449aa7d0726076204dc6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEnvironmentFeature)
class EnvironmentFeature(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.EnvironmentFeature",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::EnvironmentFeature``, which is used to install a feature.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEnvironmentFeature``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EnvironmentFeatureProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f298ffd478eb4dc6014d5c2bc48e0edbad858b1f6f65a0da78a1fb9eb958718a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvironmentId: The environment ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrFeature")
    def attr_feature(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Feature: The installation information of the feature.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFeature"))

    @builtins.property
    @jsii.member(jsii_name="attrFeatureName")
    def attr_feature_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FeatureName: The name of the feature.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFeatureName"))

    @builtins.property
    @jsii.member(jsii_name="attrFeatureStatus")
    def attr_feature_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FeatureStatus: The status of the feature.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFeatureStatus"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EnvironmentFeatureProps:
        return typing.cast(EnvironmentFeatureProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01fafc55160d5fa40e6ab531c0903d88e648427ee731360ca37aa55b147747aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64f0bd3cc306aeb52b21f865473f340c64475dac61c680a6ba4c004daab73a49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7057242bb30a4a2808394460c3cd16ae9a4b95a270a5f622e46fdfc3a229100e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "AddonRelease",
    "AddonReleaseProps",
    "ApplyAlertRuleTemplate",
    "ApplyAlertRuleTemplateProps",
    "DeliverTask",
    "DeliverTaskProps",
    "EnvCustomJob",
    "EnvCustomJobProps",
    "EnvPodMonitor",
    "EnvPodMonitorProps",
    "EnvServiceMonitor",
    "EnvServiceMonitorProps",
    "Environment",
    "EnvironmentFeature",
    "EnvironmentFeatureProps",
    "EnvironmentProps",
    "IAddonRelease",
    "IApplyAlertRuleTemplate",
    "IDeliverTask",
    "IEnvCustomJob",
    "IEnvPodMonitor",
    "IEnvServiceMonitor",
    "IEnvironment",
    "IEnvironmentFeature",
    "IManagedPrometheus",
    "IPrometheus",
    "IRetcodeApp",
    "IRum",
    "IXTraceApp",
    "ManagedPrometheus",
    "ManagedPrometheusProps",
    "Prometheus",
    "PrometheusProps",
    "RetcodeApp",
    "RetcodeAppProps",
    "RosAddonRelease",
    "RosAddonReleaseProps",
    "RosApplyAlertRuleTemplate",
    "RosApplyAlertRuleTemplateProps",
    "RosDeliverTask",
    "RosDeliverTaskProps",
    "RosEnvCustomJob",
    "RosEnvCustomJobProps",
    "RosEnvPodMonitor",
    "RosEnvPodMonitorProps",
    "RosEnvServiceMonitor",
    "RosEnvServiceMonitorProps",
    "RosEnvironment",
    "RosEnvironmentFeature",
    "RosEnvironmentFeatureProps",
    "RosEnvironmentProps",
    "RosManagedPrometheus",
    "RosManagedPrometheusProps",
    "RosPrometheus",
    "RosPrometheusProps",
    "RosRetcodeApp",
    "RosRetcodeAppProps",
    "RosRum",
    "RosRumProps",
    "RosXTraceApp",
    "RosXTraceAppProps",
    "Rum",
    "RumProps",
    "XTraceApp",
    "XTraceAppProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__e6122eadf859556f23c0eb13714814dae7bd4f68b5b1e79314da146c6f3bd29a(
    *,
    addon_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    release_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74895326d5c4050036bef206f76163fb7003c73e9a15a8a90f49319f2d053cb9(
    *,
    cluster_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    template_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    update: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db90022be78248be19070a49ed152b29bf9e9729690a10f1fda0811dbbdb6128(
    *,
    target_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDeliverTask.TargetListProperty, typing.Dict[builtins.str, typing.Any]]]]],
    task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_source_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    external_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filter_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filter_type: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    task_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fc83aa6388ee68c3e525dc36f62cc7a8bf4e12833aae8adf7afb0bae14e8212(
    *,
    config_yaml: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    env_custom_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    aliyun_lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b00b5314814adee04d3c2b40cb64453e721fefb9081c803f4896980639035615(
    *,
    config_yaml: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    aliyun_lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8fae8b5fbd6f25cf8c1e31049bb0458cfe11b158bcad0a8a3c76f236e29e36e(
    *,
    config_yaml: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    aliyun_lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e2d94b030d2619b05bb9cdfd5c7863ab2d45ad4ab44578cedaf31202eadfd1a(
    *,
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    feature_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    feature_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e55af6d122555673c36bb4b27447bd4eb0cadc5c7ad6efc585864857378b4778(
    *,
    bind_resource_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_sub_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delete_prom_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fee_package: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grafana_workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    managed_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    prometheus_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosEnvironment.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__574d14511392d4184a9491d6aee452adc93df49874b10f8c8db48ffcc740135e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ManagedPrometheusProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14ce6522743923c949ca0a1915c55f91587131b4ece3b407e233765f8d8fc1c2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59621b1a3c1c1e4d09a9e58af22baeb5afc5789fd12f59522e560a68807ab726(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa8250cf835f654c507a3b978d301d2ef077a6eb9ef6f47245b320a3b34af476(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74232a4cb080d86977f96e69cb3738a4abb82019ddd7faefa7b60dfa2ee6a4a8(
    *,
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grafana_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9be4c45d2f08efc612eaad0a59d3243036b147ec2517db7d892f64aa769db24(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PrometheusProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__954110826c48a2907e61a304c02790cbcd3b00b48110ded258fd505dbea8b52a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9090667fe02e6fccccc59ffd0d2f82e67ecbf898004f11206f8eb06a0da80559(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8ddf442f5ea8b9bec9d3dd221445674447bec4b5b7a3c8ecb22cc2ab0c239db(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__283d86259dc300424cb92cf68a636df7ec53a8c48128f05ac0b9dc676e00cef0(
    *,
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    grafana_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    prometheus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sub_clusters_json: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosPrometheus.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__101d34d9bcb274b7150f42451bdab201e579ddc3cb2b0a9d52a18de1f8079300(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RetcodeAppProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e52455ce158ae5d7ad728c70bdf5ab65ca564336f910b13a69e4c6b8e18c5f40(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2dfe88b51cb40ad7fdabd592d0b91079e4f9a638c214c28a06df217c1a7f8338(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bad594662bf02fc1091964cde44e961eac925be1820342c26e6016f29b24f242(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab6b08b3ffe1d5e363595e1f9e6208847b2fcbb035b9cc4b5e667200c6042021(
    *,
    region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retcode_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retcode_app_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdffbd1318e094a0b8fe6c54cced687387d5e5570b40560e51d65e7d94fddabf(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAddonReleaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a418659eac90b2142f1302add45d33d81690ff04a6a4f34bfe9a12cc2b88f2c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30210a55e4b244f50db4f27ae2293524cea11e82ed8490664408d65019f68f86(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48955b87e14754c5f6d4c34598feb5ab849788d13f35fb22023b29d1b7e79bb3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbc415128f34dc7ecce0c2f65124578ca6d3dae0bf609ee002f00f19f3c61c17(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b384a58d5e055a13d3c707d9be3cc162df6761556c59ff94531f9eb41fa4b0e6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9930c70c7196af5964ad284bbb22dcdcdd6524f659d5bd8c9908b5168c921b2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e619d4c92a04796337a88e623f62f3d3ff7f54c4a299d268091d644f9efec2a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__963f5e4f91af190c660e240decdc3e77e1bda80f211f7c16469fc966c1914fb7(
    *,
    addon_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    release_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ef84253a4845887471fa4f515785b744cb89c2d8fbb7c258a5ba11ab8f136b1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosApplyAlertRuleTemplateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c493295b3c9022a991160b8acaf5c5ee3fe2986b7d41154eeed3450b07769efb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ee663aa029af6900d763bc251f30cd93104a31514de6a7403afb6e476955d01(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5b522ffe2d9685a749f0b1eaab5413edf22eb26245adc815f54b2088422ce6e(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ead3025d9420923e6ea376a8de045e9a0a5a788010013cb317c2b5d9a9950b6(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64be8ed118e3e74d45fac92fdd6bd99ec7d02d3af8e3ae161b8b91d9bb2547e1(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06e7ee9fba7d54d9047e4e8071afaf63c7d3e27c3d519a44de623bbd34f17148(
    *,
    cluster_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    template_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    update: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5bbd6c1acf07a4bbf4022fcc84c40c6767683e4024dc3ef1e88c8802a87e5b6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDeliverTaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__294bde051da7416871b82ee23fbe8775f57f133d978dab5ecb9b590d9f0fd562(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20bcf1838f3bdc8d744192a32a5a05f09926c96facfb6b18069ea12114790729(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1271bcfa28d4e943a1430fe5e7473fc840035686ea05b90309222dde27a4ccd6(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDeliverTask.TargetListProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb0ed4aa55f38de686094a08f823a5ec5e0ba758526fc939818dcf33dfe50f43(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1fac6eeccb7d5476505cbee54b54a212c918edb7a5e92e69d5a17b030177530(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__278eea1c379a13b5953a950be24d5f01d99ce181643dc59767361d5b560f2fa1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96f7b4e8fe40d8e609cdccf842ae7fff9a3d7408a3d8eda624958bba8856aee3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c3ce9b200c0f70acbbcb2c29a32f363d46c03b6fc12afda0f00538a0f151d40(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80a0f2dc9a91c9b82fbe06cf057930eabbc0193505eae9b36373cbabdb2e560b(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__795811bacf149ff11b4fff7d875982ac1cd3db2ed94b6f2c250879ab844f04cc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4453d195f4e32db8becb9c7a357c9ad58cfac7cabe907e78fd52c53af2f893cf(
    *,
    target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    fault_tolerant_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    retry_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_param: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5767fa2140ceff676865f4d5cdf9967cd1e47deca319532a3d59a710ea609d2(
    *,
    target_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDeliverTask.TargetListProperty, typing.Dict[builtins.str, typing.Any]]]]],
    task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_source_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    external_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filter_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filter_type: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    task_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c832c72921654331734b4b0c76752381fa606e2546cd824a0f9b39da385dd5a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEnvCustomJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07c86898a87257bfe9d3254ef22a5cc6ae80156b3c1a94679e1b9414c001235a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8635eafc0d5e40ecacc9e7abd76d63f6ce39df70480dca5b01522d4523e0930c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f212c4dea70c83b012759fb865c05218647e7958130fa13b2d1bfa50cf3cb18d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7def84aef44183b497d48bf33fc1ef18da8cc2c1f9a96cbe79f569c275ded2df(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__173caf448d80c0cd5994b2c97d044a2d1908bb623f1ec3bf46a74b15cb49f4a4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31642a42d96a53fd99db7fb39b54e33022a3fa657e1dacf895e22ba41489372d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17583ebc810ad1a7b968d3ee55218d5c4eef7efccef17b0bee66198bd4cfe71a(
    *,
    config_yaml: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    env_custom_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    aliyun_lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78b330542f2dc4eafddf39c423cbd13394bda78fbdeb7275186b397ee4f11418(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEnvPodMonitorProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72f7ea8e828f819c865c8023031f866ac85f02a778f079d88e9545d167306e62(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9360b77ba646eb05c917ceadbfd9f300935d9d1a1dd0d5d911c689a04e5799b3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__721c07751c76ec4201ecf28ea6d468312d413184dfce4932667d9361a5ccc2b4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ada7bfe9a2c67b2166b1a01c4b743c4bcc53d1f849f9994414700eb4398524a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11222a7d779e9fbd76506e1a1ee616ef9c2a3f1b968360a3a2e10d21a6a66795(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63f678b872e1495f71e6169c8884d4b3992ed044c168ee18dc367d638d231f2a(
    *,
    config_yaml: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    aliyun_lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43b48d2e65cbb4fc41906076062487080b7df7e5b88abf3d4f4c8807087665dc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEnvServiceMonitorProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47d404d0be9023711bd6dd5a65a9cec7aac664baff93fd8f1a55c5abad840185(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9570cdd4a71b5b85b9b1c8c622f0e89d0b7bbb1527be238adc5cc5e72b9930e3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__123a918a62372d9671fa82ff81f9b9fc7398b1e71a69dedf845f3c64edd79f18(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9918fa473c88b7165ef99c1f3866fb8b0afb21e6f3d67e0640deac50eac255e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a01a54c4a68f25c189c369a6d9ef4c5eb5b2a4e150a68df2ecb5f0167e815f7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cb4a986175422a721011d8a207a5f273a4d7e3d355f581b0b4c6aa3051f7d32(
    *,
    config_yaml: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    aliyun_lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06a08fecc8b2564f8b398ee485b956949b16c74ccc485def4a6f07abc4d7a450(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEnvironmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c442d50c5b62e726129ac431281e3eac850dd78d5708c61ba9ff963cd52c6ee6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c621dcf2981196487a7cbe7952ace9e4bb6f807e969b1bfd6151224a58e7881b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__035e6185ea8417a22ef5a6cadf9878bdbfcfd524d8b4469e9b75dfe945304409(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75db566f4bcbe961b2570b27c50912795c42a88031e22e2170a5a2b5f3f578ed(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3cdd6f9e580b69f7057fce4d27ba6e37b978bd0b988bc849d0faae62b27ce3cf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eadbf80c61c6469f3029fff8a00cdbabfa07a0c17dff3535c44f3157c3421e7a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__baa1f8d8ac3740cacd295b8aa9d7af8db15c2a2908cd6bb7f596d1fa6af6a491(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e01785f6132fff03093ae4803a5a6c760ae866b67f497e2c306326603321e547(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9232aef8af4d244f46e06376791bd12c1d23cf810187b1517df28ce280cbfc3f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8151816aa30673f5eefa4ded1603d1a478370443a42c148b46268069eed4333d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad8fa197856ff48e430b7c7ba236799a929781e10406267237ad6f009b37aed8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8001c7e2936379f65ab7f43ae039abc9cf7d87e8249123620ef7930ea6574fbd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b13b6dc9298c39d1eb7816f4e6173d634a9d07382c07f1856acbb70a1b67f6f(
    value: typing.Optional[typing.List[RosEnvironment.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cfc40d3cc49f64de2b2d97be13c23a5cedaae0e124feac5aedec83d0d9b1acf(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bacf867621ce3dd2746ab41c20728b595e8cd3738066fe2c73d2cd9897df01bc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEnvironmentFeatureProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2781bc8a405cb8f9dd1ce9861e2db9a4a966c2ad021d36af79c66366ea2e1f1c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fd825cb0db45f1d1b7e79659d2f3ad3aa99f90bc5e0a1a6be89d5114e4f9138(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42e8e7840eef5b4f6fa47cd5c5492eb1709904621352e6796e8cd707a430eb41(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f2a2f2607bacd54f6df0cc31113c77c93445ac5d175c3c4ceff79bcec9e0066(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8627634e3c6669318328af96c23660319b3768447fba79b06f4864cadd014e75(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3b766119c52a39ed6397fc26e08d297505ce7c22c167677b88fc25883331e2e(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b1a68a60d316e238a929de738aa083d4c49e4f6bc3820a59816b3d3d837d2d8(
    *,
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    feature_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    feature_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e190f5b770f632f93e43d8303778a79d64f1e5cfbeeda8266487cc1247c0627(
    *,
    bind_resource_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_sub_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delete_prom_instance: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fee_package: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grafana_workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    managed_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    prometheus_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosEnvironment.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae79ecda0cd5ebe9f5c05b0f9d5a767e2d3e12b3bd917e7b8fbbeedb283de477(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosManagedPrometheusProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8dd5e85e4d8c76022fb75b0ecf3fe095e15e11ecafd6c285a076ccb22807a713(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31658e302281a016656317916f6a54c4898612470b47fd4092cd0fbc23f8113b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7f975cbda33d6f16d5ea4e3d9ca17830c20010f506fc0d5c15a5e94f25a8d7b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc461db8bcd096e31a52e1d946bb7c654009a04b22b934623bdb64908b9b0c60(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a87fb71634f32182fdb46c295d57a9c4f866cfd08c017879a554d07f1c759a25(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e941c2c6b88adb777f50c31fd409d59af951b5c676b3a79d2f52bd895f447eaa(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b1fd13d0d92d74c97450cb778e282cdf553eb116c8693169a244cf01b4d9372(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94100230e2861fde91d40b5f829459e199f125d1c92a4f83a1ced562c351d39f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ba04c8aa2773b6e0d85f02ac2e8e001887375c8806f3d1f0042c4ab6c61bbf3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d5b5d9574a9747e9cbe7b9bcb574dade3a5833888b781c52fde015ab9015ff7(
    *,
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grafana_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf9bef7f0ece97a0b5c6603a11c19d2d09cb505a641bc2d9c8e1e89adcdd7183(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPrometheusProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59ad0a29d18189edd94f7921fad68e32e9533e6525d13e4ea8d178dc655b5e2d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a4a44fd080bc78bb0e58aa534e81c2dc55c8a4053e629739f09eae0d246da74(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75b5b0258f3c6ce3480b7d55a8ef322e62d9b74181f4931147e4ef9afa7b8726(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4afd112953c081978c131b4cc594a89b5b14d2a3428e6087c03028c9c85a3876(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20bcb22ddd461f19a17ff52994a410e60dab0d06cf15024664f7c7af01b2e0d3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ada070b848400e153bb940718ae023d162093a54dd2fe28bb2b56e78cdc38fcd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b598209e6e92e9cb6b2a7a625f396bab5861a107deb0cffc0db213bcdbd2859(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__020761a2f6a82b9ae5b45e50e6fde5a4f25c69b288848457d2a0cb7c5028fdd8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6bdb292bfd0deb5e90e4efa62274114274f48f0e37319a176240e0dc3568639(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b029915618771c5061aa18cba037dc08b7bf79c8818a06aca7bf9d1e752fe11c(
    value: typing.Optional[typing.List[RosPrometheus.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98a3c2b865647a0809451a6cbf4228fa326171a273b2e178b85d25818109283b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f3f055e49dfcd99cef7fa826850a0cebbb13e4078ea880edcda71625afe3c8f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__852cd5e7c9c82345b6f8878f01f589fdd79f45e42b9a0203af2d16c49886ee38(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__daa9f001665cee0a8b1bd8ea146b2d05d92dc2f288fea54f3b98460095962c02(
    *,
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    grafana_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    prometheus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sub_clusters_json: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosPrometheus.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d00d0d9dcea4132905fb0f64a3f153d011a9ae6eac0ec81ba860d6d2633c9d63(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRetcodeAppProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20678a81332316974bf70acbc966a3be54acc4e7079b806730af53efe39f168c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e4fb871f5c489550245500854278d6568a0e8393c44c8358d2e3909770060dc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cea6b9afafce04c49f22d0477e333e6eb175bc5442f2fe024f478b754654649f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eccab2ef6e6736615178c83bf1b8406edc17e0307f845ba08f7ae45913c0246b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2130f5c7426430cefac29013d939a3d1a87fe601092fa0467777503b661f6ed7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2e30483a6766787335447bbe1ba424e7b165381bd5bf992cab4c18af9cc2026(
    *,
    region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retcode_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retcode_app_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7ebef21a7dbe476dea199198e509b08d5b8f3bd07131d5fac66ee14b5611ac7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRumProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29da82b471164ba93a4bf15836bca6c8fdc329a76e6445df8c41a2c95b06afea(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6f0bc52e067efe810dbf489bb6eb5e1d6b7d53bd3e88dfa01ce0a2f56f1af5a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed748ee408348f2acb05647d0ae269e9d73b38db9bbd6e4aaf1da09325b4c00f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa64b8a9b062e4ad5b996149d02dde83ed5d5c2b187911307e98bce2c1ba9e84(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fcccec5dc5cbcca9c1123b66bad3f50aad2835ada3d0793256c80bc878c49c6a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5143d6edff8ac6f7e321efc8c9a7afd3e22b936e9748cead20125f6231b7bd3c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb6207749db051994b453e8a7e53d6470beb832e5b0ca45be6968925bf27b1ed(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b359ccbf9d27290db793003421cbbe0e841640abd415320cde48a21e13312ab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0932a4bdaaa5f1b4c10f276535d076918ff8fa74a4aa20c4930ecec1f4ab02a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f15318b5cbb85b1c60c4b6fcf2e85a4eb5d01526a59f4a800047769eaa1a2ab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce09653c84aaee907eb70d4349cd9995532d264eb0beee24c7fce4d390b6bbfa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8cd638ccb96a977b622d4bb7c7567beb08131eca639c5ec173f9bcdffb6dbc60(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffa7d2ff7048d2e54a6eac85149df553715f86276058b8a2fe8b6423162a6368(
    value: typing.Optional[typing.List[RosRum.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94cfe6311ae69ad8b75b1fd4ce059919b7ec1549e261e83154773e0b5606c160(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20d4efd69d27fefd1a6b50218d7fe5c7fd67f483721816df3a124556a2307a65(
    *,
    app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    site_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nick_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    package_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    real_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosRum.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__647c30cfbe6951829f013e370c9c24160fd9cf66f451340ff2b568e08c173fc1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosXTraceAppProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5ef0bca5000511e6445bcf238a02b418a66423d3a9b18eb09513c702653e20f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d550ae99dc4146a7bfcb91fe9d2d6194dd3b8f5efa02298f79d6ac15c59505a2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b2d5bccfe5060d08dc46608a4f91401d3b814b071247406af2bf11664a2d2e6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7413042c39e42fe9d2978f3a59d1ea2c087c4ca75ebb111dc618a7c3d62de0ef(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__666366a36635915a7be29303ed016daf1c4857d2a5cedb9e13071fc80133bbee(
    value: typing.Optional[typing.List[RosXTraceApp.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__033c92926a130e7a48bdcbfecf2787650c5d38266776a0f862472971750e2e87(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__777026391470b5e11c8f4f7d14e908e3beee942fd6ef2d56bd67273e2cea4b08(
    *,
    x_trace_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosXTraceApp.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5b05a021f7d177469e0584ebbdb70a98041d6f75c4a710c996740ff1716312a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RumProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d0961f03392fa112dfc2179c6024933886d24a8f2f4b9316abc6949ee11d5ff(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1b3962b710ac3114a0cf34cb3f0ddab2411d9d93a49307ee87b292f16f54df5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3094c2699404a1625cdf6683683e084e32b317878275f546333fb0af6314417c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3e769d55ca0fc4507778c1eae79d845428e199ff1c8cb7db7c2aa99f84e2a02(
    *,
    app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    site_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nick_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    package_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    real_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosRum.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__078bd106d08bc3b8a5dbc713758cc186d1c6b6379f5070a82d6b1cd9dd67e75d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[XTraceAppProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24bc0d30f324448e9f19e5f924218817e27fe8f5f7d69a788c4b1f89a9b259f6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__807e6958b60dd01ba9aef20ca6d4efae6c535365790296d56bda8822ad8b5af6(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59fb7c70bf743df3f2ca6753d26df56d9a5e75c932c48831b2843d06476cd84e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3eeb6b749695a0d1697cdbe0bb9c4e2c93023f4618842e08b3cabefb0302cbf0(
    *,
    x_trace_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosXTraceApp.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__106fe0aebf827d2a7f9fd342f2fdce965e7d1df85821365e743cff0e0c4ac935(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AddonReleaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__571b08154ed9bf66bea439ea070a693bb1cc1e688aacf3daee17811c5b89ce7a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__026b103f60117b974e018e2081b1fad62815f6b3f6f2a0bb2e7602b556d2301c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__abe405547ac769ccacd874d214f44b2bd6de602107e6b4ab54a2001848d5f3e3(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a376e4ae1171d0112874fc15af1ae7e16bf68d9593f66a3d27681616471e4b4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ApplyAlertRuleTemplateProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfbe01e47e19afea48b3b694c2b889cc48f3f6f5694ea663193376e8357ee205(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc00a367c23b8dd684f8fe6ca0b6dec7ec69223ced8e5b46a323992ad55f2f92(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9b707c25f01b55d700f688ffcab77c2e80c400229aea4514bbdfe36edae1561(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a30228821ec7a0b8bdf52ee00bd9d09ef3635e0fbf326676457bcc554e14a790(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DeliverTaskProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__734da36aa67b35f3a1472aba66d970ddd64f134ce6b90f9c88e0fc069d2a1442(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d71b6564f4c480a19c094fe97b198ddbc2e2f4a48aa13243885b01bbff282ee1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a858b5333135815995c516f94b3bdc296465047e082579733b3af8a7f58ec040(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__734b979270e0f89eac76f8cc9d404aea9a9fc1a1dbf9c21db1736f3972314f2c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EnvCustomJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__858b5982d60efa2809953a3923b8985cd1bbc80b65a69998548fea3e6dca57af(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__057aea5eba1c10d04377a9dc87de5896768216d3b89546c2d6aa20d60919daed(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4903d9f80ebe5a0ce5fff3e7dc5f9a64a88156db15f38b621b64a3aa07f469b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82a3108a9632f71ce242006f9015e0b8b5c5e7794bb35ccfb92a54c17559bf03(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EnvPodMonitorProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c96374e0446d4e402cf9d32c55ded7e39a23a57658bfbf412a04bf2b92cc275e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb202aff9825fa698ee3a02631ad8d4a50fa3319a15f979ce345224dd84454bf(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3208acf2e7abff618b268536ad56457f9ab446a768e134a29375d86b182cc7a2(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf633b23f61d21873bd0759688cbe6f106e77cb7dee0de25bf0d9cc0af593dcd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EnvServiceMonitorProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25c3b35bca9ab5d9deabc3fcc19c93336e6799473b751cce6d8b4570e0664409(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9fcc1f1b9c3c9eec0de38e69f0ae3a34ed453071f370026145396c40b27933d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__149bf703deed6cf041c1f966edf2d729c1eae9e0d56cd9faf0dde3ddb889681e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0cb10aa246a4337fa70d3c14855064a22c8bbe09546ae069423966fa9aab402b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EnvironmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc9838c31e5918b4298b3017bf9d38bce8e7ef937c088acdfb1b5fdba9f98c92(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3d4cbe45ff6b7dda19e6a42657dbcca2eff5329b5dd4ddd73ea7600a3ad0a35(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f4f53a240089dbe4354db094f3ee7016b14caa23345449aa7d0726076204dc6(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f298ffd478eb4dc6014d5c2bc48e0edbad858b1f6f65a0da78a1fb9eb958718a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EnvironmentFeatureProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01fafc55160d5fa40e6ab531c0903d88e648427ee731360ca37aa55b147747aa(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64f0bd3cc306aeb52b21f865473f340c64475dac61c680a6ba4c004daab73a49(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7057242bb30a4a2808394460c3cd16ae9a4b95a270a5f622e46fdfc3a229100e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
