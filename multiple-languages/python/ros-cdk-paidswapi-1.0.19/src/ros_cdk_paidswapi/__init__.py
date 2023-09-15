'''
## Aliyun ROS PAIDSWAPI Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as PAIDSWAPI from '@alicloud/ros-cdk-paidswapi';
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


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-paidswapi.Instance",
):
    '''A ROS resource type:  ``ALIYUN::PaiDswApi::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::PaiDswApi::Instance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__108f944ad55884959cb52652dd6c2f7528e01478e209f9b59e8006920bfa877b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Accessibility: Whether the workspace is visible to others.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasets")
    def attr_datasets(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Datasets: A collection of datasets.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatasets"))

    @builtins.property
    @jsii.member(jsii_name="attrEcsSpec")
    def attr_ecs_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EcsSpec: The ECS specification of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEcsSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentVariables")
    def attr_environment_variables(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EnvironmentVariables: Environment variable.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentVariables"))

    @builtins.property
    @jsii.member(jsii_name="attrImageUrl")
    def attr_image_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageUrl: The mirror address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The first ID of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceName: The instance name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceUrl")
    def attr_instance_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceUrl: The instance address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrJupyterlabUrl")
    def attr_jupyterlab_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute JupyterlabUrl: The jupyterlab address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJupyterlabUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Labels: User-defined labels.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: The payment type of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrTerminalUrl")
    def attr_terminal_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TerminalUrl: The terminal address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTerminalUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrUserVpc")
    def attr_user_vpc(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserVpc: User vpc configuration.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserVpc"))

    @builtins.property
    @jsii.member(jsii_name="attrWebIdeUrl")
    def attr_web_ide_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute WebIDEUrl: The web IDE address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWebIdeUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute WorkspaceId: The Id of the workspace.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-paidswapi.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "ecs_spec": "ecsSpec",
        "image_url": "imageUrl",
        "instance_name": "instanceName",
        "accessibility": "accessibility",
        "datasets": "datasets",
        "environment_variables": "environmentVariables",
        "labels": "labels",
        "save_image": "saveImage",
        "user_vpc": "userVpc",
        "workspace_id": "workspaceId",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        ecs_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        image_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        datasets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.DatasetsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.LabelsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        save_image: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_vpc: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.UserVpcProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PaiDswApi::Instance``.

        :param ecs_spec: Property ecsSpec: The ECS specification of the instance.
        :param image_url: Property imageUrl: The mirror address.
        :param instance_name: Property instanceName: The instance name. Format requirements: - Can only contain letters, numbers and underscores (_). - It cannot exceed 27 characters.
        :param accessibility: Property accessibility: Whether the workspace is visible to others. Valid values: - **PUBLIC**: Visible to all users of the workspace. - **PRIVATE**: Only visible to yourself and the administrator of the workspace.
        :param datasets: Property datasets: A collection of datasets.
        :param environment_variables: Property environmentVariables: Environment variable.
        :param labels: Property labels: User-defined labels.
        :param save_image: Property saveImage: Whether to close the instance after saving the environment.
        :param user_vpc: Property userVpc: User vpc configuration.
        :param workspace_id: Property workspaceId: The Id of the workspace.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4fe690ddde5f352035475cdbeece49e469aeddc328c52c942fbefbe6e7b478d7)
            check_type(argname="argument ecs_spec", value=ecs_spec, expected_type=type_hints["ecs_spec"])
            check_type(argname="argument image_url", value=image_url, expected_type=type_hints["image_url"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument accessibility", value=accessibility, expected_type=type_hints["accessibility"])
            check_type(argname="argument datasets", value=datasets, expected_type=type_hints["datasets"])
            check_type(argname="argument environment_variables", value=environment_variables, expected_type=type_hints["environment_variables"])
            check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
            check_type(argname="argument save_image", value=save_image, expected_type=type_hints["save_image"])
            check_type(argname="argument user_vpc", value=user_vpc, expected_type=type_hints["user_vpc"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ecs_spec": ecs_spec,
            "image_url": image_url,
            "instance_name": instance_name,
        }
        if accessibility is not None:
            self._values["accessibility"] = accessibility
        if datasets is not None:
            self._values["datasets"] = datasets
        if environment_variables is not None:
            self._values["environment_variables"] = environment_variables
        if labels is not None:
            self._values["labels"] = labels
        if save_image is not None:
            self._values["save_image"] = save_image
        if user_vpc is not None:
            self._values["user_vpc"] = user_vpc
        if workspace_id is not None:
            self._values["workspace_id"] = workspace_id

    @builtins.property
    def ecs_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ecsSpec: The ECS specification of the instance.'''
        result = self._values.get("ecs_spec")
        assert result is not None, "Required property 'ecs_spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def image_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property imageUrl: The mirror address.'''
        result = self._values.get("image_url")
        assert result is not None, "Required property 'image_url' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceName: The instance name.

        Format requirements:

        - Can only contain letters, numbers and underscores (_).
        - It cannot exceed 27 characters.
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessibility: Whether the workspace is visible to others.

        Valid values:

        - **PUBLIC**: Visible to all users of the workspace.
        - **PRIVATE**: Only visible to yourself and the administrator of the workspace.
        '''
        result = self._values.get("accessibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def datasets(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DatasetsProperty"]]]]:
        '''Property datasets: A collection of datasets.'''
        result = self._values.get("datasets")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DatasetsProperty"]]]], result)

    @builtins.property
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property environmentVariables: Environment variable.'''
        result = self._values.get("environment_variables")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.LabelsProperty"]]]]:
        '''Property labels: User-defined labels.'''
        result = self._values.get("labels")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.LabelsProperty"]]]], result)

    @builtins.property
    def save_image(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property saveImage: Whether to close the instance after saving the environment.'''
        result = self._values.get("save_image")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_vpc(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.UserVpcProperty"]]:
        '''Property userVpc: User vpc configuration.'''
        result = self._values.get("user_vpc")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.UserVpcProperty"]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workspaceId: The Id of the workspace.'''
        result = self._values.get("workspace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-paidswapi.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::PaiDswApi::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PaiDswApi::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87bd973b04622a9900a11d2907c8d17191e06e077656d68fca28aba1416d8ff9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0623cb08ed572574eaa01ad9941a2cb5e9dbd349985a2f58082c184bf680c285)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Accessibility: Whether the workspace is visible to others.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasets")
    def attr_datasets(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Datasets: A collection of datasets.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatasets"))

    @builtins.property
    @jsii.member(jsii_name="attrEcsSpec")
    def attr_ecs_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EcsSpec: The ECS specification of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEcsSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentVariables")
    def attr_environment_variables(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentVariables: Environment variable.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentVariables"))

    @builtins.property
    @jsii.member(jsii_name="attrImageUrl")
    def attr_image_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageUrl: The mirror address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageUrl"))

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
        :Attribute: InstanceName: The instance name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceUrl")
    def attr_instance_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceUrl: The instance address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrJupyterlabUrl")
    def attr_jupyterlab_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: JupyterlabUrl: The jupyterlab address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJupyterlabUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Labels: User-defined labels.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The payment type of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrTerminalUrl")
    def attr_terminal_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TerminalUrl: The terminal address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTerminalUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrUserVpc")
    def attr_user_vpc(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserVpc: User vpc configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserVpc"))

    @builtins.property
    @jsii.member(jsii_name="attrWebIdeUrl")
    def attr_web_ide_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WebIDEUrl: The web IDE address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWebIdeUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceId: The Id of the workspace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="ecsSpec")
    def ecs_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsSpec: The ECS specification of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ecsSpec"))

    @ecs_spec.setter
    def ecs_spec(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e518b7b440aedbe583a7656e4b8eb86049653bf8c012163ea4df7e1e839b740)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsSpec", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69350531440c99bd17681b8c6b1f2a2ce8647a2e00421c8efc5d97a6d2191848)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="imageUrl")
    def image_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageUrl: The mirror address.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "imageUrl"))

    @image_url.setter
    def image_url(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a464a16964f9671a86713adb683472d59ff5681d4d1fe6b045f978ba9bc5b04b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageUrl", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceName: The instance name. Format requirements:

        - Can only contain letters, numbers and underscores (_).
        - It cannot exceed 27 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a19789164096d09b1c1816c283c2d8c40fc86739aeee19fdb27c304aeddc11f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="accessibility")
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accessibility: Whether the workspace is visible to others. Valid values:

        - **PUBLIC**: Visible to all users of the workspace.
        - **PRIVATE**: Only visible to yourself and the administrator of the workspace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessibility"))

    @accessibility.setter
    def accessibility(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02fedff8aa6a03126630f33504644e70718b47961d85931c26fd2d202d5c5ac0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessibility", value)

    @builtins.property
    @jsii.member(jsii_name="datasets")
    def datasets(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DatasetsProperty"]]]]:
        '''
        :Property: datasets: A collection of datasets.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DatasetsProperty"]]]], jsii.get(self, "datasets"))

    @datasets.setter
    def datasets(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DatasetsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4b22a49e7ad58c54ed6acba4e3b44f4827f06084cd7f4e951f437bf452e4bb6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "datasets", value)

    @builtins.property
    @jsii.member(jsii_name="environmentVariables")
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: environmentVariables: Environment variable.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "environmentVariables"))

    @environment_variables.setter
    def environment_variables(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5365a7d888a03f0ebe033bbb4e835b982d98c7eab20808e6b04a1bb1ccdba2d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentVariables", value)

    @builtins.property
    @jsii.member(jsii_name="labels")
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.LabelsProperty"]]]]:
        '''
        :Property: labels: User-defined labels.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.LabelsProperty"]]]], jsii.get(self, "labels"))

    @labels.setter
    def labels(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.LabelsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3c6be68a437f2553bf89959d717016c8bf7b71146d4e6887e34e143eaca2598)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "labels", value)

    @builtins.property
    @jsii.member(jsii_name="saveImage")
    def save_image(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: saveImage: Whether to close the instance after saving the environment.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "saveImage"))

    @save_image.setter
    def save_image(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8b9d2f3c9a4bb8a93f7fcc87e3d655bbcc434181b8752eb6449b825de8e7498)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "saveImage", value)

    @builtins.property
    @jsii.member(jsii_name="userVpc")
    def user_vpc(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.UserVpcProperty"]]:
        '''
        :Property: userVpc: User vpc configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.UserVpcProperty"]], jsii.get(self, "userVpc"))

    @user_vpc.setter
    def user_vpc(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.UserVpcProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cdd640eb4f6fc1f0687b352ae5b0671269f973b848b8a2a6a65f03eaf35ca61c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userVpc", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspaceId: The Id of the workspace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3b37bbd636e1fe9e86bdbb867c03fb3d46f03ab3dd424843fd4ecbc2ba4df36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-paidswapi.RosInstance.DatasetsProperty",
        jsii_struct_bases=[],
        name_mapping={"dataset_id": "datasetId", "mount_path": "mountPath"},
    )
    class DatasetsProperty:
        def __init__(
            self,
            *,
            dataset_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mount_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param dataset_id: 
            :param mount_path: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__62a1edb754a68521bf0294550011c3d00f7318c54a477c863565c00b0a2824d2)
                check_type(argname="argument dataset_id", value=dataset_id, expected_type=type_hints["dataset_id"])
                check_type(argname="argument mount_path", value=mount_path, expected_type=type_hints["mount_path"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if dataset_id is not None:
                self._values["dataset_id"] = dataset_id
            if mount_path is not None:
                self._values["mount_path"] = mount_path

        @builtins.property
        def dataset_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: datasetId: The data set Id.
            '''
            result = self._values.get("dataset_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mount_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mountPath: The Mount path inside the container.
            '''
            result = self._values.get("mount_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DatasetsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-paidswapi.RosInstance.LabelsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class LabelsProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5a1279e1c8d93fac4acbfd17689bedc80117bfc5f7a45a9c467cf828ff909d08)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: User-defined tag key.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: User-defined label values.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LabelsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-paidswapi.RosInstance.UserVpcProperty",
        jsii_struct_bases=[],
        name_mapping={"security_group_id": "securityGroupId", "vpc_id": "vpcId"},
    )
    class UserVpcProperty:
        def __init__(
            self,
            *,
            security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param security_group_id: 
            :param vpc_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ba2e47d4b762ccdaec9be87dbbd7c303e1590b17c90db7836a8b48e703f20c7b)
                check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if security_group_id is not None:
                self._values["security_group_id"] = security_group_id
            if vpc_id is not None:
                self._values["vpc_id"] = vpc_id

        @builtins.property
        def security_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: securityGroupId: The Id of the security group.
            '''
            result = self._values.get("security_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vpcId: Vpc identity ID.
            '''
            result = self._values.get("vpc_id")
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
    jsii_type="@alicloud/ros-cdk-paidswapi.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "ecs_spec": "ecsSpec",
        "image_url": "imageUrl",
        "instance_name": "instanceName",
        "accessibility": "accessibility",
        "datasets": "datasets",
        "environment_variables": "environmentVariables",
        "labels": "labels",
        "save_image": "saveImage",
        "user_vpc": "userVpc",
        "workspace_id": "workspaceId",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        ecs_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        image_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        datasets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.DatasetsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        save_image: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_vpc: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.UserVpcProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PaiDswApi::Instance``.

        :param ecs_spec: 
        :param image_url: 
        :param instance_name: 
        :param accessibility: 
        :param datasets: 
        :param environment_variables: 
        :param labels: 
        :param save_image: 
        :param user_vpc: 
        :param workspace_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6557a3750282fde9a9826a886ca74e2ed226db2eee9a2d2b89c1f89fa0d22eda)
            check_type(argname="argument ecs_spec", value=ecs_spec, expected_type=type_hints["ecs_spec"])
            check_type(argname="argument image_url", value=image_url, expected_type=type_hints["image_url"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument accessibility", value=accessibility, expected_type=type_hints["accessibility"])
            check_type(argname="argument datasets", value=datasets, expected_type=type_hints["datasets"])
            check_type(argname="argument environment_variables", value=environment_variables, expected_type=type_hints["environment_variables"])
            check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
            check_type(argname="argument save_image", value=save_image, expected_type=type_hints["save_image"])
            check_type(argname="argument user_vpc", value=user_vpc, expected_type=type_hints["user_vpc"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ecs_spec": ecs_spec,
            "image_url": image_url,
            "instance_name": instance_name,
        }
        if accessibility is not None:
            self._values["accessibility"] = accessibility
        if datasets is not None:
            self._values["datasets"] = datasets
        if environment_variables is not None:
            self._values["environment_variables"] = environment_variables
        if labels is not None:
            self._values["labels"] = labels
        if save_image is not None:
            self._values["save_image"] = save_image
        if user_vpc is not None:
            self._values["user_vpc"] = user_vpc
        if workspace_id is not None:
            self._values["workspace_id"] = workspace_id

    @builtins.property
    def ecs_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ecsSpec: The ECS specification of the instance.
        '''
        result = self._values.get("ecs_spec")
        assert result is not None, "Required property 'ecs_spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def image_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageUrl: The mirror address.
        '''
        result = self._values.get("image_url")
        assert result is not None, "Required property 'image_url' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceName: The instance name. Format requirements:

        - Can only contain letters, numbers and underscores (_).
        - It cannot exceed 27 characters.
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accessibility: Whether the workspace is visible to others. Valid values:

        - **PUBLIC**: Visible to all users of the workspace.
        - **PRIVATE**: Only visible to yourself and the administrator of the workspace.
        '''
        result = self._values.get("accessibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def datasets(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.DatasetsProperty]]]]:
        '''
        :Property: datasets: A collection of datasets.
        '''
        result = self._values.get("datasets")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.DatasetsProperty]]]], result)

    @builtins.property
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: environmentVariables: Environment variable.
        '''
        result = self._values.get("environment_variables")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.LabelsProperty]]]]:
        '''
        :Property: labels: User-defined labels.
        '''
        result = self._values.get("labels")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.LabelsProperty]]]], result)

    @builtins.property
    def save_image(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: saveImage: Whether to close the instance after saving the environment.
        '''
        result = self._values.get("save_image")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_vpc(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.UserVpcProperty]]:
        '''
        :Property: userVpc: User vpc configuration.
        '''
        result = self._values.get("user_vpc")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.UserVpcProperty]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspaceId: The Id of the workspace.
        '''
        result = self._values.get("workspace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Instance",
    "InstanceProps",
    "RosInstance",
    "RosInstanceProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__108f944ad55884959cb52652dd6c2f7528e01478e209f9b59e8006920bfa877b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fe690ddde5f352035475cdbeece49e469aeddc328c52c942fbefbe6e7b478d7(
    *,
    ecs_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    image_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    datasets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.DatasetsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    save_image: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_vpc: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.UserVpcProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87bd973b04622a9900a11d2907c8d17191e06e077656d68fca28aba1416d8ff9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0623cb08ed572574eaa01ad9941a2cb5e9dbd349985a2f58082c184bf680c285(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e518b7b440aedbe583a7656e4b8eb86049653bf8c012163ea4df7e1e839b740(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69350531440c99bd17681b8c6b1f2a2ce8647a2e00421c8efc5d97a6d2191848(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a464a16964f9671a86713adb683472d59ff5681d4d1fe6b045f978ba9bc5b04b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a19789164096d09b1c1816c283c2d8c40fc86739aeee19fdb27c304aeddc11f7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02fedff8aa6a03126630f33504644e70718b47961d85931c26fd2d202d5c5ac0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4b22a49e7ad58c54ed6acba4e3b44f4827f06084cd7f4e951f437bf452e4bb6(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.DatasetsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5365a7d888a03f0ebe033bbb4e835b982d98c7eab20808e6b04a1bb1ccdba2d0(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3c6be68a437f2553bf89959d717016c8bf7b71146d4e6887e34e143eaca2598(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.LabelsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8b9d2f3c9a4bb8a93f7fcc87e3d655bbcc434181b8752eb6449b825de8e7498(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cdd640eb4f6fc1f0687b352ae5b0671269f973b848b8a2a6a65f03eaf35ca61c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.UserVpcProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3b37bbd636e1fe9e86bdbb867c03fb3d46f03ab3dd424843fd4ecbc2ba4df36(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62a1edb754a68521bf0294550011c3d00f7318c54a477c863565c00b0a2824d2(
    *,
    dataset_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a1279e1c8d93fac4acbfd17689bedc80117bfc5f7a45a9c467cf828ff909d08(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba2e47d4b762ccdaec9be87dbbd7c303e1590b17c90db7836a8b48e703f20c7b(
    *,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6557a3750282fde9a9826a886ca74e2ed226db2eee9a2d2b89c1f89fa0d22eda(
    *,
    ecs_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    image_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    datasets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.DatasetsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    save_image: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_vpc: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.UserVpcProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
