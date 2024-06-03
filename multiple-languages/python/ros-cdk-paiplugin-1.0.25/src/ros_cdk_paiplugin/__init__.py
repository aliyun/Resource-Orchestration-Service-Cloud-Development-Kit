'''
## Aliyun ROS PAIPLUGIN Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as PAIPLUGIN from '@alicloud/ros-cdk-paiplugin';
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


class Campaign(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-paiplugin.Campaign",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAIPlugin::Campaign``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCampaign``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["CampaignProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b736731c32166868ffc7f35cae50c2e73d26a607d47e9c9eddfb487bc593edb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCampaignId")
    def attr_campaign_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CampaignId: The Campaign ID created this time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCampaignId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc1c96347c5a5df0b0afdca86b501aa9cc72602ed789f0f9aaffed21b574f4bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e6b8cc9bbd791146fff2e11201480c200676dc7453de0af14ec41eafc0ee8ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "CampaignProps":
        return typing.cast("CampaignProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "CampaignProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9dc3e5650b4fe359ebddadc4d603d939eca482608a85e8c7bdc225e8519d4e35)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__115785c220bca5216d52527b204608f2ad6ce887aaff5bf1b24d33af67310a58)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-paiplugin.CampaignProps",
    jsii_struct_bases=[],
    name_mapping={"name": "name", "remark": "remark"},
)
class CampaignProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Campaign``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign

        :param name: Property name: The name of the campaign.
        :param remark: Property remark: The remark of the campaign.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8e38e3cd88b8ac2db7f2d55350f92df7bad6c692f6d56decc6d8257578cad9d)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the campaign.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remark: The remark of the campaign.'''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CampaignProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class InferenceJob(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-paiplugin.InferenceJob",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAIPlugin::InferenceJob``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInferenceJob``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InferenceJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e4b0c2275eb412242792ac7b45c0c147a03f4e64e29949bb05cbdf9566cd56d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupId: The related group id of infernce job result.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrInferenceJobId")
    def attr_inference_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InferenceJobId: The id of inference job.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInferenceJobId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05a6391c1835385dae54e1de28e8f14666f467dfb5fbc1ed2dd1df27701b21b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a99e0d69c539e0dcd636821ad92218168a255add1969388f07331f56944e6dec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "InferenceJobProps":
        return typing.cast("InferenceJobProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "InferenceJobProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8201cfcda41403f26e01c45d2582cdbe84b9d9ff064acbdd6aab5e1be12e91c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b215b5d986fa49aebb4e923c3e2e81bc95014afd0ebc35e1ed9f59c474159b15)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-paiplugin.InferenceJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "algorithm": "algorithm",
        "campaign_id": "campaignId",
        "data_path": "dataPath",
        "name": "name",
        "target_path": "targetPath",
        "training_job_id": "trainingJobId",
        "user_config": "userConfig",
        "remark": "remark",
        "wait_for_inference_finish": "waitForInferenceFinish",
    },
)
class InferenceJobProps:
    def __init__(
        self,
        *,
        algorithm: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        campaign_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        training_job_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        wait_for_inference_finish: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``InferenceJob``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob

        :param algorithm: Property algorithm: The algorithm of inference job.
        :param campaign_id: Property campaignId: The campaign id of inference job.
        :param data_path: Property dataPath: The input data path of inference job.
        :param name: Property name: The name of inference job.
        :param target_path: Property targetPath: The output result path of inference job.
        :param training_job_id: Property trainingJobId: The training job id of inference job.
        :param user_config: Property userConfig: The user config of inference job.
        :param remark: Property remark: The remark of inference job.
        :param wait_for_inference_finish: Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c90e34281385df3d2cffd1f06cee9800e8774a2fe79008752d99be69e5ad0963)
            check_type(argname="argument algorithm", value=algorithm, expected_type=type_hints["algorithm"])
            check_type(argname="argument campaign_id", value=campaign_id, expected_type=type_hints["campaign_id"])
            check_type(argname="argument data_path", value=data_path, expected_type=type_hints["data_path"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument target_path", value=target_path, expected_type=type_hints["target_path"])
            check_type(argname="argument training_job_id", value=training_job_id, expected_type=type_hints["training_job_id"])
            check_type(argname="argument user_config", value=user_config, expected_type=type_hints["user_config"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            check_type(argname="argument wait_for_inference_finish", value=wait_for_inference_finish, expected_type=type_hints["wait_for_inference_finish"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "algorithm": algorithm,
            "campaign_id": campaign_id,
            "data_path": data_path,
            "name": name,
            "target_path": target_path,
            "training_job_id": training_job_id,
            "user_config": user_config,
        }
        if remark is not None:
            self._values["remark"] = remark
        if wait_for_inference_finish is not None:
            self._values["wait_for_inference_finish"] = wait_for_inference_finish

    @builtins.property
    def algorithm(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property algorithm: The algorithm of inference job.'''
        result = self._values.get("algorithm")
        assert result is not None, "Required property 'algorithm' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def campaign_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property campaignId: The campaign id of inference job.'''
        result = self._values.get("campaign_id")
        assert result is not None, "Required property 'campaign_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dataPath: The input data path of inference job.'''
        result = self._values.get("data_path")
        assert result is not None, "Required property 'data_path' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of inference job.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetPath: The output result path of inference job.'''
        result = self._values.get("target_path")
        assert result is not None, "Required property 'target_path' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def training_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property trainingJobId: The training job id of inference job.'''
        result = self._values.get("training_job_id")
        assert result is not None, "Required property 'training_job_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property userConfig: The user config of inference job.'''
        result = self._values.get("user_config")
        assert result is not None, "Required property 'user_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remark: The remark of inference job.'''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def wait_for_inference_finish(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes.'''
        result = self._values.get("wait_for_inference_finish")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InferenceJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCampaign(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-paiplugin.RosCampaign",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAIPlugin::Campaign``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Campaign`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCampaignProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0ba8bd3c875d3bd8974906da7a9cfffdc696b834cada53eb16073b364394be8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__83e457f35588921ae565950d7daa114c195812d3ff08724bd5b65c56e1aca554)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCampaignId")
    def attr_campaign_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CampaignId: The Campaign ID created this time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCampaignId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__47d80a5e05de3ea528e515ffa86bad97a30a78110df4483041896e820d18a2f8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the campaign.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c4b4d44061dfad3e16658df0609881b7966c53fba5d69db391637a5096012a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remark of the campaign.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18b5ce8e0950ab58b2bd16dbd24b171d64790f8b2461e6d51739e436574ee915)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remark", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-paiplugin.RosCampaignProps",
    jsii_struct_bases=[],
    name_mapping={"name": "name", "remark": "remark"},
)
class RosCampaignProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCampaign``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign

        :param name: 
        :param remark: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c3d1c0c2b85e3197ca3325c98fd351790044f013441862dd1d7aa579ee95e34)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the campaign.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remark of the campaign.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCampaignProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInferenceJob(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-paiplugin.RosInferenceJob",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAIPlugin::InferenceJob``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``InferenceJob`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInferenceJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad701e115d2fd9b4466d2e7684673fb016d477b13a437828cd187af09efca3bc)
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
            type_hints = typing.get_type_hints(_typecheckingstub__53a10946d2da8a01b6a8cc00c1b8b87a74732d39b1d69a4563761e7fd5fdaf22)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupId: The related group id of infernce job result.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrInferenceJobId")
    def attr_inference_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InferenceJobId: The id of inference job.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInferenceJobId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="algorithm")
    def algorithm(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: algorithm: The algorithm of inference job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "algorithm"))

    @algorithm.setter
    def algorithm(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28ed8eea84fbe9f40ad0722884f95e6f430662bd58c0193ec2118657e5703e9b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "algorithm", value)

    @builtins.property
    @jsii.member(jsii_name="campaignId")
    def campaign_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: campaignId: The campaign id of inference job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "campaignId"))

    @campaign_id.setter
    def campaign_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27c64434e017fb58188dc5bcb46621ff843f2bc4631c99615db1c0b98872c716)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "campaignId", value)

    @builtins.property
    @jsii.member(jsii_name="dataPath")
    def data_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataPath: The input data path of inference job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dataPath"))

    @data_path.setter
    def data_path(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2978381746155f7ee204e679c732df8f1a336e22e45c15bd1a359391eabfdc64)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataPath", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18fee5b1bb7b9b694375115327ce05984d6cdeb2e8c45f02d4f18d600bec54e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of inference job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9411bb5bcafb1b6697958c229caaa73c7ace44a43299bb40003f1a4fa337b582)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="targetPath")
    def target_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetPath: The output result path of inference job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetPath"))

    @target_path.setter
    def target_path(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7101dd81491101acec0e3806aff5e3fbfc8762828bec1e11077a49d47f551e39)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetPath", value)

    @builtins.property
    @jsii.member(jsii_name="trainingJobId")
    def training_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: trainingJobId: The training job id of inference job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "trainingJobId"))

    @training_job_id.setter
    def training_job_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__600d14dc3715cf8956a07d779520d39e1499ec074ee9424bf5f6bf2b3aba5029)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "trainingJobId", value)

    @builtins.property
    @jsii.member(jsii_name="userConfig")
    def user_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: userConfig: The user config of inference job.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "userConfig"))

    @user_config.setter
    def user_config(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9bac40c525669191bea1a7881908a486181b59418e3c63ce1f4285cea70c39ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userConfig", value)

    @builtins.property
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remark of inference job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d2aacb915ac12061261820ef7863b11e968077ec4b5361bd6bd6e5e98d0029b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remark", value)

    @builtins.property
    @jsii.member(jsii_name="waitForInferenceFinish")
    def wait_for_inference_finish(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "waitForInferenceFinish"))

    @wait_for_inference_finish.setter
    def wait_for_inference_finish(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d4d1f5179685b1f07c7c071ba92b22bb46713fcb252cacbe1021a4e44aab274)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "waitForInferenceFinish", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-paiplugin.RosInferenceJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "algorithm": "algorithm",
        "campaign_id": "campaignId",
        "data_path": "dataPath",
        "name": "name",
        "target_path": "targetPath",
        "training_job_id": "trainingJobId",
        "user_config": "userConfig",
        "remark": "remark",
        "wait_for_inference_finish": "waitForInferenceFinish",
    },
)
class RosInferenceJobProps:
    def __init__(
        self,
        *,
        algorithm: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        campaign_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        training_job_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        wait_for_inference_finish: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInferenceJob``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob

        :param algorithm: 
        :param campaign_id: 
        :param data_path: 
        :param name: 
        :param target_path: 
        :param training_job_id: 
        :param user_config: 
        :param remark: 
        :param wait_for_inference_finish: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__862df832163d3953cf547d4351e0a704e07a2f5bea11c179ad6855fa83bdc842)
            check_type(argname="argument algorithm", value=algorithm, expected_type=type_hints["algorithm"])
            check_type(argname="argument campaign_id", value=campaign_id, expected_type=type_hints["campaign_id"])
            check_type(argname="argument data_path", value=data_path, expected_type=type_hints["data_path"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument target_path", value=target_path, expected_type=type_hints["target_path"])
            check_type(argname="argument training_job_id", value=training_job_id, expected_type=type_hints["training_job_id"])
            check_type(argname="argument user_config", value=user_config, expected_type=type_hints["user_config"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            check_type(argname="argument wait_for_inference_finish", value=wait_for_inference_finish, expected_type=type_hints["wait_for_inference_finish"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "algorithm": algorithm,
            "campaign_id": campaign_id,
            "data_path": data_path,
            "name": name,
            "target_path": target_path,
            "training_job_id": training_job_id,
            "user_config": user_config,
        }
        if remark is not None:
            self._values["remark"] = remark
        if wait_for_inference_finish is not None:
            self._values["wait_for_inference_finish"] = wait_for_inference_finish

    @builtins.property
    def algorithm(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: algorithm: The algorithm of inference job.
        '''
        result = self._values.get("algorithm")
        assert result is not None, "Required property 'algorithm' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def campaign_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: campaignId: The campaign id of inference job.
        '''
        result = self._values.get("campaign_id")
        assert result is not None, "Required property 'campaign_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataPath: The input data path of inference job.
        '''
        result = self._values.get("data_path")
        assert result is not None, "Required property 'data_path' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of inference job.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetPath: The output result path of inference job.
        '''
        result = self._values.get("target_path")
        assert result is not None, "Required property 'target_path' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def training_job_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: trainingJobId: The training job id of inference job.
        '''
        result = self._values.get("training_job_id")
        assert result is not None, "Required property 'training_job_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: userConfig: The user config of inference job.
        '''
        result = self._values.get("user_config")
        assert result is not None, "Required property 'user_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remark of inference job.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def wait_for_inference_finish(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes
        '''
        result = self._values.get("wait_for_inference_finish")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInferenceJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTrainingJob(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-paiplugin.RosTrainingJob",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAIPlugin::TrainingJob``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``TrainingJob`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTrainingJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89afcb05d2c2880af6295f48f89a4f65d596c10e666043cab7fc3de63da32d08)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e1eae5e9785bc375cc8c0d7b870745749fd80d2db972f30210e51582fd09ae04)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTrainingJobId")
    def attr_training_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TrainingJobId: The training job id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrainingJobId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="algorithm")
    def algorithm(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: algorithm: The algorithm used in training.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "algorithm"))

    @algorithm.setter
    def algorithm(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e48fdb018ba7d6c92edad14ee6807a5c440f515595a83840fa268b6c1652139)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "algorithm", value)

    @builtins.property
    @jsii.member(jsii_name="campaignId")
    def campaign_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: campaignId: The related campaign Id.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "campaignId"))

    @campaign_id.setter
    def campaign_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37aa4082a38bac2fe6a209dfe83cbb058d6e16c2572f8021526098956d3eb127)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "campaignId", value)

    @builtins.property
    @jsii.member(jsii_name="dataPath")
    def data_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataPath: The training data path in OSS bucket.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dataPath"))

    @data_path.setter
    def data_path(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e07de042739a95f82e601675785743fef135e37b5cc9a65a3174ef0af1ec0f31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataPath", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b10466a538ed87c80598600c9406e6464f3f80f10e9365a66168437c5168142b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of training job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4fce401eb7e93a5ecf3112175c4467cb311d3291544a2854f21d359f7597ea0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="userConfig")
    def user_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "userConfig"))

    @user_config.setter
    def user_config(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46ae961fc9292e4b28eaa4649d113caa3738ab29692430ab7575e39623be8e7b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userConfig", value)

    @builtins.property
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remark of training job.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c0d7e7459d4c929f1c255f891cbd3aa12b58ba42ba06e91795515f1b0f0939f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remark", value)

    @builtins.property
    @jsii.member(jsii_name="waitForTrainingFinish")
    def wait_for_training_finish(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "waitForTrainingFinish"))

    @wait_for_training_finish.setter
    def wait_for_training_finish(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8578299b4ea2ebb255e19b5d7c400844707d7bd0cee58bae66a0497e10070ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "waitForTrainingFinish", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-paiplugin.RosTrainingJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "algorithm": "algorithm",
        "campaign_id": "campaignId",
        "data_path": "dataPath",
        "name": "name",
        "user_config": "userConfig",
        "remark": "remark",
        "wait_for_training_finish": "waitForTrainingFinish",
    },
)
class RosTrainingJobProps:
    def __init__(
        self,
        *,
        algorithm: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        campaign_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        wait_for_training_finish: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTrainingJob``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob

        :param algorithm: 
        :param campaign_id: 
        :param data_path: 
        :param name: 
        :param user_config: 
        :param remark: 
        :param wait_for_training_finish: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__432e70b8dcc47a6562e2060757cd5f367193a935063c3fbd1b3226deb75c7b44)
            check_type(argname="argument algorithm", value=algorithm, expected_type=type_hints["algorithm"])
            check_type(argname="argument campaign_id", value=campaign_id, expected_type=type_hints["campaign_id"])
            check_type(argname="argument data_path", value=data_path, expected_type=type_hints["data_path"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument user_config", value=user_config, expected_type=type_hints["user_config"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            check_type(argname="argument wait_for_training_finish", value=wait_for_training_finish, expected_type=type_hints["wait_for_training_finish"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "algorithm": algorithm,
            "campaign_id": campaign_id,
            "data_path": data_path,
            "name": name,
            "user_config": user_config,
        }
        if remark is not None:
            self._values["remark"] = remark
        if wait_for_training_finish is not None:
            self._values["wait_for_training_finish"] = wait_for_training_finish

    @builtins.property
    def algorithm(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: algorithm: The algorithm used in training.
        '''
        result = self._values.get("algorithm")
        assert result is not None, "Required property 'algorithm' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def campaign_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: campaignId: The related campaign Id.
        '''
        result = self._values.get("campaign_id")
        assert result is not None, "Required property 'campaign_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataPath: The training data path in OSS bucket.
        '''
        result = self._values.get("data_path")
        assert result is not None, "Required property 'data_path' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of training job.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
        '''
        result = self._values.get("user_config")
        assert result is not None, "Required property 'user_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remark of training job.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def wait_for_training_finish(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes
        '''
        result = self._values.get("wait_for_training_finish")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTrainingJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TrainingJob(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-paiplugin.TrainingJob",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAIPlugin::TrainingJob``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTrainingJob``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TrainingJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4b016cd541a9086610aaead48dec453470900fd3a16fa9df9045c0a295c5930)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTrainingJobId")
    def attr_training_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TrainingJobId: The training job id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrainingJobId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__611112019d322a36a7013b31a57c03dec89928deac3cc1341704d9b71fd5894f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7466856ede2de1b20cdb6fac8d1bf8ab9bce4daf0c661cfb905d7858b5be1f97)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "TrainingJobProps":
        return typing.cast("TrainingJobProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "TrainingJobProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6f8df81a17f42a6dfc06face077397fb97bd36ff10f9929a8d85a57d4153d41)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd5e6da1cec809c3afe6a8c8e9c711ff8faef1e4cd5fdc03bfa6a187755c0e0b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-paiplugin.TrainingJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "algorithm": "algorithm",
        "campaign_id": "campaignId",
        "data_path": "dataPath",
        "name": "name",
        "user_config": "userConfig",
        "remark": "remark",
        "wait_for_training_finish": "waitForTrainingFinish",
    },
)
class TrainingJobProps:
    def __init__(
        self,
        *,
        algorithm: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        campaign_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        wait_for_training_finish: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``TrainingJob``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob

        :param algorithm: Property algorithm: The algorithm used in training.
        :param campaign_id: Property campaignId: The related campaign Id.
        :param data_path: Property dataPath: The training data path in OSS bucket.
        :param name: Property name: The name of training job.
        :param user_config: Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
        :param remark: Property remark: The remark of training job.
        :param wait_for_training_finish: Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13d8d2c44ee0261550eb632d3a1b3fb5c018b45b61a41224e8e084793975ebc8)
            check_type(argname="argument algorithm", value=algorithm, expected_type=type_hints["algorithm"])
            check_type(argname="argument campaign_id", value=campaign_id, expected_type=type_hints["campaign_id"])
            check_type(argname="argument data_path", value=data_path, expected_type=type_hints["data_path"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument user_config", value=user_config, expected_type=type_hints["user_config"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            check_type(argname="argument wait_for_training_finish", value=wait_for_training_finish, expected_type=type_hints["wait_for_training_finish"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "algorithm": algorithm,
            "campaign_id": campaign_id,
            "data_path": data_path,
            "name": name,
            "user_config": user_config,
        }
        if remark is not None:
            self._values["remark"] = remark
        if wait_for_training_finish is not None:
            self._values["wait_for_training_finish"] = wait_for_training_finish

    @builtins.property
    def algorithm(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property algorithm: The algorithm used in training.'''
        result = self._values.get("algorithm")
        assert result is not None, "Required property 'algorithm' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def campaign_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property campaignId: The related campaign Id.'''
        result = self._values.get("campaign_id")
        assert result is not None, "Required property 'campaign_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dataPath: The training data path in OSS bucket.'''
        result = self._values.get("data_path")
        assert result is not None, "Required property 'data_path' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of training job.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.'''
        result = self._values.get("user_config")
        assert result is not None, "Required property 'user_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remark: The remark of training job.'''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def wait_for_training_finish(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes.'''
        result = self._values.get("wait_for_training_finish")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TrainingJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Campaign",
    "CampaignProps",
    "InferenceJob",
    "InferenceJobProps",
    "RosCampaign",
    "RosCampaignProps",
    "RosInferenceJob",
    "RosInferenceJobProps",
    "RosTrainingJob",
    "RosTrainingJobProps",
    "TrainingJob",
    "TrainingJobProps",
]

publication.publish()

def _typecheckingstub__5b736731c32166868ffc7f35cae50c2e73d26a607d47e9c9eddfb487bc593edb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CampaignProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc1c96347c5a5df0b0afdca86b501aa9cc72602ed789f0f9aaffed21b574f4bb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e6b8cc9bbd791146fff2e11201480c200676dc7453de0af14ec41eafc0ee8ba(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9dc3e5650b4fe359ebddadc4d603d939eca482608a85e8c7bdc225e8519d4e35(
    value: CampaignProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__115785c220bca5216d52527b204608f2ad6ce887aaff5bf1b24d33af67310a58(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8e38e3cd88b8ac2db7f2d55350f92df7bad6c692f6d56decc6d8257578cad9d(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e4b0c2275eb412242792ac7b45c0c147a03f4e64e29949bb05cbdf9566cd56d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InferenceJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05a6391c1835385dae54e1de28e8f14666f467dfb5fbc1ed2dd1df27701b21b0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a99e0d69c539e0dcd636821ad92218168a255add1969388f07331f56944e6dec(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8201cfcda41403f26e01c45d2582cdbe84b9d9ff064acbdd6aab5e1be12e91c(
    value: InferenceJobProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b215b5d986fa49aebb4e923c3e2e81bc95014afd0ebc35e1ed9f59c474159b15(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c90e34281385df3d2cffd1f06cee9800e8774a2fe79008752d99be69e5ad0963(
    *,
    algorithm: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    campaign_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    training_job_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    wait_for_inference_finish: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0ba8bd3c875d3bd8974906da7a9cfffdc696b834cada53eb16073b364394be8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCampaignProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83e457f35588921ae565950d7daa114c195812d3ff08724bd5b65c56e1aca554(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47d80a5e05de3ea528e515ffa86bad97a30a78110df4483041896e820d18a2f8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c4b4d44061dfad3e16658df0609881b7966c53fba5d69db391637a5096012a1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18b5ce8e0950ab58b2bd16dbd24b171d64790f8b2461e6d51739e436574ee915(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c3d1c0c2b85e3197ca3325c98fd351790044f013441862dd1d7aa579ee95e34(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad701e115d2fd9b4466d2e7684673fb016d477b13a437828cd187af09efca3bc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInferenceJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53a10946d2da8a01b6a8cc00c1b8b87a74732d39b1d69a4563761e7fd5fdaf22(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28ed8eea84fbe9f40ad0722884f95e6f430662bd58c0193ec2118657e5703e9b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27c64434e017fb58188dc5bcb46621ff843f2bc4631c99615db1c0b98872c716(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2978381746155f7ee204e679c732df8f1a336e22e45c15bd1a359391eabfdc64(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18fee5b1bb7b9b694375115327ce05984d6cdeb2e8c45f02d4f18d600bec54e9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9411bb5bcafb1b6697958c229caaa73c7ace44a43299bb40003f1a4fa337b582(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7101dd81491101acec0e3806aff5e3fbfc8762828bec1e11077a49d47f551e39(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__600d14dc3715cf8956a07d779520d39e1499ec074ee9424bf5f6bf2b3aba5029(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bac40c525669191bea1a7881908a486181b59418e3c63ce1f4285cea70c39ab(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d2aacb915ac12061261820ef7863b11e968077ec4b5361bd6bd6e5e98d0029b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d4d1f5179685b1f07c7c071ba92b22bb46713fcb252cacbe1021a4e44aab274(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__862df832163d3953cf547d4351e0a704e07a2f5bea11c179ad6855fa83bdc842(
    *,
    algorithm: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    campaign_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    training_job_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    wait_for_inference_finish: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89afcb05d2c2880af6295f48f89a4f65d596c10e666043cab7fc3de63da32d08(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTrainingJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1eae5e9785bc375cc8c0d7b870745749fd80d2db972f30210e51582fd09ae04(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e48fdb018ba7d6c92edad14ee6807a5c440f515595a83840fa268b6c1652139(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37aa4082a38bac2fe6a209dfe83cbb058d6e16c2572f8021526098956d3eb127(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e07de042739a95f82e601675785743fef135e37b5cc9a65a3174ef0af1ec0f31(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b10466a538ed87c80598600c9406e6464f3f80f10e9365a66168437c5168142b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4fce401eb7e93a5ecf3112175c4467cb311d3291544a2854f21d359f7597ea0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46ae961fc9292e4b28eaa4649d113caa3738ab29692430ab7575e39623be8e7b(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c0d7e7459d4c929f1c255f891cbd3aa12b58ba42ba06e91795515f1b0f0939f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8578299b4ea2ebb255e19b5d7c400844707d7bd0cee58bae66a0497e10070ff(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__432e70b8dcc47a6562e2060757cd5f367193a935063c3fbd1b3226deb75c7b44(
    *,
    algorithm: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    campaign_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    wait_for_training_finish: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4b016cd541a9086610aaead48dec453470900fd3a16fa9df9045c0a295c5930(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TrainingJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__611112019d322a36a7013b31a57c03dec89928deac3cc1341704d9b71fd5894f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7466856ede2de1b20cdb6fac8d1bf8ab9bce4daf0c661cfb905d7858b5be1f97(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6f8df81a17f42a6dfc06face077397fb97bd36ff10f9929a8d85a57d4153d41(
    value: TrainingJobProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd5e6da1cec809c3afe6a8c8e9c711ff8faef1e4cd5fdc03bfa6a187755c0e0b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13d8d2c44ee0261550eb632d3a1b3fb5c018b45b61a41224e8e084793975ebc8(
    *,
    algorithm: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    campaign_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    wait_for_training_finish: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
