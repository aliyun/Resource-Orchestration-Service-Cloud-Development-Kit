'''
## Aliyun ROS IMM Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as IMM from '@alicloud/ros-cdk-imm';
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-imm.IProject")
class IProject(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Project``.'''

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Project: The name of project.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProjectProps":
        ...


class _IProjectProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Project``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-imm.IProject"

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Project: The name of project.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProject"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProjectProps":
        return typing.cast("ProjectProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IProject).__jsii_proxy_class__ = lambda : _IProjectProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-imm.IProject2")
class IProject2(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Project2``.'''

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: The name of project.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "Project2Props":
        ...


class _IProject2Proxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Project2``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-imm.IProject2"

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: The name of project.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "Project2Props":
        return typing.cast("Project2Props", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IProject2).__jsii_proxy_class__ = lambda : _IProject2Proxy


@jsii.implements(IProject)
class Project(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-imm.Project",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::IMM::Project``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosProject``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project
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
            type_hints = typing.get_type_hints(_typecheckingstub__1612fcb4340c3df6967a5118ca68582deffa442daf656533fecc4c03eef526c8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Project: The name of project.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProject"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2ac9bd453fd5f4e62268e82fb2bd8b4570da050f24347bee4342c33065f872f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61d08835181ab7b09fb3d326e7c5b505e7ed1f9bc4c57ce6af01796c84636384)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__924c6cca55b67b7deca76aeff99e700f50c3021365517477758048f5797e1e6a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IProject2)
class Project2(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-imm.Project2",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::IMM::Project2``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosProject2``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["Project2Props", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c931764564ceb8c274006807310b68b9e55532a282efa292811829ce8407062c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: The name of project.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "Project2Props":
        return typing.cast("Project2Props", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__431cbaca328f0076b5e00a9c89c01dc6498da556a0a51dba5275887c066cde92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1687d7dd9d90bc1f947960c7534ecbbd897fed48771fc589a892096590b38491)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7436731246ddea8f737934c64f81a96aa872c38830bf7ee0c683c7deae3be34f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-imm.Project2Props",
    jsii_struct_bases=[],
    name_mapping={
        "project_name": "projectName",
        "dataset_max_bind_count": "datasetMaxBindCount",
        "dataset_max_entity_count": "datasetMaxEntityCount",
        "dataset_max_file_count": "datasetMaxFileCount",
        "dataset_max_relation_count": "datasetMaxRelationCount",
        "dataset_max_total_file_size": "datasetMaxTotalFileSize",
        "description": "description",
        "project_max_dataset_count": "projectMaxDatasetCount",
        "service_role": "serviceRole",
        "template_id": "templateId",
    },
)
class Project2Props:
    def __init__(
        self,
        *,
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dataset_max_bind_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dataset_max_entity_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dataset_max_file_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dataset_max_relation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dataset_max_total_file_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        project_max_dataset_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Project2``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2

        :param project_name: Property projectName: The name of project.
        :param dataset_max_bind_count: Property datasetMaxBindCount: The maximum number of bindings for each dataset. Valid values: 1 to 10. Default value: 10.
        :param dataset_max_entity_count: Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset. Default value: 10000000000.
        :param dataset_max_file_count: Property datasetMaxFileCount: The maximum number of files in each dataset. Valid values: 1 to 100000000. Default value: 100000000.
        :param dataset_max_relation_count: Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset. Default value: 100000000000.
        :param dataset_max_total_file_size: Property datasetMaxTotalFileSize: The maximum size of files in each dataset. If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
        :param description: Property description: The description of project.
        :param project_max_dataset_count: Property projectMaxDatasetCount: The maximum number of datasets in the project. Valid values: 1 to 1000000000. Default value: 1000000000.
        :param service_role: Property serviceRole: The name of the Resource Access Management (RAM) role. You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
        :param template_id: Property templateId: The ID of the workflow template. You can leave this parameter empty.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32024041768f3e0751c7c3b5235afd4bb6be03788c61caca83f4ff85fd011c11)
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument dataset_max_bind_count", value=dataset_max_bind_count, expected_type=type_hints["dataset_max_bind_count"])
            check_type(argname="argument dataset_max_entity_count", value=dataset_max_entity_count, expected_type=type_hints["dataset_max_entity_count"])
            check_type(argname="argument dataset_max_file_count", value=dataset_max_file_count, expected_type=type_hints["dataset_max_file_count"])
            check_type(argname="argument dataset_max_relation_count", value=dataset_max_relation_count, expected_type=type_hints["dataset_max_relation_count"])
            check_type(argname="argument dataset_max_total_file_size", value=dataset_max_total_file_size, expected_type=type_hints["dataset_max_total_file_size"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument project_max_dataset_count", value=project_max_dataset_count, expected_type=type_hints["project_max_dataset_count"])
            check_type(argname="argument service_role", value=service_role, expected_type=type_hints["service_role"])
            check_type(argname="argument template_id", value=template_id, expected_type=type_hints["template_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "project_name": project_name,
        }
        if dataset_max_bind_count is not None:
            self._values["dataset_max_bind_count"] = dataset_max_bind_count
        if dataset_max_entity_count is not None:
            self._values["dataset_max_entity_count"] = dataset_max_entity_count
        if dataset_max_file_count is not None:
            self._values["dataset_max_file_count"] = dataset_max_file_count
        if dataset_max_relation_count is not None:
            self._values["dataset_max_relation_count"] = dataset_max_relation_count
        if dataset_max_total_file_size is not None:
            self._values["dataset_max_total_file_size"] = dataset_max_total_file_size
        if description is not None:
            self._values["description"] = description
        if project_max_dataset_count is not None:
            self._values["project_max_dataset_count"] = project_max_dataset_count
        if service_role is not None:
            self._values["service_role"] = service_role
        if template_id is not None:
            self._values["template_id"] = template_id

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectName: The name of project.'''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dataset_max_bind_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property datasetMaxBindCount: The maximum number of bindings for each dataset.

        Valid values: 1 to 10. Default value: 10.
        '''
        result = self._values.get("dataset_max_bind_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dataset_max_entity_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset.

        Default value: 10000000000.
        '''
        result = self._values.get("dataset_max_entity_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dataset_max_file_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property datasetMaxFileCount: The maximum number of files in each dataset.

        Valid values: 1 to 100000000. Default value: 100000000.
        '''
        result = self._values.get("dataset_max_file_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dataset_max_relation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset.

        Default value: 100000000000.
        '''
        result = self._values.get("dataset_max_relation_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dataset_max_total_file_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property datasetMaxTotalFileSize: The maximum size of files in each dataset.

        If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
        '''
        result = self._values.get("dataset_max_total_file_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of project.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def project_max_dataset_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property projectMaxDatasetCount: The maximum number of datasets in the project.

        Valid values: 1 to 1000000000. Default value: 1000000000.
        '''
        result = self._values.get("project_max_dataset_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serviceRole: 	The name of the Resource Access Management (RAM) role.

        You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
        '''
        result = self._values.get("service_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property templateId: The ID of the workflow template.

        You can leave this parameter empty.
        '''
        result = self._values.get("template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "Project2Props(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-imm.ProjectProps",
    jsii_struct_bases=[],
    name_mapping={"project": "project", "service_role": "serviceRole"},
)
class ProjectProps:
    def __init__(
        self,
        *,
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Project``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project

        :param project: Property project: The name of project.
        :param service_role: Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS). The default value is AliyunIMMDefaultRole.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__582adcbabc3da69faf06d5aab97566ae1132b2de9f1c19e77c53f45c60123731)
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            check_type(argname="argument service_role", value=service_role, expected_type=type_hints["service_role"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "project": project,
        }
        if service_role is not None:
            self._values["service_role"] = service_role

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property project: The name of project.'''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS).

        The default value is AliyunIMMDefaultRole.
        '''
        result = self._values.get("service_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    jsii_type="@alicloud/ros-cdk-imm.RosProject",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::IMM::Project``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Project`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project
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
            type_hints = typing.get_type_hints(_typecheckingstub__0990b8684700f1e05bd22bca5a51b3dd218da4962218817c7772f8c37ce5ff00)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c4c327f202a214a1a37513268a6a70b7bf02e9c2b37486d8a124e94facc2f072)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Project: The name of project.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProject"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__ec208f1782a22698df11802b17638001f3da1dd0fd1aec22303e6b6e8ed9df6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="project")
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: The name of project.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "project"))

    @project.setter
    def project(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59b253d22184ac1ec395fa5d57c291513f62ac3cd24e0a3d37d8b46f2f2d8073)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "project", value)

    @builtins.property
    @jsii.member(jsii_name="serviceRole")
    def service_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS). The default value is AliyunIMMDefaultRole.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serviceRole"))

    @service_role.setter
    def service_role(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc3272b33bf6c46ced0b15888a332c2055ffe165d513455b5d0765aa4b2c8211)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceRole", value)


class RosProject2(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-imm.RosProject2",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::IMM::Project2``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Project2`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProject2Props", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e73c9732a833db670bb38210646e4456c107f5e6c2213bbd3bb5bda4e5faaaba)
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
            type_hints = typing.get_type_hints(_typecheckingstub__66a95102cb667ba50a525a91d4ffce98c482717873a24fab692cfd84b0e42fc4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProjectName: The name of project.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3b1fa6ec93130208bfcce7b9fd279969fe368b801972200e2b58225a27d181a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectName: The name of project.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0654eff7b2aa92c0e196f83439ad15e089d4771ffada6b5a2e5e12301198623)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="datasetMaxBindCount")
    def dataset_max_bind_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: datasetMaxBindCount: The maximum number of bindings for each dataset. Valid values: 1 to 10. Default value: 10.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "datasetMaxBindCount"))

    @dataset_max_bind_count.setter
    def dataset_max_bind_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__197ad18faf3adb224b1be9b6a7db75b4352c19d1a0c9b632f82c1cdf32a07da1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "datasetMaxBindCount", value)

    @builtins.property
    @jsii.member(jsii_name="datasetMaxEntityCount")
    def dataset_max_entity_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: datasetMaxEntityCount: The maximum number of metadata entities in each dataset. Default value: 10000000000.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "datasetMaxEntityCount"))

    @dataset_max_entity_count.setter
    def dataset_max_entity_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a81dafdbe0932891cabe2356a5daf430e1b967e6ddc84a90c54f9f8b37736424)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "datasetMaxEntityCount", value)

    @builtins.property
    @jsii.member(jsii_name="datasetMaxFileCount")
    def dataset_max_file_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: datasetMaxFileCount: The maximum number of files in each dataset. Valid values: 1 to 100000000. Default value: 100000000.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "datasetMaxFileCount"))

    @dataset_max_file_count.setter
    def dataset_max_file_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed67240383b1d18ebcdf27cc80f6ac0f853d90354acecdf5e75a639cf3f27be0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "datasetMaxFileCount", value)

    @builtins.property
    @jsii.member(jsii_name="datasetMaxRelationCount")
    def dataset_max_relation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: datasetMaxRelationCount: The maximum number of metadata entities in each dataset. Default value: 100000000000.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "datasetMaxRelationCount"))

    @dataset_max_relation_count.setter
    def dataset_max_relation_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee6a7ee41b1c782bb4baf8077bfdfe372d401513bc9be5f2b9cd5eb3753a1d05)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "datasetMaxRelationCount", value)

    @builtins.property
    @jsii.member(jsii_name="datasetMaxTotalFileSize")
    def dataset_max_total_file_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: datasetMaxTotalFileSize: The maximum size of files in each dataset. If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "datasetMaxTotalFileSize"))

    @dataset_max_total_file_size.setter
    def dataset_max_total_file_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbf0e5e689eefad15330787b31e1b23c290ec633f19b061216d98564cf97a4d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "datasetMaxTotalFileSize", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of project.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2fa111110ea5df6f3b9aad2777eb974e22b73009868c871c7f60c981d5098a8e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="projectMaxDatasetCount")
    def project_max_dataset_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: projectMaxDatasetCount: The maximum number of datasets in the project. Valid values: 1 to 1000000000. Default value: 1000000000.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "projectMaxDatasetCount"))

    @project_max_dataset_count.setter
    def project_max_dataset_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81e703137f784ce426cd6306bbe943f7ed5c5ac3769c889e6cf7204f646ad8a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectMaxDatasetCount", value)

    @builtins.property
    @jsii.member(jsii_name="serviceRole")
    def service_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceRole: 	The name of the Resource Access Management (RAM) role. You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serviceRole"))

    @service_role.setter
    def service_role(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9328640625f792dda11c49f1f0692f8e4e06c5edb95f31f92f0cdb8663af4bf6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceRole", value)

    @builtins.property
    @jsii.member(jsii_name="templateId")
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateId: The ID of the workflow template. You can leave this parameter empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "templateId"))

    @template_id.setter
    def template_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__181f022bb56dd1692d68e5bcdca25ffa3777dc7e0fe5167c5bc53af72852a63e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-imm.RosProject2Props",
    jsii_struct_bases=[],
    name_mapping={
        "project_name": "projectName",
        "dataset_max_bind_count": "datasetMaxBindCount",
        "dataset_max_entity_count": "datasetMaxEntityCount",
        "dataset_max_file_count": "datasetMaxFileCount",
        "dataset_max_relation_count": "datasetMaxRelationCount",
        "dataset_max_total_file_size": "datasetMaxTotalFileSize",
        "description": "description",
        "project_max_dataset_count": "projectMaxDatasetCount",
        "service_role": "serviceRole",
        "template_id": "templateId",
    },
)
class RosProject2Props:
    def __init__(
        self,
        *,
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dataset_max_bind_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dataset_max_entity_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dataset_max_file_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dataset_max_relation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dataset_max_total_file_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        project_max_dataset_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosProject2``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2

        :param project_name: 
        :param dataset_max_bind_count: 
        :param dataset_max_entity_count: 
        :param dataset_max_file_count: 
        :param dataset_max_relation_count: 
        :param dataset_max_total_file_size: 
        :param description: 
        :param project_max_dataset_count: 
        :param service_role: 
        :param template_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d32ebd93b4691ab3af9d15e69c5985ab878adeca37971e48d680921d6c24ff4)
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument dataset_max_bind_count", value=dataset_max_bind_count, expected_type=type_hints["dataset_max_bind_count"])
            check_type(argname="argument dataset_max_entity_count", value=dataset_max_entity_count, expected_type=type_hints["dataset_max_entity_count"])
            check_type(argname="argument dataset_max_file_count", value=dataset_max_file_count, expected_type=type_hints["dataset_max_file_count"])
            check_type(argname="argument dataset_max_relation_count", value=dataset_max_relation_count, expected_type=type_hints["dataset_max_relation_count"])
            check_type(argname="argument dataset_max_total_file_size", value=dataset_max_total_file_size, expected_type=type_hints["dataset_max_total_file_size"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument project_max_dataset_count", value=project_max_dataset_count, expected_type=type_hints["project_max_dataset_count"])
            check_type(argname="argument service_role", value=service_role, expected_type=type_hints["service_role"])
            check_type(argname="argument template_id", value=template_id, expected_type=type_hints["template_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "project_name": project_name,
        }
        if dataset_max_bind_count is not None:
            self._values["dataset_max_bind_count"] = dataset_max_bind_count
        if dataset_max_entity_count is not None:
            self._values["dataset_max_entity_count"] = dataset_max_entity_count
        if dataset_max_file_count is not None:
            self._values["dataset_max_file_count"] = dataset_max_file_count
        if dataset_max_relation_count is not None:
            self._values["dataset_max_relation_count"] = dataset_max_relation_count
        if dataset_max_total_file_size is not None:
            self._values["dataset_max_total_file_size"] = dataset_max_total_file_size
        if description is not None:
            self._values["description"] = description
        if project_max_dataset_count is not None:
            self._values["project_max_dataset_count"] = project_max_dataset_count
        if service_role is not None:
            self._values["service_role"] = service_role
        if template_id is not None:
            self._values["template_id"] = template_id

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectName: The name of project.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dataset_max_bind_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: datasetMaxBindCount: The maximum number of bindings for each dataset. Valid values: 1 to 10. Default value: 10.
        '''
        result = self._values.get("dataset_max_bind_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dataset_max_entity_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: datasetMaxEntityCount: The maximum number of metadata entities in each dataset. Default value: 10000000000.
        '''
        result = self._values.get("dataset_max_entity_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dataset_max_file_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: datasetMaxFileCount: The maximum number of files in each dataset. Valid values: 1 to 100000000. Default value: 100000000.
        '''
        result = self._values.get("dataset_max_file_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dataset_max_relation_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: datasetMaxRelationCount: The maximum number of metadata entities in each dataset. Default value: 100000000000.
        '''
        result = self._values.get("dataset_max_relation_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dataset_max_total_file_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: datasetMaxTotalFileSize: The maximum size of files in each dataset. If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
        '''
        result = self._values.get("dataset_max_total_file_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of project.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def project_max_dataset_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: projectMaxDatasetCount: The maximum number of datasets in the project. Valid values: 1 to 1000000000. Default value: 1000000000.
        '''
        result = self._values.get("project_max_dataset_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceRole: 	The name of the Resource Access Management (RAM) role. You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
        '''
        result = self._values.get("service_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateId: The ID of the workflow template. You can leave this parameter empty.
        '''
        result = self._values.get("template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProject2Props(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-imm.RosProjectProps",
    jsii_struct_bases=[],
    name_mapping={"project": "project", "service_role": "serviceRole"},
)
class RosProjectProps:
    def __init__(
        self,
        *,
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosProject``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project

        :param project: 
        :param service_role: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cedd5bc3682ea7c7ca8571be7d837b555e219221ed411f94e2c9da959eddc734)
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            check_type(argname="argument service_role", value=service_role, expected_type=type_hints["service_role"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "project": project,
        }
        if service_role is not None:
            self._values["service_role"] = service_role

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: The name of project.
        '''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS). The default value is AliyunIMMDefaultRole.
        '''
        result = self._values.get("service_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    "IProject2",
    "Project",
    "Project2",
    "Project2Props",
    "ProjectProps",
    "RosProject",
    "RosProject2",
    "RosProject2Props",
    "RosProjectProps",
]

publication.publish()

def _typecheckingstub__1612fcb4340c3df6967a5118ca68582deffa442daf656533fecc4c03eef526c8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ac9bd453fd5f4e62268e82fb2bd8b4570da050f24347bee4342c33065f872f4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61d08835181ab7b09fb3d326e7c5b505e7ed1f9bc4c57ce6af01796c84636384(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__924c6cca55b67b7deca76aeff99e700f50c3021365517477758048f5797e1e6a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c931764564ceb8c274006807310b68b9e55532a282efa292811829ce8407062c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[Project2Props, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__431cbaca328f0076b5e00a9c89c01dc6498da556a0a51dba5275887c066cde92(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1687d7dd9d90bc1f947960c7534ecbbd897fed48771fc589a892096590b38491(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7436731246ddea8f737934c64f81a96aa872c38830bf7ee0c683c7deae3be34f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32024041768f3e0751c7c3b5235afd4bb6be03788c61caca83f4ff85fd011c11(
    *,
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dataset_max_bind_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dataset_max_entity_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dataset_max_file_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dataset_max_relation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dataset_max_total_file_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_max_dataset_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__582adcbabc3da69faf06d5aab97566ae1132b2de9f1c19e77c53f45c60123731(
    *,
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0990b8684700f1e05bd22bca5a51b3dd218da4962218817c7772f8c37ce5ff00(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4c327f202a214a1a37513268a6a70b7bf02e9c2b37486d8a124e94facc2f072(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec208f1782a22698df11802b17638001f3da1dd0fd1aec22303e6b6e8ed9df6d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59b253d22184ac1ec395fa5d57c291513f62ac3cd24e0a3d37d8b46f2f2d8073(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc3272b33bf6c46ced0b15888a332c2055ffe165d513455b5d0765aa4b2c8211(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e73c9732a833db670bb38210646e4456c107f5e6c2213bbd3bb5bda4e5faaaba(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProject2Props, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66a95102cb667ba50a525a91d4ffce98c482717873a24fab692cfd84b0e42fc4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b1fa6ec93130208bfcce7b9fd279969fe368b801972200e2b58225a27d181a3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0654eff7b2aa92c0e196f83439ad15e089d4771ffada6b5a2e5e12301198623(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__197ad18faf3adb224b1be9b6a7db75b4352c19d1a0c9b632f82c1cdf32a07da1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a81dafdbe0932891cabe2356a5daf430e1b967e6ddc84a90c54f9f8b37736424(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed67240383b1d18ebcdf27cc80f6ac0f853d90354acecdf5e75a639cf3f27be0(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee6a7ee41b1c782bb4baf8077bfdfe372d401513bc9be5f2b9cd5eb3753a1d05(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbf0e5e689eefad15330787b31e1b23c290ec633f19b061216d98564cf97a4d1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fa111110ea5df6f3b9aad2777eb974e22b73009868c871c7f60c981d5098a8e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81e703137f784ce426cd6306bbe943f7ed5c5ac3769c889e6cf7204f646ad8a5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9328640625f792dda11c49f1f0692f8e4e06c5edb95f31f92f0cdb8663af4bf6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__181f022bb56dd1692d68e5bcdca25ffa3777dc7e0fe5167c5bc53af72852a63e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d32ebd93b4691ab3af9d15e69c5985ab878adeca37971e48d680921d6c24ff4(
    *,
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dataset_max_bind_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dataset_max_entity_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dataset_max_file_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dataset_max_relation_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dataset_max_total_file_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_max_dataset_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cedd5bc3682ea7c7ca8571be7d837b555e219221ed411f94e2c9da959eddc734(
    *,
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
