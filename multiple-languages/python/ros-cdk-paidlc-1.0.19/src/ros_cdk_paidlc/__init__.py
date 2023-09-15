'''
## Aliyun ROS PAIDLC Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as PAIDLC from '@alicloud/ros-cdk-paidlc';
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


class Job(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-paidlc.Job",
):
    '''A ROS resource type:  ``ALIYUN::PAIDLC::Job``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["JobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::PAIDLC::Job``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1894ca1f0285a91c600b7c4ba7d1f1acde917cd4f7983ca3805149199715ae38)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute JobId: The task ID created this time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJobId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-paidlc.JobProps",
    jsii_struct_bases=[],
    name_mapping={
        "display_name": "displayName",
        "job_specs": "jobSpecs",
        "job_type": "jobType",
        "user_command": "userCommand",
        "workspace_id": "workspaceId",
        "code_source": "codeSource",
        "data_sources": "dataSources",
        "envs": "envs",
        "job_max_running_time_minutes": "jobMaxRunningTimeMinutes",
        "options": "options",
        "priority": "priority",
        "resource_id": "resourceId",
        "settings": "settings",
        "success_policy": "successPolicy",
        "thirdparty_lib_dir": "thirdpartyLibDir",
        "thirdparty_libs": "thirdpartyLibs",
        "user_vpc": "userVpc",
    },
)
class JobProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        job_specs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosJob.JobSpecsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        job_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_command: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        code_source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosJob.CodeSourceProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        data_sources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosJob.DataSourcesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        envs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        job_max_running_time_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        settings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        success_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        thirdparty_lib_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        thirdparty_libs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        user_vpc: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosJob.UserVpcProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PAIDLC::Job``.

        :param display_name: Property displayName: The name of the task is as follows: The name length does not exceed 256 characters. Allow numbers, letters, lower strokes (_), English period (.) And short horizontal lines (-).
        :param job_specs: Property jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc. The DLC task consists of different types of nodes. The same type of nodes have exactly the same configuration. This configuration is called a Jobspec. Jobspecs describes the configuration of all types of nodes and is the array of Jobspec.
        :param job_type: Property jobType: The type of job. Values: TFJob, PyTorchJob, XGBoostJob, OneFlowJob, ElasticBatch
        :param user_command: Property userCommand: Start commands of all nodes in the task.
        :param workspace_id: Property workspaceId: Work space ID, how to get working space ID, see listworkSpaces.
        :param code_source: Property codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container.
        :param data_sources: Property dataSources: List of data source used for task operation.
        :param envs: Property envs: Environment variable configuration.
        :param job_max_running_time_minutes: Property jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes.
        :param options: Property options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16.
        :param priority: Property priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in: 1 is the minimum priority. 9 is the highest priority.
        :param resource_id: Property resourceId: Resource group ID, optional parameter. The parameter value is empty indicating that submitted to the public resource group. If the current working space has been bound to a proprietary resource group, you can specify the corresponding resource group ID here; how to create a proprietary resource group and inquire about the proprietary resource group ID, please refer to the preparation and management of the DLC resource group cluster.
        :param settings: Property settings: Job settings.
        :param success_policy: Property successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task. ChiefWorker: When it is specified as this value, as long as the Chief's POD is successful, it is considered that the entire task is successful. All workers: All workers must be successful to think that the entire task is successful.
        :param thirdparty_lib_dir: Property thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation.
        :param thirdparty_libs: Property thirdpartyLibs: Python third-party library list to be installed.
        :param user_vpc: Property userVpc: User VPC configuration.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d2918bf2a3c8361d526df0569c85ce03d213f5bdc3c8f1121ffd306b16affd1)
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument job_specs", value=job_specs, expected_type=type_hints["job_specs"])
            check_type(argname="argument job_type", value=job_type, expected_type=type_hints["job_type"])
            check_type(argname="argument user_command", value=user_command, expected_type=type_hints["user_command"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument code_source", value=code_source, expected_type=type_hints["code_source"])
            check_type(argname="argument data_sources", value=data_sources, expected_type=type_hints["data_sources"])
            check_type(argname="argument envs", value=envs, expected_type=type_hints["envs"])
            check_type(argname="argument job_max_running_time_minutes", value=job_max_running_time_minutes, expected_type=type_hints["job_max_running_time_minutes"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument resource_id", value=resource_id, expected_type=type_hints["resource_id"])
            check_type(argname="argument settings", value=settings, expected_type=type_hints["settings"])
            check_type(argname="argument success_policy", value=success_policy, expected_type=type_hints["success_policy"])
            check_type(argname="argument thirdparty_lib_dir", value=thirdparty_lib_dir, expected_type=type_hints["thirdparty_lib_dir"])
            check_type(argname="argument thirdparty_libs", value=thirdparty_libs, expected_type=type_hints["thirdparty_libs"])
            check_type(argname="argument user_vpc", value=user_vpc, expected_type=type_hints["user_vpc"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "display_name": display_name,
            "job_specs": job_specs,
            "job_type": job_type,
            "user_command": user_command,
            "workspace_id": workspace_id,
        }
        if code_source is not None:
            self._values["code_source"] = code_source
        if data_sources is not None:
            self._values["data_sources"] = data_sources
        if envs is not None:
            self._values["envs"] = envs
        if job_max_running_time_minutes is not None:
            self._values["job_max_running_time_minutes"] = job_max_running_time_minutes
        if options is not None:
            self._values["options"] = options
        if priority is not None:
            self._values["priority"] = priority
        if resource_id is not None:
            self._values["resource_id"] = resource_id
        if settings is not None:
            self._values["settings"] = settings
        if success_policy is not None:
            self._values["success_policy"] = success_policy
        if thirdparty_lib_dir is not None:
            self._values["thirdparty_lib_dir"] = thirdparty_lib_dir
        if thirdparty_libs is not None:
            self._values["thirdparty_libs"] = thirdparty_libs
        if user_vpc is not None:
            self._values["user_vpc"] = user_vpc

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property displayName: The name of the task is as follows: The name length does not exceed 256 characters.

        Allow numbers, letters, lower strokes (_), English period (.) And short horizontal lines (-).
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def job_specs(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.JobSpecsProperty"]]]:
        '''Property jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc.

        The DLC task consists of different types of nodes. The same type of nodes have exactly the same configuration. This configuration is called a Jobspec. Jobspecs describes the configuration of all types of nodes and is the array of Jobspec.
        '''
        result = self._values.get("job_specs")
        assert result is not None, "Required property 'job_specs' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.JobSpecsProperty"]]], result)

    @builtins.property
    def job_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property jobType: The type of job.

        Values: TFJob, PyTorchJob, XGBoostJob, OneFlowJob, ElasticBatch
        '''
        result = self._values.get("job_type")
        assert result is not None, "Required property 'job_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_command(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property userCommand: Start commands of all nodes in the task.'''
        result = self._values.get("user_command")
        assert result is not None, "Required property 'user_command' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: Work space ID, how to get working space ID, see listworkSpaces.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def code_source(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.CodeSourceProperty"]]:
        '''Property codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container.'''
        result = self._values.get("code_source")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.CodeSourceProperty"]], result)

    @builtins.property
    def data_sources(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.DataSourcesProperty"]]]]:
        '''Property dataSources: List of data source used for task operation.'''
        result = self._values.get("data_sources")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.DataSourcesProperty"]]]], result)

    @builtins.property
    def envs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property envs: Environment variable configuration.'''
        result = self._values.get("envs")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def job_max_running_time_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes.'''
        result = self._values.get("job_max_running_time_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16.'''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in: 1 is the minimum priority. 9 is the highest priority.'''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceId: Resource group ID, optional parameter.

        The parameter value is empty indicating that submitted to the public resource group.
        If the current working space has been bound to a proprietary resource group, you can specify the corresponding resource group ID here; how to create a proprietary resource group and inquire about the proprietary resource group ID, please refer to the preparation and management of the DLC resource group cluster.
        '''
        result = self._values.get("resource_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def settings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property settings: Job settings.'''
        result = self._values.get("settings")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def success_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task.

        ChiefWorker: When it is specified as this value, as long as the Chief's POD is successful, it is considered that the entire task is successful.
        All workers: All workers must be successful to think that the entire task is successful.
        '''
        result = self._values.get("success_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def thirdparty_lib_dir(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation.'''
        result = self._values.get("thirdparty_lib_dir")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def thirdparty_libs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property thirdpartyLibs: Python third-party library list to be installed.'''
        result = self._values.get("thirdparty_libs")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def user_vpc(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.UserVpcProperty"]]:
        '''Property userVpc: User VPC configuration.'''
        result = self._values.get("user_vpc")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.UserVpcProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "JobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosJob(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-paidlc.RosJob",
):
    '''A ROS template type:  ``ALIYUN::PAIDLC::Job``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PAIDLC::Job``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__164d0f8f51c9e21eef1d98af6d601f1137eb36d7ff2ff96ad5ab6534eb603333)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4bc9cc18fe0f12b5b0b7fd6174174803ec85dd1d310955cfe44a9f77c00c9cd5)
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
        :Attribute: JobId: The task ID created this time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJobId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        displayName: The name of the task is as follows:
        The name length does not exceed 256 characters.
        Allow numbers, letters, lower strokes (_), English period (.) And short horizontal lines (-).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d0b46211d97f9502a3d0774c616aed4606a8bf6ce4192607dd2e62e1a04e78e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0ad91a81769532ea268bdacb5c132a2458c08d41481a069f85d7c3511f28640)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="jobSpecs")
    def job_specs(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.JobSpecsProperty"]]]:
        '''
        :Property:

        jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc.
        The DLC task consists of different types of nodes. The same type of nodes have exactly the same configuration. This configuration is called a Jobspec. Jobspecs describes the configuration of all types of nodes and is the array of Jobspec.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.JobSpecsProperty"]]], jsii.get(self, "jobSpecs"))

    @job_specs.setter
    def job_specs(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.JobSpecsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e863fbb32c934f982d5621b532ecb449bcec140d217d8db9c64f81db3003cb52)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "jobSpecs", value)

    @builtins.property
    @jsii.member(jsii_name="jobType")
    def job_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: jobType: The type of job. Values: TFJob, PyTorchJob, XGBoostJob, OneFlowJob, ElasticBatch
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "jobType"))

    @job_type.setter
    def job_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__885d705bdd33f7f1797544127eb4a73ef4d90bba91c1dd1ada4db28b2541703c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "jobType", value)

    @builtins.property
    @jsii.member(jsii_name="userCommand")
    def user_command(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userCommand: Start commands of all nodes in the task.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "userCommand"))

    @user_command.setter
    def user_command(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4125ca800a5198b23a6e712ac62eb2ee23ac4f648f86e0c89441fbdbbf1515a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userCommand", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: Work space ID, how to get working space ID, see listworkSpaces.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62f50fc910655ab032ae993b2f10d7b5ed8f2e8955c123afda2ad6d7d58cc9e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="codeSource")
    def code_source(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.CodeSourceProperty"]]:
        '''
        :Property: codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.CodeSourceProperty"]], jsii.get(self, "codeSource"))

    @code_source.setter
    def code_source(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.CodeSourceProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe83a9e7331990ccdf915e71773e1270e6858c60d5e40441f4ae0f68f659fa61)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "codeSource", value)

    @builtins.property
    @jsii.member(jsii_name="dataSources")
    def data_sources(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.DataSourcesProperty"]]]]:
        '''
        :Property: dataSources: List of data source used for task operation.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.DataSourcesProperty"]]]], jsii.get(self, "dataSources"))

    @data_sources.setter
    def data_sources(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.DataSourcesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ec8b2759611a463a729233b65730967341d206fff748b0662a5a950a5d05a01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataSources", value)

    @builtins.property
    @jsii.member(jsii_name="envs")
    def envs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: envs: Environment variable configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "envs"))

    @envs.setter
    def envs(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6895296d1b826450bf97816ac3140bf6927740f5b1dd93787000bc28971612c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "envs", value)

    @builtins.property
    @jsii.member(jsii_name="jobMaxRunningTimeMinutes")
    def job_max_running_time_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "jobMaxRunningTimeMinutes"))

    @job_max_running_time_minutes.setter
    def job_max_running_time_minutes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ace6740b03f6721d781c7b63d7947d9277c51a81f36885caf73900930d34579)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "jobMaxRunningTimeMinutes", value)

    @builtins.property
    @jsii.member(jsii_name="options")
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "options"))

    @options.setter
    def options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e0ad6e509da1544ade0a511c3f76aa49f582084938fd35952153fe8099a5953)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "options", value)

    @builtins.property
    @jsii.member(jsii_name="priority")
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in:
        1 is the minimum priority.
        9 is the highest priority.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b2a7e46662823256d64b6443a83cc5a24b79e2eb3b1efcabfc22fa4abbf0e8c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "priority", value)

    @builtins.property
    @jsii.member(jsii_name="resourceId")
    def resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceId: Resource group ID, optional parameter.
        The parameter value is empty indicating that submitted to the public resource group.
        If the current working space has been bound to a proprietary resource group, you can specify the corresponding resource group ID here; how to create a proprietary resource group and inquire about the proprietary resource group ID, please refer to the preparation and management of the DLC resource group cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceId"))

    @resource_id.setter
    def resource_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2c150fc6708daace8fb43d109c022101da0197273ac38cbb2b43576d59e051f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceId", value)

    @builtins.property
    @jsii.member(jsii_name="settings")
    def settings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: settings: Job settings.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "settings"))

    @settings.setter
    def settings(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b7de4bd71cd8dc8713944e0817e38e9078b48be5f1b64ff87767dee1aeaadc4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "settings", value)

    @builtins.property
    @jsii.member(jsii_name="successPolicy")
    def success_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task.
        ChiefWorker: When it is specified as this value, as long as the Chief's POD is successful, it is considered that the entire task is successful.
        All workers: All workers must be successful to think that the entire task is successful.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "successPolicy"))

    @success_policy.setter
    def success_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e38373f4eb3333ccb2c045f50ea9325fd310be9042d812cef8b571712a65f6ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "successPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="thirdpartyLibDir")
    def thirdparty_lib_dir(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "thirdpartyLibDir"))

    @thirdparty_lib_dir.setter
    def thirdparty_lib_dir(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c75df53f1e426558088318ac5497572e06f234f9d78182c89176e8d31934b399)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "thirdpartyLibDir", value)

    @builtins.property
    @jsii.member(jsii_name="thirdpartyLibs")
    def thirdparty_libs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: thirdpartyLibs: Python third-party library list to be installed.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "thirdpartyLibs"))

    @thirdparty_libs.setter
    def thirdparty_libs(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bed2deccc98e4cee2cd8cff25c5257f719566f8f92f173788915ce476c926cf5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "thirdpartyLibs", value)

    @builtins.property
    @jsii.member(jsii_name="userVpc")
    def user_vpc(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.UserVpcProperty"]]:
        '''
        :Property: userVpc: User VPC configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.UserVpcProperty"]], jsii.get(self, "userVpc"))

    @user_vpc.setter
    def user_vpc(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosJob.UserVpcProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4404e7cb29422b8aa38576ae59d05cdb4137b8a3b3734c1540338648e16dc070)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userVpc", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-paidlc.RosJob.CodeSourceProperty",
        jsii_struct_bases=[],
        name_mapping={
            "code_source_id": "codeSourceId",
            "branch": "branch",
            "commit": "commit",
            "mount_path": "mountPath",
        },
    )
    class CodeSourceProperty:
        def __init__(
            self,
            *,
            code_source_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            branch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            commit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mount_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param code_source_id: 
            :param branch: 
            :param commit: 
            :param mount_path: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__625294ebafe861535d26147fc58a77723b6b40c76e90bd3d4f8c581e64033670)
                check_type(argname="argument code_source_id", value=code_source_id, expected_type=type_hints["code_source_id"])
                check_type(argname="argument branch", value=branch, expected_type=type_hints["branch"])
                check_type(argname="argument commit", value=commit, expected_type=type_hints["commit"])
                check_type(argname="argument mount_path", value=mount_path, expected_type=type_hints["mount_path"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "code_source_id": code_source_id,
            }
            if branch is not None:
                self._values["branch"] = branch
            if commit is not None:
                self._values["commit"] = commit
            if mount_path is not None:
                self._values["mount_path"] = mount_path

        @builtins.property
        def code_source_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: codeSourceId: Code source ID.How to get code source ID, see ListCodesources.
            '''
            result = self._values.get("code_source_id")
            assert result is not None, "Required property 'code_source_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def branch(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: branch: When running this task, the branch of the cited code warehouse can be selected, and the configuration branch field can be used by default.
            '''
            result = self._values.get("branch")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def commit(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: commit: This task needs to download the code Commit ID, optional parameters, and use the Commith configuration of the code source by default.
            '''
            result = self._values.get("commit")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mount_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mountPath: This task needs to be mounted, optional parameters, and the mounting path is configured in the default code source.
            '''
            result = self._values.get("mount_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CodeSourceProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-paidlc.RosJob.DataSourcesProperty",
        jsii_struct_bases=[],
        name_mapping={"data_source_id": "dataSourceId", "mount_path": "mountPath"},
    )
    class DataSourcesProperty:
        def __init__(
            self,
            *,
            data_source_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            mount_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param data_source_id: 
            :param mount_path: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8c09aab77a9dc3078d4aa191290b35c4173584433b75dd16a97261bcdf0d13e3)
                check_type(argname="argument data_source_id", value=data_source_id, expected_type=type_hints["data_source_id"])
                check_type(argname="argument mount_path", value=mount_path, expected_type=type_hints["mount_path"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "data_source_id": data_source_id,
            }
            if mount_path is not None:
                self._values["mount_path"] = mount_path

        @builtins.property
        def data_source_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: dataSourceId: The ID of the data source.How to view the data source ID, see ListDataSets.
            '''
            result = self._values.get("data_source_id")
            assert result is not None, "Required property 'data_source_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def mount_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mountPath: This task needs to be mounted, optional parameters, and the mounting path is configured in the default code source.
            '''
            result = self._values.get("mount_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DataSourcesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-paidlc.RosJob.JobSpecsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "ecs_spec": "ecsSpec",
            "image": "image",
            "pod_count": "podCount",
            "type": "type",
            "use_spot_instance": "useSpotInstance",
            "extra_pod_spec": "extraPodSpec",
            "image_config": "imageConfig",
            "resource_config": "resourceConfig",
        },
    )
    class JobSpecsProperty:
        def __init__(
            self,
            *,
            ecs_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            image: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            pod_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            use_spot_instance: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            extra_pod_spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            image_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            resource_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        ) -> None:
            '''
            :param ecs_spec: 
            :param image: 
            :param pod_count: 
            :param type: 
            :param use_spot_instance: 
            :param extra_pod_spec: 
            :param image_config: 
            :param resource_config: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4459a67ca55422de2a4e2a60dfce25410967439aef5fbd914934bda868594b3e)
                check_type(argname="argument ecs_spec", value=ecs_spec, expected_type=type_hints["ecs_spec"])
                check_type(argname="argument image", value=image, expected_type=type_hints["image"])
                check_type(argname="argument pod_count", value=pod_count, expected_type=type_hints["pod_count"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument use_spot_instance", value=use_spot_instance, expected_type=type_hints["use_spot_instance"])
                check_type(argname="argument extra_pod_spec", value=extra_pod_spec, expected_type=type_hints["extra_pod_spec"])
                check_type(argname="argument image_config", value=image_config, expected_type=type_hints["image_config"])
                check_type(argname="argument resource_config", value=resource_config, expected_type=type_hints["resource_config"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "ecs_spec": ecs_spec,
                "image": image,
                "pod_count": pod_count,
                "type": type,
                "use_spot_instance": use_spot_instance,
            }
            if extra_pod_spec is not None:
                self._values["extra_pod_spec"] = extra_pod_spec
            if image_config is not None:
                self._values["image_config"] = image_config
            if resource_config is not None:
                self._values["resource_config"] = resource_config

        @builtins.property
        def ecs_spec(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: ecsSpec: Worker hardware specifications.
            '''
            result = self._values.get("ecs_spec")
            assert result is not None, "Required property 'ecs_spec' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def image(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            image: The running image address of this type of Worker.
            You can call ListImages to obtain the community and PAI-optimized images provided by the PAI platform. It is also possible to specify an image publicized by a third party.
            '''
            result = self._values.get("image")
            assert result is not None, "Required property 'image' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def pod_count(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: podCount: The count of pod.
            '''
            result = self._values.get("pod_count")
            assert result is not None, "Required property 'pod_count' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            type: Type is closely related to Job Type, and different Job Types support different Worker Types.
            TFJob: supports Chief, PS, Worker, Evaluator, GraphLearn
            PyTorchJob: Support Worker, Master
            XGBoostJob: support Worker, Master
            The Master in PyTorchJob and XGBoostJob is optional; if the Master is not specified, the system will automatically regard the first Worker node as the Master node.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def use_spot_instance(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: useSpotInstance: Whether to use spot instance
            '''
            result = self._values.get("use_spot_instance")
            assert result is not None, "Required property 'use_spot_instance' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def extra_pod_spec(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: extraPodSpec: Extra pod configuration.
            '''
            result = self._values.get("extra_pod_spec")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def image_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: imageConfig: The configuration of image
            '''
            result = self._values.get("image_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def resource_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: resourceConfig: Resource configuration.
            '''
            result = self._values.get("resource_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "JobSpecsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-paidlc.RosJob.UserVpcProperty",
        jsii_struct_bases=[],
        name_mapping={
            "vpc_id": "vpcId",
            "extended_cid_rs": "extendedCidRs",
            "security_group_id": "securityGroupId",
            "switch_id": "switchId",
        },
    )
    class UserVpcProperty:
        def __init__(
            self,
            *,
            vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            extended_cid_rs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param vpc_id: 
            :param extended_cid_rs: 
            :param security_group_id: 
            :param switch_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ef5e9c6b0ee22ec524363989fcaf38749e1c953dbdac2f27e1bfbb4399013621)
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument extended_cid_rs", value=extended_cid_rs, expected_type=type_hints["extended_cid_rs"])
                check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
                check_type(argname="argument switch_id", value=switch_id, expected_type=type_hints["switch_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "vpc_id": vpc_id,
            }
            if extended_cid_rs is not None:
                self._values["extended_cid_rs"] = extended_cid_rs
            if security_group_id is not None:
                self._values["security_group_id"] = security_group_id
            if switch_id is not None:
                self._values["switch_id"] = switch_id

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vpcId: User VPC ID.
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def extended_cid_rs(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property:

            extendedCidRs: Expansion network segment
            When the switch ID is empty, this parameter can not be provided, and the system will automatically obtain all network segments under the VPC;
            When the switch ID is not empty, this parameter must be provided. It is recommended to fill in all the network segments under the VPC.
            '''
            result = self._values.get("extended_cid_rs")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def security_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: securityGroupId: The ID of the user security group.
            '''
            result = self._values.get("security_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def switch_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            switchId: The ID of the user switch, optional parameter
            When the parameter value is empty, the system will automatically select the appropriate switch according to the inventory situation;
            You can also specify the switch ID yourself.
            '''
            result = self._values.get("switch_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "UserVpcProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-paidlc.RosJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "display_name": "displayName",
        "job_specs": "jobSpecs",
        "job_type": "jobType",
        "user_command": "userCommand",
        "workspace_id": "workspaceId",
        "code_source": "codeSource",
        "data_sources": "dataSources",
        "envs": "envs",
        "job_max_running_time_minutes": "jobMaxRunningTimeMinutes",
        "options": "options",
        "priority": "priority",
        "resource_id": "resourceId",
        "settings": "settings",
        "success_policy": "successPolicy",
        "thirdparty_lib_dir": "thirdpartyLibDir",
        "thirdparty_libs": "thirdpartyLibs",
        "user_vpc": "userVpc",
    },
)
class RosJobProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        job_specs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.JobSpecsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        job_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_command: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        code_source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.CodeSourceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        data_sources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.DataSourcesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        envs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        job_max_running_time_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        settings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        success_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        thirdparty_lib_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        thirdparty_libs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        user_vpc: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.UserVpcProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PAIDLC::Job``.

        :param display_name: 
        :param job_specs: 
        :param job_type: 
        :param user_command: 
        :param workspace_id: 
        :param code_source: 
        :param data_sources: 
        :param envs: 
        :param job_max_running_time_minutes: 
        :param options: 
        :param priority: 
        :param resource_id: 
        :param settings: 
        :param success_policy: 
        :param thirdparty_lib_dir: 
        :param thirdparty_libs: 
        :param user_vpc: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36971da77713d3423185cf276999450b4f4f8148415e8de4bf4b97e91b0079ab)
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument job_specs", value=job_specs, expected_type=type_hints["job_specs"])
            check_type(argname="argument job_type", value=job_type, expected_type=type_hints["job_type"])
            check_type(argname="argument user_command", value=user_command, expected_type=type_hints["user_command"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument code_source", value=code_source, expected_type=type_hints["code_source"])
            check_type(argname="argument data_sources", value=data_sources, expected_type=type_hints["data_sources"])
            check_type(argname="argument envs", value=envs, expected_type=type_hints["envs"])
            check_type(argname="argument job_max_running_time_minutes", value=job_max_running_time_minutes, expected_type=type_hints["job_max_running_time_minutes"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument resource_id", value=resource_id, expected_type=type_hints["resource_id"])
            check_type(argname="argument settings", value=settings, expected_type=type_hints["settings"])
            check_type(argname="argument success_policy", value=success_policy, expected_type=type_hints["success_policy"])
            check_type(argname="argument thirdparty_lib_dir", value=thirdparty_lib_dir, expected_type=type_hints["thirdparty_lib_dir"])
            check_type(argname="argument thirdparty_libs", value=thirdparty_libs, expected_type=type_hints["thirdparty_libs"])
            check_type(argname="argument user_vpc", value=user_vpc, expected_type=type_hints["user_vpc"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "display_name": display_name,
            "job_specs": job_specs,
            "job_type": job_type,
            "user_command": user_command,
            "workspace_id": workspace_id,
        }
        if code_source is not None:
            self._values["code_source"] = code_source
        if data_sources is not None:
            self._values["data_sources"] = data_sources
        if envs is not None:
            self._values["envs"] = envs
        if job_max_running_time_minutes is not None:
            self._values["job_max_running_time_minutes"] = job_max_running_time_minutes
        if options is not None:
            self._values["options"] = options
        if priority is not None:
            self._values["priority"] = priority
        if resource_id is not None:
            self._values["resource_id"] = resource_id
        if settings is not None:
            self._values["settings"] = settings
        if success_policy is not None:
            self._values["success_policy"] = success_policy
        if thirdparty_lib_dir is not None:
            self._values["thirdparty_lib_dir"] = thirdparty_lib_dir
        if thirdparty_libs is not None:
            self._values["thirdparty_libs"] = thirdparty_libs
        if user_vpc is not None:
            self._values["user_vpc"] = user_vpc

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        displayName: The name of the task is as follows:
        The name length does not exceed 256 characters.
        Allow numbers, letters, lower strokes (_), English period (.) And short horizontal lines (-).
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def job_specs(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.JobSpecsProperty]]]:
        '''
        :Property:

        jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc.
        The DLC task consists of different types of nodes. The same type of nodes have exactly the same configuration. This configuration is called a Jobspec. Jobspecs describes the configuration of all types of nodes and is the array of Jobspec.
        '''
        result = self._values.get("job_specs")
        assert result is not None, "Required property 'job_specs' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.JobSpecsProperty]]], result)

    @builtins.property
    def job_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: jobType: The type of job. Values: TFJob, PyTorchJob, XGBoostJob, OneFlowJob, ElasticBatch
        '''
        result = self._values.get("job_type")
        assert result is not None, "Required property 'job_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_command(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userCommand: Start commands of all nodes in the task.
        '''
        result = self._values.get("user_command")
        assert result is not None, "Required property 'user_command' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: Work space ID, how to get working space ID, see listworkSpaces.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def code_source(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.CodeSourceProperty]]:
        '''
        :Property: codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container.
        '''
        result = self._values.get("code_source")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.CodeSourceProperty]], result)

    @builtins.property
    def data_sources(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.DataSourcesProperty]]]]:
        '''
        :Property: dataSources: List of data source used for task operation.
        '''
        result = self._values.get("data_sources")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.DataSourcesProperty]]]], result)

    @builtins.property
    def envs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: envs: Environment variable configuration.
        '''
        result = self._values.get("envs")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def job_max_running_time_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes.
        '''
        result = self._values.get("job_max_running_time_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16.
        '''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in:
        1 is the minimum priority.
        9 is the highest priority.
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceId: Resource group ID, optional parameter.
        The parameter value is empty indicating that submitted to the public resource group.
        If the current working space has been bound to a proprietary resource group, you can specify the corresponding resource group ID here; how to create a proprietary resource group and inquire about the proprietary resource group ID, please refer to the preparation and management of the DLC resource group cluster.
        '''
        result = self._values.get("resource_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def settings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: settings: Job settings.
        '''
        result = self._values.get("settings")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def success_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task.
        ChiefWorker: When it is specified as this value, as long as the Chief's POD is successful, it is considered that the entire task is successful.
        All workers: All workers must be successful to think that the entire task is successful.
        '''
        result = self._values.get("success_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def thirdparty_lib_dir(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation.
        '''
        result = self._values.get("thirdparty_lib_dir")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def thirdparty_libs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: thirdpartyLibs: Python third-party library list to be installed.
        '''
        result = self._values.get("thirdparty_libs")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def user_vpc(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.UserVpcProperty]]:
        '''
        :Property: userVpc: User VPC configuration.
        '''
        result = self._values.get("user_vpc")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.UserVpcProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTensorboard(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-paidlc.RosTensorboard",
):
    '''A ROS template type:  ``ALIYUN::PAIDLC::Tensorboard``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTensorboardProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PAIDLC::Tensorboard``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59a1524e58cdafc3feb22e8e108d9ffe545fbfbd0238174cf9e62f4ce0c41e0f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__dae3f5709fa276d6a544d7adb52e47d8969da34b4eb309a0d5982cfd04053b50)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTensorboardId")
    def attr_tensorboard_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TensorboardId: Tensorboard id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTensorboardId"))

    @builtins.property
    @jsii.member(jsii_name="attrTensorboardUrl")
    def attr_tensorboard_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TensorboardUrl: Tensorboard url.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTensorboardUrl"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dataSourceId")
    def data_source_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataSourceId: For dataset ID, see the data set ID, see ListDataSets.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dataSourceId"))

    @data_source_id.setter
    def data_source_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd87c7467d041aec18277310abd01d8bae2597e81b23efc6db091c1fc85b851d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataSourceId", value)

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: Tensorboard name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32af3b3d9229f3db3a4c3d6d1629186e252cd2f78e874f234231acee9da92f94)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9584b6f79d16294e028796e51957d81f230ba4c7ec3032e36685ec27e1274f0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3cf91eddd34fd900652bb713782a435454f1c2e1c03ee55571783bc2db08086)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="cpu")
    def cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cpu: CPU nuclear number.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cpu"))

    @cpu.setter
    def cpu(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2498e4f99b2ae2fab06cb3dbe0a52642eca8f28799c4104cabf06d5d850b5511)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cpu", value)

    @builtins.property
    @jsii.member(jsii_name="dataSources")
    def data_sources(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataSources: Data source configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataSources"))

    @data_sources.setter
    def data_sources(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7a46241516f43de74e4ae58adcaf10ea98421a019ac28287a9ed082b06fd20f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataSources", value)

    @builtins.property
    @jsii.member(jsii_name="dataSourceType")
    def data_source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataSourceType: The type of dataset. Values: OSS,NAS
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataSourceType"))

    @data_source_type.setter
    def data_source_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6828ffbe2a563a8d68642c31d1e2182b73adfd031d0d7c9bb6851fb000c8defd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataSourceType", value)

    @builtins.property
    @jsii.member(jsii_name="jobId")
    def job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: jobId: Task ID.How to get the task ID, see Listjobs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "jobId"))

    @job_id.setter
    def job_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8dac11bdd91bd78202683c022e5fcf7186e67a6eb7fbf6079e6019d5c4eb9de9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "jobId", value)

    @builtins.property
    @jsii.member(jsii_name="maxRunningTimeMinutes")
    def max_running_time_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxRunningTimeMinutes: The longest running time, the unit is: minutes.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxRunningTimeMinutes"))

    @max_running_time_minutes.setter
    def max_running_time_minutes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55ce7c6465fdef554094f270afab1de27260673a13eb0458f140f9dfb3bef1b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxRunningTimeMinutes", value)

    @builtins.property
    @jsii.member(jsii_name="memory")
    def memory(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memory: Memory size, the unit is: GB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "memory"))

    @memory.setter
    def memory(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41c138923229fa740c1eee85971320c967fb20c2cdd6366724ae8afcdf527b48)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "memory", value)

    @builtins.property
    @jsii.member(jsii_name="options")
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "options"))

    @options.setter
    def options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__435a1a5caf0ac8b4bd658cd4851955093e6d33921a180f51a11e686c4f1c0c80)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "options", value)

    @builtins.property
    @jsii.member(jsii_name="sourceId")
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceId: Source ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceId"))

    @source_id.setter
    def source_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70d6568fecc57730473d81d372f133c170700de08495104ab973cfaf4d3ce4b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceType")
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceType: Source type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac2a4cd86f9618207150ab92029b116b357fa04f59de4fb9c8351ad8dbfbee27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceType", value)

    @builtins.property
    @jsii.member(jsii_name="summaryPath")
    def summary_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: summaryPath: Summary directory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "summaryPath"))

    @summary_path.setter
    def summary_path(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__236c16be82a63cc0debf7fbd3dbc993e4a50aa87bb96dca2d17b6700a503e831)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "summaryPath", value)

    @builtins.property
    @jsii.member(jsii_name="summaryRelativePath")
    def summary_relative_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: summaryRelativePath: Summary relative directory. Summary relative directory and Summary directory are mutually exclusive
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "summaryRelativePath"))

    @summary_relative_path.setter
    def summary_relative_path(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6a9455d9247a0caf6c81c2e3da5898a9cbcbdeee4eb7aeefbf9a33093e7fbfc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "summaryRelativePath", value)

    @builtins.property
    @jsii.member(jsii_name="uri")
    def uri(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        uri: URI of a dataset:
        When DataSourceType is OSS, the format is: OSS: // [OSS-BUCET]. [Endpoint]/[Path].
        When the DataSourceType is NAS, the format is: nas:// [nas-filesystem-id]. [Region]/[PATH].
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "uri"))

    @uri.setter
    def uri(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c67d5b8057a2c742b584ee1220957e71410fdb16f8691af029d786261798dd6f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "uri", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-paidlc.RosTensorboardProps",
    jsii_struct_bases=[],
    name_mapping={
        "data_source_id": "dataSourceId",
        "display_name": "displayName",
        "workspace_id": "workspaceId",
        "cpu": "cpu",
        "data_sources": "dataSources",
        "data_source_type": "dataSourceType",
        "job_id": "jobId",
        "max_running_time_minutes": "maxRunningTimeMinutes",
        "memory": "memory",
        "options": "options",
        "source_id": "sourceId",
        "source_type": "sourceType",
        "summary_path": "summaryPath",
        "summary_relative_path": "summaryRelativePath",
        "uri": "uri",
    },
)
class RosTensorboardProps:
    def __init__(
        self,
        *,
        data_source_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_sources: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_running_time_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        summary_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        summary_relative_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        uri: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PAIDLC::Tensorboard``.

        :param data_source_id: 
        :param display_name: 
        :param workspace_id: 
        :param cpu: 
        :param data_sources: 
        :param data_source_type: 
        :param job_id: 
        :param max_running_time_minutes: 
        :param memory: 
        :param options: 
        :param source_id: 
        :param source_type: 
        :param summary_path: 
        :param summary_relative_path: 
        :param uri: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0fd2b4b3920b7d94abafba1fe44bd9583e4f5b97b07e6e0ecc63f92e4b9a912)
            check_type(argname="argument data_source_id", value=data_source_id, expected_type=type_hints["data_source_id"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument cpu", value=cpu, expected_type=type_hints["cpu"])
            check_type(argname="argument data_sources", value=data_sources, expected_type=type_hints["data_sources"])
            check_type(argname="argument data_source_type", value=data_source_type, expected_type=type_hints["data_source_type"])
            check_type(argname="argument job_id", value=job_id, expected_type=type_hints["job_id"])
            check_type(argname="argument max_running_time_minutes", value=max_running_time_minutes, expected_type=type_hints["max_running_time_minutes"])
            check_type(argname="argument memory", value=memory, expected_type=type_hints["memory"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument source_id", value=source_id, expected_type=type_hints["source_id"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument summary_path", value=summary_path, expected_type=type_hints["summary_path"])
            check_type(argname="argument summary_relative_path", value=summary_relative_path, expected_type=type_hints["summary_relative_path"])
            check_type(argname="argument uri", value=uri, expected_type=type_hints["uri"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "data_source_id": data_source_id,
            "display_name": display_name,
            "workspace_id": workspace_id,
        }
        if cpu is not None:
            self._values["cpu"] = cpu
        if data_sources is not None:
            self._values["data_sources"] = data_sources
        if data_source_type is not None:
            self._values["data_source_type"] = data_source_type
        if job_id is not None:
            self._values["job_id"] = job_id
        if max_running_time_minutes is not None:
            self._values["max_running_time_minutes"] = max_running_time_minutes
        if memory is not None:
            self._values["memory"] = memory
        if options is not None:
            self._values["options"] = options
        if source_id is not None:
            self._values["source_id"] = source_id
        if source_type is not None:
            self._values["source_type"] = source_type
        if summary_path is not None:
            self._values["summary_path"] = summary_path
        if summary_relative_path is not None:
            self._values["summary_relative_path"] = summary_relative_path
        if uri is not None:
            self._values["uri"] = uri

    @builtins.property
    def data_source_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataSourceId: For dataset ID, see the data set ID, see ListDataSets.
        '''
        result = self._values.get("data_source_id")
        assert result is not None, "Required property 'data_source_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: Tensorboard name.
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cpu: CPU nuclear number.
        '''
        result = self._values.get("cpu")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_sources(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataSources: Data source configuration.
        '''
        result = self._values.get("data_sources")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataSourceType: The type of dataset. Values: OSS,NAS
        '''
        result = self._values.get("data_source_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: jobId: Task ID.How to get the task ID, see Listjobs.
        '''
        result = self._values.get("job_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_running_time_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxRunningTimeMinutes: The longest running time, the unit is: minutes.
        '''
        result = self._values.get("max_running_time_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def memory(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memory: Memory size, the unit is: GB.
        '''
        result = self._values.get("memory")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.
        '''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceId: Source ID.
        '''
        result = self._values.get("source_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceType: Source type.
        '''
        result = self._values.get("source_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def summary_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: summaryPath: Summary directory.
        '''
        result = self._values.get("summary_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def summary_relative_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: summaryRelativePath: Summary relative directory. Summary relative directory and Summary directory are mutually exclusive
        '''
        result = self._values.get("summary_relative_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def uri(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        uri: URI of a dataset:
        When DataSourceType is OSS, the format is: OSS: // [OSS-BUCET]. [Endpoint]/[Path].
        When the DataSourceType is NAS, the format is: nas:// [nas-filesystem-id]. [Region]/[PATH].
        '''
        result = self._values.get("uri")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTensorboardProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Tensorboard(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-paidlc.Tensorboard",
):
    '''A ROS resource type:  ``ALIYUN::PAIDLC::Tensorboard``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TensorboardProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::PAIDLC::Tensorboard``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4cfbb24f3efc9e6c5504dc462d34a6c8ff0b0e6f9338733e0aa271f6a61e51a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTensorboardId")
    def attr_tensorboard_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TensorboardId: Tensorboard id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTensorboardId"))

    @builtins.property
    @jsii.member(jsii_name="attrTensorboardUrl")
    def attr_tensorboard_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TensorboardUrl: Tensorboard url.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTensorboardUrl"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-paidlc.TensorboardProps",
    jsii_struct_bases=[],
    name_mapping={
        "data_source_id": "dataSourceId",
        "display_name": "displayName",
        "workspace_id": "workspaceId",
        "cpu": "cpu",
        "data_sources": "dataSources",
        "data_source_type": "dataSourceType",
        "job_id": "jobId",
        "max_running_time_minutes": "maxRunningTimeMinutes",
        "memory": "memory",
        "options": "options",
        "source_id": "sourceId",
        "source_type": "sourceType",
        "summary_path": "summaryPath",
        "summary_relative_path": "summaryRelativePath",
        "uri": "uri",
    },
)
class TensorboardProps:
    def __init__(
        self,
        *,
        data_source_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_sources: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_running_time_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        summary_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        summary_relative_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        uri: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PAIDLC::Tensorboard``.

        :param data_source_id: Property dataSourceId: For dataset ID, see the data set ID, see ListDataSets.
        :param display_name: Property displayName: Tensorboard name.
        :param workspace_id: Property workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.
        :param cpu: Property cpu: CPU nuclear number.
        :param data_sources: Property dataSources: Data source configuration.
        :param data_source_type: Property dataSourceType: The type of dataset. Values: OSS,NAS
        :param job_id: Property jobId: Task ID.How to get the task ID, see Listjobs.
        :param max_running_time_minutes: Property maxRunningTimeMinutes: The longest running time, the unit is: minutes.
        :param memory: Property memory: Memory size, the unit is: GB.
        :param options: Property options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.
        :param source_id: Property sourceId: Source ID.
        :param source_type: Property sourceType: Source type.
        :param summary_path: Property summaryPath: Summary directory.
        :param summary_relative_path: Property summaryRelativePath: Summary relative directory. Summary relative directory and Summary directory are mutually exclusive
        :param uri: Property uri: URI of a dataset: When DataSourceType is OSS, the format is: OSS: // [OSS-BUCET]. [Endpoint]/[Path]. When the DataSourceType is NAS, the format is: nas:// [nas-filesystem-id]. [Region]/[PATH].
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de3e3a5189c7b0f71d192a13b452e083e13e7c3ea21be357066d0ea329c4ab75)
            check_type(argname="argument data_source_id", value=data_source_id, expected_type=type_hints["data_source_id"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument cpu", value=cpu, expected_type=type_hints["cpu"])
            check_type(argname="argument data_sources", value=data_sources, expected_type=type_hints["data_sources"])
            check_type(argname="argument data_source_type", value=data_source_type, expected_type=type_hints["data_source_type"])
            check_type(argname="argument job_id", value=job_id, expected_type=type_hints["job_id"])
            check_type(argname="argument max_running_time_minutes", value=max_running_time_minutes, expected_type=type_hints["max_running_time_minutes"])
            check_type(argname="argument memory", value=memory, expected_type=type_hints["memory"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument source_id", value=source_id, expected_type=type_hints["source_id"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument summary_path", value=summary_path, expected_type=type_hints["summary_path"])
            check_type(argname="argument summary_relative_path", value=summary_relative_path, expected_type=type_hints["summary_relative_path"])
            check_type(argname="argument uri", value=uri, expected_type=type_hints["uri"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "data_source_id": data_source_id,
            "display_name": display_name,
            "workspace_id": workspace_id,
        }
        if cpu is not None:
            self._values["cpu"] = cpu
        if data_sources is not None:
            self._values["data_sources"] = data_sources
        if data_source_type is not None:
            self._values["data_source_type"] = data_source_type
        if job_id is not None:
            self._values["job_id"] = job_id
        if max_running_time_minutes is not None:
            self._values["max_running_time_minutes"] = max_running_time_minutes
        if memory is not None:
            self._values["memory"] = memory
        if options is not None:
            self._values["options"] = options
        if source_id is not None:
            self._values["source_id"] = source_id
        if source_type is not None:
            self._values["source_type"] = source_type
        if summary_path is not None:
            self._values["summary_path"] = summary_path
        if summary_relative_path is not None:
            self._values["summary_relative_path"] = summary_relative_path
        if uri is not None:
            self._values["uri"] = uri

    @builtins.property
    def data_source_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dataSourceId: For dataset ID, see the data set ID, see ListDataSets.'''
        result = self._values.get("data_source_id")
        assert result is not None, "Required property 'data_source_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property displayName: Tensorboard name.'''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: Work space ID.How to get working space ID, see ListworkSpaces.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cpu: CPU nuclear number.'''
        result = self._values.get("cpu")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_sources(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataSources: Data source configuration.'''
        result = self._values.get("data_sources")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataSourceType: The type of dataset.

        Values: OSS,NAS
        '''
        result = self._values.get("data_source_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property jobId: Task ID.How to get the task ID, see Listjobs.'''
        result = self._values.get("job_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_running_time_minutes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxRunningTimeMinutes: The longest running time, the unit is: minutes.'''
        result = self._values.get("max_running_time_minutes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def memory(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property memory: Memory size, the unit is: GB.'''
        result = self._values.get("memory")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property options: The expansion field of the dataset is JSON format, which currently supports Mountpath: the path of custom dataset mounting.'''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceId: Source ID.'''
        result = self._values.get("source_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceType: Source type.'''
        result = self._values.get("source_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def summary_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property summaryPath: Summary directory.'''
        result = self._values.get("summary_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def summary_relative_path(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property summaryRelativePath: Summary relative directory.

        Summary relative directory and Summary directory are mutually exclusive
        '''
        result = self._values.get("summary_relative_path")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def uri(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property uri: URI of a dataset: When DataSourceType is OSS, the format is: OSS: // [OSS-BUCET].

        [Endpoint]/[Path].
        When the DataSourceType is NAS, the format is: nas:// [nas-filesystem-id]. [Region]/[PATH].
        '''
        result = self._values.get("uri")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TensorboardProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Job",
    "JobProps",
    "RosJob",
    "RosJobProps",
    "RosTensorboard",
    "RosTensorboardProps",
    "Tensorboard",
    "TensorboardProps",
]

publication.publish()

def _typecheckingstub__1894ca1f0285a91c600b7c4ba7d1f1acde917cd4f7983ca3805149199715ae38(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[JobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d2918bf2a3c8361d526df0569c85ce03d213f5bdc3c8f1121ffd306b16affd1(
    *,
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    job_specs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.JobSpecsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    job_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_command: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    code_source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.CodeSourceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    data_sources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.DataSourcesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    envs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    job_max_running_time_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    settings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    success_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    thirdparty_lib_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    thirdparty_libs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    user_vpc: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.UserVpcProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__164d0f8f51c9e21eef1d98af6d601f1137eb36d7ff2ff96ad5ab6534eb603333(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bc9cc18fe0f12b5b0b7fd6174174803ec85dd1d310955cfe44a9f77c00c9cd5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d0b46211d97f9502a3d0774c616aed4606a8bf6ce4192607dd2e62e1a04e78e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0ad91a81769532ea268bdacb5c132a2458c08d41481a069f85d7c3511f28640(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e863fbb32c934f982d5621b532ecb449bcec140d217d8db9c64f81db3003cb52(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.JobSpecsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__885d705bdd33f7f1797544127eb4a73ef4d90bba91c1dd1ada4db28b2541703c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4125ca800a5198b23a6e712ac62eb2ee23ac4f648f86e0c89441fbdbbf1515a5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62f50fc910655ab032ae993b2f10d7b5ed8f2e8955c123afda2ad6d7d58cc9e8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe83a9e7331990ccdf915e71773e1270e6858c60d5e40441f4ae0f68f659fa61(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.CodeSourceProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ec8b2759611a463a729233b65730967341d206fff748b0662a5a950a5d05a01(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.DataSourcesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6895296d1b826450bf97816ac3140bf6927740f5b1dd93787000bc28971612c7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ace6740b03f6721d781c7b63d7947d9277c51a81f36885caf73900930d34579(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e0ad6e509da1544ade0a511c3f76aa49f582084938fd35952153fe8099a5953(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b2a7e46662823256d64b6443a83cc5a24b79e2eb3b1efcabfc22fa4abbf0e8c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2c150fc6708daace8fb43d109c022101da0197273ac38cbb2b43576d59e051f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b7de4bd71cd8dc8713944e0817e38e9078b48be5f1b64ff87767dee1aeaadc4(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e38373f4eb3333ccb2c045f50ea9325fd310be9042d812cef8b571712a65f6ba(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c75df53f1e426558088318ac5497572e06f234f9d78182c89176e8d31934b399(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bed2deccc98e4cee2cd8cff25c5257f719566f8f92f173788915ce476c926cf5(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4404e7cb29422b8aa38576ae59d05cdb4137b8a3b3734c1540338648e16dc070(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosJob.UserVpcProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__625294ebafe861535d26147fc58a77723b6b40c76e90bd3d4f8c581e64033670(
    *,
    code_source_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    branch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    commit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c09aab77a9dc3078d4aa191290b35c4173584433b75dd16a97261bcdf0d13e3(
    *,
    data_source_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    mount_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4459a67ca55422de2a4e2a60dfce25410967439aef5fbd914934bda868594b3e(
    *,
    ecs_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    image: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pod_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    use_spot_instance: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    extra_pod_spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    image_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    resource_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef5e9c6b0ee22ec524363989fcaf38749e1c953dbdac2f27e1bfbb4399013621(
    *,
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    extended_cid_rs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36971da77713d3423185cf276999450b4f4f8148415e8de4bf4b97e91b0079ab(
    *,
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    job_specs: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.JobSpecsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    job_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_command: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    code_source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.CodeSourceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    data_sources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.DataSourcesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    envs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    job_max_running_time_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    settings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    success_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    thirdparty_lib_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    thirdparty_libs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    user_vpc: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosJob.UserVpcProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59a1524e58cdafc3feb22e8e108d9ffe545fbfbd0238174cf9e62f4ce0c41e0f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTensorboardProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dae3f5709fa276d6a544d7adb52e47d8969da34b4eb309a0d5982cfd04053b50(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd87c7467d041aec18277310abd01d8bae2597e81b23efc6db091c1fc85b851d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32af3b3d9229f3db3a4c3d6d1629186e252cd2f78e874f234231acee9da92f94(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9584b6f79d16294e028796e51957d81f230ba4c7ec3032e36685ec27e1274f0d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3cf91eddd34fd900652bb713782a435454f1c2e1c03ee55571783bc2db08086(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2498e4f99b2ae2fab06cb3dbe0a52642eca8f28799c4104cabf06d5d850b5511(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7a46241516f43de74e4ae58adcaf10ea98421a019ac28287a9ed082b06fd20f(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6828ffbe2a563a8d68642c31d1e2182b73adfd031d0d7c9bb6851fb000c8defd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8dac11bdd91bd78202683c022e5fcf7186e67a6eb7fbf6079e6019d5c4eb9de9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55ce7c6465fdef554094f270afab1de27260673a13eb0458f140f9dfb3bef1b5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41c138923229fa740c1eee85971320c967fb20c2cdd6366724ae8afcdf527b48(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__435a1a5caf0ac8b4bd658cd4851955093e6d33921a180f51a11e686c4f1c0c80(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70d6568fecc57730473d81d372f133c170700de08495104ab973cfaf4d3ce4b2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac2a4cd86f9618207150ab92029b116b357fa04f59de4fb9c8351ad8dbfbee27(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__236c16be82a63cc0debf7fbd3dbc993e4a50aa87bb96dca2d17b6700a503e831(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6a9455d9247a0caf6c81c2e3da5898a9cbcbdeee4eb7aeefbf9a33093e7fbfc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c67d5b8057a2c742b584ee1220957e71410fdb16f8691af029d786261798dd6f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0fd2b4b3920b7d94abafba1fe44bd9583e4f5b97b07e6e0ecc63f92e4b9a912(
    *,
    data_source_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_sources: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_running_time_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    summary_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    summary_relative_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    uri: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4cfbb24f3efc9e6c5504dc462d34a6c8ff0b0e6f9338733e0aa271f6a61e51a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TensorboardProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de3e3a5189c7b0f71d192a13b452e083e13e7c3ea21be357066d0ea329c4ab75(
    *,
    data_source_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_sources: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_running_time_minutes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    summary_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    summary_relative_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    uri: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
