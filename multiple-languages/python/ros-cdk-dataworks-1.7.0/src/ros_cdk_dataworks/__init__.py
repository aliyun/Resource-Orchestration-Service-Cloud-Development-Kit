'''
## Aliyun ROS DATAWORKS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DATAWORKS from '@alicloud/ros-cdk-dataworks';
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-dataworks.IProject")
class IProject(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Project``.'''

    @builtins.property
    @jsii.member(jsii_name="attrEnvTypes")
    def attr_env_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvTypes: The environment of the workspace.

        Valid values: PROD and DEV.
        The value PROD indicates the production environment. Workspaces in basic mode provide only the production environment.
        The value DEV indicates the development environment. Workspaces in standard mode provide both the development environment and the production environment.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Indicates whether the workspace is the default workspace.

        Valid values:
        1: The workspace is the default workspace.
        0: The workspace is not the default workspace.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProjectId")
    def attr_project_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectId: The ID of the workspace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProjectIdentifier")
    def attr_project_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectIdentifier: The name of the workspace.

        The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProtectedMode")
    def attr_protected_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProtectedMode: Indicates whether the workspace protection feature is enabled.

        Valid values:
        1: The workspace protection feature is enabled.
        0: The workspace protection feature is disabled.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResidentArea")
    def attr_resident_area(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResidentArea: The type of the workspace.

        Valid values: private and swap.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSchedulerMaxRetryTimes")
    def attr_scheduler_max_retry_times(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SchedulerMaxRetryTimes: The default maximum number of automatic reruns that are allowed after an error occurs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSchedulerRetryInterval")
    def attr_scheduler_retry_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SchedulerRetryInterval: The interval between automatic reruns after an error occurs.

        Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTablePrivacyMode")
    def attr_table_privacy_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TablePrivacyMode: Indicates whether the MaxCompute tables in the workspace are visible to the users within the tenant.

        Valid values:
        0: The MaxCompute tables are invisible to the users within a tenant.
        1: The MaxCompute tables are visible to the users within a tenant.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProjectProps":
        ...


class _IProjectProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Project``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dataworks.IProject"

    @builtins.property
    @jsii.member(jsii_name="attrEnvTypes")
    def attr_env_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvTypes: The environment of the workspace.

        Valid values: PROD and DEV.
        The value PROD indicates the production environment. Workspaces in basic mode provide only the production environment.
        The value DEV indicates the development environment. Workspaces in standard mode provide both the development environment and the production environment.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Indicates whether the workspace is the default workspace.

        Valid values:
        1: The workspace is the default workspace.
        0: The workspace is not the default workspace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectId")
    def attr_project_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectId: The ID of the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProjectId"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectIdentifier")
    def attr_project_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectIdentifier: The name of the workspace.

        The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProjectIdentifier"))

    @builtins.property
    @jsii.member(jsii_name="attrProtectedMode")
    def attr_protected_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProtectedMode: Indicates whether the workspace protection feature is enabled.

        Valid values:
        1: The workspace protection feature is enabled.
        0: The workspace protection feature is disabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProtectedMode"))

    @builtins.property
    @jsii.member(jsii_name="attrResidentArea")
    def attr_resident_area(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResidentArea: The type of the workspace.

        Valid values: private and swap.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResidentArea"))

    @builtins.property
    @jsii.member(jsii_name="attrSchedulerMaxRetryTimes")
    def attr_scheduler_max_retry_times(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SchedulerMaxRetryTimes: The default maximum number of automatic reruns that are allowed after an error occurs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSchedulerMaxRetryTimes"))

    @builtins.property
    @jsii.member(jsii_name="attrSchedulerRetryInterval")
    def attr_scheduler_retry_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SchedulerRetryInterval: The interval between automatic reruns after an error occurs.

        Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSchedulerRetryInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrTablePrivacyMode")
    def attr_table_privacy_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TablePrivacyMode: Indicates whether the MaxCompute tables in the workspace are visible to the users within the tenant.

        Valid values:
        0: The MaxCompute tables are invisible to the users within a tenant.
        1: The MaxCompute tables are visible to the users within a tenant.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTablePrivacyMode"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProjectProps":
        return typing.cast("ProjectProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IProject).__jsii_proxy_class__ = lambda : _IProjectProxy


@jsii.implements(IProject)
class Project(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dataworks.Project",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DataWorks::Project``, which is used to create a DataWorks workspace.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosProject``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-project
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b77b7fe050ab04aae4a03d6910ab50a1e2aecd1afa08e7ae8905cef9dc469f7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEnvTypes")
    def attr_env_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvTypes: The environment of the workspace.

        Valid values: PROD and DEV.
        The value PROD indicates the production environment. Workspaces in basic mode provide only the production environment.
        The value DEV indicates the development environment. Workspaces in standard mode provide both the development environment and the production environment.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Indicates whether the workspace is the default workspace.

        Valid values:
        1: The workspace is the default workspace.
        0: The workspace is not the default workspace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectId")
    def attr_project_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectId: The ID of the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProjectId"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectIdentifier")
    def attr_project_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectIdentifier: The name of the workspace.

        The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProjectIdentifier"))

    @builtins.property
    @jsii.member(jsii_name="attrProtectedMode")
    def attr_protected_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProtectedMode: Indicates whether the workspace protection feature is enabled.

        Valid values:
        1: The workspace protection feature is enabled.
        0: The workspace protection feature is disabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProtectedMode"))

    @builtins.property
    @jsii.member(jsii_name="attrResidentArea")
    def attr_resident_area(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResidentArea: The type of the workspace.

        Valid values: private and swap.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResidentArea"))

    @builtins.property
    @jsii.member(jsii_name="attrSchedulerMaxRetryTimes")
    def attr_scheduler_max_retry_times(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SchedulerMaxRetryTimes: The default maximum number of automatic reruns that are allowed after an error occurs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSchedulerMaxRetryTimes"))

    @builtins.property
    @jsii.member(jsii_name="attrSchedulerRetryInterval")
    def attr_scheduler_retry_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SchedulerRetryInterval: The interval between automatic reruns after an error occurs.

        Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSchedulerRetryInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrTablePrivacyMode")
    def attr_table_privacy_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TablePrivacyMode: Indicates whether the MaxCompute tables in the workspace are visible to the users within the tenant.

        Valid values:
        0: The MaxCompute tables are invisible to the users within a tenant.
        1: The MaxCompute tables are visible to the users within a tenant.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTablePrivacyMode"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProjectProps":
        return typing.cast("ProjectProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__132a1e439a3f44255c59e1876c50a1d0dbb1deae76bf83e7ec342388b151215e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a33abfc4447457eb144f701c66f78c2dbf91c79b91a730649062902e1a60d1a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e36ccefec45f5cc33884ff1b150db065c8914f15e21ecc8260d3de9baeea7a0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dataworks.ProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "project_identifier": "projectIdentifier",
        "disable_development": "disableDevelopment",
        "is_allow_download": "isAllowDownload",
        "project_description": "projectDescription",
        "project_mode": "projectMode",
        "project_name": "projectName",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class ProjectProps:
    def __init__(
        self,
        *,
        project_identifier: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        disable_development: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_allow_download: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        project_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        project_mode: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosProject.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Project``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-project

        :param project_identifier: Property projectIdentifier: The name of the workspace. The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
        :param disable_development: Property disableDevelopment: Specifies whether to disable the Development role. Valid values: false: enables the Development role. true: disables the Development role. Default value: false.
        :param is_allow_download: Property isAllowDownload: Specifies whether query result download from DataStudio is allowed. Valid values: true: allowed false: not allowed Default value: true.
        :param project_description: Property projectDescription: The description of the workspace. If not provided, it is the same as ProjectIdentifier.
        :param project_mode: Property projectMode: The mode of the workspace. For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values: 2: basic mode 3: standard mode Default value: 2.
        :param project_name: Property projectName: The display name of the workspace. If not provided, it is the same as ProjectIdentifier.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags to attach to workspace. Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__533f59efb9941da85fdd10266dc4f96b7ef86c4f7bc7c826b913c23c3c531e77)
            check_type(argname="argument project_identifier", value=project_identifier, expected_type=type_hints["project_identifier"])
            check_type(argname="argument disable_development", value=disable_development, expected_type=type_hints["disable_development"])
            check_type(argname="argument is_allow_download", value=is_allow_download, expected_type=type_hints["is_allow_download"])
            check_type(argname="argument project_description", value=project_description, expected_type=type_hints["project_description"])
            check_type(argname="argument project_mode", value=project_mode, expected_type=type_hints["project_mode"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "project_identifier": project_identifier,
        }
        if disable_development is not None:
            self._values["disable_development"] = disable_development
        if is_allow_download is not None:
            self._values["is_allow_download"] = is_allow_download
        if project_description is not None:
            self._values["project_description"] = project_description
        if project_mode is not None:
            self._values["project_mode"] = project_mode
        if project_name is not None:
            self._values["project_name"] = project_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def project_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectIdentifier: The name of the workspace.

        The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
        '''
        result = self._values.get("project_identifier")
        assert result is not None, "Required property 'project_identifier' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def disable_development(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property disableDevelopment: Specifies whether to disable the Development role.

        Valid values:
        false: enables the Development role.
        true: disables the Development role.
        Default value: false.
        '''
        result = self._values.get("disable_development")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_allow_download(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isAllowDownload: Specifies whether query result download from DataStudio is allowed.

        Valid values:
        true: allowed
        false: not allowed
        Default value: true.
        '''
        result = self._values.get("is_allow_download")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def project_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property projectDescription: The description of the workspace.

        If not provided, it is the same as ProjectIdentifier.
        '''
        result = self._values.get("project_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def project_mode(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property projectMode: The mode of the workspace.

        For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
        2: basic mode
        3: standard mode
        Default value: 2.
        '''
        result = self._values.get("project_mode")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property projectName: The display name of the workspace.

        If not provided, it is the same as ProjectIdentifier.
        '''
        result = self._values.get("project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosProject.TagsProperty"]]:
        '''Property tags: Tags to attach to workspace.

        Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosProject.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProject(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dataworks.RosProject",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DataWorks::Project``, which is used to create a DataWorks workspace.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Project`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-project
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2dd97b8887d0cadb68d2068183642b878aad0a6d7c680b9189d9f6b3d1e5293)
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
            type_hints = typing.get_type_hints(_typecheckingstub__35d2fa369b4ca0ae728d6a481523387553cf22e1c3f58a0a9576ab222ef5ada4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvTypes")
    def attr_env_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        EnvTypes: The environment of the workspace. Valid values: PROD and DEV.
        The value PROD indicates the production environment. Workspaces in basic mode provide only the production environment.
        The value DEV indicates the development environment. Workspaces in standard mode provide both the development environment and the production environment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        IsDefault: Indicates whether the workspace is the default workspace. Valid values:
        1: The workspace is the default workspace.
        0: The workspace is not the default workspace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectId")
    def attr_project_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProjectId: The ID of the workspace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectId"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectIdentifier")
    def attr_project_identifier(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProjectIdentifier: The name of the workspace. The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectIdentifier"))

    @builtins.property
    @jsii.member(jsii_name="attrProtectedMode")
    def attr_protected_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        ProtectedMode: Indicates whether the workspace protection feature is enabled. Valid values:
        1: The workspace protection feature is enabled.
        0: The workspace protection feature is disabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProtectedMode"))

    @builtins.property
    @jsii.member(jsii_name="attrResidentArea")
    def attr_resident_area(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResidentArea: The type of the workspace. Valid values: private and swap.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResidentArea"))

    @builtins.property
    @jsii.member(jsii_name="attrSchedulerMaxRetryTimes")
    def attr_scheduler_max_retry_times(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SchedulerMaxRetryTimes: The default maximum number of automatic reruns that are allowed after an error occurs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSchedulerMaxRetryTimes"))

    @builtins.property
    @jsii.member(jsii_name="attrSchedulerRetryInterval")
    def attr_scheduler_retry_interval(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SchedulerRetryInterval: The interval between automatic reruns after an error occurs. Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSchedulerRetryInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrTablePrivacyMode")
    def attr_table_privacy_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        TablePrivacyMode: Indicates whether the MaxCompute tables in the workspace are visible to the users within the tenant. Valid values:
        0: The MaxCompute tables are invisible to the users within a tenant.
        1: The MaxCompute tables are visible to the users within a tenant.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTablePrivacyMode"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__bfe1fb78c1a9c66f2ccbe894441d8edf7c3015839e2285d6e8b717d4f2f55b6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="projectIdentifier")
    def project_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectIdentifier: The name of the workspace. The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectIdentifier"))

    @project_identifier.setter
    def project_identifier(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c06d9eff3c271dd126b972895d22a72b82caaf73ca0ab906474c03461c5548bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectIdentifier", value)

    @builtins.property
    @jsii.member(jsii_name="disableDevelopment")
    def disable_development(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        disableDevelopment: Specifies whether to disable the Development role. Valid values:
        false: enables the Development role.
        true: disables the Development role.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "disableDevelopment"))

    @disable_development.setter
    def disable_development(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96b6b89edf4a871ce0f2c0de34f85d7b0f9afc2e2558eeca94524098ee65c536)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "disableDevelopment", value)

    @builtins.property
    @jsii.member(jsii_name="isAllowDownload")
    def is_allow_download(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isAllowDownload: Specifies whether query result download from DataStudio is allowed. Valid values:
        true: allowed
        false: not allowed
        Default value: true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isAllowDownload"))

    @is_allow_download.setter
    def is_allow_download(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2777b5bce5df0e4143fb0b555d3f49866a5cb1c68f7bbf1751a2ef1cdcb45c19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isAllowDownload", value)

    @builtins.property
    @jsii.member(jsii_name="projectDescription")
    def project_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: projectDescription: The description of the workspace. If not provided, it is the same as ProjectIdentifier.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "projectDescription"))

    @project_description.setter
    def project_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b85f4e900012ccc964079d9f0b5602d0a060ee540746b0f2484941195bc66a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectDescription", value)

    @builtins.property
    @jsii.member(jsii_name="projectMode")
    def project_mode(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        projectMode: The mode of the workspace. For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
        2: basic mode
        3: standard mode
        Default value: 2.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "projectMode"))

    @project_mode.setter
    def project_mode(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e564ad8bca5d6c786449c4e1c673f6f9ad6389e3a8c2dab0aae8367e5218f4a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectMode", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: projectName: The display name of the workspace. If not provided, it is the same as ProjectIdentifier.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__476b2e288e331b0f8a6bcd67441c15b6c227eed22987a2800f318e5c610dc17c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__7346a15f26addae4edba8e4917f3cc4a508cf6fb3629abfbef1faf1ed8b43b3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosProject.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to workspace. Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosProject.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosProject.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87b1a75bc6e96aa3363511327718f3b93cb0471765c114fc36eb9132a431d32b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dataworks.RosProject.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__438a8c42ddee0b1dc7c66ffc529602bd25272dc1e9a03bb48af24d99460c571c)
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
    jsii_type="@alicloud/ros-cdk-dataworks.RosProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "project_identifier": "projectIdentifier",
        "disable_development": "disableDevelopment",
        "is_allow_download": "isAllowDownload",
        "project_description": "projectDescription",
        "project_mode": "projectMode",
        "project_name": "projectName",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosProjectProps:
    def __init__(
        self,
        *,
        project_identifier: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        disable_development: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_allow_download: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        project_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        project_mode: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosProject.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosProject``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-project

        :param project_identifier: 
        :param disable_development: 
        :param is_allow_download: 
        :param project_description: 
        :param project_mode: 
        :param project_name: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d7687e8f6b04a1ccea7835641a6257787702a4eeaee8da508de8b610560a4d2)
            check_type(argname="argument project_identifier", value=project_identifier, expected_type=type_hints["project_identifier"])
            check_type(argname="argument disable_development", value=disable_development, expected_type=type_hints["disable_development"])
            check_type(argname="argument is_allow_download", value=is_allow_download, expected_type=type_hints["is_allow_download"])
            check_type(argname="argument project_description", value=project_description, expected_type=type_hints["project_description"])
            check_type(argname="argument project_mode", value=project_mode, expected_type=type_hints["project_mode"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "project_identifier": project_identifier,
        }
        if disable_development is not None:
            self._values["disable_development"] = disable_development
        if is_allow_download is not None:
            self._values["is_allow_download"] = is_allow_download
        if project_description is not None:
            self._values["project_description"] = project_description
        if project_mode is not None:
            self._values["project_mode"] = project_mode
        if project_name is not None:
            self._values["project_name"] = project_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def project_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectIdentifier: The name of the workspace. The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
        '''
        result = self._values.get("project_identifier")
        assert result is not None, "Required property 'project_identifier' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def disable_development(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        disableDevelopment: Specifies whether to disable the Development role. Valid values:
        false: enables the Development role.
        true: disables the Development role.
        Default value: false.
        '''
        result = self._values.get("disable_development")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_allow_download(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isAllowDownload: Specifies whether query result download from DataStudio is allowed. Valid values:
        true: allowed
        false: not allowed
        Default value: true.
        '''
        result = self._values.get("is_allow_download")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def project_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: projectDescription: The description of the workspace. If not provided, it is the same as ProjectIdentifier.
        '''
        result = self._values.get("project_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def project_mode(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        projectMode: The mode of the workspace. For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
        2: basic mode
        3: standard mode
        Default value: 2.
        '''
        result = self._values.get("project_mode")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: projectName: The display name of the workspace. If not provided, it is the same as ProjectIdentifier.
        '''
        result = self._values.get("project_name")
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
    def tags(self) -> typing.Optional[typing.List[RosProject.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to workspace. Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosProject.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IProject",
    "Project",
    "ProjectProps",
    "RosProject",
    "RosProjectProps",
]

publication.publish()

def _typecheckingstub__6b77b7fe050ab04aae4a03d6910ab50a1e2aecd1afa08e7ae8905cef9dc469f7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__132a1e439a3f44255c59e1876c50a1d0dbb1deae76bf83e7ec342388b151215e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a33abfc4447457eb144f701c66f78c2dbf91c79b91a730649062902e1a60d1a5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e36ccefec45f5cc33884ff1b150db065c8914f15e21ecc8260d3de9baeea7a0e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__533f59efb9941da85fdd10266dc4f96b7ef86c4f7bc7c826b913c23c3c531e77(
    *,
    project_identifier: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    disable_development: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_allow_download: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_mode: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosProject.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2dd97b8887d0cadb68d2068183642b878aad0a6d7c680b9189d9f6b3d1e5293(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35d2fa369b4ca0ae728d6a481523387553cf22e1c3f58a0a9576ab222ef5ada4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bfe1fb78c1a9c66f2ccbe894441d8edf7c3015839e2285d6e8b717d4f2f55b6c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c06d9eff3c271dd126b972895d22a72b82caaf73ca0ab906474c03461c5548bf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96b6b89edf4a871ce0f2c0de34f85d7b0f9afc2e2558eeca94524098ee65c536(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2777b5bce5df0e4143fb0b555d3f49866a5cb1c68f7bbf1751a2ef1cdcb45c19(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b85f4e900012ccc964079d9f0b5602d0a060ee540746b0f2484941195bc66a8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e564ad8bca5d6c786449c4e1c673f6f9ad6389e3a8c2dab0aae8367e5218f4a0(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__476b2e288e331b0f8a6bcd67441c15b6c227eed22987a2800f318e5c610dc17c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7346a15f26addae4edba8e4917f3cc4a508cf6fb3629abfbef1faf1ed8b43b3c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87b1a75bc6e96aa3363511327718f3b93cb0471765c114fc36eb9132a431d32b(
    value: typing.Optional[typing.List[RosProject.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__438a8c42ddee0b1dc7c66ffc529602bd25272dc1e9a03bb48af24d99460c571c(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d7687e8f6b04a1ccea7835641a6257787702a4eeaee8da508de8b610560a4d2(
    *,
    project_identifier: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    disable_development: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_allow_download: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_mode: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosProject.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
