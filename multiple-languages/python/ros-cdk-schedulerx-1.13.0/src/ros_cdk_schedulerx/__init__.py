'''
## Aliyun ROS SCHEDULERX Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as SCHEDULERX from '@alicloud/ros-cdk-schedulerx';
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
    jsii_type="@alicloud/ros-cdk-schedulerx.AppGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_name": "appName",
        "group_id": "groupId",
        "namespace": "namespace",
        "app_key": "appKey",
        "app_type": "appType",
        "app_version": "appVersion",
        "description": "description",
        "enable_log": "enableLog",
        "max_jobs": "maxJobs",
        "monitor_config": "monitorConfig",
        "monitor_contacts": "monitorContacts",
        "namespace_name": "namespaceName",
        "namespace_source": "namespaceSource",
        "notification_policy_name": "notificationPolicyName",
        "schedule_busy_workers": "scheduleBusyWorkers",
    },
)
class AppGroupProps:
    def __init__(
        self,
        *,
        app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        app_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        app_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_jobs: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        monitor_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        monitor_contacts: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        notification_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        schedule_busy_workers: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AppGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup

        :param app_name: Property appName: The application name.
        :param group_id: Property groupId: The group ID of the application group.
        :param namespace: Property namespace: The namespace of the application group.
        :param app_key: Property appKey: The application key.
        :param app_type: Property appType: The type of the application.
        :param app_version: Property appVersion: The version of the application.
        :param description: Property description: The description of the application group.
        :param enable_log: Property enableLog: Whether to enable log.
        :param max_jobs: Property maxJobs: The maximum number of jobs.
        :param monitor_config: Property monitorConfig: The monitor configuration in JSON format.
        :param monitor_contacts: Property monitorContacts: The monitor contacts in JSON format.
        :param namespace_name: Property namespaceName: The name of the namespace.
        :param namespace_source: Property namespaceSource: The namespace source of the job.
        :param notification_policy_name: Property notificationPolicyName: The notification policy name.
        :param schedule_busy_workers: Property scheduleBusyWorkers: Whether to schedule busy workers.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__835064c77fac9a2677b6d17171a7bfda13c1811cdbffafc839d7624f870c8853)
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument app_key", value=app_key, expected_type=type_hints["app_key"])
            check_type(argname="argument app_type", value=app_type, expected_type=type_hints["app_type"])
            check_type(argname="argument app_version", value=app_version, expected_type=type_hints["app_version"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument enable_log", value=enable_log, expected_type=type_hints["enable_log"])
            check_type(argname="argument max_jobs", value=max_jobs, expected_type=type_hints["max_jobs"])
            check_type(argname="argument monitor_config", value=monitor_config, expected_type=type_hints["monitor_config"])
            check_type(argname="argument monitor_contacts", value=monitor_contacts, expected_type=type_hints["monitor_contacts"])
            check_type(argname="argument namespace_name", value=namespace_name, expected_type=type_hints["namespace_name"])
            check_type(argname="argument namespace_source", value=namespace_source, expected_type=type_hints["namespace_source"])
            check_type(argname="argument notification_policy_name", value=notification_policy_name, expected_type=type_hints["notification_policy_name"])
            check_type(argname="argument schedule_busy_workers", value=schedule_busy_workers, expected_type=type_hints["schedule_busy_workers"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "app_name": app_name,
            "group_id": group_id,
            "namespace": namespace,
        }
        if app_key is not None:
            self._values["app_key"] = app_key
        if app_type is not None:
            self._values["app_type"] = app_type
        if app_version is not None:
            self._values["app_version"] = app_version
        if description is not None:
            self._values["description"] = description
        if enable_log is not None:
            self._values["enable_log"] = enable_log
        if max_jobs is not None:
            self._values["max_jobs"] = max_jobs
        if monitor_config is not None:
            self._values["monitor_config"] = monitor_config
        if monitor_contacts is not None:
            self._values["monitor_contacts"] = monitor_contacts
        if namespace_name is not None:
            self._values["namespace_name"] = namespace_name
        if namespace_source is not None:
            self._values["namespace_source"] = namespace_source
        if notification_policy_name is not None:
            self._values["notification_policy_name"] = notification_policy_name
        if schedule_busy_workers is not None:
            self._values["schedule_busy_workers"] = schedule_busy_workers

    @builtins.property
    def app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property appName: The application name.'''
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupId: The group ID of the application group.'''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property namespace: The namespace of the application group.'''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appKey: The application key.'''
        result = self._values.get("app_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def app_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appType: The type of the application.'''
        result = self._values.get("app_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def app_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appVersion: The version of the application.'''
        result = self._values.get("app_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the application group.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableLog: Whether to enable log.'''
        result = self._values.get("enable_log")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_jobs(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxJobs: The maximum number of jobs.'''
        result = self._values.get("max_jobs")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def monitor_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property monitorConfig: The monitor configuration in JSON format.'''
        result = self._values.get("monitor_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def monitor_contacts(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property monitorContacts: The monitor contacts in JSON format.'''
        result = self._values.get("monitor_contacts")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property namespaceName: The name of the namespace.'''
        result = self._values.get("namespace_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace_source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property namespaceSource: The namespace source of the job.'''
        result = self._values.get("namespace_source")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def notification_policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property notificationPolicyName: The notification policy name.'''
        result = self._values.get("notification_policy_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def schedule_busy_workers(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scheduleBusyWorkers: Whether to schedule busy workers.'''
        result = self._values.get("schedule_busy_workers")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AppGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-schedulerx.IAppGroup")
class IAppGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AppGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAppGroupId")
    def attr_app_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppGroupId: The group ID of the application group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AppGroupProps:
        ...


class _IAppGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AppGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-schedulerx.IAppGroup"

    @builtins.property
    @jsii.member(jsii_name="attrAppGroupId")
    def attr_app_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppGroupId: The group ID of the application group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AppGroupProps:
        return typing.cast(AppGroupProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAppGroup).__jsii_proxy_class__ = lambda : _IAppGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-schedulerx.IJob")
class IJob(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Job``.'''

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute JobId: The ID of the job.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "JobProps":
        ...


class _IJobProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Job``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-schedulerx.IJob"

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute JobId: The ID of the job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrJobId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "JobProps":
        return typing.cast("JobProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IJob).__jsii_proxy_class__ = lambda : _IJobProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-schedulerx.INamespace")
class INamespace(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Namespace``.'''

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceUid")
    def attr_namespace_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceUid: The ID of the namespace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NamespaceProps":
        ...


class _INamespaceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Namespace``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-schedulerx.INamespace"

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceUid")
    def attr_namespace_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceUid: The ID of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespaceUid"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NamespaceProps":
        return typing.cast("NamespaceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, INamespace).__jsii_proxy_class__ = lambda : _INamespaceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-schedulerx.IWorkFlow")
class IWorkFlow(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``WorkFlow``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Workflow description.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: The application Group ID, which is obtained from the application management page of the console.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMaxConcurrency")
    def attr_max_concurrency(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxConcurrency: The maximum number of workflow instances running at the same time.

        The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace ID, which is obtained from the namespace page in the console.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTimeExpression")
    def attr_time_expression(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TimeExpression: Time expression, which is set based on the selected time type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTimeType")
    def attr_time_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TimeType: Time type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkFlowId")
    def attr_work_flow_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkFlowId: workflow id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkflowName")
    def attr_workflow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkflowName: Workflow Name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkFlowProps":
        ...


class _IWorkFlowProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``WorkFlow``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-schedulerx.IWorkFlow"

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Workflow description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: The application Group ID, which is obtained from the application management page of the console.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxConcurrency")
    def attr_max_concurrency(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxConcurrency: The maximum number of workflow instances running at the same time.

        The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaxConcurrency"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace ID, which is obtained from the namespace page in the console.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrTimeExpression")
    def attr_time_expression(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TimeExpression: Time expression, which is set based on the selected time type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTimeExpression"))

    @builtins.property
    @jsii.member(jsii_name="attrTimeType")
    def attr_time_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TimeType: Time type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTimeType"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkFlowId")
    def attr_work_flow_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkFlowId: workflow id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkFlowId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkflowName")
    def attr_workflow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkflowName: Workflow Name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkflowName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkFlowProps":
        return typing.cast("WorkFlowProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWorkFlow).__jsii_proxy_class__ = lambda : _IWorkFlowProxy


@jsii.implements(IJob)
class Job(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-schedulerx.Job",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SchedulerX::Job``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosJob``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["JobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__107241ae4ba8585cf1d66012c97d3970cd7199bac2885e81d9ad6786b2054e61)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute JobId: The ID of the job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrJobId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "JobProps":
        return typing.cast("JobProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f12352dc2403b0f20e2ee6716ecbe252786033c673e961cc2453a6e0215b4f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff39b854396ae76a5e31ba1998a4d37bb4ec4a497f0733a3c9f3ff1496bd7393)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96bbc88680c6a8440f9f1a7828bac9fd45ec118b4a97f4d3e0bfe07a54a764bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-schedulerx.JobProps",
    jsii_struct_bases=[],
    name_mapping={
        "execute_mode": "executeMode",
        "group_id": "groupId",
        "job_type": "jobType",
        "name": "name",
        "namespace": "namespace",
        "time_type": "timeType",
        "attempt_interval": "attemptInterval",
        "calendar": "calendar",
        "class_name": "className",
        "consumer_size": "consumerSize",
        "contact_info": "contactInfo",
        "content": "content",
        "data_offset": "dataOffset",
        "description": "description",
        "dispatcher_size": "dispatcherSize",
        "fail_enable": "failEnable",
        "fail_times": "failTimes",
        "max_attempt": "maxAttempt",
        "max_concurrency": "maxConcurrency",
        "miss_worker_enable": "missWorkerEnable",
        "namespace_source": "namespaceSource",
        "page_size": "pageSize",
        "parameters": "parameters",
        "priority": "priority",
        "queue_size": "queueSize",
        "send_channel": "sendChannel",
        "success_notice_enable": "successNoticeEnable",
        "task_attempt_interval": "taskAttemptInterval",
        "task_max_attempt": "taskMaxAttempt",
        "time_expression": "timeExpression",
        "timeout": "timeout",
        "timeout_enable": "timeoutEnable",
        "timeout_kill_enable": "timeoutKillEnable",
        "timezone": "timezone",
        "x_attrs": "xAttrs",
    },
)
class JobProps:
    def __init__(
        self,
        *,
        execute_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        job_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        time_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        attempt_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        calendar: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        class_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        consumer_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        contact_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosJob.ContactInfoProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_offset: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dispatcher_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fail_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fail_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_attempt: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        miss_worker_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        page_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        queue_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        send_channel: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        success_notice_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        task_attempt_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        task_max_attempt: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        time_expression: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout_kill_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        x_attrs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``Job``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job

        :param execute_mode: Property executeMode: The execute mode of the job.
        :param group_id: Property groupId: The group ID of the job.
        :param job_type: Property jobType: The type of the job.
        :param name: Property name: The name of the job.
        :param namespace: Property namespace: The namespace of the job.
        :param time_type: Property timeType: The time type of the job. cron：1 fixed_rate：3 second_delay：4 one_time ：5 api：100 none：-1
        :param attempt_interval: Property attemptInterval: The attempt interval of the job.
        :param calendar: Property calendar: The calendar of the job.
        :param class_name: Property className: The class name of the job.
        :param consumer_size: Property consumerSize: The consumer size of the job.
        :param contact_info: Property contactInfo: The contact info of the job.
        :param content: Property content: The content of the job.
        :param data_offset: Property dataOffset: The data offset of the job.
        :param description: Property description: The description of the job.
        :param dispatcher_size: Property dispatcherSize: The dispatcher size of the job.
        :param fail_enable: Property failEnable: Whether fail is enabled for the job.
        :param fail_times: Property failTimes: The fail times of the job.
        :param max_attempt: Property maxAttempt: The max attempt of the job.
        :param max_concurrency: Property maxConcurrency: The max concurrency of the job.
        :param miss_worker_enable: Property missWorkerEnable: Whether miss worker is enabled for the job.
        :param namespace_source: Property namespaceSource: The namespace source of the job.
        :param page_size: Property pageSize: Advanced configuration for parallel grid tasks, the default number of sub-tasks pulled at a time is 100.
        :param parameters: Property parameters: The parameters of the job.
        :param priority: Property priority: The priority of the job.
        :param queue_size: Property queueSize: The queue size of the job.
        :param send_channel: Property sendChannel: The send channel of the job.
        :param success_notice_enable: Property successNoticeEnable: Whether success notice is enabled for the job.
        :param task_attempt_interval: Property taskAttemptInterval: The task attempt interval of the job.
        :param task_max_attempt: Property taskMaxAttempt: The task max attempt of the job.
        :param time_expression: Property timeExpression: The time expression of the job.
        :param timeout: Property timeout: The timeout of the job.
        :param timeout_enable: Property timeoutEnable: Whether timeout is enabled for the job.
        :param timeout_kill_enable: Property timeoutKillEnable: Whether timeout kill is enabled for the job.
        :param timezone: Property timezone: The timezone of the job.
        :param x_attrs: Property xAttrs: The extended attributes of the job.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06e5bc05a8e84c43bf2dcc51352843da2af3d5048bb81cc7aac1b2ed3c3ba15d)
            check_type(argname="argument execute_mode", value=execute_mode, expected_type=type_hints["execute_mode"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument job_type", value=job_type, expected_type=type_hints["job_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument time_type", value=time_type, expected_type=type_hints["time_type"])
            check_type(argname="argument attempt_interval", value=attempt_interval, expected_type=type_hints["attempt_interval"])
            check_type(argname="argument calendar", value=calendar, expected_type=type_hints["calendar"])
            check_type(argname="argument class_name", value=class_name, expected_type=type_hints["class_name"])
            check_type(argname="argument consumer_size", value=consumer_size, expected_type=type_hints["consumer_size"])
            check_type(argname="argument contact_info", value=contact_info, expected_type=type_hints["contact_info"])
            check_type(argname="argument content", value=content, expected_type=type_hints["content"])
            check_type(argname="argument data_offset", value=data_offset, expected_type=type_hints["data_offset"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument dispatcher_size", value=dispatcher_size, expected_type=type_hints["dispatcher_size"])
            check_type(argname="argument fail_enable", value=fail_enable, expected_type=type_hints["fail_enable"])
            check_type(argname="argument fail_times", value=fail_times, expected_type=type_hints["fail_times"])
            check_type(argname="argument max_attempt", value=max_attempt, expected_type=type_hints["max_attempt"])
            check_type(argname="argument max_concurrency", value=max_concurrency, expected_type=type_hints["max_concurrency"])
            check_type(argname="argument miss_worker_enable", value=miss_worker_enable, expected_type=type_hints["miss_worker_enable"])
            check_type(argname="argument namespace_source", value=namespace_source, expected_type=type_hints["namespace_source"])
            check_type(argname="argument page_size", value=page_size, expected_type=type_hints["page_size"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument queue_size", value=queue_size, expected_type=type_hints["queue_size"])
            check_type(argname="argument send_channel", value=send_channel, expected_type=type_hints["send_channel"])
            check_type(argname="argument success_notice_enable", value=success_notice_enable, expected_type=type_hints["success_notice_enable"])
            check_type(argname="argument task_attempt_interval", value=task_attempt_interval, expected_type=type_hints["task_attempt_interval"])
            check_type(argname="argument task_max_attempt", value=task_max_attempt, expected_type=type_hints["task_max_attempt"])
            check_type(argname="argument time_expression", value=time_expression, expected_type=type_hints["time_expression"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
            check_type(argname="argument timeout_enable", value=timeout_enable, expected_type=type_hints["timeout_enable"])
            check_type(argname="argument timeout_kill_enable", value=timeout_kill_enable, expected_type=type_hints["timeout_kill_enable"])
            check_type(argname="argument timezone", value=timezone, expected_type=type_hints["timezone"])
            check_type(argname="argument x_attrs", value=x_attrs, expected_type=type_hints["x_attrs"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "execute_mode": execute_mode,
            "group_id": group_id,
            "job_type": job_type,
            "name": name,
            "namespace": namespace,
            "time_type": time_type,
        }
        if attempt_interval is not None:
            self._values["attempt_interval"] = attempt_interval
        if calendar is not None:
            self._values["calendar"] = calendar
        if class_name is not None:
            self._values["class_name"] = class_name
        if consumer_size is not None:
            self._values["consumer_size"] = consumer_size
        if contact_info is not None:
            self._values["contact_info"] = contact_info
        if content is not None:
            self._values["content"] = content
        if data_offset is not None:
            self._values["data_offset"] = data_offset
        if description is not None:
            self._values["description"] = description
        if dispatcher_size is not None:
            self._values["dispatcher_size"] = dispatcher_size
        if fail_enable is not None:
            self._values["fail_enable"] = fail_enable
        if fail_times is not None:
            self._values["fail_times"] = fail_times
        if max_attempt is not None:
            self._values["max_attempt"] = max_attempt
        if max_concurrency is not None:
            self._values["max_concurrency"] = max_concurrency
        if miss_worker_enable is not None:
            self._values["miss_worker_enable"] = miss_worker_enable
        if namespace_source is not None:
            self._values["namespace_source"] = namespace_source
        if page_size is not None:
            self._values["page_size"] = page_size
        if parameters is not None:
            self._values["parameters"] = parameters
        if priority is not None:
            self._values["priority"] = priority
        if queue_size is not None:
            self._values["queue_size"] = queue_size
        if send_channel is not None:
            self._values["send_channel"] = send_channel
        if success_notice_enable is not None:
            self._values["success_notice_enable"] = success_notice_enable
        if task_attempt_interval is not None:
            self._values["task_attempt_interval"] = task_attempt_interval
        if task_max_attempt is not None:
            self._values["task_max_attempt"] = task_max_attempt
        if time_expression is not None:
            self._values["time_expression"] = time_expression
        if timeout is not None:
            self._values["timeout"] = timeout
        if timeout_enable is not None:
            self._values["timeout_enable"] = timeout_enable
        if timeout_kill_enable is not None:
            self._values["timeout_kill_enable"] = timeout_kill_enable
        if timezone is not None:
            self._values["timezone"] = timezone
        if x_attrs is not None:
            self._values["x_attrs"] = x_attrs

    @builtins.property
    def execute_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property executeMode: The execute mode of the job.'''
        result = self._values.get("execute_mode")
        assert result is not None, "Required property 'execute_mode' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupId: The group ID of the job.'''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def job_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property jobType: The type of the job.'''
        result = self._values.get("job_type")
        assert result is not None, "Required property 'job_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the job.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property namespace: The namespace of the job.'''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def time_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property timeType: The time type of the job.

        cron：1
        fixed_rate：3
        second_delay：4
        one_time ：5
        api：100
        none：-1
        '''
        result = self._values.get("time_type")
        assert result is not None, "Required property 'time_type' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def attempt_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property attemptInterval: The attempt interval of the job.'''
        result = self._values.get("attempt_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def calendar(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property calendar: The calendar of the job.'''
        result = self._values.get("calendar")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def class_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property className: The class name of the job.'''
        result = self._values.get("class_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def consumer_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property consumerSize: The consumer size of the job.'''
        result = self._values.get("consumer_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def contact_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.ContactInfoProperty"]]]]:
        '''Property contactInfo: The contact info of the job.'''
        result = self._values.get("contact_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.ContactInfoProperty"]]]], result)

    @builtins.property
    def content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property content: The content of the job.'''
        result = self._values.get("content")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_offset(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataOffset: The data offset of the job.'''
        result = self._values.get("data_offset")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the job.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dispatcher_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dispatcherSize: The dispatcher size of the job.'''
        result = self._values.get("dispatcher_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fail_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property failEnable: Whether fail is enabled for the job.'''
        result = self._values.get("fail_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fail_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property failTimes: The fail times of the job.'''
        result = self._values.get("fail_times")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_attempt(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxAttempt: The max attempt of the job.'''
        result = self._values.get("max_attempt")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxConcurrency: The max concurrency of the job.'''
        result = self._values.get("max_concurrency")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def miss_worker_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property missWorkerEnable: Whether miss worker is enabled for the job.'''
        result = self._values.get("miss_worker_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace_source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property namespaceSource: The namespace source of the job.'''
        result = self._values.get("namespace_source")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def page_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pageSize: Advanced configuration for parallel grid tasks, the default number of sub-tasks pulled at a time is 100.'''
        result = self._values.get("page_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property parameters: The parameters of the job.'''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property priority: The priority of the job.'''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def queue_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property queueSize: The queue size of the job.'''
        result = self._values.get("queue_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def send_channel(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sendChannel: The send channel of the job.'''
        result = self._values.get("send_channel")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def success_notice_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property successNoticeEnable: Whether success notice is enabled for the job.'''
        result = self._values.get("success_notice_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def task_attempt_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property taskAttemptInterval: The task attempt interval of the job.'''
        result = self._values.get("task_attempt_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def task_max_attempt(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property taskMaxAttempt: The task max attempt of the job.'''
        result = self._values.get("task_max_attempt")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def time_expression(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeExpression: The time expression of the job.'''
        result = self._values.get("time_expression")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeout: The timeout of the job.'''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeoutEnable: Whether timeout is enabled for the job.'''
        result = self._values.get("timeout_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout_kill_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeoutKillEnable: Whether timeout kill is enabled for the job.'''
        result = self._values.get("timeout_kill_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timezone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timezone: The timezone of the job.'''
        result = self._values.get("timezone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def x_attrs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property xAttrs: The extended attributes of the job.'''
        result = self._values.get("x_attrs")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "JobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(INamespace)
class Namespace(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-schedulerx.Namespace",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SchedulerX::Namespace``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosNamespace``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-namespace
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["NamespaceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d8431ab3e04f7df8a65c5f869d6bf42d8087c4bfb018bd43604712f579b46d9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceUid")
    def attr_namespace_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceUid: The ID of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespaceUid"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NamespaceProps":
        return typing.cast("NamespaceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__421d96bbf8ca6ec8e5d0d16b44a4b59fbca3075d7238dbbafa6963a968739ae0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__911b81721d555f4aed9a7eb6f0a5ded83a4e3ba195c03859f869f6f593b55ebc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe35117c3678e5b80c516853739eaac323e422d9135909b4f5ea7664c92b438e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-schedulerx.NamespaceProps",
    jsii_struct_bases=[],
    name_mapping={"name": "name", "description": "description", "uid": "uid"},
)
class NamespaceProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Namespace``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-namespace

        :param name: Property name: The name of the namespace.
        :param description: Property description: The description of the namespace.
        :param uid: Property uid: Namespace UID is globally unique; it is recommended to generate it using UUID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b31e173d72d395977b7e16cbe20499390c16e589a4de9e172a75289463268e3a)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument uid", value=uid, expected_type=type_hints["uid"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if description is not None:
            self._values["description"] = description
        if uid is not None:
            self._values["uid"] = uid

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the namespace.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the namespace.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def uid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property uid: Namespace UID is globally unique;

        it is recommended to generate it using UUID.
        '''
        result = self._values.get("uid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAppGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-schedulerx.RosAppGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SchedulerX::AppGroup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AppGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAppGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e5f6eb6e994133fd47a7a53ae0d8ef10214371765ac867ecb9936db185f0d30)
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
            type_hints = typing.get_type_hints(_typecheckingstub__35be65be74da426b6aacafc9b0d8e08d8ce8a69f2d5e36ab64a59faf67d4961f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAppGroupId")
    def attr_app_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppGroupId: The group ID of the application group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppGroupId"))

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
        :Property: appName: The application name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "appName"))

    @app_name.setter
    def app_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26015e8abbc75887daa0789455e151936951eb2586ff6d42fc47fa0b6fef4c61)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b8c560ddcbe5d7f0ac9e7515235f0476887d7b417f837b1e8d2a7a00b461a92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupId: The group ID of the application group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46a8c09c3a285ff8eacee0cdd4da135b1a08f5815b193becc1969720a54b7f97)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="namespace")
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespace: The namespace of the application group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba3f6fae4baa030b4276f511aba2ddc29212115d9fdc7df08c81bc431220acfa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespace", value)

    @builtins.property
    @jsii.member(jsii_name="appKey")
    def app_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appKey: The application key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appKey"))

    @app_key.setter
    def app_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af712ad5b10325769cb5aa3cf15b999f46ede4b47bbbc689e46534555dbdd9e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appKey", value)

    @builtins.property
    @jsii.member(jsii_name="appType")
    def app_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appType: The type of the application.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appType"))

    @app_type.setter
    def app_type(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc55e6440db49949e3367767af02d87ecae360e742c19ebc562930afdd4f19e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appType", value)

    @builtins.property
    @jsii.member(jsii_name="appVersion")
    def app_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appVersion: The version of the application.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appVersion"))

    @app_version.setter
    def app_version(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27fe35bf9e755a0f1eb35e4538837d4e7fc069aeddb662dcbeaf1cd48aca0953)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appVersion", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the application group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec362f73bb5bf66c2b78ae9eff573b9281677daa73dbc22c794a4fc0185dff8a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="enableLog")
    def enable_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableLog: Whether to enable log.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableLog"))

    @enable_log.setter
    def enable_log(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f968417d2a1686337f6631651776e7b3e84928d8479d48760f003a8342da8766)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableLog", value)

    @builtins.property
    @jsii.member(jsii_name="maxJobs")
    def max_jobs(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxJobs: The maximum number of jobs.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxJobs"))

    @max_jobs.setter
    def max_jobs(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8484450d98a9016220a0f4eb9c162d124b924b4024ffc8cd5f1e34acbaa3c4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxJobs", value)

    @builtins.property
    @jsii.member(jsii_name="monitorConfig")
    def monitor_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: monitorConfig: The monitor configuration in JSON format.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "monitorConfig"))

    @monitor_config.setter
    def monitor_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1659a1a5cb6989385a6964e827029feffe726c82307eff440e47426a1a42e7da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "monitorConfig", value)

    @builtins.property
    @jsii.member(jsii_name="monitorContacts")
    def monitor_contacts(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: monitorContacts: The monitor contacts in JSON format.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "monitorContacts"))

    @monitor_contacts.setter
    def monitor_contacts(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a346bc84a73410097507f8832adb278702fc7cbdd8c133a88056e118516fc3df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "monitorContacts", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceName")
    def namespace_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceName: The name of the namespace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "namespaceName"))

    @namespace_name.setter
    def namespace_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c145292ee114e27f7ade67998ba2af14bcae0012642fe894b9275947a1f94e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceName", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceSource")
    def namespace_source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceSource: The namespace source of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "namespaceSource"))

    @namespace_source.setter
    def namespace_source(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f57c9c027ea1141b81f16b940b8c8166db5c8b47b01c6423c60e9447644588e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceSource", value)

    @builtins.property
    @jsii.member(jsii_name="notificationPolicyName")
    def notification_policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: notificationPolicyName: The notification policy name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "notificationPolicyName"))

    @notification_policy_name.setter
    def notification_policy_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ae88bc0d380d45a376290d176f43436fa710cbd19104bcabd0a3298c2b4832d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "notificationPolicyName", value)

    @builtins.property
    @jsii.member(jsii_name="scheduleBusyWorkers")
    def schedule_busy_workers(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scheduleBusyWorkers: Whether to schedule busy workers.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scheduleBusyWorkers"))

    @schedule_busy_workers.setter
    def schedule_busy_workers(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7832136bc4207b64cbaf579ed64b5412465fd5002801d8a6ccc5709dd4b5ea9c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scheduleBusyWorkers", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-schedulerx.RosAppGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_name": "appName",
        "group_id": "groupId",
        "namespace": "namespace",
        "app_key": "appKey",
        "app_type": "appType",
        "app_version": "appVersion",
        "description": "description",
        "enable_log": "enableLog",
        "max_jobs": "maxJobs",
        "monitor_config": "monitorConfig",
        "monitor_contacts": "monitorContacts",
        "namespace_name": "namespaceName",
        "namespace_source": "namespaceSource",
        "notification_policy_name": "notificationPolicyName",
        "schedule_busy_workers": "scheduleBusyWorkers",
    },
)
class RosAppGroupProps:
    def __init__(
        self,
        *,
        app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        app_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        app_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_jobs: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        monitor_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        monitor_contacts: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        notification_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        schedule_busy_workers: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAppGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup

        :param app_name: 
        :param group_id: 
        :param namespace: 
        :param app_key: 
        :param app_type: 
        :param app_version: 
        :param description: 
        :param enable_log: 
        :param max_jobs: 
        :param monitor_config: 
        :param monitor_contacts: 
        :param namespace_name: 
        :param namespace_source: 
        :param notification_policy_name: 
        :param schedule_busy_workers: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8de946ad5585448b8d79c3438a96514c35b2caf6bdf2b7189e54ffe9e1e5561)
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument app_key", value=app_key, expected_type=type_hints["app_key"])
            check_type(argname="argument app_type", value=app_type, expected_type=type_hints["app_type"])
            check_type(argname="argument app_version", value=app_version, expected_type=type_hints["app_version"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument enable_log", value=enable_log, expected_type=type_hints["enable_log"])
            check_type(argname="argument max_jobs", value=max_jobs, expected_type=type_hints["max_jobs"])
            check_type(argname="argument monitor_config", value=monitor_config, expected_type=type_hints["monitor_config"])
            check_type(argname="argument monitor_contacts", value=monitor_contacts, expected_type=type_hints["monitor_contacts"])
            check_type(argname="argument namespace_name", value=namespace_name, expected_type=type_hints["namespace_name"])
            check_type(argname="argument namespace_source", value=namespace_source, expected_type=type_hints["namespace_source"])
            check_type(argname="argument notification_policy_name", value=notification_policy_name, expected_type=type_hints["notification_policy_name"])
            check_type(argname="argument schedule_busy_workers", value=schedule_busy_workers, expected_type=type_hints["schedule_busy_workers"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "app_name": app_name,
            "group_id": group_id,
            "namespace": namespace,
        }
        if app_key is not None:
            self._values["app_key"] = app_key
        if app_type is not None:
            self._values["app_type"] = app_type
        if app_version is not None:
            self._values["app_version"] = app_version
        if description is not None:
            self._values["description"] = description
        if enable_log is not None:
            self._values["enable_log"] = enable_log
        if max_jobs is not None:
            self._values["max_jobs"] = max_jobs
        if monitor_config is not None:
            self._values["monitor_config"] = monitor_config
        if monitor_contacts is not None:
            self._values["monitor_contacts"] = monitor_contacts
        if namespace_name is not None:
            self._values["namespace_name"] = namespace_name
        if namespace_source is not None:
            self._values["namespace_source"] = namespace_source
        if notification_policy_name is not None:
            self._values["notification_policy_name"] = notification_policy_name
        if schedule_busy_workers is not None:
            self._values["schedule_busy_workers"] = schedule_busy_workers

    @builtins.property
    def app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: appName: The application name.
        '''
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupId: The group ID of the application group.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespace: The namespace of the application group.
        '''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appKey: The application key.
        '''
        result = self._values.get("app_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def app_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appType: The type of the application.
        '''
        result = self._values.get("app_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def app_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appVersion: The version of the application.
        '''
        result = self._values.get("app_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the application group.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableLog: Whether to enable log.
        '''
        result = self._values.get("enable_log")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_jobs(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxJobs: The maximum number of jobs.
        '''
        result = self._values.get("max_jobs")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def monitor_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: monitorConfig: The monitor configuration in JSON format.
        '''
        result = self._values.get("monitor_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def monitor_contacts(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: monitorContacts: The monitor contacts in JSON format.
        '''
        result = self._values.get("monitor_contacts")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceName: The name of the namespace.
        '''
        result = self._values.get("namespace_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace_source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceSource: The namespace source of the job.
        '''
        result = self._values.get("namespace_source")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def notification_policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: notificationPolicyName: The notification policy name.
        '''
        result = self._values.get("notification_policy_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def schedule_busy_workers(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scheduleBusyWorkers: Whether to schedule busy workers.
        '''
        result = self._values.get("schedule_busy_workers")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAppGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosJob(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-schedulerx.RosJob",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SchedulerX::Job``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Job`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f65035b3638b6a793de4b21284ae2da95e694a41540ac36cb7bc553aa3ff79ab)
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
            type_hints = typing.get_type_hints(_typecheckingstub__962119d37053789ca64c7e9363298a8d8a590dc6eca77925032878625dfeaa57)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: JobId: The ID of the job.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJobId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8c1069735512764d89488294f319f6aeb7795442676ff2fb3056f9d6a5592357)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="executeMode")
    def execute_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: executeMode: The execute mode of the job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "executeMode"))

    @execute_mode.setter
    def execute_mode(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__209260e226546f09ecfb1ea524d92779e56274548417e5c9d05bd1038de7622f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "executeMode", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupId: The group ID of the job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f8d5ba134705939c2ba05896c658284a735aaff5b5c61fbcd16ea3a2a99bc27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="jobType")
    def job_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: jobType: The type of the job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "jobType"))

    @job_type.setter
    def job_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1d66a65946d11653611bb986ed9979e9d16a75257818e9651a35622b8ff19ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "jobType", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f595cbd1cc088d9e84af669d7efca7f7f3e6f012c9cdf3dd5951ef7fabf66270)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="namespace")
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespace: The namespace of the job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f3aeb99bc0432307bf938b6a231ed59ec376c720e61e1ff7e3996a0507d9fbc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespace", value)

    @builtins.property
    @jsii.member(jsii_name="timeType")
    def time_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        timeType: The time type of the job.
        cron：1
        fixed_rate：3
        second_delay：4
        one_time ：5
        api：100
        none：-1
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "timeType"))

    @time_type.setter
    def time_type(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac30b94d9d5563921f27921fea15e5ad2b324b93ae60ebfa734af87d6b62e9ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeType", value)

    @builtins.property
    @jsii.member(jsii_name="attemptInterval")
    def attempt_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: attemptInterval: The attempt interval of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "attemptInterval"))

    @attempt_interval.setter
    def attempt_interval(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b4c9b3d373906ef34f30ea76879add59ed5bae255427ee0ab49434a86c20315)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "attemptInterval", value)

    @builtins.property
    @jsii.member(jsii_name="calendar")
    def calendar(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: calendar: The calendar of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "calendar"))

    @calendar.setter
    def calendar(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9da05505d478ee13fc5d7bfb64de8b4a0736a15514b8858eb634e1a49ee61eb7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "calendar", value)

    @builtins.property
    @jsii.member(jsii_name="className")
    def class_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: className: The class name of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "className"))

    @class_name.setter
    def class_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c5af17aa27077dac8c446b6d531c600e9685037ce8524a0ffbc82e3075fe79d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "className", value)

    @builtins.property
    @jsii.member(jsii_name="consumerSize")
    def consumer_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: consumerSize: The consumer size of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "consumerSize"))

    @consumer_size.setter
    def consumer_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98fc7ef6c08a87fa792d2305f1925e5554689bb2a87997c16e1f4eb889c16021)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "consumerSize", value)

    @builtins.property
    @jsii.member(jsii_name="contactInfo")
    def contact_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.ContactInfoProperty"]]]]:
        '''
        :Property: contactInfo: The contact info of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.ContactInfoProperty"]]]], jsii.get(self, "contactInfo"))

    @contact_info.setter
    def contact_info(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.ContactInfoProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae68c668e9034db2f8d97545a9d9f253061dcacf85e83c34e857eea1c002c007)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "contactInfo", value)

    @builtins.property
    @jsii.member(jsii_name="content")
    def content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: content: The content of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "content"))

    @content.setter
    def content(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37b797442fa769a9c241ba8dbfca258bb8603bf98766edc5addc81396616111c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "content", value)

    @builtins.property
    @jsii.member(jsii_name="dataOffset")
    def data_offset(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataOffset: The data offset of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataOffset"))

    @data_offset.setter
    def data_offset(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1010350245f9d013cc46ebe673f39dfd127f2ba1375c67488f15ab9bfa1a4ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataOffset", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56268ff2395fffbf358d1892f45645f94866ef73d3d4fe732e505e3ccee1909d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="dispatcherSize")
    def dispatcher_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dispatcherSize: The dispatcher size of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dispatcherSize"))

    @dispatcher_size.setter
    def dispatcher_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__119862b43f2d59772aa890a7b54a3ffd85d33b1830690bffd769185b278da1e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dispatcherSize", value)

    @builtins.property
    @jsii.member(jsii_name="failEnable")
    def fail_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: failEnable: Whether fail is enabled for the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "failEnable"))

    @fail_enable.setter
    def fail_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__020fe125ef0255e79fd936919bd5db3e40fb2b73a1456e35196155f092e25c61)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "failEnable", value)

    @builtins.property
    @jsii.member(jsii_name="failTimes")
    def fail_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: failTimes: The fail times of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "failTimes"))

    @fail_times.setter
    def fail_times(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5ab71c77d22787775a3b4833305c4c1ffbcf66715a8f7527f82aecf30c48a8f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "failTimes", value)

    @builtins.property
    @jsii.member(jsii_name="maxAttempt")
    def max_attempt(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxAttempt: The max attempt of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxAttempt"))

    @max_attempt.setter
    def max_attempt(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f7c0329b390e5f6e5aa7b112854430d57118d9020068fc852f32073f56a097e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxAttempt", value)

    @builtins.property
    @jsii.member(jsii_name="maxConcurrency")
    def max_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxConcurrency: The max concurrency of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxConcurrency"))

    @max_concurrency.setter
    def max_concurrency(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b499e818ff9b5524eee1740f0d2dd3cd79f2dfb7e901d89649573aacc100b77a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxConcurrency", value)

    @builtins.property
    @jsii.member(jsii_name="missWorkerEnable")
    def miss_worker_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: missWorkerEnable: Whether miss worker is enabled for the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "missWorkerEnable"))

    @miss_worker_enable.setter
    def miss_worker_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f4cc8b0bb567dffad9da36492e896e9291c4e1c11c55bde4cb1238ddf7dcc79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "missWorkerEnable", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceSource")
    def namespace_source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceSource: The namespace source of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "namespaceSource"))

    @namespace_source.setter
    def namespace_source(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4658ba1e69f91fd99176b7d62ebf196ee0559505a928c76d873ced1d70f7a8e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceSource", value)

    @builtins.property
    @jsii.member(jsii_name="pageSize")
    def page_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pageSize: Advanced configuration for parallel grid tasks, the default number of sub-tasks pulled at a time is 100.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pageSize"))

    @page_size.setter
    def page_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ff119b9cf4dd0eaa1d2585d9135e502b018263b4fa13082d3c056ad755abfb4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pageSize", value)

    @builtins.property
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parameters: The parameters of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "parameters"))

    @parameters.setter
    def parameters(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45ecd0bbb0c6c8ed1993277c2b724fbd4c605bb4aadad8bc49d69425001899f8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parameters", value)

    @builtins.property
    @jsii.member(jsii_name="priority")
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: priority: The priority of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af620937c7e14a01ca973024326b80d0596d5b7085fc203b1ea4619383f62289)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "priority", value)

    @builtins.property
    @jsii.member(jsii_name="queueSize")
    def queue_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: queueSize: The queue size of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "queueSize"))

    @queue_size.setter
    def queue_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ade14f47717682cccfcc81a39a498b8f2b37ab06ee61ccb69aba2c00c6f9e3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "queueSize", value)

    @builtins.property
    @jsii.member(jsii_name="sendChannel")
    def send_channel(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sendChannel: The send channel of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sendChannel"))

    @send_channel.setter
    def send_channel(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60b1e77dbd331160fe99e5aca435eef1527a4b68a429b00ebd79acd22ae1a075)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sendChannel", value)

    @builtins.property
    @jsii.member(jsii_name="successNoticeEnable")
    def success_notice_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: successNoticeEnable: Whether success notice is enabled for the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "successNoticeEnable"))

    @success_notice_enable.setter
    def success_notice_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__623919bc50bec1b6be46c5648ee904303782d7777b48e200b56f4c9b341d4c8c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "successNoticeEnable", value)

    @builtins.property
    @jsii.member(jsii_name="taskAttemptInterval")
    def task_attempt_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: taskAttemptInterval: The task attempt interval of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "taskAttemptInterval"))

    @task_attempt_interval.setter
    def task_attempt_interval(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__794c555549e612d08d3b37ba0989670998b218ef89d8566955c2767293d9a4a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "taskAttemptInterval", value)

    @builtins.property
    @jsii.member(jsii_name="taskMaxAttempt")
    def task_max_attempt(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: taskMaxAttempt: The task max attempt of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "taskMaxAttempt"))

    @task_max_attempt.setter
    def task_max_attempt(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10962401c749f6584251dad29196e311b8ac065589a837d4546f552eb524af5c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "taskMaxAttempt", value)

    @builtins.property
    @jsii.member(jsii_name="timeExpression")
    def time_expression(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeExpression: The time expression of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeExpression"))

    @time_expression.setter
    def time_expression(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2fdf22d87fc8a74eb7d6b331c8cf1d072dd718cf29349fab2a1912ac7f5112e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeExpression", value)

    @builtins.property
    @jsii.member(jsii_name="timeout")
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeout: The timeout of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeout"))

    @timeout.setter
    def timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1bf3a7977607e72974313982d1ff5f31b7bd0310fce5b33413364169f242aef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeout", value)

    @builtins.property
    @jsii.member(jsii_name="timeoutEnable")
    def timeout_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeoutEnable: Whether timeout is enabled for the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeoutEnable"))

    @timeout_enable.setter
    def timeout_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b274653d195a8879698479365f87b0440e5be0a81fbb4e957255f3a5fc204df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeoutEnable", value)

    @builtins.property
    @jsii.member(jsii_name="timeoutKillEnable")
    def timeout_kill_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeoutKillEnable: Whether timeout kill is enabled for the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeoutKillEnable"))

    @timeout_kill_enable.setter
    def timeout_kill_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09ab63af84536858f77ad44d107e8817c06853fb2169fd04a68ff0ba2a521df6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeoutKillEnable", value)

    @builtins.property
    @jsii.member(jsii_name="timezone")
    def timezone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timezone: The timezone of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timezone"))

    @timezone.setter
    def timezone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b1fbe4e790cd9b741c154ba5362a57b89b8abbcf88ede8378a7d4cb0101fa39)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timezone", value)

    @builtins.property
    @jsii.member(jsii_name="xAttrs")
    def x_attrs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: xAttrs: The extended attributes of the job.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "xAttrs"))

    @x_attrs.setter
    def x_attrs(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0064cc699d9d6e96b4055148700c22a33053b76b790910e9e297d9177d2a0f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "xAttrs", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-schedulerx.RosJob.ContactInfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "ding": "ding",
            "user_mail": "userMail",
            "user_name": "userName",
            "user_phone": "userPhone",
        },
    )
    class ContactInfoProperty:
        def __init__(
            self,
            *,
            ding: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_mail: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param ding: 
            :param user_mail: 
            :param user_name: 
            :param user_phone: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d9043aa741ddf9f941c49a1933aab61654b718215593127f669000b6606db4a9)
                check_type(argname="argument ding", value=ding, expected_type=type_hints["ding"])
                check_type(argname="argument user_mail", value=user_mail, expected_type=type_hints["user_mail"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
                check_type(argname="argument user_phone", value=user_phone, expected_type=type_hints["user_phone"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if ding is not None:
                self._values["ding"] = ding
            if user_mail is not None:
                self._values["user_mail"] = user_mail
            if user_name is not None:
                self._values["user_name"] = user_name
            if user_phone is not None:
                self._values["user_phone"] = user_phone

        @builtins.property
        def ding(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ding: The ding in contact info.
            '''
            result = self._values.get("ding")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_mail(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: userMail: The user mail in contact info.
            '''
            result = self._values.get("user_mail")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: userName: The user name in contact info.
            '''
            result = self._values.get("user_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_phone(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: userPhone: The user phone in contact info.
            '''
            result = self._values.get("user_phone")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ContactInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-schedulerx.RosJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "execute_mode": "executeMode",
        "group_id": "groupId",
        "job_type": "jobType",
        "name": "name",
        "namespace": "namespace",
        "time_type": "timeType",
        "attempt_interval": "attemptInterval",
        "calendar": "calendar",
        "class_name": "className",
        "consumer_size": "consumerSize",
        "contact_info": "contactInfo",
        "content": "content",
        "data_offset": "dataOffset",
        "description": "description",
        "dispatcher_size": "dispatcherSize",
        "fail_enable": "failEnable",
        "fail_times": "failTimes",
        "max_attempt": "maxAttempt",
        "max_concurrency": "maxConcurrency",
        "miss_worker_enable": "missWorkerEnable",
        "namespace_source": "namespaceSource",
        "page_size": "pageSize",
        "parameters": "parameters",
        "priority": "priority",
        "queue_size": "queueSize",
        "send_channel": "sendChannel",
        "success_notice_enable": "successNoticeEnable",
        "task_attempt_interval": "taskAttemptInterval",
        "task_max_attempt": "taskMaxAttempt",
        "time_expression": "timeExpression",
        "timeout": "timeout",
        "timeout_enable": "timeoutEnable",
        "timeout_kill_enable": "timeoutKillEnable",
        "timezone": "timezone",
        "x_attrs": "xAttrs",
    },
)
class RosJobProps:
    def __init__(
        self,
        *,
        execute_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        job_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        time_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        attempt_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        calendar: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        class_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        consumer_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        contact_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.ContactInfoProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_offset: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dispatcher_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fail_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fail_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_attempt: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        miss_worker_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        page_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        queue_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        send_channel: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        success_notice_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        task_attempt_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        task_max_attempt: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        time_expression: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout_kill_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        x_attrs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosJob``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-job

        :param execute_mode: 
        :param group_id: 
        :param job_type: 
        :param name: 
        :param namespace: 
        :param time_type: 
        :param attempt_interval: 
        :param calendar: 
        :param class_name: 
        :param consumer_size: 
        :param contact_info: 
        :param content: 
        :param data_offset: 
        :param description: 
        :param dispatcher_size: 
        :param fail_enable: 
        :param fail_times: 
        :param max_attempt: 
        :param max_concurrency: 
        :param miss_worker_enable: 
        :param namespace_source: 
        :param page_size: 
        :param parameters: 
        :param priority: 
        :param queue_size: 
        :param send_channel: 
        :param success_notice_enable: 
        :param task_attempt_interval: 
        :param task_max_attempt: 
        :param time_expression: 
        :param timeout: 
        :param timeout_enable: 
        :param timeout_kill_enable: 
        :param timezone: 
        :param x_attrs: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2e228f82dd48e8c3ae8de828867fee42950ae8e2ebf7dcadc33da25b33c089d)
            check_type(argname="argument execute_mode", value=execute_mode, expected_type=type_hints["execute_mode"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument job_type", value=job_type, expected_type=type_hints["job_type"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument time_type", value=time_type, expected_type=type_hints["time_type"])
            check_type(argname="argument attempt_interval", value=attempt_interval, expected_type=type_hints["attempt_interval"])
            check_type(argname="argument calendar", value=calendar, expected_type=type_hints["calendar"])
            check_type(argname="argument class_name", value=class_name, expected_type=type_hints["class_name"])
            check_type(argname="argument consumer_size", value=consumer_size, expected_type=type_hints["consumer_size"])
            check_type(argname="argument contact_info", value=contact_info, expected_type=type_hints["contact_info"])
            check_type(argname="argument content", value=content, expected_type=type_hints["content"])
            check_type(argname="argument data_offset", value=data_offset, expected_type=type_hints["data_offset"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument dispatcher_size", value=dispatcher_size, expected_type=type_hints["dispatcher_size"])
            check_type(argname="argument fail_enable", value=fail_enable, expected_type=type_hints["fail_enable"])
            check_type(argname="argument fail_times", value=fail_times, expected_type=type_hints["fail_times"])
            check_type(argname="argument max_attempt", value=max_attempt, expected_type=type_hints["max_attempt"])
            check_type(argname="argument max_concurrency", value=max_concurrency, expected_type=type_hints["max_concurrency"])
            check_type(argname="argument miss_worker_enable", value=miss_worker_enable, expected_type=type_hints["miss_worker_enable"])
            check_type(argname="argument namespace_source", value=namespace_source, expected_type=type_hints["namespace_source"])
            check_type(argname="argument page_size", value=page_size, expected_type=type_hints["page_size"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument queue_size", value=queue_size, expected_type=type_hints["queue_size"])
            check_type(argname="argument send_channel", value=send_channel, expected_type=type_hints["send_channel"])
            check_type(argname="argument success_notice_enable", value=success_notice_enable, expected_type=type_hints["success_notice_enable"])
            check_type(argname="argument task_attempt_interval", value=task_attempt_interval, expected_type=type_hints["task_attempt_interval"])
            check_type(argname="argument task_max_attempt", value=task_max_attempt, expected_type=type_hints["task_max_attempt"])
            check_type(argname="argument time_expression", value=time_expression, expected_type=type_hints["time_expression"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
            check_type(argname="argument timeout_enable", value=timeout_enable, expected_type=type_hints["timeout_enable"])
            check_type(argname="argument timeout_kill_enable", value=timeout_kill_enable, expected_type=type_hints["timeout_kill_enable"])
            check_type(argname="argument timezone", value=timezone, expected_type=type_hints["timezone"])
            check_type(argname="argument x_attrs", value=x_attrs, expected_type=type_hints["x_attrs"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "execute_mode": execute_mode,
            "group_id": group_id,
            "job_type": job_type,
            "name": name,
            "namespace": namespace,
            "time_type": time_type,
        }
        if attempt_interval is not None:
            self._values["attempt_interval"] = attempt_interval
        if calendar is not None:
            self._values["calendar"] = calendar
        if class_name is not None:
            self._values["class_name"] = class_name
        if consumer_size is not None:
            self._values["consumer_size"] = consumer_size
        if contact_info is not None:
            self._values["contact_info"] = contact_info
        if content is not None:
            self._values["content"] = content
        if data_offset is not None:
            self._values["data_offset"] = data_offset
        if description is not None:
            self._values["description"] = description
        if dispatcher_size is not None:
            self._values["dispatcher_size"] = dispatcher_size
        if fail_enable is not None:
            self._values["fail_enable"] = fail_enable
        if fail_times is not None:
            self._values["fail_times"] = fail_times
        if max_attempt is not None:
            self._values["max_attempt"] = max_attempt
        if max_concurrency is not None:
            self._values["max_concurrency"] = max_concurrency
        if miss_worker_enable is not None:
            self._values["miss_worker_enable"] = miss_worker_enable
        if namespace_source is not None:
            self._values["namespace_source"] = namespace_source
        if page_size is not None:
            self._values["page_size"] = page_size
        if parameters is not None:
            self._values["parameters"] = parameters
        if priority is not None:
            self._values["priority"] = priority
        if queue_size is not None:
            self._values["queue_size"] = queue_size
        if send_channel is not None:
            self._values["send_channel"] = send_channel
        if success_notice_enable is not None:
            self._values["success_notice_enable"] = success_notice_enable
        if task_attempt_interval is not None:
            self._values["task_attempt_interval"] = task_attempt_interval
        if task_max_attempt is not None:
            self._values["task_max_attempt"] = task_max_attempt
        if time_expression is not None:
            self._values["time_expression"] = time_expression
        if timeout is not None:
            self._values["timeout"] = timeout
        if timeout_enable is not None:
            self._values["timeout_enable"] = timeout_enable
        if timeout_kill_enable is not None:
            self._values["timeout_kill_enable"] = timeout_kill_enable
        if timezone is not None:
            self._values["timezone"] = timezone
        if x_attrs is not None:
            self._values["x_attrs"] = x_attrs

    @builtins.property
    def execute_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: executeMode: The execute mode of the job.
        '''
        result = self._values.get("execute_mode")
        assert result is not None, "Required property 'execute_mode' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupId: The group ID of the job.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def job_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: jobType: The type of the job.
        '''
        result = self._values.get("job_type")
        assert result is not None, "Required property 'job_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the job.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespace: The namespace of the job.
        '''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def time_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        timeType: The time type of the job.
        cron：1
        fixed_rate：3
        second_delay：4
        one_time ：5
        api：100
        none：-1
        '''
        result = self._values.get("time_type")
        assert result is not None, "Required property 'time_type' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def attempt_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: attemptInterval: The attempt interval of the job.
        '''
        result = self._values.get("attempt_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def calendar(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: calendar: The calendar of the job.
        '''
        result = self._values.get("calendar")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def class_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: className: The class name of the job.
        '''
        result = self._values.get("class_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def consumer_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: consumerSize: The consumer size of the job.
        '''
        result = self._values.get("consumer_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def contact_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.ContactInfoProperty]]]]:
        '''
        :Property: contactInfo: The contact info of the job.
        '''
        result = self._values.get("contact_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.ContactInfoProperty]]]], result)

    @builtins.property
    def content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: content: The content of the job.
        '''
        result = self._values.get("content")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_offset(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataOffset: The data offset of the job.
        '''
        result = self._values.get("data_offset")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the job.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dispatcher_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dispatcherSize: The dispatcher size of the job.
        '''
        result = self._values.get("dispatcher_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fail_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: failEnable: Whether fail is enabled for the job.
        '''
        result = self._values.get("fail_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fail_times(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: failTimes: The fail times of the job.
        '''
        result = self._values.get("fail_times")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_attempt(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxAttempt: The max attempt of the job.
        '''
        result = self._values.get("max_attempt")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxConcurrency: The max concurrency of the job.
        '''
        result = self._values.get("max_concurrency")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def miss_worker_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: missWorkerEnable: Whether miss worker is enabled for the job.
        '''
        result = self._values.get("miss_worker_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace_source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceSource: The namespace source of the job.
        '''
        result = self._values.get("namespace_source")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def page_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pageSize: Advanced configuration for parallel grid tasks, the default number of sub-tasks pulled at a time is 100.
        '''
        result = self._values.get("page_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parameters: The parameters of the job.
        '''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: priority: The priority of the job.
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def queue_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: queueSize: The queue size of the job.
        '''
        result = self._values.get("queue_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def send_channel(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sendChannel: The send channel of the job.
        '''
        result = self._values.get("send_channel")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def success_notice_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: successNoticeEnable: Whether success notice is enabled for the job.
        '''
        result = self._values.get("success_notice_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def task_attempt_interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: taskAttemptInterval: The task attempt interval of the job.
        '''
        result = self._values.get("task_attempt_interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def task_max_attempt(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: taskMaxAttempt: The task max attempt of the job.
        '''
        result = self._values.get("task_max_attempt")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def time_expression(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeExpression: The time expression of the job.
        '''
        result = self._values.get("time_expression")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeout: The timeout of the job.
        '''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeoutEnable: Whether timeout is enabled for the job.
        '''
        result = self._values.get("timeout_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout_kill_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeoutKillEnable: Whether timeout kill is enabled for the job.
        '''
        result = self._values.get("timeout_kill_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timezone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timezone: The timezone of the job.
        '''
        result = self._values.get("timezone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def x_attrs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: xAttrs: The extended attributes of the job.
        '''
        result = self._values.get("x_attrs")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNamespace(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-schedulerx.RosNamespace",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SchedulerX::Namespace``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Namespace`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-namespace
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNamespaceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f824099e3c2e561781a9457d9b70ad46dfc14a3032ac92680dee30164ecf9940)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c7a128e651ceca9deaee2d63e240b9506dc7c4903b80e816260a01dea67589ba)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceUid")
    def attr_namespace_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NamespaceUid: The ID of the namespace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaceUid"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b0e7af181b983f270febce61d0c43ff9977a9ff6744b84d835bd7103878ac68d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the namespace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f90a66c91659158ba5829e650a7203441af19fa8d7e4e21da2bdd47f749a1886)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the namespace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a94ff18c0b07348ed1e7b071fa05e61f00fcfe412e2641fa6d20b3a601df2b44)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="uid")
    def uid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: uid: Namespace UID is globally unique; it is recommended to generate it using UUID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "uid"))

    @uid.setter
    def uid(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f0b2bee8274714a381c307dddb3d5e6a545ba4e7aed81a2bf669741907f8849)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "uid", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-schedulerx.RosNamespaceProps",
    jsii_struct_bases=[],
    name_mapping={"name": "name", "description": "description", "uid": "uid"},
)
class RosNamespaceProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosNamespace``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-namespace

        :param name: 
        :param description: 
        :param uid: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f69f0c7c40c2b63955f3118284cbc41bd90feeab6b93483a5b9ff27674ea60a)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument uid", value=uid, expected_type=type_hints["uid"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if description is not None:
            self._values["description"] = description
        if uid is not None:
            self._values["uid"] = uid

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the namespace.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the namespace.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def uid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: uid: Namespace UID is globally unique; it is recommended to generate it using UUID.
        '''
        result = self._values.get("uid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWorkFlow(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-schedulerx.RosWorkFlow",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SchedulerX::WorkFlow``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``WorkFlow`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-workflow
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWorkFlowProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d31f97ecac9d174f304c6dfbe0bd136029a15f5f635d41090a0e6903749969a4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__321b1d608095c9602cccf22d6ad560f8d87dd9cfc13bece9e57ae42309522065)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Workflow description.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupId: The application Group ID, which is obtained from the application management page of the console.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxConcurrency")
    def attr_max_concurrency(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaxConcurrency: The maximum number of workflow instances running at the same time. The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxConcurrency"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Namespace: The namespace ID, which is obtained from the namespace page in the console.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrTimeExpression")
    def attr_time_expression(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TimeExpression: Time expression, which is set based on the selected time type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTimeExpression"))

    @builtins.property
    @jsii.member(jsii_name="attrTimeType")
    def attr_time_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TimeType: Time type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTimeType"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkFlowId")
    def attr_work_flow_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkFlowId: workflow id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkFlowId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkflowName")
    def attr_workflow_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkflowName: Workflow Name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkflowName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__e90d8a28a91aa89e3256587db7a5db4ba8b1c3d1b069e455e31d3b4a46d39c95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupId: The application Group ID, which is obtained from the application management page of the console.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ac9725c8b189a75ba310d18a332c6ed7817a44d6e00d80c8bdf870e95ebe31a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="namespace")
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespace: The namespace ID, which is obtained from the namespace page in the console.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__893ff465752f43f8392d961200d8af42d416b545dd4d067dd8f53234d80eea16)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespace", value)

    @builtins.property
    @jsii.member(jsii_name="timeType")
    def time_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        timeType: Time type. Currently, the following time types are supported:

        - cron: 1
        - api: 100.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "timeType"))

    @time_type.setter
    def time_type(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38e75b55ba7c6d13695f8d17f64d88148459378592c1a4d66df7795714b8391d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeType", value)

    @builtins.property
    @jsii.member(jsii_name="workflowName")
    def workflow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workflowName: Workflow Name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workflowName"))

    @workflow_name.setter
    def workflow_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1585c2df2b510aeb8cca367e6f8bcce17dac7b0efaaf81dad93cf73bc510bb1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workflowName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Workflow description.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8702a347a75160827bc41e91f3de3218cb78ed054328581e24f6d7e5b7cff5d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="maxConcurrency")
    def max_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxConcurrency: The maximum number of workflow instances running at the same time. The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxConcurrency"))

    @max_concurrency.setter
    def max_concurrency(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a87b70e500e6aa4e3c6643bc979ec72802656fb0372335d5b1976176d51aba56)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxConcurrency", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceSource")
    def namespace_source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceSource: Special third parties are required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "namespaceSource"))

    @namespace_source.setter
    def namespace_source(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff6ac92f21e766ca8955bd5aa8c84880ebcb247986309b9ed2a44e4a3bb86b08)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceSource", value)

    @builtins.property
    @jsii.member(jsii_name="timeExpression")
    def time_expression(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        timeExpression: Time expression, which is set based on the selected time type.

        - cron: Fill in standard cron expressions to support online verification.
        - api: No time expression.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeExpression"))

    @time_expression.setter
    def time_expression(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b80f655cbd2142b23061dad25a6c7749f648b7c31e4f604506d8ad839de9bcc9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeExpression", value)

    @builtins.property
    @jsii.member(jsii_name="timezone")
    def timezone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timezone: Time Zone.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timezone"))

    @timezone.setter
    def timezone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f81e8666b34148a456cf1f6e63e5c60ed5e57878ffebb4a0009c1558580f3bbc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timezone", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-schedulerx.RosWorkFlowProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_id": "groupId",
        "namespace": "namespace",
        "time_type": "timeType",
        "workflow_name": "workflowName",
        "description": "description",
        "max_concurrency": "maxConcurrency",
        "namespace_source": "namespaceSource",
        "time_expression": "timeExpression",
        "timezone": "timezone",
    },
)
class RosWorkFlowProps:
    def __init__(
        self,
        *,
        group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        time_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        workflow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        time_expression: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWorkFlow``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-workflow

        :param group_id: 
        :param namespace: 
        :param time_type: 
        :param workflow_name: 
        :param description: 
        :param max_concurrency: 
        :param namespace_source: 
        :param time_expression: 
        :param timezone: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a1bdffbcec6c04e7a1ec2b6609fdfe2695faa251e1ae07ecba49ade6ec14ef8)
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument time_type", value=time_type, expected_type=type_hints["time_type"])
            check_type(argname="argument workflow_name", value=workflow_name, expected_type=type_hints["workflow_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument max_concurrency", value=max_concurrency, expected_type=type_hints["max_concurrency"])
            check_type(argname="argument namespace_source", value=namespace_source, expected_type=type_hints["namespace_source"])
            check_type(argname="argument time_expression", value=time_expression, expected_type=type_hints["time_expression"])
            check_type(argname="argument timezone", value=timezone, expected_type=type_hints["timezone"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_id": group_id,
            "namespace": namespace,
            "time_type": time_type,
            "workflow_name": workflow_name,
        }
        if description is not None:
            self._values["description"] = description
        if max_concurrency is not None:
            self._values["max_concurrency"] = max_concurrency
        if namespace_source is not None:
            self._values["namespace_source"] = namespace_source
        if time_expression is not None:
            self._values["time_expression"] = time_expression
        if timezone is not None:
            self._values["timezone"] = timezone

    @builtins.property
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupId: The application Group ID, which is obtained from the application management page of the console.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespace: The namespace ID, which is obtained from the namespace page in the console.
        '''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def time_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        timeType: Time type. Currently, the following time types are supported:

        - cron: 1
        - api: 100.
        '''
        result = self._values.get("time_type")
        assert result is not None, "Required property 'time_type' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workflow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workflowName: Workflow Name.
        '''
        result = self._values.get("workflow_name")
        assert result is not None, "Required property 'workflow_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Workflow description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxConcurrency: The maximum number of workflow instances running at the same time. The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
        '''
        result = self._values.get("max_concurrency")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace_source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceSource: Special third parties are required.
        '''
        result = self._values.get("namespace_source")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def time_expression(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        timeExpression: Time expression, which is set based on the selected time type.

        - cron: Fill in standard cron expressions to support online verification.
        - api: No time expression.
        '''
        result = self._values.get("time_expression")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timezone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timezone: Time Zone.
        '''
        result = self._values.get("timezone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWorkFlowProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IWorkFlow)
class WorkFlow(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-schedulerx.WorkFlow",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SchedulerX::WorkFlow``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWorkFlow``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-workflow
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["WorkFlowProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4012a1442b95ca587e7104adcea98e2c6adbff510286c928f3ed8c4d2c1bc9c2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Workflow description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupId: The application Group ID, which is obtained from the application management page of the console.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxConcurrency")
    def attr_max_concurrency(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxConcurrency: The maximum number of workflow instances running at the same time.

        The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaxConcurrency"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace ID, which is obtained from the namespace page in the console.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrTimeExpression")
    def attr_time_expression(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TimeExpression: Time expression, which is set based on the selected time type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTimeExpression"))

    @builtins.property
    @jsii.member(jsii_name="attrTimeType")
    def attr_time_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TimeType: Time type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTimeType"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkFlowId")
    def attr_work_flow_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkFlowId: workflow id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkFlowId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkflowName")
    def attr_workflow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkflowName: Workflow Name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkflowName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkFlowProps":
        return typing.cast("WorkFlowProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a68f2124121cae3067da82a6b2f5da9884ecf085cb2e48feb808d2a2796a9d37)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3671bfeef90a0f408ddb940a882606c1fdd3d93d8176dadcdd26765a2d40184c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__926b62d097060550ecd8edc96c2007948fee23f1637bfe3ff23f19271303c16e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-schedulerx.WorkFlowProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_id": "groupId",
        "namespace": "namespace",
        "time_type": "timeType",
        "workflow_name": "workflowName",
        "description": "description",
        "max_concurrency": "maxConcurrency",
        "namespace_source": "namespaceSource",
        "time_expression": "timeExpression",
        "timezone": "timezone",
    },
)
class WorkFlowProps:
    def __init__(
        self,
        *,
        group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        time_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        workflow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        time_expression: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``WorkFlow``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-workflow

        :param group_id: Property groupId: The application Group ID, which is obtained from the application management page of the console.
        :param namespace: Property namespace: The namespace ID, which is obtained from the namespace page in the console.
        :param time_type: Property timeType: Time type. Currently, the following time types are supported: - cron: 1 - api: 100.
        :param workflow_name: Property workflowName: Workflow Name.
        :param description: Property description: Workflow description.
        :param max_concurrency: Property maxConcurrency: The maximum number of workflow instances running at the same time. The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
        :param namespace_source: Property namespaceSource: Special third parties are required.
        :param time_expression: Property timeExpression: Time expression, which is set based on the selected time type. - cron: Fill in standard cron expressions to support online verification. - api: No time expression.
        :param timezone: Property timezone: Time Zone.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b6c284fed4aaf796a1dbda893d454bd4d0c7d6d32f4056c95683b2ddcf08f5b)
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument time_type", value=time_type, expected_type=type_hints["time_type"])
            check_type(argname="argument workflow_name", value=workflow_name, expected_type=type_hints["workflow_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument max_concurrency", value=max_concurrency, expected_type=type_hints["max_concurrency"])
            check_type(argname="argument namespace_source", value=namespace_source, expected_type=type_hints["namespace_source"])
            check_type(argname="argument time_expression", value=time_expression, expected_type=type_hints["time_expression"])
            check_type(argname="argument timezone", value=timezone, expected_type=type_hints["timezone"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_id": group_id,
            "namespace": namespace,
            "time_type": time_type,
            "workflow_name": workflow_name,
        }
        if description is not None:
            self._values["description"] = description
        if max_concurrency is not None:
            self._values["max_concurrency"] = max_concurrency
        if namespace_source is not None:
            self._values["namespace_source"] = namespace_source
        if time_expression is not None:
            self._values["time_expression"] = time_expression
        if timezone is not None:
            self._values["timezone"] = timezone

    @builtins.property
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupId: The application Group ID, which is obtained from the application management page of the console.'''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property namespace: The namespace ID, which is obtained from the namespace page in the console.'''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def time_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property timeType: Time type.

        Currently, the following time types are supported:

        - cron: 1
        - api: 100.
        '''
        result = self._values.get("time_type")
        assert result is not None, "Required property 'time_type' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workflow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workflowName: Workflow Name.'''
        result = self._values.get("workflow_name")
        assert result is not None, "Required property 'workflow_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Workflow description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxConcurrency: The maximum number of workflow instances running at the same time.

        The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
        '''
        result = self._values.get("max_concurrency")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace_source(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property namespaceSource: Special third parties are required.'''
        result = self._values.get("namespace_source")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def time_expression(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeExpression: Time expression, which is set based on the selected time type.

        - cron: Fill in standard cron expressions to support online verification.
        - api: No time expression.
        '''
        result = self._values.get("time_expression")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timezone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timezone: Time Zone.'''
        result = self._values.get("timezone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WorkFlowProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAppGroup)
class AppGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-schedulerx.AppGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SchedulerX::AppGroup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAppGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AppGroupProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d41ec8cbfc818198ae1e491a16fe67ef0e914b74b041cffcb379d9148684c869)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAppGroupId")
    def attr_app_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppGroupId: The group ID of the application group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AppGroupProps:
        return typing.cast(AppGroupProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38caad1b2fe48051757faede758e53b1af9913fb0defa5391fce25af0e285e46)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6c6efb4f75b46c7a65f3f7a28e7995d9dd21ad860fcb09822847e7f2b578c9a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__452c4a03eaa11cbb88b96b2cbfe9c8d182950f2cccd64dba0cc5a003036fc5a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "AppGroup",
    "AppGroupProps",
    "IAppGroup",
    "IJob",
    "INamespace",
    "IWorkFlow",
    "Job",
    "JobProps",
    "Namespace",
    "NamespaceProps",
    "RosAppGroup",
    "RosAppGroupProps",
    "RosJob",
    "RosJobProps",
    "RosNamespace",
    "RosNamespaceProps",
    "RosWorkFlow",
    "RosWorkFlowProps",
    "WorkFlow",
    "WorkFlowProps",
]

publication.publish()

def _typecheckingstub__835064c77fac9a2677b6d17171a7bfda13c1811cdbffafc839d7624f870c8853(
    *,
    app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    app_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    app_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_jobs: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    monitor_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    monitor_contacts: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    notification_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    schedule_busy_workers: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__107241ae4ba8585cf1d66012c97d3970cd7199bac2885e81d9ad6786b2054e61(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[JobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f12352dc2403b0f20e2ee6716ecbe252786033c673e961cc2453a6e0215b4f2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff39b854396ae76a5e31ba1998a4d37bb4ec4a497f0733a3c9f3ff1496bd7393(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96bbc88680c6a8440f9f1a7828bac9fd45ec118b4a97f4d3e0bfe07a54a764bb(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06e5bc05a8e84c43bf2dcc51352843da2af3d5048bb81cc7aac1b2ed3c3ba15d(
    *,
    execute_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    job_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    time_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    attempt_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    calendar: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    class_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    consumer_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    contact_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.ContactInfoProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_offset: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dispatcher_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fail_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fail_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_attempt: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    miss_worker_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    page_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    queue_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    send_channel: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    success_notice_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    task_attempt_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    task_max_attempt: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    time_expression: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout_kill_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_attrs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d8431ab3e04f7df8a65c5f869d6bf42d8087c4bfb018bd43604712f579b46d9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[NamespaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__421d96bbf8ca6ec8e5d0d16b44a4b59fbca3075d7238dbbafa6963a968739ae0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__911b81721d555f4aed9a7eb6f0a5ded83a4e3ba195c03859f869f6f593b55ebc(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe35117c3678e5b80c516853739eaac323e422d9135909b4f5ea7664c92b438e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b31e173d72d395977b7e16cbe20499390c16e589a4de9e172a75289463268e3a(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e5f6eb6e994133fd47a7a53ae0d8ef10214371765ac867ecb9936db185f0d30(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAppGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35be65be74da426b6aacafc9b0d8e08d8ce8a69f2d5e36ab64a59faf67d4961f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26015e8abbc75887daa0789455e151936951eb2586ff6d42fc47fa0b6fef4c61(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b8c560ddcbe5d7f0ac9e7515235f0476887d7b417f837b1e8d2a7a00b461a92(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46a8c09c3a285ff8eacee0cdd4da135b1a08f5815b193becc1969720a54b7f97(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba3f6fae4baa030b4276f511aba2ddc29212115d9fdc7df08c81bc431220acfa(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af712ad5b10325769cb5aa3cf15b999f46ede4b47bbbc689e46534555dbdd9e3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc55e6440db49949e3367767af02d87ecae360e742c19ebc562930afdd4f19e5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27fe35bf9e755a0f1eb35e4538837d4e7fc069aeddb662dcbeaf1cd48aca0953(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec362f73bb5bf66c2b78ae9eff573b9281677daa73dbc22c794a4fc0185dff8a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f968417d2a1686337f6631651776e7b3e84928d8479d48760f003a8342da8766(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8484450d98a9016220a0f4eb9c162d124b924b4024ffc8cd5f1e34acbaa3c4a(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1659a1a5cb6989385a6964e827029feffe726c82307eff440e47426a1a42e7da(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a346bc84a73410097507f8832adb278702fc7cbdd8c133a88056e118516fc3df(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c145292ee114e27f7ade67998ba2af14bcae0012642fe894b9275947a1f94e2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f57c9c027ea1141b81f16b940b8c8166db5c8b47b01c6423c60e9447644588e9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ae88bc0d380d45a376290d176f43436fa710cbd19104bcabd0a3298c2b4832d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7832136bc4207b64cbaf579ed64b5412465fd5002801d8a6ccc5709dd4b5ea9c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8de946ad5585448b8d79c3438a96514c35b2caf6bdf2b7189e54ffe9e1e5561(
    *,
    app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    app_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    app_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_jobs: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    monitor_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    monitor_contacts: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    notification_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    schedule_busy_workers: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f65035b3638b6a793de4b21284ae2da95e694a41540ac36cb7bc553aa3ff79ab(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__962119d37053789ca64c7e9363298a8d8a590dc6eca77925032878625dfeaa57(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c1069735512764d89488294f319f6aeb7795442676ff2fb3056f9d6a5592357(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__209260e226546f09ecfb1ea524d92779e56274548417e5c9d05bd1038de7622f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f8d5ba134705939c2ba05896c658284a735aaff5b5c61fbcd16ea3a2a99bc27(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1d66a65946d11653611bb986ed9979e9d16a75257818e9651a35622b8ff19ee(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f595cbd1cc088d9e84af669d7efca7f7f3e6f012c9cdf3dd5951ef7fabf66270(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f3aeb99bc0432307bf938b6a231ed59ec376c720e61e1ff7e3996a0507d9fbc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac30b94d9d5563921f27921fea15e5ad2b324b93ae60ebfa734af87d6b62e9ce(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b4c9b3d373906ef34f30ea76879add59ed5bae255427ee0ab49434a86c20315(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9da05505d478ee13fc5d7bfb64de8b4a0736a15514b8858eb634e1a49ee61eb7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c5af17aa27077dac8c446b6d531c600e9685037ce8524a0ffbc82e3075fe79d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98fc7ef6c08a87fa792d2305f1925e5554689bb2a87997c16e1f4eb889c16021(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae68c668e9034db2f8d97545a9d9f253061dcacf85e83c34e857eea1c002c007(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.ContactInfoProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37b797442fa769a9c241ba8dbfca258bb8603bf98766edc5addc81396616111c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1010350245f9d013cc46ebe673f39dfd127f2ba1375c67488f15ab9bfa1a4ba(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56268ff2395fffbf358d1892f45645f94866ef73d3d4fe732e505e3ccee1909d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__119862b43f2d59772aa890a7b54a3ffd85d33b1830690bffd769185b278da1e9(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__020fe125ef0255e79fd936919bd5db3e40fb2b73a1456e35196155f092e25c61(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5ab71c77d22787775a3b4833305c4c1ffbcf66715a8f7527f82aecf30c48a8f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f7c0329b390e5f6e5aa7b112854430d57118d9020068fc852f32073f56a097e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b499e818ff9b5524eee1740f0d2dd3cd79f2dfb7e901d89649573aacc100b77a(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f4cc8b0bb567dffad9da36492e896e9291c4e1c11c55bde4cb1238ddf7dcc79(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4658ba1e69f91fd99176b7d62ebf196ee0559505a928c76d873ced1d70f7a8e8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ff119b9cf4dd0eaa1d2585d9135e502b018263b4fa13082d3c056ad755abfb4(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45ecd0bbb0c6c8ed1993277c2b724fbd4c605bb4aadad8bc49d69425001899f8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af620937c7e14a01ca973024326b80d0596d5b7085fc203b1ea4619383f62289(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ade14f47717682cccfcc81a39a498b8f2b37ab06ee61ccb69aba2c00c6f9e3c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60b1e77dbd331160fe99e5aca435eef1527a4b68a429b00ebd79acd22ae1a075(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__623919bc50bec1b6be46c5648ee904303782d7777b48e200b56f4c9b341d4c8c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__794c555549e612d08d3b37ba0989670998b218ef89d8566955c2767293d9a4a5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10962401c749f6584251dad29196e311b8ac065589a837d4546f552eb524af5c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2fdf22d87fc8a74eb7d6b331c8cf1d072dd718cf29349fab2a1912ac7f5112e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1bf3a7977607e72974313982d1ff5f31b7bd0310fce5b33413364169f242aef(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b274653d195a8879698479365f87b0440e5be0a81fbb4e957255f3a5fc204df(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09ab63af84536858f77ad44d107e8817c06853fb2169fd04a68ff0ba2a521df6(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b1fbe4e790cd9b741c154ba5362a57b89b8abbcf88ede8378a7d4cb0101fa39(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0064cc699d9d6e96b4055148700c22a33053b76b790910e9e297d9177d2a0f7(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9043aa741ddf9f941c49a1933aab61654b718215593127f669000b6606db4a9(
    *,
    ding: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_mail: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2e228f82dd48e8c3ae8de828867fee42950ae8e2ebf7dcadc33da25b33c089d(
    *,
    execute_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    job_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    time_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    attempt_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    calendar: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    class_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    consumer_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    contact_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.ContactInfoProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_offset: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dispatcher_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fail_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fail_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_attempt: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    miss_worker_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    page_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    queue_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    send_channel: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    success_notice_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    task_attempt_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    task_max_attempt: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    time_expression: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout_kill_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_attrs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f824099e3c2e561781a9457d9b70ad46dfc14a3032ac92680dee30164ecf9940(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNamespaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7a128e651ceca9deaee2d63e240b9506dc7c4903b80e816260a01dea67589ba(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0e7af181b983f270febce61d0c43ff9977a9ff6744b84d835bd7103878ac68d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f90a66c91659158ba5829e650a7203441af19fa8d7e4e21da2bdd47f749a1886(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a94ff18c0b07348ed1e7b071fa05e61f00fcfe412e2641fa6d20b3a601df2b44(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f0b2bee8274714a381c307dddb3d5e6a545ba4e7aed81a2bf669741907f8849(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f69f0c7c40c2b63955f3118284cbc41bd90feeab6b93483a5b9ff27674ea60a(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d31f97ecac9d174f304c6dfbe0bd136029a15f5f635d41090a0e6903749969a4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWorkFlowProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__321b1d608095c9602cccf22d6ad560f8d87dd9cfc13bece9e57ae42309522065(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e90d8a28a91aa89e3256587db7a5db4ba8b1c3d1b069e455e31d3b4a46d39c95(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ac9725c8b189a75ba310d18a332c6ed7817a44d6e00d80c8bdf870e95ebe31a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__893ff465752f43f8392d961200d8af42d416b545dd4d067dd8f53234d80eea16(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38e75b55ba7c6d13695f8d17f64d88148459378592c1a4d66df7795714b8391d(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1585c2df2b510aeb8cca367e6f8bcce17dac7b0efaaf81dad93cf73bc510bb1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8702a347a75160827bc41e91f3de3218cb78ed054328581e24f6d7e5b7cff5d1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a87b70e500e6aa4e3c6643bc979ec72802656fb0372335d5b1976176d51aba56(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff6ac92f21e766ca8955bd5aa8c84880ebcb247986309b9ed2a44e4a3bb86b08(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b80f655cbd2142b23061dad25a6c7749f648b7c31e4f604506d8ad839de9bcc9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f81e8666b34148a456cf1f6e63e5c60ed5e57878ffebb4a0009c1558580f3bbc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a1bdffbcec6c04e7a1ec2b6609fdfe2695faa251e1ae07ecba49ade6ec14ef8(
    *,
    group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    time_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    workflow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    time_expression: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4012a1442b95ca587e7104adcea98e2c6adbff510286c928f3ed8c4d2c1bc9c2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WorkFlowProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a68f2124121cae3067da82a6b2f5da9884ecf085cb2e48feb808d2a2796a9d37(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3671bfeef90a0f408ddb940a882606c1fdd3d93d8176dadcdd26765a2d40184c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__926b62d097060550ecd8edc96c2007948fee23f1637bfe3ff23f19271303c16e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b6c284fed4aaf796a1dbda893d454bd4d0c7d6d32f4056c95683b2ddcf08f5b(
    *,
    group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    time_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    workflow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace_source: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    time_expression: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timezone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d41ec8cbfc818198ae1e491a16fe67ef0e914b74b041cffcb379d9148684c869(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AppGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38caad1b2fe48051757faede758e53b1af9913fb0defa5391fce25af0e285e46(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6c6efb4f75b46c7a65f3f7a28e7995d9dd21ad860fcb09822847e7f2b578c9a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__452c4a03eaa11cbb88b96b2cbfe9c8d182950f2cccd64dba0cc5a003036fc5a0(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
