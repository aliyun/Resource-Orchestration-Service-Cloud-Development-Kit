'''
## Aliyun ROS NLPAUTOML Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as NLPAUTOML from '@alicloud/ros-cdk-nlpautoml';
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


class Dataset(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlpautoml.Dataset",
):
    '''A ROS resource type:  ``ALIYUN::NLPAUTOML::Dataset``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DatasetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::NLPAUTOML::Dataset``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__833bc0e71bfd783904457f9f16b567fa4707e390365cb088f546b04e907ce2b3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDatasetId")
    def attr_dataset_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DatasetId: The dataset ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatasetId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlpautoml.DatasetProps",
    jsii_struct_bases=[],
    name_mapping={
        "dataset_name": "datasetName",
        "project_id": "projectId",
        "dataset_record": "datasetRecord",
    },
)
class DatasetProps:
    def __init__(
        self,
        *,
        dataset_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        dataset_record: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NLPAUTOML::Dataset``.

        :param dataset_name: Property datasetName: The name of dataset. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
        :param project_id: Property projectId: The ID of project. To create a dataset under a certain project, fill in the target project ID.
        :param dataset_record: Property datasetRecord: Upload labeled data to the dataset.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03d0ceb105a30b16690e9e7a39084cd0073e6d78d3800d074df70fe8484801d3)
            check_type(argname="argument dataset_name", value=dataset_name, expected_type=type_hints["dataset_name"])
            check_type(argname="argument project_id", value=project_id, expected_type=type_hints["project_id"])
            check_type(argname="argument dataset_record", value=dataset_record, expected_type=type_hints["dataset_record"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dataset_name": dataset_name,
            "project_id": project_id,
        }
        if dataset_record is not None:
            self._values["dataset_record"] = dataset_record

    @builtins.property
    def dataset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property datasetName: The name of dataset.

        Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
        '''
        result = self._values.get("dataset_name")
        assert result is not None, "Required property 'dataset_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectId: The ID of project.

        To create a dataset under a certain project, fill in the target project ID.
        '''
        result = self._values.get("project_id")
        assert result is not None, "Required property 'project_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dataset_record(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property datasetRecord: Upload labeled data to the dataset.'''
        result = self._values.get("dataset_record")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DatasetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Model(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlpautoml.Model",
):
    '''A ROS resource type:  ``ALIYUN::NLPAUTOML::Model``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ModelProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::NLPAUTOML::Model``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9a66a6d83854eef6a1d0747ab7cd3c2d4ea1b3f67fbfac0e7412c8125557de7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrModelId")
    def attr_model_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ModelId: The ID of model.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrModelId"))

    @builtins.property
    @jsii.member(jsii_name="attrModelVersion")
    def attr_model_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ModelVersion: The version of model.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrModelVersion"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlpautoml.ModelProps",
    jsii_struct_bases=[],
    name_mapping={
        "dataset_id_list": "datasetIdList",
        "model_name": "modelName",
        "model_type": "modelType",
        "project_id": "projectId",
        "lr": "lr",
        "nepochs": "nepochs",
        "test_dataset_id_list": "testDatasetIdList",
    },
)
class ModelProps:
    def __init__(
        self,
        *,
        dataset_id_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
        model_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        model_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        lr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nepochs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        test_dataset_id_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NLPAUTOML::Model``.

        :param dataset_id_list: Property datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.
        :param model_name: Property modelName: The name of model.
        :param model_type: Property modelType: The type of model. Please refer to the documentation for the parameter values corresponding to different types of models. Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
        :param project_id: Property projectId: The project id to which the model belongs.
        :param lr: Property lr: Learning rate.
        :param nepochs: Property nepochs: Number of training dataset iterations.
        :param test_dataset_id_list: Property testDatasetIdList: Test set ID list. Some models under text classification support adding test set data.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__129232a95555916843987319af6fb06df7e49c5c9a854dc8e01a9fff18f96f79)
            check_type(argname="argument dataset_id_list", value=dataset_id_list, expected_type=type_hints["dataset_id_list"])
            check_type(argname="argument model_name", value=model_name, expected_type=type_hints["model_name"])
            check_type(argname="argument model_type", value=model_type, expected_type=type_hints["model_type"])
            check_type(argname="argument project_id", value=project_id, expected_type=type_hints["project_id"])
            check_type(argname="argument lr", value=lr, expected_type=type_hints["lr"])
            check_type(argname="argument nepochs", value=nepochs, expected_type=type_hints["nepochs"])
            check_type(argname="argument test_dataset_id_list", value=test_dataset_id_list, expected_type=type_hints["test_dataset_id_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dataset_id_list": dataset_id_list,
            "model_name": model_name,
            "model_type": model_type,
            "project_id": project_id,
        }
        if lr is not None:
            self._values["lr"] = lr
        if nepochs is not None:
            self._values["nepochs"] = nepochs
        if test_dataset_id_list is not None:
            self._values["test_dataset_id_list"] = test_dataset_id_list

    @builtins.property
    def dataset_id_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.'''
        result = self._values.get("dataset_id_list")
        assert result is not None, "Required property 'dataset_id_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def model_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property modelName: The name of model.'''
        result = self._values.get("model_name")
        assert result is not None, "Required property 'model_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def model_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property modelType: The type of model.

        Please refer to the documentation for the parameter values corresponding to different types of models.
        Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
        '''
        result = self._values.get("model_type")
        assert result is not None, "Required property 'model_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectId: The project id to which the model belongs.'''
        result = self._values.get("project_id")
        assert result is not None, "Required property 'project_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def lr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lr: Learning rate.'''
        result = self._values.get("lr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nepochs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nepochs: Number of training dataset iterations.'''
        result = self._values.get("nepochs")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def test_dataset_id_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property testDatasetIdList: Test set ID list.

        Some models under text classification support adding test set data.
        '''
        result = self._values.get("test_dataset_id_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ModelProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Project(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlpautoml.Project",
):
    '''A ROS resource type:  ``ALIYUN::NLPAUTOML::Project``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::NLPAUTOML::Project``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1262503ccf29b49b3b4b2097c11c26dfb7869d8d4999e5b83d3aaf0e0638e44c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrProjectId")
    def attr_project_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProjectId: The project ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlpautoml.ProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "project_description": "projectDescription",
        "project_name": "projectName",
        "project_type": "projectType",
    },
)
class ProjectProps:
    def __init__(
        self,
        *,
        project_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::NLPAUTOML::Project``.

        :param project_description: Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.
        :param project_name: Property projectName: The name of project. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
        :param project_type: Property projectType: The type of nlp project. The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f96475f81a0dffe41aa7207e6c2a14290d489aaedbada428cc090fe9112f08f6)
            check_type(argname="argument project_description", value=project_description, expected_type=type_hints["project_description"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument project_type", value=project_type, expected_type=type_hints["project_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "project_description": project_description,
            "project_name": project_name,
            "project_type": project_type,
        }

    @builtins.property
    def project_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.'''
        result = self._values.get("project_description")
        assert result is not None, "Required property 'project_description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectName: The name of project.

        Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectType: The type of nlp project.

        The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
        '''
        result = self._values.get("project_type")
        assert result is not None, "Required property 'project_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDataset(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlpautoml.RosDataset",
):
    '''A ROS template type:  ``ALIYUN::NLPAUTOML::Dataset``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDatasetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::NLPAUTOML::Dataset``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__554e39b067e20958d7673af11e04e9e35ac09b5edabbcdee12aee49f9f3e7aca)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a1350982a935391de47724192133ff1819308c6a0706708fea01c4625f0d8375)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasetId")
    def attr_dataset_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DatasetId: The dataset ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatasetId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="datasetName")
    def dataset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: datasetName: The name of dataset. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "datasetName"))

    @dataset_name.setter
    def dataset_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0bf092742c2081d1284c6bc83a48bbabb35360e1d46c298a948ab9d32290e25)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "datasetName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__917a590e8ceb79c7ff91d1d5e99dd2d7bc971972f16f5e92a8c5a67ca4eb4eb2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="projectId")
    def project_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectId: The ID of project. To create a dataset under a certain project, fill in the target project ID.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectId"))

    @project_id.setter
    def project_id(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__168bdbf1d2d6a2926f3787000b1199bccc46773176479cad9273f86f74919710)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectId", value)

    @builtins.property
    @jsii.member(jsii_name="datasetRecord")
    def dataset_record(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: datasetRecord: Upload labeled data to the dataset.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "datasetRecord"))

    @dataset_record.setter
    def dataset_record(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5bd25a2e55e5a0cafe9e91d9469cf4d7fa66715da92bb3b9a683841aecbc650)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "datasetRecord", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlpautoml.RosDatasetProps",
    jsii_struct_bases=[],
    name_mapping={
        "dataset_name": "datasetName",
        "project_id": "projectId",
        "dataset_record": "datasetRecord",
    },
)
class RosDatasetProps:
    def __init__(
        self,
        *,
        dataset_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        dataset_record: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NLPAUTOML::Dataset``.

        :param dataset_name: 
        :param project_id: 
        :param dataset_record: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__21865c4bdd0f97f0fecc217ca1cb503ed74003fde8d17975a4056d5096d09f6c)
            check_type(argname="argument dataset_name", value=dataset_name, expected_type=type_hints["dataset_name"])
            check_type(argname="argument project_id", value=project_id, expected_type=type_hints["project_id"])
            check_type(argname="argument dataset_record", value=dataset_record, expected_type=type_hints["dataset_record"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dataset_name": dataset_name,
            "project_id": project_id,
        }
        if dataset_record is not None:
            self._values["dataset_record"] = dataset_record

    @builtins.property
    def dataset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: datasetName: The name of dataset. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
        '''
        result = self._values.get("dataset_name")
        assert result is not None, "Required property 'dataset_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectId: The ID of project. To create a dataset under a certain project, fill in the target project ID.
        '''
        result = self._values.get("project_id")
        assert result is not None, "Required property 'project_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dataset_record(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: datasetRecord: Upload labeled data to the dataset.
        '''
        result = self._values.get("dataset_record")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDatasetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosModel(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlpautoml.RosModel",
):
    '''A ROS template type:  ``ALIYUN::NLPAUTOML::Model``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosModelProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::NLPAUTOML::Model``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10cf58b0ea06484c90eebc1096e5904292eb8a598f7d5a06376af4af964740ec)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7a7793430ab2aba8f48ed34131c40e1bb5f064a340170c10a8e697ba1350a481)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrModelId")
    def attr_model_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ModelId: The ID of model.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrModelId"))

    @builtins.property
    @jsii.member(jsii_name="attrModelVersion")
    def attr_model_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ModelVersion: The version of model.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrModelVersion"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="datasetIdList")
    def dataset_id_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "datasetIdList"))

    @dataset_id_list.setter
    def dataset_id_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2990bbbee7030808e747a904d2fc199d49b4fe7f4b0f83493f92bee81499ada1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "datasetIdList", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e27607c787cfe98992b14aa5855298e6e8f86d5e4feb4ce4f5fa736c88df0272)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="modelName")
    def model_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: modelName: The name of model.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "modelName"))

    @model_name.setter
    def model_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca639e681132c9e81765c4f9949a530a2f21b4c4cb3c4a0f6fdc28c594995192)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "modelName", value)

    @builtins.property
    @jsii.member(jsii_name="modelType")
    def model_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        modelType: The type of model. Please refer to the documentation for the parameter values corresponding to different types of models.
        Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "modelType"))

    @model_type.setter
    def model_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab5c47284f2dc6ad65994728a46971fbb5dd3a5484fc3c14ec0200a94a669101)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "modelType", value)

    @builtins.property
    @jsii.member(jsii_name="projectId")
    def project_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectId: The project id to which the model belongs
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectId"))

    @project_id.setter
    def project_id(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__730bfd367d7006093a46c43b8743c7b0a737f58bdbbfbd6f1238e3947cb1e663)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectId", value)

    @builtins.property
    @jsii.member(jsii_name="lr")
    def lr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lr: Learning rate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lr"))

    @lr.setter
    def lr(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6533d049fd8d9fffe909f7585ca397701f48c9812d2acde579811f3ce6169fab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lr", value)

    @builtins.property
    @jsii.member(jsii_name="nepochs")
    def nepochs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: nepochs: Number of training dataset iterations
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nepochs"))

    @nepochs.setter
    def nepochs(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8968bb129816dea43dad6512c0ffa952613ff5a30eab7df406fe6a4b4d99387d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nepochs", value)

    @builtins.property
    @jsii.member(jsii_name="testDatasetIdList")
    def test_dataset_id_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: testDatasetIdList: Test set ID list. Some models under text classification support adding test set data.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "testDatasetIdList"))

    @test_dataset_id_list.setter
    def test_dataset_id_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4930dc6e094b73ff585c6ab155aa1d4ff9bc523fccde59a39d5bd96e53d9a54c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "testDatasetIdList", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlpautoml.RosModelProps",
    jsii_struct_bases=[],
    name_mapping={
        "dataset_id_list": "datasetIdList",
        "model_name": "modelName",
        "model_type": "modelType",
        "project_id": "projectId",
        "lr": "lr",
        "nepochs": "nepochs",
        "test_dataset_id_list": "testDatasetIdList",
    },
)
class RosModelProps:
    def __init__(
        self,
        *,
        dataset_id_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
        model_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        model_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        lr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nepochs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        test_dataset_id_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NLPAUTOML::Model``.

        :param dataset_id_list: 
        :param model_name: 
        :param model_type: 
        :param project_id: 
        :param lr: 
        :param nepochs: 
        :param test_dataset_id_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a0df1c54f8bf93aad713cee827d2f44a518b8dba4b7450b7723905f1d57582e)
            check_type(argname="argument dataset_id_list", value=dataset_id_list, expected_type=type_hints["dataset_id_list"])
            check_type(argname="argument model_name", value=model_name, expected_type=type_hints["model_name"])
            check_type(argname="argument model_type", value=model_type, expected_type=type_hints["model_type"])
            check_type(argname="argument project_id", value=project_id, expected_type=type_hints["project_id"])
            check_type(argname="argument lr", value=lr, expected_type=type_hints["lr"])
            check_type(argname="argument nepochs", value=nepochs, expected_type=type_hints["nepochs"])
            check_type(argname="argument test_dataset_id_list", value=test_dataset_id_list, expected_type=type_hints["test_dataset_id_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dataset_id_list": dataset_id_list,
            "model_name": model_name,
            "model_type": model_type,
            "project_id": project_id,
        }
        if lr is not None:
            self._values["lr"] = lr
        if nepochs is not None:
            self._values["nepochs"] = nepochs
        if test_dataset_id_list is not None:
            self._values["test_dataset_id_list"] = test_dataset_id_list

    @builtins.property
    def dataset_id_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.
        '''
        result = self._values.get("dataset_id_list")
        assert result is not None, "Required property 'dataset_id_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def model_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: modelName: The name of model.
        '''
        result = self._values.get("model_name")
        assert result is not None, "Required property 'model_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def model_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        modelType: The type of model. Please refer to the documentation for the parameter values corresponding to different types of models.
        Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
        '''
        result = self._values.get("model_type")
        assert result is not None, "Required property 'model_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectId: The project id to which the model belongs
        '''
        result = self._values.get("project_id")
        assert result is not None, "Required property 'project_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def lr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lr: Learning rate.
        '''
        result = self._values.get("lr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nepochs(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: nepochs: Number of training dataset iterations
        '''
        result = self._values.get("nepochs")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def test_dataset_id_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: testDatasetIdList: Test set ID list. Some models under text classification support adding test set data.
        '''
        result = self._values.get("test_dataset_id_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosModelProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProject(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlpautoml.RosProject",
):
    '''A ROS template type:  ``ALIYUN::NLPAUTOML::Project``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::NLPAUTOML::Project``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ca203ec17e3034432667818dfeab7608cab6a8f3580c3c2c138af8d1e410112)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4cf6633eee9ce43b29b8a546283a37a802a0f76e89280cd197e0707f52fe29e7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectId")
    def attr_project_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProjectId: The project ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__47a2fd5515b4a4859204374aa0d1a59e9c5d44afa7f80ffda57cee83968a8871)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="projectDescription")
    def project_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectDescription"))

    @project_description.setter
    def project_description(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8acf624a04c0e72de0644700b53d7dc5d80ad00f9484955337f9ce8c68ea4cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectDescription", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectName: The name of project. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2442f400c29f3c9337e5603a10ef8130460df566940f53b55249114d5529f430)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="projectType")
    def project_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectType: The type of nlp project. The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectType"))

    @project_type.setter
    def project_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1253e40af5129a87f3d0bdc3f0a7357bb06389cadbabfe9895f95d153f5a1259)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlpautoml.RosProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "project_description": "projectDescription",
        "project_name": "projectName",
        "project_type": "projectType",
    },
)
class RosProjectProps:
    def __init__(
        self,
        *,
        project_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::NLPAUTOML::Project``.

        :param project_description: 
        :param project_name: 
        :param project_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0029127d68f80da280ccb01994b4841d61e07c1b836209f799a04d61e1a7b13)
            check_type(argname="argument project_description", value=project_description, expected_type=type_hints["project_description"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument project_type", value=project_type, expected_type=type_hints["project_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "project_description": project_description,
            "project_name": project_name,
            "project_type": project_type,
        }

    @builtins.property
    def project_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.
        '''
        result = self._values.get("project_description")
        assert result is not None, "Required property 'project_description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectName: The name of project. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectType: The type of nlp project. The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
        '''
        result = self._values.get("project_type")
        assert result is not None, "Required property 'project_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Dataset",
    "DatasetProps",
    "Model",
    "ModelProps",
    "Project",
    "ProjectProps",
    "RosDataset",
    "RosDatasetProps",
    "RosModel",
    "RosModelProps",
    "RosProject",
    "RosProjectProps",
]

publication.publish()

def _typecheckingstub__833bc0e71bfd783904457f9f16b567fa4707e390365cb088f546b04e907ce2b3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DatasetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03d0ceb105a30b16690e9e7a39084cd0073e6d78d3800d074df70fe8484801d3(
    *,
    dataset_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    dataset_record: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9a66a6d83854eef6a1d0747ab7cd3c2d4ea1b3f67fbfac0e7412c8125557de7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ModelProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__129232a95555916843987319af6fb06df7e49c5c9a854dc8e01a9fff18f96f79(
    *,
    dataset_id_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    model_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    model_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    lr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nepochs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    test_dataset_id_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1262503ccf29b49b3b4b2097c11c26dfb7869d8d4999e5b83d3aaf0e0638e44c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f96475f81a0dffe41aa7207e6c2a14290d489aaedbada428cc090fe9112f08f6(
    *,
    project_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__554e39b067e20958d7673af11e04e9e35ac09b5edabbcdee12aee49f9f3e7aca(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDatasetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1350982a935391de47724192133ff1819308c6a0706708fea01c4625f0d8375(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0bf092742c2081d1284c6bc83a48bbabb35360e1d46c298a948ab9d32290e25(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__917a590e8ceb79c7ff91d1d5e99dd2d7bc971972f16f5e92a8c5a67ca4eb4eb2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__168bdbf1d2d6a2926f3787000b1199bccc46773176479cad9273f86f74919710(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5bd25a2e55e5a0cafe9e91d9469cf4d7fa66715da92bb3b9a683841aecbc650(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21865c4bdd0f97f0fecc217ca1cb503ed74003fde8d17975a4056d5096d09f6c(
    *,
    dataset_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    dataset_record: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10cf58b0ea06484c90eebc1096e5904292eb8a598f7d5a06376af4af964740ec(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosModelProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a7793430ab2aba8f48ed34131c40e1bb5f064a340170c10a8e697ba1350a481(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2990bbbee7030808e747a904d2fc199d49b4fe7f4b0f83493f92bee81499ada1(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e27607c787cfe98992b14aa5855298e6e8f86d5e4feb4ce4f5fa736c88df0272(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca639e681132c9e81765c4f9949a530a2f21b4c4cb3c4a0f6fdc28c594995192(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab5c47284f2dc6ad65994728a46971fbb5dd3a5484fc3c14ec0200a94a669101(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__730bfd367d7006093a46c43b8743c7b0a737f58bdbbfbd6f1238e3947cb1e663(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6533d049fd8d9fffe909f7585ca397701f48c9812d2acde579811f3ce6169fab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8968bb129816dea43dad6512c0ffa952613ff5a30eab7df406fe6a4b4d99387d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4930dc6e094b73ff585c6ab155aa1d4ff9bc523fccde59a39d5bd96e53d9a54c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a0df1c54f8bf93aad713cee827d2f44a518b8dba4b7450b7723905f1d57582e(
    *,
    dataset_id_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    model_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    model_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    lr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nepochs: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    test_dataset_id_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ca203ec17e3034432667818dfeab7608cab6a8f3580c3c2c138af8d1e410112(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4cf6633eee9ce43b29b8a546283a37a802a0f76e89280cd197e0707f52fe29e7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47a2fd5515b4a4859204374aa0d1a59e9c5d44afa7f80ffda57cee83968a8871(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8acf624a04c0e72de0644700b53d7dc5d80ad00f9484955337f9ce8c68ea4cd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2442f400c29f3c9337e5603a10ef8130460df566940f53b55249114d5529f430(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1253e40af5129a87f3d0bdc3f0a7357bb06389cadbabfe9895f95d153f5a1259(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0029127d68f80da280ccb01994b4841d61e07c1b836209f799a04d61e1a7b13(
    *,
    project_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass
