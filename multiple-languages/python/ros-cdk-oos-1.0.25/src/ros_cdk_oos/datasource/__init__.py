import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from .._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class PatchBaseline(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.PatchBaseline",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::OOS::PatchBaseline``, which is used to query a patch baseline.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPatchBaseline``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PatchBaselineProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__537c73b8846cc283a3fb59d50837f0f27cc89e6b5286aac78c2720014fbd6c60)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApprovalRules")
    def attr_approval_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ApprovalRules: Accept the rules.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovalRules"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovedPatches")
    def attr_approved_patches(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ApprovedPatches: Approved patch list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovedPatches"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovedPatchesEnableNonSecurity")
    def attr_approved_patches_enable_non_security(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovedPatchesEnableNonSecurity"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreatedBy: Patch baseline creator.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: Creation time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: Patches baseline description information.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IsDefault: Whether it is the default patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationSystem")
    def attr_operation_system(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OperationSystem: Operating system type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOperationSystem"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineId")
    def attr_patch_baseline_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PatchBaselineId: Patch baseline ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselineId"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineName")
    def attr_patch_baseline_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PatchBaselineName: The name of the patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselineName"))

    @builtins.property
    @jsii.member(jsii_name="attrRejectedPatches")
    def attr_rejected_patches(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RejectedPatches: Reject the name of the patch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRejectedPatches"))

    @builtins.property
    @jsii.member(jsii_name="attrRejectedPatchesAction")
    def attr_rejected_patches_action(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RejectedPatchesAction: The operation of rejecting the patch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRejectedPatchesAction"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: Approve whether the patch includes updates other than security.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ShareType: Patch baseline sharing type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrSources")
    def attr_sources(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Sources: Patch source configuration list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSources"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: Tags of patch baseline.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UpdatedBy: Patch baseline updater.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UpdatedDate: Update time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedDate"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26519040c06d0bb7a7f60548d94894a7993b236526cc912fcc6afb7e66c23665)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a11ea3ee19a162126982ef91dc9712e3800f375c4f9ce984b57c5e7c444a426)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "PatchBaselineProps":
        return typing.cast("PatchBaselineProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "PatchBaselineProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e4c42bde70739694efa6d82c7e0faa67efa82c62380369cda3fd6dad5e0f1d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa6fb7d26517b90caa03f4a122f8da429aaeaac3092ed89f89b6e4a341e04dec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.PatchBaselineProps",
    jsii_struct_bases=[],
    name_mapping={"patch_baseline_name": "patchBaselineName"},
)
class PatchBaselineProps:
    def __init__(
        self,
        *,
        patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``PatchBaseline``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline

        :param patch_baseline_name: Property patchBaselineName: The name of the patch baseline.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23b114b1c76f38addd5c24958a42d4e136e14743ff31bead632ec48f021fd08a)
            check_type(argname="argument patch_baseline_name", value=patch_baseline_name, expected_type=type_hints["patch_baseline_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "patch_baseline_name": patch_baseline_name,
        }

    @builtins.property
    def patch_baseline_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property patchBaselineName: The name of the patch baseline.'''
        result = self._values.get("patch_baseline_name")
        assert result is not None, "Required property 'patch_baseline_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PatchBaselineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PatchBaselines(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.PatchBaselines",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::OOS::PatchBaselines``, which is used to query patch baselines.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPatchBaselines``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["PatchBaselinesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb555b609c9b7e33bb11966671a6d2afe83b6d40142db4c8a3b37e2f81a8b247)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineNames")
    def attr_patch_baseline_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PatchBaselineNames: The list of patch baseline names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselineNames"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselines")
    def attr_patch_baselines(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PatchBaselines: The list of patch baselines.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselines"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bb69864b4f7cf33aebd4f4b402ef49371c4c3c2c004f6d930f6791cc824b511)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe5873efd4eec50dbdd804c5d9d61ab4f8870102ae6d258afaae05cdd51469ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "PatchBaselinesProps":
        return typing.cast("PatchBaselinesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "PatchBaselinesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92adca435943c855fcfe2972734c3e43d7cd3e95b480f46431e5c147aa568b95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22b7286587477c7afc1797d15025708ab5700cbf7ebd4fef98e8e144848dd254)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.PatchBaselinesProps",
    jsii_struct_bases=[],
    name_mapping={
        "operation_system": "operationSystem",
        "patch_baseline_name": "patchBaselineName",
        "share_type": "shareType",
    },
)
class PatchBaselinesProps:
    def __init__(
        self,
        *,
        operation_system: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        patch_baseline_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        share_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``PatchBaselines``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines

        :param operation_system: Property operationSystem: Operating system type.
        :param patch_baseline_name: Property patchBaselineName: The name of the patch baseline.
        :param share_type: Property shareType: Patch baseline sharing type.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f79ae5ba54508bbe343839e3bf1c4b964a917392beea096e83ee7a425bfd970)
            check_type(argname="argument operation_system", value=operation_system, expected_type=type_hints["operation_system"])
            check_type(argname="argument patch_baseline_name", value=patch_baseline_name, expected_type=type_hints["patch_baseline_name"])
            check_type(argname="argument share_type", value=share_type, expected_type=type_hints["share_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if operation_system is not None:
            self._values["operation_system"] = operation_system
        if patch_baseline_name is not None:
            self._values["patch_baseline_name"] = patch_baseline_name
        if share_type is not None:
            self._values["share_type"] = share_type

    @builtins.property
    def operation_system(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property operationSystem: Operating system type.'''
        result = self._values.get("operation_system")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def patch_baseline_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property patchBaselineName: The name of the patch baseline.'''
        result = self._values.get("patch_baseline_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def share_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property shareType: Patch baseline sharing type.'''
        result = self._values.get("share_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PatchBaselinesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPatchBaseline(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosPatchBaseline",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::OOS::PatchBaseline``, which is used to query a patch baseline.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PatchBaseline`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPatchBaselineProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dba3d2b679a341edb09203c1254116b3fb5f1b3bfd050531450eb3fcc5da1d0c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8011eb812f9a508905f1b5dc5a1c96e6a397af9aa40505d1538419c1135c5644)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovalRules")
    def attr_approval_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApprovalRules: Accept the rules.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovalRules"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovedPatches")
    def attr_approved_patches(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApprovedPatches: Approved patch list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovedPatches"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovedPatchesEnableNonSecurity")
    def attr_approved_patches_enable_non_security(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovedPatchesEnableNonSecurity"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreatedBy: Patch baseline creator.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Creation time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Patches baseline description information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsDefault: Whether it is the default patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationSystem")
    def attr_operation_system(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OperationSystem: Operating system type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOperationSystem"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineId")
    def attr_patch_baseline_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PatchBaselineId: Patch baseline ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselineId"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineName")
    def attr_patch_baseline_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PatchBaselineName: The name of the patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselineName"))

    @builtins.property
    @jsii.member(jsii_name="attrRejectedPatches")
    def attr_rejected_patches(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RejectedPatches: Reject the name of the patch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRejectedPatches"))

    @builtins.property
    @jsii.member(jsii_name="attrRejectedPatchesAction")
    def attr_rejected_patches_action(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RejectedPatchesAction: The operation of rejecting the patch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRejectedPatchesAction"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: Approve whether the patch includes updates other than security
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ShareType: Patch baseline sharing type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrSources")
    def attr_sources(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Sources: Patch source configuration list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSources"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: Tags of patch baseline.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdatedBy: Patch baseline updater.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdatedDate: Update time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedDate"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__a4b6d64fa81ccfd532c3d0e3e6f3f9ecb6053287939efbaff0ae352332e85474)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="patchBaselineName")
    def patch_baseline_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: patchBaselineName: The name of the patch baseline.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "patchBaselineName"))

    @patch_baseline_name.setter
    def patch_baseline_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3da468d2d1ee0feed8d0df4c9c2ccbb61e5d0c342352cd5e39a427f6b90172c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "patchBaselineName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosPatchBaselineProps",
    jsii_struct_bases=[],
    name_mapping={"patch_baseline_name": "patchBaselineName"},
)
class RosPatchBaselineProps:
    def __init__(
        self,
        *,
        patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosPatchBaseline``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline

        :param patch_baseline_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db49e383d57e477a030c507daa69fe6f8226be29cb551a493b11633cac5a98d5)
            check_type(argname="argument patch_baseline_name", value=patch_baseline_name, expected_type=type_hints["patch_baseline_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "patch_baseline_name": patch_baseline_name,
        }

    @builtins.property
    def patch_baseline_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: patchBaselineName: The name of the patch baseline.
        '''
        result = self._values.get("patch_baseline_name")
        assert result is not None, "Required property 'patch_baseline_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPatchBaselineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPatchBaselines(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosPatchBaselines",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::OOS::PatchBaselines``, which is used to query patch baselines.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PatchBaselines`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPatchBaselinesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf4db8745a2c409e98638de00d73f8196c8d1420c2fa498d7c60d202464bebf2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2e9753992ecfdc2bf9dc25fec396511e0cce8c489265bad0f64a17df0635f275)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineNames")
    def attr_patch_baseline_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PatchBaselineNames: The list of patch baseline names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselineNames"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselines")
    def attr_patch_baselines(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PatchBaselines: The list of patch baselines.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPatchBaselines"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__bedd0d60dcfffbfe1f6e299e2c97bae08a83e39df7de2ad1fcae6cb7f9c40e11)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="operationSystem")
    def operation_system(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: operationSystem: Operating system type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "operationSystem"))

    @operation_system.setter
    def operation_system(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a5686e1f92c9c25150a79a88b52805390c7455cd39f3b8629a65f97f1a33c22)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "operationSystem", value)

    @builtins.property
    @jsii.member(jsii_name="patchBaselineName")
    def patch_baseline_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: patchBaselineName: The name of the patch baseline.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "patchBaselineName"))

    @patch_baseline_name.setter
    def patch_baseline_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a6be4fa03be46b2fc5f921d92214d115de8429742eb5d722313fbc7f7b3ca92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "patchBaselineName", value)

    @builtins.property
    @jsii.member(jsii_name="shareType")
    def share_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: shareType: Patch baseline sharing type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "shareType"))

    @share_type.setter
    def share_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e020fdd0e23aebd1100ea6b8ac1a8385e633f320c3868fcd6ac59e8754c4cea7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "shareType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosPatchBaselinesProps",
    jsii_struct_bases=[],
    name_mapping={
        "operation_system": "operationSystem",
        "patch_baseline_name": "patchBaselineName",
        "share_type": "shareType",
    },
)
class RosPatchBaselinesProps:
    def __init__(
        self,
        *,
        operation_system: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        patch_baseline_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        share_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPatchBaselines``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines

        :param operation_system: 
        :param patch_baseline_name: 
        :param share_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f35790595e758f49eafb866c98ec5c19d0e6940565aa986facc6b1d13e72cb46)
            check_type(argname="argument operation_system", value=operation_system, expected_type=type_hints["operation_system"])
            check_type(argname="argument patch_baseline_name", value=patch_baseline_name, expected_type=type_hints["patch_baseline_name"])
            check_type(argname="argument share_type", value=share_type, expected_type=type_hints["share_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if operation_system is not None:
            self._values["operation_system"] = operation_system
        if patch_baseline_name is not None:
            self._values["patch_baseline_name"] = patch_baseline_name
        if share_type is not None:
            self._values["share_type"] = share_type

    @builtins.property
    def operation_system(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: operationSystem: Operating system type.
        '''
        result = self._values.get("operation_system")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def patch_baseline_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: patchBaselineName: The name of the patch baseline.
        '''
        result = self._values.get("patch_baseline_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def share_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: shareType: Patch baseline sharing type.
        '''
        result = self._values.get("share_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPatchBaselinesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSecretParameters(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosSecretParameters",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::OOS::SecretParameters``, which is used to query encryption parameters.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SecretParameters`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSecretParametersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8aa9d0254e29a8dc0356498acb6b79889ab66d7f5d2fa0430e1b783539b867b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0333fb562e84cba1a3c3d829e30c7fa14c7457dad530223d8a3436f509307533)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterNames")
    def attr_secret_parameter_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecretParameterNames: The list of secret parameter names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecretParameterNames"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameters")
    def attr_secret_parameters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecretParameters: The list of secret parameters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecretParameters"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__87f5c884b4fa36e7c0517ffe0058491b5f810fdaf0fbaf7ae57a8aa8ca6cacf3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d87170c248b140737120df625db37f7559ceaa67185c5b753e0a4e78e5ab6d23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="secretParameterName")
    def secret_parameter_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secretParameterName: The name of the encryption parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "secretParameterName"))

    @secret_parameter_name.setter
    def secret_parameter_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d230740eccb6a938f5cdca6f25978a61fb3d06ff301b6dd9b4dfa9e0a7784a4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secretParameterName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosSecretParametersProps",
    jsii_struct_bases=[],
    name_mapping={
        "resource_group_id": "resourceGroupId",
        "secret_parameter_name": "secretParameterName",
    },
)
class RosSecretParametersProps:
    def __init__(
        self,
        *,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secret_parameter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosSecretParameters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters

        :param resource_group_id: 
        :param secret_parameter_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06fd39aecb52f74a0f144f9ff972203a3c0014c9fa61a4f1595380c5ce409474)
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument secret_parameter_name", value=secret_parameter_name, expected_type=type_hints["secret_parameter_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if secret_parameter_name is not None:
            self._values["secret_parameter_name"] = secret_parameter_name

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secret_parameter_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secretParameterName: The name of the encryption parameter.
        '''
        result = self._values.get("secret_parameter_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSecretParametersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SecretParameters(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.SecretParameters",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::OOS::SecretParameters``, which is used to query encryption parameters.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSecretParameters``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["SecretParametersProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c64b75160b0328a2c684250306a099f2c106d2949c33c66b3215d8533e989edb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterNames")
    def attr_secret_parameter_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecretParameterNames: The list of secret parameter names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecretParameterNames"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameters")
    def attr_secret_parameters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecretParameters: The list of secret parameters.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecretParameters"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86ba8776eb575db556f3bb9335c94fa560cd03ca433e73345c436b2047b096cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9971fe806c7c11c270888b59b174445a700217faac2e83ebeb2f22eacb2e9ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "SecretParametersProps":
        return typing.cast("SecretParametersProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "SecretParametersProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64dfb80c6b9763d31dcb3b59d314bf5bf5b78a43630002edf1ee1986b2d0d504)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6bd8457f7a77a77372f8d1653d6b73f8fca80bc2ea808d46e3d830c0bc909e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.SecretParametersProps",
    jsii_struct_bases=[],
    name_mapping={
        "resource_group_id": "resourceGroupId",
        "secret_parameter_name": "secretParameterName",
    },
)
class SecretParametersProps:
    def __init__(
        self,
        *,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secret_parameter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``SecretParameters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters

        :param resource_group_id: Property resourceGroupId: The ID of resource group.
        :param secret_parameter_name: Property secretParameterName: The name of the encryption parameter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46e311ed9c39f112728789cc7cbf629884f849f179cebf10a9baab8bf7856204)
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument secret_parameter_name", value=secret_parameter_name, expected_type=type_hints["secret_parameter_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if secret_parameter_name is not None:
            self._values["secret_parameter_name"] = secret_parameter_name

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secret_parameter_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property secretParameterName: The name of the encryption parameter.'''
        result = self._values.get("secret_parameter_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SecretParametersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "PatchBaseline",
    "PatchBaselineProps",
    "PatchBaselines",
    "PatchBaselinesProps",
    "RosPatchBaseline",
    "RosPatchBaselineProps",
    "RosPatchBaselines",
    "RosPatchBaselinesProps",
    "RosSecretParameters",
    "RosSecretParametersProps",
    "SecretParameters",
    "SecretParametersProps",
]

publication.publish()

def _typecheckingstub__537c73b8846cc283a3fb59d50837f0f27cc89e6b5286aac78c2720014fbd6c60(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PatchBaselineProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26519040c06d0bb7a7f60548d94894a7993b236526cc912fcc6afb7e66c23665(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a11ea3ee19a162126982ef91dc9712e3800f375c4f9ce984b57c5e7c444a426(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e4c42bde70739694efa6d82c7e0faa67efa82c62380369cda3fd6dad5e0f1d1(
    value: PatchBaselineProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa6fb7d26517b90caa03f4a122f8da429aaeaac3092ed89f89b6e4a341e04dec(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23b114b1c76f38addd5c24958a42d4e136e14743ff31bead632ec48f021fd08a(
    *,
    patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb555b609c9b7e33bb11966671a6d2afe83b6d40142db4c8a3b37e2f81a8b247(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[PatchBaselinesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bb69864b4f7cf33aebd4f4b402ef49371c4c3c2c004f6d930f6791cc824b511(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe5873efd4eec50dbdd804c5d9d61ab4f8870102ae6d258afaae05cdd51469ac(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92adca435943c855fcfe2972734c3e43d7cd3e95b480f46431e5c147aa568b95(
    value: PatchBaselinesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22b7286587477c7afc1797d15025708ab5700cbf7ebd4fef98e8e144848dd254(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f79ae5ba54508bbe343839e3bf1c4b964a917392beea096e83ee7a425bfd970(
    *,
    operation_system: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    patch_baseline_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    share_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dba3d2b679a341edb09203c1254116b3fb5f1b3bfd050531450eb3fcc5da1d0c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPatchBaselineProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8011eb812f9a508905f1b5dc5a1c96e6a397af9aa40505d1538419c1135c5644(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4b6d64fa81ccfd532c3d0e3e6f3f9ecb6053287939efbaff0ae352332e85474(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3da468d2d1ee0feed8d0df4c9c2ccbb61e5d0c342352cd5e39a427f6b90172c0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db49e383d57e477a030c507daa69fe6f8226be29cb551a493b11633cac5a98d5(
    *,
    patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf4db8745a2c409e98638de00d73f8196c8d1420c2fa498d7c60d202464bebf2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPatchBaselinesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e9753992ecfdc2bf9dc25fec396511e0cce8c489265bad0f64a17df0635f275(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bedd0d60dcfffbfe1f6e299e2c97bae08a83e39df7de2ad1fcae6cb7f9c40e11(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a5686e1f92c9c25150a79a88b52805390c7455cd39f3b8629a65f97f1a33c22(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a6be4fa03be46b2fc5f921d92214d115de8429742eb5d722313fbc7f7b3ca92(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e020fdd0e23aebd1100ea6b8ac1a8385e633f320c3868fcd6ac59e8754c4cea7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f35790595e758f49eafb866c98ec5c19d0e6940565aa986facc6b1d13e72cb46(
    *,
    operation_system: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    patch_baseline_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    share_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8aa9d0254e29a8dc0356498acb6b79889ab66d7f5d2fa0430e1b783539b867b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSecretParametersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0333fb562e84cba1a3c3d829e30c7fa14c7457dad530223d8a3436f509307533(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87f5c884b4fa36e7c0517ffe0058491b5f810fdaf0fbaf7ae57a8aa8ca6cacf3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d87170c248b140737120df625db37f7559ceaa67185c5b753e0a4e78e5ab6d23(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d230740eccb6a938f5cdca6f25978a61fb3d06ff301b6dd9b4dfa9e0a7784a4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06fd39aecb52f74a0f144f9ff972203a3c0014c9fa61a4f1595380c5ce409474(
    *,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secret_parameter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c64b75160b0328a2c684250306a099f2c106d2949c33c66b3215d8533e989edb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[SecretParametersProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86ba8776eb575db556f3bb9335c94fa560cd03ca433e73345c436b2047b096cc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9971fe806c7c11c270888b59b174445a700217faac2e83ebeb2f22eacb2e9ea(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64dfb80c6b9763d31dcb3b59d314bf5bf5b78a43630002edf1ee1986b2d0d504(
    value: SecretParametersProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6bd8457f7a77a77372f8d1653d6b73f8fca80bc2ea808d46e3d830c0bc909e4(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46e311ed9c39f112728789cc7cbf629884f849f179cebf10a9baab8bf7856204(
    *,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secret_parameter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
