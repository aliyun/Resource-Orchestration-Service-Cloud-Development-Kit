'''
## Aliyun ROS CR Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CR from '@alicloud/ros-cdk-cr';
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
    jsii_type="@alicloud/ros-cdk-cr.ArtifactLifecycleRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto": "auto",
        "instance_id": "instanceId",
        "namespace_name": "namespaceName",
        "repo_name": "repoName",
        "retention_tag_count": "retentionTagCount",
        "schedule_time": "scheduleTime",
        "scope": "scope",
        "tag_regexp": "tagRegexp",
    },
)
class ArtifactLifecycleRuleProps:
    def __init__(
        self,
        *,
        auto: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repo_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        retention_tag_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        schedule_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag_regexp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ArtifactLifecycleRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule

        :param auto: Property auto: Specify whether to automatically execute the lifecycle management rule.
        :param instance_id: Property instanceId: ACR Instance ID.
        :param namespace_name: Property namespaceName: The name of the namespace.
        :param repo_name: Property repoName: The name of the image repository.
        :param retention_tag_count: Property retentionTagCount: The number of images that you want to retain.
        :param schedule_time: Property scheduleTime: The execution cycle of the lifecycle management rule.
        :param scope: Property scope: The deletion scope.
        :param tag_regexp: Property tagRegexp: The regular expression that is used to indicate which image tags are retained.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__522b9b25050d581d43a7d6f224e4093959014d9510aed8503b8d7a557df52c0d)
            check_type(argname="argument auto", value=auto, expected_type=type_hints["auto"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument namespace_name", value=namespace_name, expected_type=type_hints["namespace_name"])
            check_type(argname="argument repo_name", value=repo_name, expected_type=type_hints["repo_name"])
            check_type(argname="argument retention_tag_count", value=retention_tag_count, expected_type=type_hints["retention_tag_count"])
            check_type(argname="argument schedule_time", value=schedule_time, expected_type=type_hints["schedule_time"])
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument tag_regexp", value=tag_regexp, expected_type=type_hints["tag_regexp"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "auto": auto,
            "instance_id": instance_id,
        }
        if namespace_name is not None:
            self._values["namespace_name"] = namespace_name
        if repo_name is not None:
            self._values["repo_name"] = repo_name
        if retention_tag_count is not None:
            self._values["retention_tag_count"] = retention_tag_count
        if schedule_time is not None:
            self._values["schedule_time"] = schedule_time
        if scope is not None:
            self._values["scope"] = scope
        if tag_regexp is not None:
            self._values["tag_regexp"] = tag_regexp

    @builtins.property
    def auto(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property auto: Specify whether to automatically execute the lifecycle management rule.'''
        result = self._values.get("auto")
        assert result is not None, "Required property 'auto' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: ACR Instance ID.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property namespaceName: The name of the namespace.'''
        result = self._values.get("namespace_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repo_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property repoName: The name of the image repository.'''
        result = self._values.get("repo_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def retention_tag_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property retentionTagCount: The number of images that you want to retain.'''
        result = self._values.get("retention_tag_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def schedule_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scheduleTime: The execution cycle of the lifecycle management rule.'''
        result = self._values.get("schedule_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scope: The deletion scope.'''
        result = self._values.get("scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag_regexp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tagRegexp: The regular expression that is used to indicate which image tags are retained.'''
        result = self._values.get("tag_regexp")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ArtifactLifecycleRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-cr.IArtifactLifecycleRule")
class IArtifactLifecycleRule(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ArtifactLifecycleRule``.'''

    @builtins.property
    @jsii.member(jsii_name="attrArtifactLifecycleRuleId")
    def attr_artifact_lifecycle_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ArtifactLifecycleRuleId: The ID of the lifecycle management rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAuto")
    def attr_auto(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Auto: Specify whether to automatically execute the lifecycle management rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time of the lifecycle management rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: ACR Instance ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModifiedTime: Change time of the lifecycle management rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceName")
    def attr_namespace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceName: The name of the namespace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRepoName")
    def attr_repo_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoName: The name of the image repository.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRetentionTagCount")
    def attr_retention_tag_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RetentionTagCount: The number of images that you want to retain.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScheduleTime")
    def attr_schedule_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScheduleTime: The execution cycle of the lifecycle management rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScope")
    def attr_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scope: The deletion scope.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTagRegexp")
    def attr_tag_regexp(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TagRegexp: The regular expression that is used to indicate which image tags are retained.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ArtifactLifecycleRuleProps:
        ...


class _IArtifactLifecycleRuleProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ArtifactLifecycleRule``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cr.IArtifactLifecycleRule"

    @builtins.property
    @jsii.member(jsii_name="attrArtifactLifecycleRuleId")
    def attr_artifact_lifecycle_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ArtifactLifecycleRuleId: The ID of the lifecycle management rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArtifactLifecycleRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrAuto")
    def attr_auto(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Auto: Specify whether to automatically execute the lifecycle management rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuto"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time of the lifecycle management rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: ACR Instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModifiedTime: Change time of the lifecycle management rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceName")
    def attr_namespace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceName: The name of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespaceName"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoName")
    def attr_repo_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoName: The name of the image repository.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRepoName"))

    @builtins.property
    @jsii.member(jsii_name="attrRetentionTagCount")
    def attr_retention_tag_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RetentionTagCount: The number of images that you want to retain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRetentionTagCount"))

    @builtins.property
    @jsii.member(jsii_name="attrScheduleTime")
    def attr_schedule_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScheduleTime: The execution cycle of the lifecycle management rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScheduleTime"))

    @builtins.property
    @jsii.member(jsii_name="attrScope")
    def attr_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scope: The deletion scope.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScope"))

    @builtins.property
    @jsii.member(jsii_name="attrTagRegexp")
    def attr_tag_regexp(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TagRegexp: The regular expression that is used to indicate which image tags are retained.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTagRegexp"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ArtifactLifecycleRuleProps:
        return typing.cast(ArtifactLifecycleRuleProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IArtifactLifecycleRule).__jsii_proxy_class__ = lambda : _IArtifactLifecycleRuleProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cr.IInstance")
class IInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Instance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The first ID of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceName: InstanceName.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceSpecification")
    def attr_instance_specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceSpecification: The instance specification.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModifiedTime: Last modification time.'''
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
    def props(self) -> "InstanceProps":
        ...


class _IInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Instance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cr.IInstance"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The first ID of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceName: InstanceName.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceSpecification")
    def attr_instance_specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceSpecification: The instance specification.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceSpecification"))

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModifiedTime: Last modification time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstance).__jsii_proxy_class__ = lambda : _IInstanceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cr.IInstanceEndpointAclPolicy")
class IInstanceEndpointAclPolicy(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``InstanceEndpointAclPolicy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrEntry")
    def attr_entry(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Entry: The IP address range that is allowed to access the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceEndpointAclPolicyProps":
        ...


class _IInstanceEndpointAclPolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``InstanceEndpointAclPolicy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cr.IInstanceEndpointAclPolicy"

    @builtins.property
    @jsii.member(jsii_name="attrEntry")
    def attr_entry(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Entry: The IP address range that is allowed to access the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEntry"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceEndpointAclPolicyProps":
        return typing.cast("InstanceEndpointAclPolicyProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstanceEndpointAclPolicy).__jsii_proxy_class__ = lambda : _IInstanceEndpointAclPolicyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cr.IInstanceVpcEndpointLinkedVpc")
class IInstanceVpcEndpointLinkedVpc(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``InstanceVpcEndpointLinkedVpc``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the vpc.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVswitchId")
    def attr_vswitch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VswitchId: The ID of the vswitch.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceVpcEndpointLinkedVpcProps":
        ...


class _IInstanceVpcEndpointLinkedVpcProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``InstanceVpcEndpointLinkedVpc``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cr.IInstanceVpcEndpointLinkedVpc"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the vpc.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVswitchId")
    def attr_vswitch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VswitchId: The ID of the vswitch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVswitchId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceVpcEndpointLinkedVpcProps":
        return typing.cast("InstanceVpcEndpointLinkedVpcProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstanceVpcEndpointLinkedVpc).__jsii_proxy_class__ = lambda : _IInstanceVpcEndpointLinkedVpcProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cr.INamespace")
class INamespace(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Namespace``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the enterprise edition instance which namespace belongs to.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceId: The namespace ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NamespaceProps":
        ...


class _INamespaceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Namespace``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cr.INamespace"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the enterprise edition instance which namespace belongs to.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceId: The namespace ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NamespaceProps":
        return typing.cast("NamespaceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, INamespace).__jsii_proxy_class__ = lambda : _INamespaceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cr.IRepoSyncRule")
class IRepoSyncRule(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``RepoSyncRule``.'''

    @builtins.property
    @jsii.member(jsii_name="attrSyncRuleId")
    def attr_sync_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SyncRuleId: The ID of the synchronization rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RepoSyncRuleProps":
        ...


class _IRepoSyncRuleProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``RepoSyncRule``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cr.IRepoSyncRule"

    @builtins.property
    @jsii.member(jsii_name="attrSyncRuleId")
    def attr_sync_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SyncRuleId: The ID of the synchronization rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSyncRuleId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RepoSyncRuleProps":
        return typing.cast("RepoSyncRuleProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRepoSyncRule).__jsii_proxy_class__ = lambda : _IRepoSyncRuleProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cr.IRepository")
class IRepository(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Repository``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRepoId")
    def attr_repo_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoId: The repository ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRepoName")
    def attr_repo_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoName: The name of the repository.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRepoNamespace")
    def attr_repo_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoNamespace: The name of the namespace to which the repository belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRepoType")
    def attr_repo_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoType: The type of the repository.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RepositoryProps":
        ...


class _IRepositoryProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Repository``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cr.IRepository"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoId")
    def attr_repo_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoId: The repository ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRepoId"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoName")
    def attr_repo_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoName: The name of the repository.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRepoName"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoNamespace")
    def attr_repo_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoNamespace: The name of the namespace to which the repository belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRepoNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoType")
    def attr_repo_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoType: The type of the repository.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRepoType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RepositoryProps":
        return typing.cast("RepositoryProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRepository).__jsii_proxy_class__ = lambda : _IRepositoryProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cr.IScanRule")
class IScanRule(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ScanRule``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time of the scan rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: ACR Instance ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNamespaces")
    def attr_namespaces(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespaces: The list of namespaces.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRepoNames")
    def attr_repo_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoNames: The list of repositories.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRepoTagFilterPattern")
    def attr_repo_tag_filter_pattern(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoTagFilterPattern: The tag that triggers the scan matches the regular expression.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The scan rule name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScanRuleId")
    def attr_scan_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScanRuleId: The ID of the scan rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScanScope")
    def attr_scan_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScanScope: The scan scope.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScanType")
    def attr_scan_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScanType: The scan type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTriggerType")
    def attr_trigger_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TriggerType: Trigger type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Change time of the scan rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScanRuleProps":
        ...


class _IScanRuleProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ScanRule``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cr.IScanRule"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time of the scan rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: ACR Instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaces")
    def attr_namespaces(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespaces: The list of namespaces.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespaces"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoNames")
    def attr_repo_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoNames: The list of repositories.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRepoNames"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoTagFilterPattern")
    def attr_repo_tag_filter_pattern(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoTagFilterPattern: The tag that triggers the scan matches the regular expression.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRepoTagFilterPattern"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The scan rule name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrScanRuleId")
    def attr_scan_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScanRuleId: The ID of the scan rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScanRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrScanScope")
    def attr_scan_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScanScope: The scan scope.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScanScope"))

    @builtins.property
    @jsii.member(jsii_name="attrScanType")
    def attr_scan_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScanType: The scan type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScanType"))

    @builtins.property
    @jsii.member(jsii_name="attrTriggerType")
    def attr_trigger_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TriggerType: Trigger type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTriggerType"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Change time of the scan rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScanRuleProps":
        return typing.cast("ScanRuleProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IScanRule).__jsii_proxy_class__ = lambda : _IScanRuleProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cr.IStorageDomainRoutingRule")
class IStorageDomainRoutingRule(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``StorageDomainRoutingRule``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the Rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrModifyTime")
    def attr_modify_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModifyTime: The Modify Time of the Rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRoutes")
    def attr_routes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Routes: Domain name routing entry.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleId: Rule ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "StorageDomainRoutingRuleProps":
        ...


class _IStorageDomainRoutingRuleProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``StorageDomainRoutingRule``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cr.IStorageDomainRoutingRule"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the Rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrModifyTime")
    def attr_modify_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModifyTime: The Modify Time of the Rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrModifyTime"))

    @builtins.property
    @jsii.member(jsii_name="attrRoutes")
    def attr_routes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Routes: Domain name routing entry.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRoutes"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleId: Rule ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "StorageDomainRoutingRuleProps":
        return typing.cast("StorageDomainRoutingRuleProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IStorageDomainRoutingRule).__jsii_proxy_class__ = lambda : _IStorageDomainRoutingRuleProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cr.IUserInfo")
class IUserInfo(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``UserInfo``.'''

    @builtins.property
    @jsii.member(jsii_name="attrLoginName")
    def attr_login_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoginName: Login name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: User ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserInfoProps":
        ...


class _IUserInfoProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``UserInfo``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cr.IUserInfo"

    @builtins.property
    @jsii.member(jsii_name="attrLoginName")
    def attr_login_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoginName: Login name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoginName"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: User ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserInfoProps":
        return typing.cast("UserInfoProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUserInfo).__jsii_proxy_class__ = lambda : _IUserInfoProxy


@jsii.implements(IInstance)
class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CR::Instance``, which is used to create a Container Registry Enterprise Edition instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adb3dbb2fcceeb92389c57a33a2380fb99ad6f8f280aa5041731b1ccb8ec64b8)
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
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The first ID of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceName: InstanceName.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceSpecification")
    def attr_instance_specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceSpecification: The instance specification.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceSpecification"))

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModifiedTime: Last modification time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9bf3bea8437045a4644319e03710da515a5ca053c98618a2ac7a2df40f9b8b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1b1a1ae578aecc990bc9252ade8c9d33280da9793e26a41cce44e99f0019f04)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae0b234f14cde13524019ef091f1f52a31642cc100bba4e0aac5893ca36387b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IInstanceEndpointAclPolicy)
class InstanceEndpointAclPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.InstanceEndpointAclPolicy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CR::InstanceEndpointAclPolicy``, which is used to create a whitelist policy for the public endpoint of an instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstanceEndpointAclPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceEndpointAclPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bf9e011c87e46c86bbb8569203fa1eee0c29f002d841de3e890671c93d8721f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEntry")
    def attr_entry(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Entry: The IP address range that is allowed to access the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEntry"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceEndpointAclPolicyProps":
        return typing.cast("InstanceEndpointAclPolicyProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__317e44efe38940daf6dbaa1c3c8d456a495c28c7ee5acdfdf523b5fa1f1a387f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c349c53ce0aa73330e48b4cea714f00914c21364d037278368ecf4794068c61)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b120aed407efbbbd91b1adde2b158f55f6329995c58228a4103f3445fc0d7a67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.InstanceEndpointAclPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "entry": "entry",
        "instance_id": "instanceId",
        "auto_enable_type": "autoEnableType",
        "comment": "comment",
        "endpoint_type": "endpointType",
        "module_name": "moduleName",
        "region_id": "regionId",
    },
)
class InstanceEndpointAclPolicyProps:
    def __init__(
        self,
        *,
        entry: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_enable_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        module_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``InstanceEndpointAclPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy

        :param entry: Property entry: The IP address range that is allowed to access the instance.
        :param instance_id: Property instanceId: The ID of the instance.
        :param auto_enable_type: Property autoEnableType: Whether to auto enable the type of the endpoint.
        :param comment: Property comment: The description of the entry.
        :param endpoint_type: Property endpointType: The type of the endpoint.
        :param module_name: Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid values: Registry and Chart.
        :param region_id: Property regionId: Region ID of instance. Default is current region.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5300c733a5eec429c04f643005efc40f9270492c86bd4bc9ba9503beb6e4c16)
            check_type(argname="argument entry", value=entry, expected_type=type_hints["entry"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument auto_enable_type", value=auto_enable_type, expected_type=type_hints["auto_enable_type"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument endpoint_type", value=endpoint_type, expected_type=type_hints["endpoint_type"])
            check_type(argname="argument module_name", value=module_name, expected_type=type_hints["module_name"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "entry": entry,
            "instance_id": instance_id,
        }
        if auto_enable_type is not None:
            self._values["auto_enable_type"] = auto_enable_type
        if comment is not None:
            self._values["comment"] = comment
        if endpoint_type is not None:
            self._values["endpoint_type"] = endpoint_type
        if module_name is not None:
            self._values["module_name"] = module_name
        if region_id is not None:
            self._values["region_id"] = region_id

    @builtins.property
    def entry(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property entry: The IP address range that is allowed to access the instance.'''
        result = self._values.get("entry")
        assert result is not None, "Required property 'entry' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_enable_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoEnableType: Whether to auto enable the type of the endpoint.'''
        result = self._values.get("auto_enable_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property comment: The description of the entry.'''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointType: The type of the endpoint.'''
        result = self._values.get("endpoint_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def module_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property moduleName: The name of the module in the instance for which a whitelist is configured.

        Valid
        values: Registry and Chart.
        '''
        result = self._values.get("module_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property regionId: Region ID of instance.

        Default is current region.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceEndpointAclPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_name": "instanceName",
        "instance_type": "instanceType",
        "image_scanner": "imageScanner",
        "instance_storage_name": "instanceStorageName",
        "period": "period",
        "renewal_status": "renewalStatus",
        "renew_period": "renewPeriod",
        "resource_group_id": "resourceGroupId",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        image_scanner: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_storage_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instance

        :param instance_name: Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
        :param instance_type: Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. Valid values: Basic: Basic instance Standard: Standard instance Advanced: Advanced Edition Instance.
        :param image_scanner: Property imageScanner: Security scan engine.
        :param instance_storage_name: Property instanceStorageName: Custom OSS Bucket name.
        :param period: Property period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
        :param renewal_status: Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal. - ManualRenewal: manual renewal. Default ManualRenewal.
        :param renew_period: Property renewPeriod: Automatic renewal cycle, in months. When RenewalStatus is set to AutoRenewal, it must be set.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c86eace4cdb5944f9578def4ae93baca2d0e1c738f14d4c894c7e37d1c224d8b)
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument image_scanner", value=image_scanner, expected_type=type_hints["image_scanner"])
            check_type(argname="argument instance_storage_name", value=instance_storage_name, expected_type=type_hints["instance_storage_name"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
            check_type(argname="argument renew_period", value=renew_period, expected_type=type_hints["renew_period"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_name": instance_name,
            "instance_type": instance_type,
        }
        if image_scanner is not None:
            self._values["image_scanner"] = image_scanner
        if instance_storage_name is not None:
            self._values["instance_storage_name"] = instance_storage_name
        if period is not None:
            self._values["period"] = period
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status
        if renew_period is not None:
            self._values["renew_period"] = renew_period
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition.

        Valid values:
        Basic: Basic instance
        Standard: Standard instance
        Advanced: Advanced Edition Instance.
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def image_scanner(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageScanner: Security scan engine.'''
        result = self._values.get("image_scanner")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_storage_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceStorageName: Custom OSS Bucket name.'''
        result = self._values.get("instance_storage_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: Prepaid cycle.

        The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.

        - ManualRenewal: manual renewal.
          Default ManualRenewal.
        '''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewPeriod: Automatic renewal cycle, in months.

        When RenewalStatus is set to AutoRenewal, it must be set.
        '''
        result = self._values.get("renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IInstanceVpcEndpointLinkedVpc)
class InstanceVpcEndpointLinkedVpc(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.InstanceVpcEndpointLinkedVpc",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CR::InstanceVpcEndpointLinkedVpc``, which is used to associate a virtual private cloud (VPC) with a Container Registry instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstanceVpcEndpointLinkedVpc``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancevpcendpointlinkedvpc
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceVpcEndpointLinkedVpcProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49ce4d3ccd33f7c74bba4081ed03c7157e9515d5f29f48e05526cd24eb43814c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the vpc.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVswitchId")
    def attr_vswitch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VswitchId: The ID of the vswitch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVswitchId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceVpcEndpointLinkedVpcProps":
        return typing.cast("InstanceVpcEndpointLinkedVpcProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df407bd80b680f9d98a2d7fad7c276da2d418a0672655e96c43610692ee61782)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1ef39b2cdd3d3a9d08fca2f545ccfc3e44bee4930f3f7bab1593aeac0940b9f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__142e74867bdbcf6f134244b3ffef2b340a8d7acbfd72843eaab7c24f5554ee90)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.InstanceVpcEndpointLinkedVpcProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "vpc_id": "vpcId",
        "vswitch_id": "vswitchId",
        "enable_create_dns_record_in_pvzt": "enableCreateDnsRecordInPvzt",
        "module_name": "moduleName",
    },
)
class InstanceVpcEndpointLinkedVpcProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vswitch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        enable_create_dns_record_in_pvzt: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        module_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``InstanceVpcEndpointLinkedVpc``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancevpcendpointlinkedvpc

        :param instance_id: Property instanceId: The ID of the instance.
        :param vpc_id: Property vpcId: The ID of the vpc.
        :param vswitch_id: Property vswitchId: The ID of the vswitch.
        :param enable_create_dns_record_in_pvzt: Property enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records. If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added. Valid values: - **true**: Automatically creates a Privatezone record. - **false** (default): Do not automatically create Privatezone records.
        :param module_name: Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid values: - **Registry** (default): Access the image repository. - **Chart**: Access Helm Chart.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__376f4934a7308bfe1233970e347ab5d9dc7662412ad88342c442914e162f784d)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument vswitch_id", value=vswitch_id, expected_type=type_hints["vswitch_id"])
            check_type(argname="argument enable_create_dns_record_in_pvzt", value=enable_create_dns_record_in_pvzt, expected_type=type_hints["enable_create_dns_record_in_pvzt"])
            check_type(argname="argument module_name", value=module_name, expected_type=type_hints["module_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "vpc_id": vpc_id,
            "vswitch_id": vswitch_id,
        }
        if enable_create_dns_record_in_pvzt is not None:
            self._values["enable_create_dns_record_in_pvzt"] = enable_create_dns_record_in_pvzt
        if module_name is not None:
            self._values["module_name"] = module_name

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the vpc.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vswitch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vswitchId: The ID of the vswitch.'''
        result = self._values.get("vswitch_id")
        assert result is not None, "Required property 'vswitch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable_create_dns_record_in_pvzt(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records.

        If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
        Valid values:

        - **true**: Automatically creates a Privatezone record.
        - **false** (default): Do not automatically create Privatezone records.
        '''
        result = self._values.get("enable_create_dns_record_in_pvzt")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def module_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property moduleName: The name of the module in the instance for which a whitelist is configured.

        Valid values:

        - **Registry** (default): Access the image repository.
        - **Chart**: Access Helm Chart.
        '''
        result = self._values.get("module_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceVpcEndpointLinkedVpcProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(INamespace)
class Namespace(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.Namespace",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CR::Namespace``, which is used to create a namespace.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosNamespace``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace
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
            type_hints = typing.get_type_hints(_typecheckingstub__2077531d4e80f0006bc9d0544435c51e4e717d2397dad1cb4e4caa273654d9e1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the enterprise edition instance which namespace belongs to.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceId: The namespace ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespaceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__649321ac348046ef842cc08f280074398eeed193e9fa809bf42ab40375c0875f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__edde52fdd673e6fd279dbde4ad9cb8ad48e8e294d7b7004ebab2c76fff87accf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b91664a0cad343a5519e3d23d889b860656169fc72a8d40e692a519ece8722c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.NamespaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "namespace": "namespace",
        "auto_create": "autoCreate",
        "default_visibility": "defaultVisibility",
        "instance_id": "instanceId",
    },
)
class NamespaceProps:
    def __init__(
        self,
        *,
        namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_create: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_visibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Namespace``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace

        :param namespace: Property namespace: The name of the namespace.
        :param auto_create: Property autoCreate: Specifies whether to automatically create an image repository.
        :param default_visibility: Property defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
        :param instance_id: Property instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b84993afb12c0064265f87561d23aa1debeaaf76197b72d4b90cec1d64f0d3c)
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument auto_create", value=auto_create, expected_type=type_hints["auto_create"])
            check_type(argname="argument default_visibility", value=default_visibility, expected_type=type_hints["default_visibility"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "namespace": namespace,
        }
        if auto_create is not None:
            self._values["auto_create"] = auto_create
        if default_visibility is not None:
            self._values["default_visibility"] = default_visibility
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property namespace: The name of the namespace.'''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_create(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoCreate: Specifies whether to automatically create an image repository.'''
        result = self._values.get("auto_create")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_visibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property defaultVisibility: The default type of the repository that is automatically created.

        Valid values: PUBLIC, PRIVATE.
        '''
        result = self._values.get("default_visibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The ID of the enterprise edition instance which namespace belongs to.

        If not provided, will use personal edition instance as default.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IRepoSyncRule)
class RepoSyncRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RepoSyncRule",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CR::RepoSyncRule``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRepoSyncRule``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RepoSyncRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83aa1cf31b8e275b178f8cf78b71348f5ce0a79ed97c493ee18d8d9b68d0268f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSyncRuleId")
    def attr_sync_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SyncRuleId: The ID of the synchronization rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSyncRuleId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RepoSyncRuleProps":
        return typing.cast("RepoSyncRuleProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__edf453895ae01d4704c1d9c50c3fb74839793abfa98cd2a1719a83b84681f509)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40577b098580b62a0f46bbeb69d5d4f40968820f9ead82c4d488afbafef61aab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37f921d09e2913813b76644f1bce36897ee26041447e5c77576dd1e8246f9332)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RepoSyncRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "namespace_name": "namespaceName",
        "sync_rule_name": "syncRuleName",
        "sync_scope": "syncScope",
        "sync_trigger": "syncTrigger",
        "target_instance_id": "targetInstanceId",
        "target_namespace_name": "targetNamespaceName",
        "target_region_id": "targetRegionId",
        "repo_name": "repoName",
        "repo_name_filter": "repoNameFilter",
        "tag_filter": "tagFilter",
        "target_repo_name": "targetRepoName",
        "target_user_id": "targetUserId",
    },
)
class RepoSyncRuleProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        sync_rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        sync_scope: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        sync_trigger: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_namespace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        repo_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repo_name_filter: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag_filter: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        target_repo_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        target_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RepoSyncRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule

        :param instance_id: Property instanceId: The ID of the CR instance.
        :param namespace_name: Property namespaceName: The name of the CR namespace.
        :param sync_rule_name: Property syncRuleName: The name of the image sync rule.
        :param sync_scope: Property syncScope: The synchronization scope. Valid values: REPO, NAMESPACE
        :param sync_trigger: Property syncTrigger: The mode of triggering the synchronization rule. Valid values: INITIATIVE, PASSIVE
        :param target_instance_id: Property targetInstanceId: The ID of the destination instance.
        :param target_namespace_name: Property targetNamespaceName: The name of the destination namespace.
        :param target_region_id: Property targetRegionId: The ID of the destination region.
        :param repo_name: Property repoName: The name of the repository. This parameter is required when SyncScope is REPO.
        :param repo_name_filter: Property repoNameFilter: The regular expression that is used to filter repositories.
        :param tag_filter: Property tagFilter: The tag filter. Default value: .*
        :param target_repo_name: Property targetRepoName: The name of the destination image repository. This parameter is optional.
        :param target_user_id: Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bc505279ae460877f8f2e8d5617c813254128e49aae36d14606660f5de8aeb2)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument namespace_name", value=namespace_name, expected_type=type_hints["namespace_name"])
            check_type(argname="argument sync_rule_name", value=sync_rule_name, expected_type=type_hints["sync_rule_name"])
            check_type(argname="argument sync_scope", value=sync_scope, expected_type=type_hints["sync_scope"])
            check_type(argname="argument sync_trigger", value=sync_trigger, expected_type=type_hints["sync_trigger"])
            check_type(argname="argument target_instance_id", value=target_instance_id, expected_type=type_hints["target_instance_id"])
            check_type(argname="argument target_namespace_name", value=target_namespace_name, expected_type=type_hints["target_namespace_name"])
            check_type(argname="argument target_region_id", value=target_region_id, expected_type=type_hints["target_region_id"])
            check_type(argname="argument repo_name", value=repo_name, expected_type=type_hints["repo_name"])
            check_type(argname="argument repo_name_filter", value=repo_name_filter, expected_type=type_hints["repo_name_filter"])
            check_type(argname="argument tag_filter", value=tag_filter, expected_type=type_hints["tag_filter"])
            check_type(argname="argument target_repo_name", value=target_repo_name, expected_type=type_hints["target_repo_name"])
            check_type(argname="argument target_user_id", value=target_user_id, expected_type=type_hints["target_user_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "namespace_name": namespace_name,
            "sync_rule_name": sync_rule_name,
            "sync_scope": sync_scope,
            "sync_trigger": sync_trigger,
            "target_instance_id": target_instance_id,
            "target_namespace_name": target_namespace_name,
            "target_region_id": target_region_id,
        }
        if repo_name is not None:
            self._values["repo_name"] = repo_name
        if repo_name_filter is not None:
            self._values["repo_name_filter"] = repo_name_filter
        if tag_filter is not None:
            self._values["tag_filter"] = tag_filter
        if target_repo_name is not None:
            self._values["target_repo_name"] = target_repo_name
        if target_user_id is not None:
            self._values["target_user_id"] = target_user_id

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the CR instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property namespaceName: The name of the CR namespace.'''
        result = self._values.get("namespace_name")
        assert result is not None, "Required property 'namespace_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def sync_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property syncRuleName: The name of the image sync rule.'''
        result = self._values.get("sync_rule_name")
        assert result is not None, "Required property 'sync_rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def sync_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property syncScope: The synchronization scope.

        Valid values: REPO, NAMESPACE
        '''
        result = self._values.get("sync_scope")
        assert result is not None, "Required property 'sync_scope' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def sync_trigger(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property syncTrigger: The mode of triggering the synchronization rule.

        Valid values: INITIATIVE, PASSIVE
        '''
        result = self._values.get("sync_trigger")
        assert result is not None, "Required property 'sync_trigger' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetInstanceId: The ID of the destination instance.'''
        result = self._values.get("target_instance_id")
        assert result is not None, "Required property 'target_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_namespace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetNamespaceName: The name of the destination namespace.'''
        result = self._values.get("target_namespace_name")
        assert result is not None, "Required property 'target_namespace_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetRegionId: The ID of the destination region.'''
        result = self._values.get("target_region_id")
        assert result is not None, "Required property 'target_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def repo_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property repoName: The name of the repository.

        This parameter is required when SyncScope is REPO.
        '''
        result = self._values.get("repo_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repo_name_filter(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property repoNameFilter: The regular expression that is used to filter repositories.'''
        result = self._values.get("repo_name_filter")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag_filter(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tagFilter: The tag filter.

        Default value: .*
        '''
        result = self._values.get("tag_filter")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def target_repo_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property targetRepoName: The name of the destination image repository.

        This parameter is optional.
        '''
        result = self._values.get("target_repo_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def target_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.'''
        result = self._values.get("target_user_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RepoSyncRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IRepository)
class Repository(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.Repository",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CR::Repository``, which is used to create an image repository.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRepository``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RepositoryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e337b0af611e60f6ab3e1822b8baf5abf62c4e9d0781ee266725d722c21ba72)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoId")
    def attr_repo_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoId: The repository ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRepoId"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoName")
    def attr_repo_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoName: The name of the repository.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRepoName"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoNamespace")
    def attr_repo_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoNamespace: The name of the namespace to which the repository belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRepoNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoType")
    def attr_repo_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoType: The type of the repository.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRepoType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RepositoryProps":
        return typing.cast("RepositoryProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbfd71c4a6427a877e95566d39cf9b98ee7f14dce9ccc7089df24901acac2afc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c10cabb2c4b45fffe94aabcf24ca70f81d0f83de12b49f9ce2f64262e98f08d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14bc23d536d453675508f2ea62ad5be54e28a88fb3016538d3172ade8c84adc0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RepositoryProps",
    jsii_struct_bases=[],
    name_mapping={
        "repo_name": "repoName",
        "repo_namespace": "repoNamespace",
        "repo_type": "repoType",
        "summary": "summary",
        "detail": "detail",
        "instance_id": "instanceId",
        "repo_source": "repoSource",
        "tag_immutability": "tagImmutability",
    },
)
class RepositoryProps:
    def __init__(
        self,
        *,
        repo_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        repo_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        repo_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        summary: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        detail: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repo_source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRepository.RepoSourceProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        tag_immutability: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Repository``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository

        :param repo_name: Property repoName: The name of the repository.
        :param repo_namespace: Property repoNamespace: The name of the namespace to which the repository belongs.
        :param repo_type: Property repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
        :param summary: Property summary: The summary of the repository.
        :param detail: Property detail: The description of the repository.
        :param instance_id: Property instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
        :param repo_source: Property repoSource: Code Source message.
        :param tag_immutability: Property tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__770794f31d73f05c8ca09c24fadf12c59f2ff3ca5019eb763587978cb7238d4f)
            check_type(argname="argument repo_name", value=repo_name, expected_type=type_hints["repo_name"])
            check_type(argname="argument repo_namespace", value=repo_namespace, expected_type=type_hints["repo_namespace"])
            check_type(argname="argument repo_type", value=repo_type, expected_type=type_hints["repo_type"])
            check_type(argname="argument summary", value=summary, expected_type=type_hints["summary"])
            check_type(argname="argument detail", value=detail, expected_type=type_hints["detail"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument repo_source", value=repo_source, expected_type=type_hints["repo_source"])
            check_type(argname="argument tag_immutability", value=tag_immutability, expected_type=type_hints["tag_immutability"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "repo_name": repo_name,
            "repo_namespace": repo_namespace,
            "repo_type": repo_type,
            "summary": summary,
        }
        if detail is not None:
            self._values["detail"] = detail
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if repo_source is not None:
            self._values["repo_source"] = repo_source
        if tag_immutability is not None:
            self._values["tag_immutability"] = tag_immutability

    @builtins.property
    def repo_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property repoName: The name of the repository.'''
        result = self._values.get("repo_name")
        assert result is not None, "Required property 'repo_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def repo_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property repoNamespace: The name of the namespace to which the repository belongs.'''
        result = self._values.get("repo_namespace")
        assert result is not None, "Required property 'repo_namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def repo_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property repoType: The type of the repository.

        Valid values: PUBLIC, PRIVATE.
        '''
        result = self._values.get("repo_type")
        assert result is not None, "Required property 'repo_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def summary(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property summary: The summary of the repository.'''
        result = self._values.get("summary")
        assert result is not None, "Required property 'summary' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def detail(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property detail: The description of the repository.'''
        result = self._values.get("detail")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The ID of the enterprise edition instance which repository belongs to.

        If not provided, will use personal edition instance as default.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repo_source(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRepository.RepoSourceProperty"]]:
        '''Property repoSource: Code Source message.'''
        result = self._values.get("repo_source")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRepository.RepoSourceProperty"]], result)

    @builtins.property
    def tag_immutability(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tagImmutability: Specifies whether the repository is immutable.

        Only takes effect when InstanceId is specified.
        '''
        result = self._values.get("tag_immutability")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RepositoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosArtifactLifecycleRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosArtifactLifecycleRule",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CR::ArtifactLifecycleRule``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ArtifactLifecycleRule`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosArtifactLifecycleRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9df4fd793d9b508abc1d0a1186e7618747e882aaf52d64b593c4d34545ad293)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9b9a2dd737041b851874ebb507f29f6c135fba83fbf9d47e367ad4ee8dd401d7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArtifactLifecycleRuleId")
    def attr_artifact_lifecycle_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ArtifactLifecycleRuleId: The ID of the lifecycle management rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArtifactLifecycleRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrAuto")
    def attr_auto(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Auto: Specify whether to automatically execute the lifecycle management rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuto"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Creation time of the lifecycle management rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: ACR Instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ModifiedTime: Change time of the lifecycle management rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceName")
    def attr_namespace_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NamespaceName: The name of the namespace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaceName"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoName")
    def attr_repo_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RepoName: The name of the image repository.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoName"))

    @builtins.property
    @jsii.member(jsii_name="attrRetentionTagCount")
    def attr_retention_tag_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RetentionTagCount: The number of images that you want to retain.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRetentionTagCount"))

    @builtins.property
    @jsii.member(jsii_name="attrScheduleTime")
    def attr_schedule_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScheduleTime: The execution cycle of the lifecycle management rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScheduleTime"))

    @builtins.property
    @jsii.member(jsii_name="attrScope")
    def attr_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Scope: The deletion scope.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScope"))

    @builtins.property
    @jsii.member(jsii_name="attrTagRegexp")
    def attr_tag_regexp(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TagRegexp: The regular expression that is used to indicate which image tags are retained.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTagRegexp"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="auto")
    def auto(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: auto: Specify whether to automatically execute the lifecycle management rule.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "auto"))

    @auto.setter
    def auto(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb52673d6a582af8fc0f6e74f31045e5ef0ccf445eaa46487de77ee67867b6f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "auto", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f35f0ec3cc1612d28601cfad1ab3f8890fc58c1d99ea341356f9df038c976426)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: ACR Instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec3695a243d939260db4e1ab97b5164fbf6d19fbe80378ebbac101e38541d9d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__838d8e03eb2c119804745fdecc103c7a96bfe887cbcdfc90351540ef0647ee75)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceName", value)

    @builtins.property
    @jsii.member(jsii_name="repoName")
    def repo_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: repoName: The name of the image repository.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "repoName"))

    @repo_name.setter
    def repo_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8222f176a97bbd700dd7060e09697e3a05f1f86a2453ce8741740840bf073b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repoName", value)

    @builtins.property
    @jsii.member(jsii_name="retentionTagCount")
    def retention_tag_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: retentionTagCount: The number of images that you want to retain.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "retentionTagCount"))

    @retention_tag_count.setter
    def retention_tag_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__136b61ab6704c06b905402b2309ce4490e42e95e7dc15bc4843804209f6117ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "retentionTagCount", value)

    @builtins.property
    @jsii.member(jsii_name="scheduleTime")
    def schedule_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scheduleTime: The execution cycle of the lifecycle management rule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scheduleTime"))

    @schedule_time.setter
    def schedule_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dd64ff57de7404247e6af08d425e8ce7f1707051e294f3f512063634feeaff6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scheduleTime", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scope: The deletion scope.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scope"))

    @scope.setter
    def scope(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__606dc7cc9577c843ec510f6c0dd104f058974ac2f2920c4ae86d10fb0ea649f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)

    @builtins.property
    @jsii.member(jsii_name="tagRegexp")
    def tag_regexp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tagRegexp: The regular expression that is used to indicate which image tags are retained.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tagRegexp"))

    @tag_regexp.setter
    def tag_regexp(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e23d072bfb3e1912be1532219b2bac8afbbea6ee09d0357e5e3a9302e7ee25f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tagRegexp", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosArtifactLifecycleRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto": "auto",
        "instance_id": "instanceId",
        "namespace_name": "namespaceName",
        "repo_name": "repoName",
        "retention_tag_count": "retentionTagCount",
        "schedule_time": "scheduleTime",
        "scope": "scope",
        "tag_regexp": "tagRegexp",
    },
)
class RosArtifactLifecycleRuleProps:
    def __init__(
        self,
        *,
        auto: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repo_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        retention_tag_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        schedule_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag_regexp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosArtifactLifecycleRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule

        :param auto: 
        :param instance_id: 
        :param namespace_name: 
        :param repo_name: 
        :param retention_tag_count: 
        :param schedule_time: 
        :param scope: 
        :param tag_regexp: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d57f6a2068efc42960a9816099d952a39b8b32d9901d12e149929032a62af24)
            check_type(argname="argument auto", value=auto, expected_type=type_hints["auto"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument namespace_name", value=namespace_name, expected_type=type_hints["namespace_name"])
            check_type(argname="argument repo_name", value=repo_name, expected_type=type_hints["repo_name"])
            check_type(argname="argument retention_tag_count", value=retention_tag_count, expected_type=type_hints["retention_tag_count"])
            check_type(argname="argument schedule_time", value=schedule_time, expected_type=type_hints["schedule_time"])
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument tag_regexp", value=tag_regexp, expected_type=type_hints["tag_regexp"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "auto": auto,
            "instance_id": instance_id,
        }
        if namespace_name is not None:
            self._values["namespace_name"] = namespace_name
        if repo_name is not None:
            self._values["repo_name"] = repo_name
        if retention_tag_count is not None:
            self._values["retention_tag_count"] = retention_tag_count
        if schedule_time is not None:
            self._values["schedule_time"] = schedule_time
        if scope is not None:
            self._values["scope"] = scope
        if tag_regexp is not None:
            self._values["tag_regexp"] = tag_regexp

    @builtins.property
    def auto(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: auto: Specify whether to automatically execute the lifecycle management rule.
        '''
        result = self._values.get("auto")
        assert result is not None, "Required property 'auto' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: ACR Instance ID.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    def repo_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: repoName: The name of the image repository.
        '''
        result = self._values.get("repo_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def retention_tag_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: retentionTagCount: The number of images that you want to retain.
        '''
        result = self._values.get("retention_tag_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def schedule_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scheduleTime: The execution cycle of the lifecycle management rule.
        '''
        result = self._values.get("schedule_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scope: The deletion scope.
        '''
        result = self._values.get("scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag_regexp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tagRegexp: The regular expression that is used to indicate which image tags are retained.
        '''
        result = self._values.get("tag_regexp")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosArtifactLifecycleRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CR::Instance``, which is used to create a Container Registry Enterprise Edition instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c5fdbdda33495b9931062eae9436ee77830a055c8440e2e58bbca59a6393a06)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3f883161cecdf0eff2204bff1afbe51a46615d375fd4713fbdc92d29a5209057)
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
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The first ID of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceName: InstanceName.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceSpecification")
    def attr_instance_specification(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceSpecification: The instance specification.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceSpecification"))

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ModifiedTime: Last modification time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrModifiedTime"))

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
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d1747291ca173745d9f15863cff720203044a780f7d8091206602a1d1251418)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b657cd41328a24b68718dd4502fa8c3ffbf31aa166a93ddd192e98e22d165d3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. Valid values:
        Basic: Basic instance
        Standard: Standard instance
        Advanced: Advanced Edition Instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__deae97e8dcedaf2db53de39c712a33b5d1bdba3fb35d8ded42deebd10f7129bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="imageScanner")
    def image_scanner(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageScanner: Security scan engine.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageScanner"))

    @image_scanner.setter
    def image_scanner(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac4f98bbece3fd5b1eb0b25713bb02461442f97d16aa77b8c47b76811cae4223)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageScanner", value)

    @builtins.property
    @jsii.member(jsii_name="instanceStorageName")
    def instance_storage_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceStorageName: Custom OSS Bucket name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceStorageName"))

    @instance_storage_name.setter
    def instance_storage_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e523561c229a744475dfce70bfaf3830d8f5c42a0373f88f9193a24cfd7e6ee4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceStorageName", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1487d584091179a29614eda4947660d258314bf9065336f16e268f01c4825772)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="renewalStatus")
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalStatus: Automatic renewal status, value:

        - AutoRenewal: automatic renewal.
        - ManualRenewal: manual renewal.
        Default ManualRenewal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewalStatus"))

    @renewal_status.setter
    def renewal_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__607ff8897420ed2658ea6037991f7b8296082d1d2ff8cdfd4e092a32059a5eed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewalStatus", value)

    @builtins.property
    @jsii.member(jsii_name="renewPeriod")
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewPeriod: Automatic renewal cycle, in months.
        When RenewalStatus is set to AutoRenewal, it must be set.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewPeriod"))

    @renew_period.setter
    def renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be1a86530e046cf4ac7f0c487001ef40a1a5b2a2dbff31edecf7cefedb26624e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewPeriod", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__15d2cdcf21245d3264b8d262a0b3cecf9fbb1a9ecbf7f2d514bfb5169d747999)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


class RosInstanceEndpointAclPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosInstanceEndpointAclPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CR::InstanceEndpointAclPolicy``, which is used to create a whitelist policy for the public endpoint of an instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``InstanceEndpointAclPolicy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceEndpointAclPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ffbdfe8ae9d507d2bc136e9c65072d54bfbca0dd9ead03de39328fce07ff0d8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6d9e125d113c44390f6180355b8418d53f8736935061955ce15a081a863e12da)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEntry")
    def attr_entry(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Entry: The IP address range that is allowed to access the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEntry"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__077f67e7b38f7945204f3a41d4dbaac4948238c9857f06384d00141f592b0ced)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="entry")
    def entry(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: entry: The IP address range that is allowed to access the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "entry"))

    @entry.setter
    def entry(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8046d0371cb38018af179c787f8bc1ff265f20647bde2318f4b198baaca4b9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "entry", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2618534673728e3ade535fe6362707f1e351e5c24301ac758bbf8c577e5955cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="autoEnableType")
    def auto_enable_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoEnableType: Whether to auto enable the type of the endpoint.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoEnableType"))

    @auto_enable_type.setter
    def auto_enable_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e3944d6aa17ded2e31dc6fa6a8921e26c078d3ec2b6333803a74ba126a30341)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoEnableType", value)

    @builtins.property
    @jsii.member(jsii_name="comment")
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: The description of the entry.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__856553f2204122467e5678458b6a222af2d0a268f19a8fd691d8901464109412)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comment", value)

    @builtins.property
    @jsii.member(jsii_name="endpointType")
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endpointType: The type of the endpoint.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointType"))

    @endpoint_type.setter
    def endpoint_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c6f7f694227b53bc181ecf119cb90c037a0afe3af75faf5036fda7c9c2e77fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointType", value)

    @builtins.property
    @jsii.member(jsii_name="moduleName")
    def module_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        moduleName: The name of the module in the instance for which a whitelist is configured. Valid
        values: Registry and Chart.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "moduleName"))

    @module_name.setter
    def module_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a6491ab9f57f3e381d0dd42929453430101a69f4c56eab12060952137e0ea9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "moduleName", value)

    @builtins.property
    @jsii.member(jsii_name="regionId")
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionId: Region ID of instance. Default is current region.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "regionId"))

    @region_id.setter
    def region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4dcf475480f4857bacb6ef20fa4c0e3530faf4f3fab09069a941f348550e48ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "regionId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosInstanceEndpointAclPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "entry": "entry",
        "instance_id": "instanceId",
        "auto_enable_type": "autoEnableType",
        "comment": "comment",
        "endpoint_type": "endpointType",
        "module_name": "moduleName",
        "region_id": "regionId",
    },
)
class RosInstanceEndpointAclPolicyProps:
    def __init__(
        self,
        *,
        entry: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_enable_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        module_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstanceEndpointAclPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy

        :param entry: 
        :param instance_id: 
        :param auto_enable_type: 
        :param comment: 
        :param endpoint_type: 
        :param module_name: 
        :param region_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69d590f4f8bba22cda812dd489112b6e74bb79c21c2feb7d77bcc34d3ded6aa7)
            check_type(argname="argument entry", value=entry, expected_type=type_hints["entry"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument auto_enable_type", value=auto_enable_type, expected_type=type_hints["auto_enable_type"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument endpoint_type", value=endpoint_type, expected_type=type_hints["endpoint_type"])
            check_type(argname="argument module_name", value=module_name, expected_type=type_hints["module_name"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "entry": entry,
            "instance_id": instance_id,
        }
        if auto_enable_type is not None:
            self._values["auto_enable_type"] = auto_enable_type
        if comment is not None:
            self._values["comment"] = comment
        if endpoint_type is not None:
            self._values["endpoint_type"] = endpoint_type
        if module_name is not None:
            self._values["module_name"] = module_name
        if region_id is not None:
            self._values["region_id"] = region_id

    @builtins.property
    def entry(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: entry: The IP address range that is allowed to access the instance.
        '''
        result = self._values.get("entry")
        assert result is not None, "Required property 'entry' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_enable_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoEnableType: Whether to auto enable the type of the endpoint.
        '''
        result = self._values.get("auto_enable_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: The description of the entry.
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endpointType: The type of the endpoint.
        '''
        result = self._values.get("endpoint_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def module_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        moduleName: The name of the module in the instance for which a whitelist is configured. Valid
        values: Registry and Chart.
        '''
        result = self._values.get("module_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionId: Region ID of instance. Default is current region.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceEndpointAclPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_name": "instanceName",
        "instance_type": "instanceType",
        "image_scanner": "imageScanner",
        "instance_storage_name": "instanceStorageName",
        "period": "period",
        "renewal_status": "renewalStatus",
        "renew_period": "renewPeriod",
        "resource_group_id": "resourceGroupId",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        image_scanner: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_storage_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instance

        :param instance_name: 
        :param instance_type: 
        :param image_scanner: 
        :param instance_storage_name: 
        :param period: 
        :param renewal_status: 
        :param renew_period: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35a724d10579d241d59ad042448e8f45b746ddf571a74fc7dc2546bb6e594022)
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument image_scanner", value=image_scanner, expected_type=type_hints["image_scanner"])
            check_type(argname="argument instance_storage_name", value=instance_storage_name, expected_type=type_hints["instance_storage_name"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
            check_type(argname="argument renew_period", value=renew_period, expected_type=type_hints["renew_period"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_name": instance_name,
            "instance_type": instance_type,
        }
        if image_scanner is not None:
            self._values["image_scanner"] = image_scanner
        if instance_storage_name is not None:
            self._values["instance_storage_name"] = instance_storage_name
        if period is not None:
            self._values["period"] = period
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status
        if renew_period is not None:
            self._values["renew_period"] = renew_period
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. Valid values:
        Basic: Basic instance
        Standard: Standard instance
        Advanced: Advanced Edition Instance.
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def image_scanner(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageScanner: Security scan engine.
        '''
        result = self._values.get("image_scanner")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_storage_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceStorageName: Custom OSS Bucket name.
        '''
        result = self._values.get("instance_storage_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewalStatus: Automatic renewal status, value:

        - AutoRenewal: automatic renewal.
        - ManualRenewal: manual renewal.
        Default ManualRenewal.
        '''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        renewPeriod: Automatic renewal cycle, in months.
        When RenewalStatus is set to AutoRenewal, it must be set.
        '''
        result = self._values.get("renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstanceVpcEndpointLinkedVpc(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosInstanceVpcEndpointLinkedVpc",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CR::InstanceVpcEndpointLinkedVpc``, which is used to associate a virtual private cloud (VPC) with a Container Registry instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``InstanceVpcEndpointLinkedVpc`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancevpcendpointlinkedvpc
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceVpcEndpointLinkedVpcProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6453e1191aa0a7b6005e54f71071a883d311e5459dfd04a24e4c640e49faae2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f34878445bf30a62cd21c36e5e1faf09fc534a2a243abf9cbc2128712c631311)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The ID of the vpc.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVswitchId")
    def attr_vswitch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VswitchId: The ID of the vswitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVswitchId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7c1568e60cdb31e98f524fd09305cdde5a0a8a29e11345772ee0d94ea51322f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78d2da8a6baa8d4855f9cf046d4e882bda175259d2444dedbfc065f1aa5b99fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the vpc.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d1dae0055d77da385ce061072cf99c2c5fa3a9c36abad9c22e90644b242334d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vswitchId")
    def vswitch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vswitchId: The ID of the vswitch.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vswitchId"))

    @vswitch_id.setter
    def vswitch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c5c0fa289b845b59321d0f7565d519fb452ae215cd2828f2f598196beb5a5d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vswitchId", value)

    @builtins.property
    @jsii.member(jsii_name="enableCreateDnsRecordInPvzt")
    def enable_create_dns_record_in_pvzt(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records.
        If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
        Valid values:

        - **true**: Automatically creates a Privatezone record.
        - **false** (default): Do not automatically create Privatezone records.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableCreateDnsRecordInPvzt"))

    @enable_create_dns_record_in_pvzt.setter
    def enable_create_dns_record_in_pvzt(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cdcb711e831abea8fff2c30ff7accc8b92c05fe831f8c4cf0a42de230680bf3f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableCreateDnsRecordInPvzt", value)

    @builtins.property
    @jsii.member(jsii_name="moduleName")
    def module_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        moduleName: The name of the module in the instance for which a whitelist is configured. Valid values:

        - **Registry** (default): Access the image repository.
        - **Chart**: Access Helm Chart.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "moduleName"))

    @module_name.setter
    def module_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__545097d0f8754a9b5212d6d9e3e7b460d340fc510341a29b2e642d014084fa8b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "moduleName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosInstanceVpcEndpointLinkedVpcProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "vpc_id": "vpcId",
        "vswitch_id": "vswitchId",
        "enable_create_dns_record_in_pvzt": "enableCreateDnsRecordInPvzt",
        "module_name": "moduleName",
    },
)
class RosInstanceVpcEndpointLinkedVpcProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vswitch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        enable_create_dns_record_in_pvzt: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        module_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstanceVpcEndpointLinkedVpc``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancevpcendpointlinkedvpc

        :param instance_id: 
        :param vpc_id: 
        :param vswitch_id: 
        :param enable_create_dns_record_in_pvzt: 
        :param module_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3afe4c9344daa8fce87605dd4f914b0697dda48d3e6fba35048cb0e6693f7fe8)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument vswitch_id", value=vswitch_id, expected_type=type_hints["vswitch_id"])
            check_type(argname="argument enable_create_dns_record_in_pvzt", value=enable_create_dns_record_in_pvzt, expected_type=type_hints["enable_create_dns_record_in_pvzt"])
            check_type(argname="argument module_name", value=module_name, expected_type=type_hints["module_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "vpc_id": vpc_id,
            "vswitch_id": vswitch_id,
        }
        if enable_create_dns_record_in_pvzt is not None:
            self._values["enable_create_dns_record_in_pvzt"] = enable_create_dns_record_in_pvzt
        if module_name is not None:
            self._values["module_name"] = module_name

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the vpc.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vswitch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vswitchId: The ID of the vswitch.
        '''
        result = self._values.get("vswitch_id")
        assert result is not None, "Required property 'vswitch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable_create_dns_record_in_pvzt(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records.
        If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
        Valid values:

        - **true**: Automatically creates a Privatezone record.
        - **false** (default): Do not automatically create Privatezone records.
        '''
        result = self._values.get("enable_create_dns_record_in_pvzt")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def module_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        moduleName: The name of the module in the instance for which a whitelist is configured. Valid values:

        - **Registry** (default): Access the image repository.
        - **Chart**: Access Helm Chart.
        '''
        result = self._values.get("module_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceVpcEndpointLinkedVpcProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNamespace(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosNamespace",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CR::Namespace``, which is used to create a namespace.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Namespace`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace
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
            type_hints = typing.get_type_hints(_typecheckingstub__3fb2ebb41a7f810ef8b75d45521a62cbba0462dcf6434d222b5b0851ffad2828)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d5da41c343a439fd3449ba2d9d95de314d569c4f8da972248135f7c441b3c7c7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the enterprise edition instance which namespace belongs to.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Namespace: The namespace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NamespaceId: The namespace ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__4aacf47621f65b56b3c94a4ec1b93af5163ab42783bd76aca9a78d671cc91836)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="namespace")
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespace: The name of the namespace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33fb8c7005ebe9a27f2694ccae3b20f502ad353a01069ba711e31808ed380893)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespace", value)

    @builtins.property
    @jsii.member(jsii_name="autoCreate")
    def auto_create(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoCreate: Specifies whether to automatically create an image repository.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoCreate"))

    @auto_create.setter
    def auto_create(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b89539069d1f071feaaf93ebfc5df3566191fcf31194263fc90974d9037e0c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoCreate", value)

    @builtins.property
    @jsii.member(jsii_name="defaultVisibility")
    def default_visibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "defaultVisibility"))

    @default_visibility.setter
    def default_visibility(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f396c8bbc3f2d758a989005199f18b9076f2419e7bd7b55ee396670a1517061)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultVisibility", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4acac0ee7e2125b518631033b1878d8ee4e945511fc8ae9dbd31a2c513d3999c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosNamespaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "namespace": "namespace",
        "auto_create": "autoCreate",
        "default_visibility": "defaultVisibility",
        "instance_id": "instanceId",
    },
)
class RosNamespaceProps:
    def __init__(
        self,
        *,
        namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_create: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_visibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosNamespace``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-namespace

        :param namespace: 
        :param auto_create: 
        :param default_visibility: 
        :param instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c979e01666c4c69bf4fa9288f2c647d2f991d497cb411eff12dbbd632a55466)
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument auto_create", value=auto_create, expected_type=type_hints["auto_create"])
            check_type(argname="argument default_visibility", value=default_visibility, expected_type=type_hints["default_visibility"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "namespace": namespace,
        }
        if auto_create is not None:
            self._values["auto_create"] = auto_create
        if default_visibility is not None:
            self._values["default_visibility"] = default_visibility
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespace: The name of the namespace.
        '''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_create(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoCreate: Specifies whether to automatically create an image repository.
        '''
        result = self._values.get("auto_create")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_visibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
        '''
        result = self._values.get("default_visibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRepoSyncRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosRepoSyncRule",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CR::RepoSyncRule``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``RepoSyncRule`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRepoSyncRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b522354b22e54862a38e6529b303872c5a4259fd462f0a1b1a442ef43dd7c39d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__21f07bbfdd268c2a0a40fc8787786df3270995b558ffc7072e4c18eeff74779e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSyncRuleId")
    def attr_sync_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SyncRuleId: The ID of the synchronization rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSyncRuleId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__65b0c5ae342e970c2876625cf514757fb767a9d3349d97324867493d7afba255)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the CR instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c46f04bb35fb461dd9a71f963292df6fd362e31927d3ed8589290c33ba7a2a30)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceName")
    def namespace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespaceName: The name of the CR namespace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "namespaceName"))

    @namespace_name.setter
    def namespace_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7281e5dc0fd41928292bd423fe252d79d19e4d426bf4acc0d26dee776c53cc9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceName", value)

    @builtins.property
    @jsii.member(jsii_name="syncRuleName")
    def sync_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: syncRuleName: The name of the image sync rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "syncRuleName"))

    @sync_rule_name.setter
    def sync_rule_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81a50a53a031233c9cfb91cceaec926e1b5abf648ed935bd59107469081b9b84)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "syncRuleName", value)

    @builtins.property
    @jsii.member(jsii_name="syncScope")
    def sync_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: syncScope: The synchronization scope. Valid values: REPO, NAMESPACE
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "syncScope"))

    @sync_scope.setter
    def sync_scope(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb4c729632c1af4a3a9243a52932c0d759dfcbd01d34807ae5625af88bbe760a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "syncScope", value)

    @builtins.property
    @jsii.member(jsii_name="syncTrigger")
    def sync_trigger(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: syncTrigger: The mode of triggering the synchronization rule. Valid values: INITIATIVE, PASSIVE
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "syncTrigger"))

    @sync_trigger.setter
    def sync_trigger(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53da65fc09e12a19806dfe84d4e6ef618c94e44450a04cd26aef6232cc5b8c3a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "syncTrigger", value)

    @builtins.property
    @jsii.member(jsii_name="targetInstanceId")
    def target_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetInstanceId: The ID of the destination instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetInstanceId"))

    @target_instance_id.setter
    def target_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ddfe4cd195acfde52d6212282469c099caa15a119c87567931c3352700a65daf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="targetNamespaceName")
    def target_namespace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetNamespaceName: The name of the destination namespace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetNamespaceName"))

    @target_namespace_name.setter
    def target_namespace_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56b976919cf883641e9b265e3dcbbd5fcd52a039985f22a0a8f88663807ea0d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetNamespaceName", value)

    @builtins.property
    @jsii.member(jsii_name="targetRegionId")
    def target_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetRegionId: The ID of the destination region.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetRegionId"))

    @target_region_id.setter
    def target_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8bb12ca8c3c75caba4d90f31299dbc797cc762d0905f4283d5651bf9fe7390d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="repoName")
    def repo_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: repoName: The name of the repository. This parameter is required when SyncScope is REPO.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "repoName"))

    @repo_name.setter
    def repo_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c623599c28b966d85a68eb40acdd7f2f4df34e0bbdfad5ebd36233af07820f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repoName", value)

    @builtins.property
    @jsii.member(jsii_name="repoNameFilter")
    def repo_name_filter(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: repoNameFilter: The regular expression that is used to filter repositories.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "repoNameFilter"))

    @repo_name_filter.setter
    def repo_name_filter(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eedb437d069dcbfc569649e65dafc0f21af0e728aeff63d9fd02a67975c162c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repoNameFilter", value)

    @builtins.property
    @jsii.member(jsii_name="tagFilter")
    def tag_filter(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tagFilter: The tag filter. Default value: .*
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tagFilter"))

    @tag_filter.setter
    def tag_filter(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0631768638c56b2285af553b9dfa0c98d3ef34325a970ab1f6869d1e2681f26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tagFilter", value)

    @builtins.property
    @jsii.member(jsii_name="targetRepoName")
    def target_repo_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetRepoName: The name of the destination image repository. This parameter is optional.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "targetRepoName"))

    @target_repo_name.setter
    def target_repo_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2fcd9150502394cb283b34eba1f43aed7f897c8521ec3614c83f248ee7ce227)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetRepoName", value)

    @builtins.property
    @jsii.member(jsii_name="targetUserId")
    def target_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetUserId: The user ID (UID) of the account to which the destination instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "targetUserId"))

    @target_user_id.setter
    def target_user_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__309f5b984e8c89a9fb6e318be161cb59740b4ae08923e11fc900a551e452c698)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetUserId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosRepoSyncRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "namespace_name": "namespaceName",
        "sync_rule_name": "syncRuleName",
        "sync_scope": "syncScope",
        "sync_trigger": "syncTrigger",
        "target_instance_id": "targetInstanceId",
        "target_namespace_name": "targetNamespaceName",
        "target_region_id": "targetRegionId",
        "repo_name": "repoName",
        "repo_name_filter": "repoNameFilter",
        "tag_filter": "tagFilter",
        "target_repo_name": "targetRepoName",
        "target_user_id": "targetUserId",
    },
)
class RosRepoSyncRuleProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        sync_rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        sync_scope: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        sync_trigger: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_namespace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        repo_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repo_name_filter: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag_filter: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        target_repo_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        target_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosRepoSyncRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule

        :param instance_id: 
        :param namespace_name: 
        :param sync_rule_name: 
        :param sync_scope: 
        :param sync_trigger: 
        :param target_instance_id: 
        :param target_namespace_name: 
        :param target_region_id: 
        :param repo_name: 
        :param repo_name_filter: 
        :param tag_filter: 
        :param target_repo_name: 
        :param target_user_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__953f4284576e01ded591db643c476f5f91ddc278ff029dd093ffedf2251eb39d)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument namespace_name", value=namespace_name, expected_type=type_hints["namespace_name"])
            check_type(argname="argument sync_rule_name", value=sync_rule_name, expected_type=type_hints["sync_rule_name"])
            check_type(argname="argument sync_scope", value=sync_scope, expected_type=type_hints["sync_scope"])
            check_type(argname="argument sync_trigger", value=sync_trigger, expected_type=type_hints["sync_trigger"])
            check_type(argname="argument target_instance_id", value=target_instance_id, expected_type=type_hints["target_instance_id"])
            check_type(argname="argument target_namespace_name", value=target_namespace_name, expected_type=type_hints["target_namespace_name"])
            check_type(argname="argument target_region_id", value=target_region_id, expected_type=type_hints["target_region_id"])
            check_type(argname="argument repo_name", value=repo_name, expected_type=type_hints["repo_name"])
            check_type(argname="argument repo_name_filter", value=repo_name_filter, expected_type=type_hints["repo_name_filter"])
            check_type(argname="argument tag_filter", value=tag_filter, expected_type=type_hints["tag_filter"])
            check_type(argname="argument target_repo_name", value=target_repo_name, expected_type=type_hints["target_repo_name"])
            check_type(argname="argument target_user_id", value=target_user_id, expected_type=type_hints["target_user_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "namespace_name": namespace_name,
            "sync_rule_name": sync_rule_name,
            "sync_scope": sync_scope,
            "sync_trigger": sync_trigger,
            "target_instance_id": target_instance_id,
            "target_namespace_name": target_namespace_name,
            "target_region_id": target_region_id,
        }
        if repo_name is not None:
            self._values["repo_name"] = repo_name
        if repo_name_filter is not None:
            self._values["repo_name_filter"] = repo_name_filter
        if tag_filter is not None:
            self._values["tag_filter"] = tag_filter
        if target_repo_name is not None:
            self._values["target_repo_name"] = target_repo_name
        if target_user_id is not None:
            self._values["target_user_id"] = target_user_id

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the CR instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespaceName: The name of the CR namespace.
        '''
        result = self._values.get("namespace_name")
        assert result is not None, "Required property 'namespace_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def sync_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: syncRuleName: The name of the image sync rule.
        '''
        result = self._values.get("sync_rule_name")
        assert result is not None, "Required property 'sync_rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def sync_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: syncScope: The synchronization scope. Valid values: REPO, NAMESPACE
        '''
        result = self._values.get("sync_scope")
        assert result is not None, "Required property 'sync_scope' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def sync_trigger(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: syncTrigger: The mode of triggering the synchronization rule. Valid values: INITIATIVE, PASSIVE
        '''
        result = self._values.get("sync_trigger")
        assert result is not None, "Required property 'sync_trigger' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetInstanceId: The ID of the destination instance.
        '''
        result = self._values.get("target_instance_id")
        assert result is not None, "Required property 'target_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_namespace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetNamespaceName: The name of the destination namespace.
        '''
        result = self._values.get("target_namespace_name")
        assert result is not None, "Required property 'target_namespace_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetRegionId: The ID of the destination region.
        '''
        result = self._values.get("target_region_id")
        assert result is not None, "Required property 'target_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def repo_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: repoName: The name of the repository. This parameter is required when SyncScope is REPO.
        '''
        result = self._values.get("repo_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repo_name_filter(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: repoNameFilter: The regular expression that is used to filter repositories.
        '''
        result = self._values.get("repo_name_filter")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag_filter(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tagFilter: The tag filter. Default value: .*
        '''
        result = self._values.get("tag_filter")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def target_repo_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetRepoName: The name of the destination image repository. This parameter is optional.
        '''
        result = self._values.get("target_repo_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def target_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetUserId: The user ID (UID) of the account to which the destination instance belongs.
        '''
        result = self._values.get("target_user_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRepoSyncRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRepository(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosRepository",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CR::Repository``, which is used to create an image repository.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Repository`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRepositoryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd82279c4e3a8e3100710412c9a72574f1d951e844d897710849fa3e82c7a06d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8f26e3e1f5e949447b49bde1857492388c446c920362385d771c9febbdbad1e5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the enterprise edition instance which repository belongs to.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoId")
    def attr_repo_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RepoId: The repository ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoId"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoName")
    def attr_repo_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RepoName: The name of the repository.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoName"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoNamespace")
    def attr_repo_namespace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RepoNamespace: The name of the namespace to which the repository belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoType")
    def attr_repo_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RepoType: The type of the repository.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoType"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__df2001f5c4579d080595a6b192f38940c73bee3eb0d6d94456d9371e46266182)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="repoName")
    def repo_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repoName: The name of the repository.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "repoName"))

    @repo_name.setter
    def repo_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7445a767f78c6818ef4e8b5135d91d8b83b9786a83365638e7895f3296cfaa14)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repoName", value)

    @builtins.property
    @jsii.member(jsii_name="repoNamespace")
    def repo_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repoNamespace: The name of the namespace to which the repository belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "repoNamespace"))

    @repo_namespace.setter
    def repo_namespace(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__246ee6f0547c88af5962562ed42b3595a17d8661fc67f00d496c8f8a66b52c66)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repoNamespace", value)

    @builtins.property
    @jsii.member(jsii_name="repoType")
    def repo_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "repoType"))

    @repo_type.setter
    def repo_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e21d4e3904c66e21ed714b2d0d10aae11394048b0fb7f95f15497d5320e7ec0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repoType", value)

    @builtins.property
    @jsii.member(jsii_name="summary")
    def summary(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: summary: The summary of the repository.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "summary"))

    @summary.setter
    def summary(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12fa7af66ce2447f3a13638184e4cf5c5f3a6ec0e69ba35a03984351de0f3130)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "summary", value)

    @builtins.property
    @jsii.member(jsii_name="detail")
    def detail(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: detail: The description of the repository.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "detail"))

    @detail.setter
    def detail(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c944d362f95ac3df52c26cdef29e931ca30746c9881e60c1c96424b52973914)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "detail", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0be695aab2ae753e3a07ebb125da6a5d8f728cd13fc601c50ca35d7a03b9c8ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="repoSource")
    def repo_source(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRepository.RepoSourceProperty"]]:
        '''
        :Property: repoSource: Code Source message.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRepository.RepoSourceProperty"]], jsii.get(self, "repoSource"))

    @repo_source.setter
    def repo_source(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRepository.RepoSourceProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__073ff630bdbb4e705a31e02cbd03c27c5ba458521ac21f7e4e1b18be343341bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repoSource", value)

    @builtins.property
    @jsii.member(jsii_name="tagImmutability")
    def tag_immutability(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tagImmutability"))

    @tag_immutability.setter
    def tag_immutability(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__711b4c559dda57082fab7d00f8789a24eb5a0576e709db701d6220185393dbe5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tagImmutability", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty",
        jsii_struct_bases=[],
        name_mapping={
            "is_auto_build": "isAutoBuild",
            "is_disable_cache": "isDisableCache",
            "is_oversea": "isOversea",
            "source_repo_name": "sourceRepoName",
            "source_repo_namespace": "sourceRepoNamespace",
            "source_repo_type": "sourceRepoType",
        },
    )
    class RepoSourceProperty:
        def __init__(
            self,
            *,
            is_auto_build: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            is_disable_cache: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            is_oversea: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            source_repo_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            source_repo_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            source_repo_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param is_auto_build: 
            :param is_disable_cache: 
            :param is_oversea: 
            :param source_repo_name: 
            :param source_repo_namespace: 
            :param source_repo_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__30fb15ad805762a2affd5c4242b1a367a07c81aede488666f446faf2cc5b839e)
                check_type(argname="argument is_auto_build", value=is_auto_build, expected_type=type_hints["is_auto_build"])
                check_type(argname="argument is_disable_cache", value=is_disable_cache, expected_type=type_hints["is_disable_cache"])
                check_type(argname="argument is_oversea", value=is_oversea, expected_type=type_hints["is_oversea"])
                check_type(argname="argument source_repo_name", value=source_repo_name, expected_type=type_hints["source_repo_name"])
                check_type(argname="argument source_repo_namespace", value=source_repo_namespace, expected_type=type_hints["source_repo_namespace"])
                check_type(argname="argument source_repo_type", value=source_repo_type, expected_type=type_hints["source_repo_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "is_auto_build": is_auto_build,
                "is_disable_cache": is_disable_cache,
                "is_oversea": is_oversea,
                "source_repo_name": source_repo_name,
                "source_repo_namespace": source_repo_namespace,
                "source_repo_type": source_repo_type,
            }

        @builtins.property
        def is_auto_build(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: isAutoBuild: Whether to enable automatic construction
            '''
            result = self._values.get("is_auto_build")
            assert result is not None, "Required property 'is_auto_build' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def is_disable_cache(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: isDisableCache: Whether to disable Cache at build time
            '''
            result = self._values.get("is_disable_cache")
            assert result is not None, "Required property 'is_disable_cache' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def is_oversea(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: isOversea: Whether to enable overseas construction
            '''
            result = self._values.get("is_oversea")
            assert result is not None, "Required property 'is_oversea' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def source_repo_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: sourceRepoName: Source code warehouse name
            '''
            result = self._values.get("source_repo_name")
            assert result is not None, "Required property 'source_repo_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def source_repo_namespace(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: sourceRepoNamespace: Source code repository namespace
            '''
            result = self._values.get("source_repo_namespace")
            assert result is not None, "Required property 'source_repo_namespace' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def source_repo_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            sourceRepoType: code source type. Allow values:
            CODE, GITHUB, GITLAB, BITBUCKET. Enterprise Edition additional support CODEUP and GITEE
            '''
            result = self._values.get("source_repo_type")
            assert result is not None, "Required property 'source_repo_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RepoSourceProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosRepositoryProps",
    jsii_struct_bases=[],
    name_mapping={
        "repo_name": "repoName",
        "repo_namespace": "repoNamespace",
        "repo_type": "repoType",
        "summary": "summary",
        "detail": "detail",
        "instance_id": "instanceId",
        "repo_source": "repoSource",
        "tag_immutability": "tagImmutability",
    },
)
class RosRepositoryProps:
    def __init__(
        self,
        *,
        repo_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        repo_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        repo_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        summary: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        detail: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repo_source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRepository.RepoSourceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tag_immutability: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosRepository``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-repository

        :param repo_name: 
        :param repo_namespace: 
        :param repo_type: 
        :param summary: 
        :param detail: 
        :param instance_id: 
        :param repo_source: 
        :param tag_immutability: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__312fd6737af4d8ad566a8cb2b65271789e087dcd86fefae36f0cc1aa1bfac9ad)
            check_type(argname="argument repo_name", value=repo_name, expected_type=type_hints["repo_name"])
            check_type(argname="argument repo_namespace", value=repo_namespace, expected_type=type_hints["repo_namespace"])
            check_type(argname="argument repo_type", value=repo_type, expected_type=type_hints["repo_type"])
            check_type(argname="argument summary", value=summary, expected_type=type_hints["summary"])
            check_type(argname="argument detail", value=detail, expected_type=type_hints["detail"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument repo_source", value=repo_source, expected_type=type_hints["repo_source"])
            check_type(argname="argument tag_immutability", value=tag_immutability, expected_type=type_hints["tag_immutability"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "repo_name": repo_name,
            "repo_namespace": repo_namespace,
            "repo_type": repo_type,
            "summary": summary,
        }
        if detail is not None:
            self._values["detail"] = detail
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if repo_source is not None:
            self._values["repo_source"] = repo_source
        if tag_immutability is not None:
            self._values["tag_immutability"] = tag_immutability

    @builtins.property
    def repo_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repoName: The name of the repository.
        '''
        result = self._values.get("repo_name")
        assert result is not None, "Required property 'repo_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def repo_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repoNamespace: The name of the namespace to which the repository belongs.
        '''
        result = self._values.get("repo_namespace")
        assert result is not None, "Required property 'repo_namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def repo_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
        '''
        result = self._values.get("repo_type")
        assert result is not None, "Required property 'repo_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def summary(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: summary: The summary of the repository.
        '''
        result = self._values.get("summary")
        assert result is not None, "Required property 'summary' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def detail(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: detail: The description of the repository.
        '''
        result = self._values.get("detail")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repo_source(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRepository.RepoSourceProperty]]:
        '''
        :Property: repoSource: Code Source message.
        '''
        result = self._values.get("repo_source")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRepository.RepoSourceProperty]], result)

    @builtins.property
    def tag_immutability(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
        '''
        result = self._values.get("tag_immutability")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRepositoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosScanRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosScanRule",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CR::ScanRule``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ScanRule`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosScanRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08dc1a8f311fc70495434372d12ab3b2529f0c345577423c69bf5f7bbf1527e4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a580f5d9bf395a842beab36cee4bd30f17f14defc1b4e44db768f7ae04a88483)
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
        :Attribute: CreateTime: Creation time of the scan rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: ACR Instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaces")
    def attr_namespaces(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Namespaces: The list of namespaces.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaces"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoNames")
    def attr_repo_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RepoNames: The list of repositories.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoNames"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoTagFilterPattern")
    def attr_repo_tag_filter_pattern(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RepoTagFilterPattern: The tag that triggers the scan matches the regular expression.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoTagFilterPattern"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleName: The scan rule name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrScanRuleId")
    def attr_scan_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScanRuleId: The ID of the scan rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScanRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrScanScope")
    def attr_scan_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScanScope: The scan scope.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScanScope"))

    @builtins.property
    @jsii.member(jsii_name="attrScanType")
    def attr_scan_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScanType: The scan type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScanType"))

    @builtins.property
    @jsii.member(jsii_name="attrTriggerType")
    def attr_trigger_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TriggerType: Trigger type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTriggerType"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdateTime: Change time of the scan rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdateTime"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__25b039412733e92e7cf9155b520ee9ecdc9aabaf492f4feff7fe32da75fdf7fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: ACR Instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__000d3e39948e8a6c05d9ccb75f2c9c211266aec4ea7931723774b99ed825430c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="repoTagFilterPattern")
    def repo_tag_filter_pattern(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repoTagFilterPattern: The tag that triggers the scan matches the regular expression.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "repoTagFilterPattern"))

    @repo_tag_filter_pattern.setter
    def repo_tag_filter_pattern(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a3465410649facf905eae0d5b6ab3bad05c77775e4b7e9b134e8a39d61f561f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repoTagFilterPattern", value)

    @builtins.property
    @jsii.member(jsii_name="ruleName")
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleName: The scan rule name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9bd6d407d2c46facddd8286558512908d06f64b504448ba9db2f6cc02646ebdf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="scanScope")
    def scan_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        scanScope: The scan scope. Valid values:
        NAMESPACE: namespace.
        REPO: repository.
        INSTANCE: CR instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "scanScope"))

    @scan_scope.setter
    def scan_scope(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67f415e8096ac01c8b73fcb49ee113b9e1698d9e715c86bc4e925c54dd99b746)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scanScope", value)

    @builtins.property
    @jsii.member(jsii_name="scanType")
    def scan_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        scanType: The scan type. Valid values:

        - VUL: Products Cloud Security Scanner.
        - SBOM: Product Content Analysis.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "scanType"))

    @scan_type.setter
    def scan_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aaa1ca8a8d9e3cb629486735ac8ff39f2dc62c12c1cec73e8cab2f27e9a6689c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scanType", value)

    @builtins.property
    @jsii.member(jsii_name="triggerType")
    def trigger_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        triggerType: Trigger type. Valid values:

        - AUTO: automatically trigger.
        - MANUAL: manually trigger.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "triggerType"))

    @trigger_type.setter
    def trigger_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8840e1bccf4774de5d517c3bcf46a757f1723605c4cf4be7675e436b268db18b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "triggerType", value)

    @builtins.property
    @jsii.member(jsii_name="namespaces")
    def namespaces(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        namespaces: The list of namespaces.

        - When the scan scope is NAMESPACE, this parameter cannot be empty.
        - If the scan scope is REPO, you must specify a unique Namespace for this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "namespaces"))

    @namespaces.setter
    def namespaces(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__329454a06213e1841acf099cbf61b82176457577bd58cf8438487c3738fe4400)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaces", value)

    @builtins.property
    @jsii.member(jsii_name="repoNames")
    def repo_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty.

        - When the scan scope is REPO, this parameter cannot be empty.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "repoNames"))

    @repo_names.setter
    def repo_names(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a212110010a87882c53a41aefa3b19fe1c6edd19ce323089819728a13197b580)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repoNames", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosScanRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "repo_tag_filter_pattern": "repoTagFilterPattern",
        "rule_name": "ruleName",
        "scan_scope": "scanScope",
        "scan_type": "scanType",
        "trigger_type": "triggerType",
        "namespaces": "namespaces",
        "repo_names": "repoNames",
    },
)
class RosScanRuleProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        repo_tag_filter_pattern: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scan_scope: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scan_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        trigger_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespaces: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        repo_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosScanRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule

        :param instance_id: 
        :param repo_tag_filter_pattern: 
        :param rule_name: 
        :param scan_scope: 
        :param scan_type: 
        :param trigger_type: 
        :param namespaces: 
        :param repo_names: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d5f28076bcf59d9bb2e59eb58c77fe6882d1f16e47b1bff0d507db05bce2365)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument repo_tag_filter_pattern", value=repo_tag_filter_pattern, expected_type=type_hints["repo_tag_filter_pattern"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument scan_scope", value=scan_scope, expected_type=type_hints["scan_scope"])
            check_type(argname="argument scan_type", value=scan_type, expected_type=type_hints["scan_type"])
            check_type(argname="argument trigger_type", value=trigger_type, expected_type=type_hints["trigger_type"])
            check_type(argname="argument namespaces", value=namespaces, expected_type=type_hints["namespaces"])
            check_type(argname="argument repo_names", value=repo_names, expected_type=type_hints["repo_names"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "repo_tag_filter_pattern": repo_tag_filter_pattern,
            "rule_name": rule_name,
            "scan_scope": scan_scope,
            "scan_type": scan_type,
            "trigger_type": trigger_type,
        }
        if namespaces is not None:
            self._values["namespaces"] = namespaces
        if repo_names is not None:
            self._values["repo_names"] = repo_names

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: ACR Instance ID.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def repo_tag_filter_pattern(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repoTagFilterPattern: The tag that triggers the scan matches the regular expression.
        '''
        result = self._values.get("repo_tag_filter_pattern")
        assert result is not None, "Required property 'repo_tag_filter_pattern' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleName: The scan rule name.
        '''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scan_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        scanScope: The scan scope. Valid values:
        NAMESPACE: namespace.
        REPO: repository.
        INSTANCE: CR instance.
        '''
        result = self._values.get("scan_scope")
        assert result is not None, "Required property 'scan_scope' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scan_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        scanType: The scan type. Valid values:

        - VUL: Products Cloud Security Scanner.
        - SBOM: Product Content Analysis.
        '''
        result = self._values.get("scan_type")
        assert result is not None, "Required property 'scan_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def trigger_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        triggerType: Trigger type. Valid values:

        - AUTO: automatically trigger.
        - MANUAL: manually trigger.
        '''
        result = self._values.get("trigger_type")
        assert result is not None, "Required property 'trigger_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespaces(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        namespaces: The list of namespaces.

        - When the scan scope is NAMESPACE, this parameter cannot be empty.
        - If the scan scope is REPO, you must specify a unique Namespace for this parameter.
        '''
        result = self._values.get("namespaces")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def repo_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty.

        - When the scan scope is REPO, this parameter cannot be empty.
        '''
        result = self._values.get("repo_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScanRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosStorageDomainRoutingRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosStorageDomainRoutingRule",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CR::StorageDomainRoutingRule``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``StorageDomainRoutingRule`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosStorageDomainRoutingRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9511cc7ffe6d79fb39018dfd54f55cad2f9e2e937a4ac7f8c3d0038434260328)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bc359dab2a60719ee25d34dc9aca48445ab132605786686844e08715c8378959)
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
        :Attribute: CreateTime: The creation time of the Rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrModifyTime")
    def attr_modify_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ModifyTime: The Modify Time of the Rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrModifyTime"))

    @builtins.property
    @jsii.member(jsii_name="attrRoutes")
    def attr_routes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Routes: Domain name routing entry.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoutes"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleId: Rule ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__09edd2babfd8c0de3abcd868cf631228df0e8dfa5bf3447bd7a0054cd17e5a56)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: ACR Instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72ea8348cc711a568177e0b377f08fa8773d3be9dacb17b41c6de7e7970991db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="routes")
    def routes(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosStorageDomainRoutingRule.RoutesProperty"]]]:
        '''
        :Property: routes: Domain name routing entry.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosStorageDomainRoutingRule.RoutesProperty"]]], jsii.get(self, "routes"))

    @routes.setter
    def routes(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosStorageDomainRoutingRule.RoutesProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0283b54d2a83ca4330207693d533b70875b4dd62395c9248cc9a0a40dc0759b4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routes", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cr.RosStorageDomainRoutingRule.RoutesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "endpoint_type": "endpointType",
            "instance_domain": "instanceDomain",
            "storage_domain": "storageDomain",
        },
    )
    class RoutesProperty:
        def __init__(
            self,
            *,
            endpoint_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            instance_domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            storage_domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param endpoint_type: 
            :param instance_domain: 
            :param storage_domain: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f1458829a0176947c20185ef2aceed5dcf002c144d1974fe6dbb5865d9349cb0)
                check_type(argname="argument endpoint_type", value=endpoint_type, expected_type=type_hints["endpoint_type"])
                check_type(argname="argument instance_domain", value=instance_domain, expected_type=type_hints["instance_domain"])
                check_type(argname="argument storage_domain", value=storage_domain, expected_type=type_hints["storage_domain"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "endpoint_type": endpoint_type,
                "instance_domain": instance_domain,
                "storage_domain": storage_domain,
            }

        @builtins.property
        def endpoint_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: endpointType: Endpoint Type.
            '''
            result = self._values.get("endpoint_type")
            assert result is not None, "Required property 'endpoint_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def instance_domain(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: instanceDomain: Instance domain name.
            '''
            result = self._values.get("instance_domain")
            assert result is not None, "Required property 'instance_domain' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def storage_domain(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: storageDomain: Storage domain name.
            '''
            result = self._values.get("storage_domain")
            assert result is not None, "Required property 'storage_domain' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RoutesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosStorageDomainRoutingRuleProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "routes": "routes"},
)
class RosStorageDomainRoutingRuleProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        routes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosStorageDomainRoutingRule.RoutesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``RosStorageDomainRoutingRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule

        :param instance_id: 
        :param routes: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7dd450a0763cc66e9b7eb5b92ffb56e0528be7d60f844145df3d8c70697b8069)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument routes", value=routes, expected_type=type_hints["routes"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "routes": routes,
        }

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: ACR Instance ID.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def routes(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosStorageDomainRoutingRule.RoutesProperty]]]:
        '''
        :Property: routes: Domain name routing entry.
        '''
        result = self._values.get("routes")
        assert result is not None, "Required property 'routes' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosStorageDomainRoutingRule.RoutesProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosStorageDomainRoutingRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserInfo(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosUserInfo",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CR::UserInfo``, which is used to create the information about a user.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``UserInfo`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserInfoProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43b817332fede769fec9e7c5375a532c037ece7f640b996a08691de2753606e5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__458d186bcbb9a9eb85d7b1c946e821d7022a9adf5ddb4d08f6f06362b3cd31d9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrLoginName")
    def attr_login_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoginName: Login name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoginName"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: User ID.
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
            type_hints = typing.get_type_hints(_typecheckingstub__2f777632f9311d65eb2f8534ce3abb2ea14c42479cf366313f0d77531f849315)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="user")
    def user(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUserInfo.UserProperty"]:
        '''
        :Property: user: User info. If user exists, will update user info.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUserInfo.UserProperty"], jsii.get(self, "user"))

    @user.setter
    def user(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUserInfo.UserProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__188646b9f28ba5e23adaafa4b202ab1376c74d2d2b250080985a2a462ec5b0ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "user", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of enterprise edition ACR instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f863459e28743038ae18bde99b3ef37145c31fb0cc8800411f96ccc02e8f24b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cr.RosUserInfo.UserProperty",
        jsii_struct_bases=[],
        name_mapping={"password": "password"},
    )
    class UserProperty:
        def __init__(
            self,
            *,
            password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param password: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0990f820abb8f35191865c2868d0499ba2b4aaa28189777c6e6c0c55ce014524)
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "password": password,
            }

        @builtins.property
        def password(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: password: Password.
            '''
            result = self._values.get("password")
            assert result is not None, "Required property 'password' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "UserProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosUserInfoProps",
    jsii_struct_bases=[],
    name_mapping={"user": "user", "instance_id": "instanceId"},
)
class RosUserInfoProps:
    def __init__(
        self,
        *,
        user: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserInfo.UserProperty, typing.Dict[builtins.str, typing.Any]]],
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosUserInfo``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo

        :param user: 
        :param instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8231d078f55c057bb9c00fd75f01a2237eda36a2c2ed3b7d8c842f744260dc6c)
            check_type(argname="argument user", value=user, expected_type=type_hints["user"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "user": user,
        }
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def user(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserInfo.UserProperty]:
        '''
        :Property: user: User info. If user exists, will update user info.
        '''
        result = self._values.get("user")
        assert result is not None, "Required property 'user' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserInfo.UserProperty], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of enterprise edition ACR instance.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserInfoProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IScanRule)
class ScanRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.ScanRule",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CR::ScanRule``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosScanRule``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ScanRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11be6b8a7c599d5c5a66ad0a00334aef309d06d5434f33fd46dcda2146b02c5b)
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
        '''Attribute CreateTime: Creation time of the scan rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: ACR Instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaces")
    def attr_namespaces(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespaces: The list of namespaces.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespaces"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoNames")
    def attr_repo_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoNames: The list of repositories.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRepoNames"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoTagFilterPattern")
    def attr_repo_tag_filter_pattern(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoTagFilterPattern: The tag that triggers the scan matches the regular expression.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRepoTagFilterPattern"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The scan rule name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrScanRuleId")
    def attr_scan_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScanRuleId: The ID of the scan rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScanRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrScanScope")
    def attr_scan_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScanScope: The scan scope.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScanScope"))

    @builtins.property
    @jsii.member(jsii_name="attrScanType")
    def attr_scan_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScanType: The scan type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScanType"))

    @builtins.property
    @jsii.member(jsii_name="attrTriggerType")
    def attr_trigger_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TriggerType: Trigger type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTriggerType"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Change time of the scan rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ScanRuleProps":
        return typing.cast("ScanRuleProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a70ccd95b13c48b761f1021d6b74efbd5bd821f0883dfeea164b77f908d1be93)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a806ffd62f78d263c07cdb1f2a46254179f66706f544095e35f92dc0ff961dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20e13fff85127c631c68b8f24e1c20dd441ccc48708986cadbeb708a31766725)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.ScanRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "repo_tag_filter_pattern": "repoTagFilterPattern",
        "rule_name": "ruleName",
        "scan_scope": "scanScope",
        "scan_type": "scanType",
        "trigger_type": "triggerType",
        "namespaces": "namespaces",
        "repo_names": "repoNames",
    },
)
class ScanRuleProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        repo_tag_filter_pattern: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scan_scope: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scan_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        trigger_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespaces: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        repo_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ScanRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule

        :param instance_id: Property instanceId: ACR Instance ID.
        :param repo_tag_filter_pattern: Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression.
        :param rule_name: Property ruleName: The scan rule name.
        :param scan_scope: Property scanScope: The scan scope. Valid values: NAMESPACE: namespace. REPO: repository. INSTANCE: CR instance.
        :param scan_type: Property scanType: The scan type. Valid values: - VUL: Products Cloud Security Scanner. - SBOM: Product Content Analysis.
        :param trigger_type: Property triggerType: Trigger type. Valid values: - AUTO: automatically trigger. - MANUAL: manually trigger.
        :param namespaces: Property namespaces: The list of namespaces. - When the scan scope is NAMESPACE, this parameter cannot be empty. - If the scan scope is REPO, you must specify a unique Namespace for this parameter.
        :param repo_names: Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty. * When the scan scope is REPO, this parameter cannot be empty.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b74744baeddbb14a620721bfb4f22d5c7893aece19c868dff8fdfb42c4d3a61)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument repo_tag_filter_pattern", value=repo_tag_filter_pattern, expected_type=type_hints["repo_tag_filter_pattern"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument scan_scope", value=scan_scope, expected_type=type_hints["scan_scope"])
            check_type(argname="argument scan_type", value=scan_type, expected_type=type_hints["scan_type"])
            check_type(argname="argument trigger_type", value=trigger_type, expected_type=type_hints["trigger_type"])
            check_type(argname="argument namespaces", value=namespaces, expected_type=type_hints["namespaces"])
            check_type(argname="argument repo_names", value=repo_names, expected_type=type_hints["repo_names"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "repo_tag_filter_pattern": repo_tag_filter_pattern,
            "rule_name": rule_name,
            "scan_scope": scan_scope,
            "scan_type": scan_type,
            "trigger_type": trigger_type,
        }
        if namespaces is not None:
            self._values["namespaces"] = namespaces
        if repo_names is not None:
            self._values["repo_names"] = repo_names

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: ACR Instance ID.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def repo_tag_filter_pattern(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression.'''
        result = self._values.get("repo_tag_filter_pattern")
        assert result is not None, "Required property 'repo_tag_filter_pattern' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ruleName: The scan rule name.'''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scan_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property scanScope: The scan scope.

        Valid values:
        NAMESPACE: namespace.
        REPO: repository.
        INSTANCE: CR instance.
        '''
        result = self._values.get("scan_scope")
        assert result is not None, "Required property 'scan_scope' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scan_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property scanType: The scan type.

        Valid values:

        - VUL: Products Cloud Security Scanner.
        - SBOM: Product Content Analysis.
        '''
        result = self._values.get("scan_type")
        assert result is not None, "Required property 'scan_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def trigger_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property triggerType: Trigger type.

        Valid values:

        - AUTO: automatically trigger.
        - MANUAL: manually trigger.
        '''
        result = self._values.get("trigger_type")
        assert result is not None, "Required property 'trigger_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespaces(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property namespaces: The list of namespaces.

        - When the scan scope is NAMESPACE, this parameter cannot be empty.
        - If the scan scope is REPO, you must specify a unique Namespace for this parameter.
        '''
        result = self._values.get("namespaces")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def repo_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty. * When the scan scope is REPO, this parameter cannot be empty.'''
        result = self._values.get("repo_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScanRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IStorageDomainRoutingRule)
class StorageDomainRoutingRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.StorageDomainRoutingRule",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CR::StorageDomainRoutingRule``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosStorageDomainRoutingRule``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["StorageDomainRoutingRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5507d6d056dac4882e50e52204555c17d254208e3b29a79f7ba96ef578454917)
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
        '''Attribute CreateTime: The creation time of the Rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrModifyTime")
    def attr_modify_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModifyTime: The Modify Time of the Rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrModifyTime"))

    @builtins.property
    @jsii.member(jsii_name="attrRoutes")
    def attr_routes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Routes: Domain name routing entry.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRoutes"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleId: Rule ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "StorageDomainRoutingRuleProps":
        return typing.cast("StorageDomainRoutingRuleProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12d8b123b1ce0cedba9f22eda8861357b8714b8dbf62cf6b597c31a6409f3b81)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18864943ef041cdf54d9d11ef5be5cdd1556fc22992d33db4827bbec539a47f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c7293bc1727b2fb16374d5d1d29ff17b1c186aa5c59aa270233ea3156f3ca10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.StorageDomainRoutingRuleProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "routes": "routes"},
)
class StorageDomainRoutingRuleProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        routes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosStorageDomainRoutingRule.RoutesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``StorageDomainRoutingRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule

        :param instance_id: Property instanceId: ACR Instance ID.
        :param routes: Property routes: Domain name routing entry.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2cd5c174ef212b12b31e4304a00afe2294cfb41d9ccc934d6a8a8aeba4d0f77b)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument routes", value=routes, expected_type=type_hints["routes"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "routes": routes,
        }

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: ACR Instance ID.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def routes(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosStorageDomainRoutingRule.RoutesProperty]]]:
        '''Property routes: Domain name routing entry.'''
        result = self._values.get("routes")
        assert result is not None, "Required property 'routes' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosStorageDomainRoutingRule.RoutesProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StorageDomainRoutingRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IUserInfo)
class UserInfo(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.UserInfo",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CR::UserInfo``, which is used to create the information about a user.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUserInfo``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserInfoProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8a3de1be002cdbce52e5ac5ae2113e5f58cfcff4eb6df9fe8fea965ff428b2a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrLoginName")
    def attr_login_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoginName: Login name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoginName"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: User ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserInfoProps":
        return typing.cast("UserInfoProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5be26646b71c10cc2222e7d344865d433efd2b1a0203ec13f871682f4a08fe99)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__293f701fd37fe325e28f33ca11e7d0e68a8f07c6b021dc1c9294198e00c9af57)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__045d4aff4df563e0af8e2d2a65295621eeb7fd3a6d7f3fbcaf4d55dc7a26d057)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.UserInfoProps",
    jsii_struct_bases=[],
    name_mapping={"user": "user", "instance_id": "instanceId"},
)
class UserInfoProps:
    def __init__(
        self,
        *,
        user: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserInfo.UserProperty, typing.Dict[builtins.str, typing.Any]]],
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``UserInfo``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo

        :param user: Property user: User info. If user exists, will update user info.
        :param instance_id: Property instanceId: The ID of enterprise edition ACR instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6ba51e26c399d5e4a4c021251cd376fb40f7e7d68fa398c06c3f85dfe9ec8ae)
            check_type(argname="argument user", value=user, expected_type=type_hints["user"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "user": user,
        }
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def user(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserInfo.UserProperty]:
        '''Property user: User info.

        If user exists, will update user info.
        '''
        result = self._values.get("user")
        assert result is not None, "Required property 'user' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserInfo.UserProperty], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The ID of enterprise edition ACR instance.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserInfoProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IArtifactLifecycleRule)
class ArtifactLifecycleRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.ArtifactLifecycleRule",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CR::ArtifactLifecycleRule``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosArtifactLifecycleRule``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ArtifactLifecycleRuleProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72ed619aa5527295a048347d490d92d29df823c8b1b259a7a1f4b58a7b818f7b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArtifactLifecycleRuleId")
    def attr_artifact_lifecycle_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ArtifactLifecycleRuleId: The ID of the lifecycle management rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArtifactLifecycleRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrAuto")
    def attr_auto(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Auto: Specify whether to automatically execute the lifecycle management rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuto"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time of the lifecycle management rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: ACR Instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModifiedTime: Change time of the lifecycle management rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceName")
    def attr_namespace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceName: The name of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespaceName"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoName")
    def attr_repo_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RepoName: The name of the image repository.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRepoName"))

    @builtins.property
    @jsii.member(jsii_name="attrRetentionTagCount")
    def attr_retention_tag_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RetentionTagCount: The number of images that you want to retain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRetentionTagCount"))

    @builtins.property
    @jsii.member(jsii_name="attrScheduleTime")
    def attr_schedule_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ScheduleTime: The execution cycle of the lifecycle management rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScheduleTime"))

    @builtins.property
    @jsii.member(jsii_name="attrScope")
    def attr_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scope: The deletion scope.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScope"))

    @builtins.property
    @jsii.member(jsii_name="attrTagRegexp")
    def attr_tag_regexp(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TagRegexp: The regular expression that is used to indicate which image tags are retained.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTagRegexp"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ArtifactLifecycleRuleProps:
        return typing.cast(ArtifactLifecycleRuleProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee15ffe9f87bfd02b963307350c2945a353d2bda9343c544a10f02db849ec8d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__694841aa565f40bfcd3adfb3c1d0483ef47c42c7d3f002d27aba8e7b8529e29f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eff23fbc80426a9759d03781827d25992c37ab42a71e18d359136845efc26c90)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "ArtifactLifecycleRule",
    "ArtifactLifecycleRuleProps",
    "IArtifactLifecycleRule",
    "IInstance",
    "IInstanceEndpointAclPolicy",
    "IInstanceVpcEndpointLinkedVpc",
    "INamespace",
    "IRepoSyncRule",
    "IRepository",
    "IScanRule",
    "IStorageDomainRoutingRule",
    "IUserInfo",
    "Instance",
    "InstanceEndpointAclPolicy",
    "InstanceEndpointAclPolicyProps",
    "InstanceProps",
    "InstanceVpcEndpointLinkedVpc",
    "InstanceVpcEndpointLinkedVpcProps",
    "Namespace",
    "NamespaceProps",
    "RepoSyncRule",
    "RepoSyncRuleProps",
    "Repository",
    "RepositoryProps",
    "RosArtifactLifecycleRule",
    "RosArtifactLifecycleRuleProps",
    "RosInstance",
    "RosInstanceEndpointAclPolicy",
    "RosInstanceEndpointAclPolicyProps",
    "RosInstanceProps",
    "RosInstanceVpcEndpointLinkedVpc",
    "RosInstanceVpcEndpointLinkedVpcProps",
    "RosNamespace",
    "RosNamespaceProps",
    "RosRepoSyncRule",
    "RosRepoSyncRuleProps",
    "RosRepository",
    "RosRepositoryProps",
    "RosScanRule",
    "RosScanRuleProps",
    "RosStorageDomainRoutingRule",
    "RosStorageDomainRoutingRuleProps",
    "RosUserInfo",
    "RosUserInfoProps",
    "ScanRule",
    "ScanRuleProps",
    "StorageDomainRoutingRule",
    "StorageDomainRoutingRuleProps",
    "UserInfo",
    "UserInfoProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__522b9b25050d581d43a7d6f224e4093959014d9510aed8503b8d7a557df52c0d(
    *,
    auto: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repo_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    retention_tag_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    schedule_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_regexp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adb3dbb2fcceeb92389c57a33a2380fb99ad6f8f280aa5041731b1ccb8ec64b8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9bf3bea8437045a4644319e03710da515a5ca053c98618a2ac7a2df40f9b8b9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1b1a1ae578aecc990bc9252ade8c9d33280da9793e26a41cce44e99f0019f04(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae0b234f14cde13524019ef091f1f52a31642cc100bba4e0aac5893ca36387b8(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bf9e011c87e46c86bbb8569203fa1eee0c29f002d841de3e890671c93d8721f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceEndpointAclPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__317e44efe38940daf6dbaa1c3c8d456a495c28c7ee5acdfdf523b5fa1f1a387f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c349c53ce0aa73330e48b4cea714f00914c21364d037278368ecf4794068c61(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b120aed407efbbbd91b1adde2b158f55f6329995c58228a4103f3445fc0d7a67(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5300c733a5eec429c04f643005efc40f9270492c86bd4bc9ba9503beb6e4c16(
    *,
    entry: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_enable_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    module_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c86eace4cdb5944f9578def4ae93baca2d0e1c738f14d4c894c7e37d1c224d8b(
    *,
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    image_scanner: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_storage_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49ce4d3ccd33f7c74bba4081ed03c7157e9515d5f29f48e05526cd24eb43814c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceVpcEndpointLinkedVpcProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df407bd80b680f9d98a2d7fad7c276da2d418a0672655e96c43610692ee61782(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1ef39b2cdd3d3a9d08fca2f545ccfc3e44bee4930f3f7bab1593aeac0940b9f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__142e74867bdbcf6f134244b3ffef2b340a8d7acbfd72843eaab7c24f5554ee90(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__376f4934a7308bfe1233970e347ab5d9dc7662412ad88342c442914e162f784d(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vswitch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_create_dns_record_in_pvzt: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    module_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2077531d4e80f0006bc9d0544435c51e4e717d2397dad1cb4e4caa273654d9e1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[NamespaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__649321ac348046ef842cc08f280074398eeed193e9fa809bf42ab40375c0875f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edde52fdd673e6fd279dbde4ad9cb8ad48e8e294d7b7004ebab2c76fff87accf(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b91664a0cad343a5519e3d23d889b860656169fc72a8d40e692a519ece8722c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b84993afb12c0064265f87561d23aa1debeaaf76197b72d4b90cec1d64f0d3c(
    *,
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_create: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_visibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83aa1cf31b8e275b178f8cf78b71348f5ce0a79ed97c493ee18d8d9b68d0268f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RepoSyncRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edf453895ae01d4704c1d9c50c3fb74839793abfa98cd2a1719a83b84681f509(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40577b098580b62a0f46bbeb69d5d4f40968820f9ead82c4d488afbafef61aab(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37f921d09e2913813b76644f1bce36897ee26041447e5c77576dd1e8246f9332(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bc505279ae460877f8f2e8d5617c813254128e49aae36d14606660f5de8aeb2(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sync_rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sync_scope: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sync_trigger: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_namespace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    repo_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repo_name_filter: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_filter: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_repo_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e337b0af611e60f6ab3e1822b8baf5abf62c4e9d0781ee266725d722c21ba72(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RepositoryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbfd71c4a6427a877e95566d39cf9b98ee7f14dce9ccc7089df24901acac2afc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c10cabb2c4b45fffe94aabcf24ca70f81d0f83de12b49f9ce2f64262e98f08d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14bc23d536d453675508f2ea62ad5be54e28a88fb3016538d3172ade8c84adc0(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__770794f31d73f05c8ca09c24fadf12c59f2ff3ca5019eb763587978cb7238d4f(
    *,
    repo_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    repo_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    repo_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    summary: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    detail: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repo_source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRepository.RepoSourceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tag_immutability: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9df4fd793d9b508abc1d0a1186e7618747e882aaf52d64b593c4d34545ad293(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosArtifactLifecycleRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b9a2dd737041b851874ebb507f29f6c135fba83fbf9d47e367ad4ee8dd401d7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb52673d6a582af8fc0f6e74f31045e5ef0ccf445eaa46487de77ee67867b6f9(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f35f0ec3cc1612d28601cfad1ab3f8890fc58c1d99ea341356f9df038c976426(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec3695a243d939260db4e1ab97b5164fbf6d19fbe80378ebbac101e38541d9d8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__838d8e03eb2c119804745fdecc103c7a96bfe887cbcdfc90351540ef0647ee75(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8222f176a97bbd700dd7060e09697e3a05f1f86a2453ce8741740840bf073b0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__136b61ab6704c06b905402b2309ce4490e42e95e7dc15bc4843804209f6117ab(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3dd64ff57de7404247e6af08d425e8ce7f1707051e294f3f512063634feeaff6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__606dc7cc9577c843ec510f6c0dd104f058974ac2f2920c4ae86d10fb0ea649f7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e23d072bfb3e1912be1532219b2bac8afbbea6ee09d0357e5e3a9302e7ee25f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d57f6a2068efc42960a9816099d952a39b8b32d9901d12e149929032a62af24(
    *,
    auto: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repo_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    retention_tag_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    schedule_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_regexp: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c5fdbdda33495b9931062eae9436ee77830a055c8440e2e58bbca59a6393a06(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f883161cecdf0eff2204bff1afbe51a46615d375fd4713fbdc92d29a5209057(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d1747291ca173745d9f15863cff720203044a780f7d8091206602a1d1251418(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b657cd41328a24b68718dd4502fa8c3ffbf31aa166a93ddd192e98e22d165d3e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__deae97e8dcedaf2db53de39c712a33b5d1bdba3fb35d8ded42deebd10f7129bc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac4f98bbece3fd5b1eb0b25713bb02461442f97d16aa77b8c47b76811cae4223(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e523561c229a744475dfce70bfaf3830d8f5c42a0373f88f9193a24cfd7e6ee4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1487d584091179a29614eda4947660d258314bf9065336f16e268f01c4825772(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__607ff8897420ed2658ea6037991f7b8296082d1d2ff8cdfd4e092a32059a5eed(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be1a86530e046cf4ac7f0c487001ef40a1a5b2a2dbff31edecf7cefedb26624e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15d2cdcf21245d3264b8d262a0b3cecf9fbb1a9ecbf7f2d514bfb5169d747999(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ffbdfe8ae9d507d2bc136e9c65072d54bfbca0dd9ead03de39328fce07ff0d8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceEndpointAclPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d9e125d113c44390f6180355b8418d53f8736935061955ce15a081a863e12da(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__077f67e7b38f7945204f3a41d4dbaac4948238c9857f06384d00141f592b0ced(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8046d0371cb38018af179c787f8bc1ff265f20647bde2318f4b198baaca4b9e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2618534673728e3ade535fe6362707f1e351e5c24301ac758bbf8c577e5955cc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e3944d6aa17ded2e31dc6fa6a8921e26c078d3ec2b6333803a74ba126a30341(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__856553f2204122467e5678458b6a222af2d0a268f19a8fd691d8901464109412(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c6f7f694227b53bc181ecf119cb90c037a0afe3af75faf5036fda7c9c2e77fc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a6491ab9f57f3e381d0dd42929453430101a69f4c56eab12060952137e0ea9e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4dcf475480f4857bacb6ef20fa4c0e3530faf4f3fab09069a941f348550e48ec(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69d590f4f8bba22cda812dd489112b6e74bb79c21c2feb7d77bcc34d3ded6aa7(
    *,
    entry: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_enable_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    module_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35a724d10579d241d59ad042448e8f45b746ddf571a74fc7dc2546bb6e594022(
    *,
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    image_scanner: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_storage_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6453e1191aa0a7b6005e54f71071a883d311e5459dfd04a24e4c640e49faae2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceVpcEndpointLinkedVpcProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f34878445bf30a62cd21c36e5e1faf09fc534a2a243abf9cbc2128712c631311(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c1568e60cdb31e98f524fd09305cdde5a0a8a29e11345772ee0d94ea51322f4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78d2da8a6baa8d4855f9cf046d4e882bda175259d2444dedbfc065f1aa5b99fb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d1dae0055d77da385ce061072cf99c2c5fa3a9c36abad9c22e90644b242334d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c5c0fa289b845b59321d0f7565d519fb452ae215cd2828f2f598196beb5a5d2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cdcb711e831abea8fff2c30ff7accc8b92c05fe831f8c4cf0a42de230680bf3f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__545097d0f8754a9b5212d6d9e3e7b460d340fc510341a29b2e642d014084fa8b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3afe4c9344daa8fce87605dd4f914b0697dda48d3e6fba35048cb0e6693f7fe8(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vswitch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_create_dns_record_in_pvzt: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    module_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fb2ebb41a7f810ef8b75d45521a62cbba0462dcf6434d222b5b0851ffad2828(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNamespaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5da41c343a439fd3449ba2d9d95de314d569c4f8da972248135f7c441b3c7c7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4aacf47621f65b56b3c94a4ec1b93af5163ab42783bd76aca9a78d671cc91836(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33fb8c7005ebe9a27f2694ccae3b20f502ad353a01069ba711e31808ed380893(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b89539069d1f071feaaf93ebfc5df3566191fcf31194263fc90974d9037e0c7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f396c8bbc3f2d758a989005199f18b9076f2419e7bd7b55ee396670a1517061(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4acac0ee7e2125b518631033b1878d8ee4e945511fc8ae9dbd31a2c513d3999c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c979e01666c4c69bf4fa9288f2c647d2f991d497cb411eff12dbbd632a55466(
    *,
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_create: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_visibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b522354b22e54862a38e6529b303872c5a4259fd462f0a1b1a442ef43dd7c39d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRepoSyncRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21f07bbfdd268c2a0a40fc8787786df3270995b558ffc7072e4c18eeff74779e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65b0c5ae342e970c2876625cf514757fb767a9d3349d97324867493d7afba255(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c46f04bb35fb461dd9a71f963292df6fd362e31927d3ed8589290c33ba7a2a30(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7281e5dc0fd41928292bd423fe252d79d19e4d426bf4acc0d26dee776c53cc9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81a50a53a031233c9cfb91cceaec926e1b5abf648ed935bd59107469081b9b84(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb4c729632c1af4a3a9243a52932c0d759dfcbd01d34807ae5625af88bbe760a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53da65fc09e12a19806dfe84d4e6ef618c94e44450a04cd26aef6232cc5b8c3a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ddfe4cd195acfde52d6212282469c099caa15a119c87567931c3352700a65daf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56b976919cf883641e9b265e3dcbbd5fcd52a039985f22a0a8f88663807ea0d9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8bb12ca8c3c75caba4d90f31299dbc797cc762d0905f4283d5651bf9fe7390d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c623599c28b966d85a68eb40acdd7f2f4df34e0bbdfad5ebd36233af07820f4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eedb437d069dcbfc569649e65dafc0f21af0e728aeff63d9fd02a67975c162c1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0631768638c56b2285af553b9dfa0c98d3ef34325a970ab1f6869d1e2681f26(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2fcd9150502394cb283b34eba1f43aed7f897c8521ec3614c83f248ee7ce227(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__309f5b984e8c89a9fb6e318be161cb59740b4ae08923e11fc900a551e452c698(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__953f4284576e01ded591db643c476f5f91ddc278ff029dd093ffedf2251eb39d(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sync_rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sync_scope: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sync_trigger: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_namespace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    repo_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repo_name_filter: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_filter: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_repo_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd82279c4e3a8e3100710412c9a72574f1d951e844d897710849fa3e82c7a06d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRepositoryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f26e3e1f5e949447b49bde1857492388c446c920362385d771c9febbdbad1e5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df2001f5c4579d080595a6b192f38940c73bee3eb0d6d94456d9371e46266182(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7445a767f78c6818ef4e8b5135d91d8b83b9786a83365638e7895f3296cfaa14(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__246ee6f0547c88af5962562ed42b3595a17d8661fc67f00d496c8f8a66b52c66(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e21d4e3904c66e21ed714b2d0d10aae11394048b0fb7f95f15497d5320e7ec0d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12fa7af66ce2447f3a13638184e4cf5c5f3a6ec0e69ba35a03984351de0f3130(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c944d362f95ac3df52c26cdef29e931ca30746c9881e60c1c96424b52973914(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0be695aab2ae753e3a07ebb125da6a5d8f728cd13fc601c50ca35d7a03b9c8ab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__073ff630bdbb4e705a31e02cbd03c27c5ba458521ac21f7e4e1b18be343341bd(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRepository.RepoSourceProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__711b4c559dda57082fab7d00f8789a24eb5a0576e709db701d6220185393dbe5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30fb15ad805762a2affd5c4242b1a367a07c81aede488666f446faf2cc5b839e(
    *,
    is_auto_build: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    is_disable_cache: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    is_oversea: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    source_repo_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_repo_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_repo_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__312fd6737af4d8ad566a8cb2b65271789e087dcd86fefae36f0cc1aa1bfac9ad(
    *,
    repo_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    repo_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    repo_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    summary: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    detail: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repo_source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRepository.RepoSourceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tag_immutability: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08dc1a8f311fc70495434372d12ab3b2529f0c345577423c69bf5f7bbf1527e4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosScanRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a580f5d9bf395a842beab36cee4bd30f17f14defc1b4e44db768f7ae04a88483(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25b039412733e92e7cf9155b520ee9ecdc9aabaf492f4feff7fe32da75fdf7fc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__000d3e39948e8a6c05d9ccb75f2c9c211266aec4ea7931723774b99ed825430c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a3465410649facf905eae0d5b6ab3bad05c77775e4b7e9b134e8a39d61f561f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bd6d407d2c46facddd8286558512908d06f64b504448ba9db2f6cc02646ebdf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67f415e8096ac01c8b73fcb49ee113b9e1698d9e715c86bc4e925c54dd99b746(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aaa1ca8a8d9e3cb629486735ac8ff39f2dc62c12c1cec73e8cab2f27e9a6689c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8840e1bccf4774de5d517c3bcf46a757f1723605c4cf4be7675e436b268db18b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__329454a06213e1841acf099cbf61b82176457577bd58cf8438487c3738fe4400(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a212110010a87882c53a41aefa3b19fe1c6edd19ce323089819728a13197b580(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d5f28076bcf59d9bb2e59eb58c77fe6882d1f16e47b1bff0d507db05bce2365(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    repo_tag_filter_pattern: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scan_scope: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scan_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    trigger_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespaces: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    repo_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9511cc7ffe6d79fb39018dfd54f55cad2f9e2e937a4ac7f8c3d0038434260328(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosStorageDomainRoutingRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc359dab2a60719ee25d34dc9aca48445ab132605786686844e08715c8378959(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09edd2babfd8c0de3abcd868cf631228df0e8dfa5bf3447bd7a0054cd17e5a56(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72ea8348cc711a568177e0b377f08fa8773d3be9dacb17b41c6de7e7970991db(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0283b54d2a83ca4330207693d533b70875b4dd62395c9248cc9a0a40dc0759b4(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosStorageDomainRoutingRule.RoutesProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1458829a0176947c20185ef2aceed5dcf002c144d1974fe6dbb5865d9349cb0(
    *,
    endpoint_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    storage_domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7dd450a0763cc66e9b7eb5b92ffb56e0528be7d60f844145df3d8c70697b8069(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    routes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosStorageDomainRoutingRule.RoutesProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43b817332fede769fec9e7c5375a532c037ece7f640b996a08691de2753606e5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserInfoProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__458d186bcbb9a9eb85d7b1c946e821d7022a9adf5ddb4d08f6f06362b3cd31d9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f777632f9311d65eb2f8534ce3abb2ea14c42479cf366313f0d77531f849315(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__188646b9f28ba5e23adaafa4b202ab1376c74d2d2b250080985a2a462ec5b0ce(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserInfo.UserProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f863459e28743038ae18bde99b3ef37145c31fb0cc8800411f96ccc02e8f24b5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0990f820abb8f35191865c2868d0499ba2b4aaa28189777c6e6c0c55ce014524(
    *,
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8231d078f55c057bb9c00fd75f01a2237eda36a2c2ed3b7d8c842f744260dc6c(
    *,
    user: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserInfo.UserProperty, typing.Dict[builtins.str, typing.Any]]],
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11be6b8a7c599d5c5a66ad0a00334aef309d06d5434f33fd46dcda2146b02c5b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ScanRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a70ccd95b13c48b761f1021d6b74efbd5bd821f0883dfeea164b77f908d1be93(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a806ffd62f78d263c07cdb1f2a46254179f66706f544095e35f92dc0ff961dd(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20e13fff85127c631c68b8f24e1c20dd441ccc48708986cadbeb708a31766725(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b74744baeddbb14a620721bfb4f22d5c7893aece19c868dff8fdfb42c4d3a61(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    repo_tag_filter_pattern: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scan_scope: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scan_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    trigger_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespaces: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    repo_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5507d6d056dac4882e50e52204555c17d254208e3b29a79f7ba96ef578454917(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[StorageDomainRoutingRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12d8b123b1ce0cedba9f22eda8861357b8714b8dbf62cf6b597c31a6409f3b81(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18864943ef041cdf54d9d11ef5be5cdd1556fc22992d33db4827bbec539a47f1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c7293bc1727b2fb16374d5d1d29ff17b1c186aa5c59aa270233ea3156f3ca10(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cd5c174ef212b12b31e4304a00afe2294cfb41d9ccc934d6a8a8aeba4d0f77b(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    routes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosStorageDomainRoutingRule.RoutesProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8a3de1be002cdbce52e5ac5ae2113e5f58cfcff4eb6df9fe8fea965ff428b2a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserInfoProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5be26646b71c10cc2222e7d344865d433efd2b1a0203ec13f871682f4a08fe99(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__293f701fd37fe325e28f33ca11e7d0e68a8f07c6b021dc1c9294198e00c9af57(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__045d4aff4df563e0af8e2d2a65295621eeb7fd3a6d7f3fbcaf4d55dc7a26d057(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6ba51e26c399d5e4a4c021251cd376fb40f7e7d68fa398c06c3f85dfe9ec8ae(
    *,
    user: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserInfo.UserProperty, typing.Dict[builtins.str, typing.Any]]],
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72ed619aa5527295a048347d490d92d29df823c8b1b259a7a1f4b58a7b818f7b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ArtifactLifecycleRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee15ffe9f87bfd02b963307350c2945a353d2bda9343c544a10f02db849ec8d2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__694841aa565f40bfcd3adfb3c1d0483ef47c42c7d3f002d27aba8e7b8529e29f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eff23fbc80426a9759d03781827d25992c37ab42a71e18d359136845efc26c90(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
