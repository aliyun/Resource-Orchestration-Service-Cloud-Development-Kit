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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.GitCodeRepoProps",
    jsii_struct_bases=[],
    name_mapping={
        "owner": "owner",
        "platform": "platform",
        "repository": "repository",
        "commit_id": "commitId",
        "organization": "organization",
        "refresh_options": "refreshOptions",
    },
)
class GitCodeRepoProps:
    def __init__(
        self,
        *,
        owner: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        platform: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        repository: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        commit_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        organization: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``GitCodeRepo``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-gitcoderepo

        :param owner: Property owner: Git account.
        :param platform: Property platform: Git platform.
        :param repository: Property repository: Git repository.
        :param commit_id: Property commitId: Git commit id.
        :param organization: Property organization: Git organization.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__600fbe97a1b6ca83d96e5e5d3f0296eeb1d88b1c04c32129bfface34e4cc4147)
            check_type(argname="argument owner", value=owner, expected_type=type_hints["owner"])
            check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
            check_type(argname="argument repository", value=repository, expected_type=type_hints["repository"])
            check_type(argname="argument commit_id", value=commit_id, expected_type=type_hints["commit_id"])
            check_type(argname="argument organization", value=organization, expected_type=type_hints["organization"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "owner": owner,
            "platform": platform,
            "repository": repository,
        }
        if commit_id is not None:
            self._values["commit_id"] = commit_id
        if organization is not None:
            self._values["organization"] = organization
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def owner(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property owner: Git account.'''
        result = self._values.get("owner")
        assert result is not None, "Required property 'owner' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def platform(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property platform: Git platform.'''
        result = self._values.get("platform")
        assert result is not None, "Required property 'platform' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def repository(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property repository: Git repository.'''
        result = self._values.get("repository")
        assert result is not None, "Required property 'repository' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def commit_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property commitId: Git commit id.'''
        result = self._values.get("commit_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def organization(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property organization: Git organization.'''
        result = self._values.get("organization")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GitCodeRepoProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-oos.datasource.IGitCodeRepo")
class IGitCodeRepo(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``GitCodeRepo``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAuthorizedUrl")
    def attr_authorized_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthorizedUrl: Authorized url.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GitCodeRepoProps:
        ...


class _IGitCodeRepoProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``GitCodeRepo``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-oos.datasource.IGitCodeRepo"

    @builtins.property
    @jsii.member(jsii_name="attrAuthorizedUrl")
    def attr_authorized_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthorizedUrl: Authorized url.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthorizedUrl"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GitCodeRepoProps:
        return typing.cast(GitCodeRepoProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IGitCodeRepo).__jsii_proxy_class__ = lambda : _IGitCodeRepoProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-oos.datasource.IPatchBaseline")
class IPatchBaseline(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``PatchBaseline``.'''

    @builtins.property
    @jsii.member(jsii_name="attrApprovalRules")
    def attr_approval_rules(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApprovalRules: Accept the rules.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrApprovedPatches")
    def attr_approved_patches(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApprovedPatches: Approved patch list.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrApprovedPatchesEnableNonSecurity")
    def attr_approved_patches_enable_non_security(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreatedBy: Patch baseline creator.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Patches baseline description information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Whether it is the default patch baseline.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOperationSystem")
    def attr_operation_system(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OperationSystem: Operating system type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineId")
    def attr_patch_baseline_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PatchBaselineId: Patch baseline ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineName")
    def attr_patch_baseline_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PatchBaselineName: The name of the patch baseline.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRejectedPatches")
    def attr_rejected_patches(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RejectedPatches: Reject the name of the patch.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRejectedPatchesAction")
    def attr_rejected_patches_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RejectedPatchesAction: The operation of rejecting the patch.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: Approve whether the patch includes updates other than security.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ShareType: Patch baseline sharing type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSources")
    def attr_sources(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sources: Patch source configuration list.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: Tags of patch baseline.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedBy: Patch baseline updater.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedDate: Update time.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PatchBaselineProps":
        ...


class _IPatchBaselineProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``PatchBaseline``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-oos.datasource.IPatchBaseline"

    @builtins.property
    @jsii.member(jsii_name="attrApprovalRules")
    def attr_approval_rules(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApprovalRules: Accept the rules.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApprovalRules"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovedPatches")
    def attr_approved_patches(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApprovedPatches: Approved patch list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApprovedPatches"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovedPatchesEnableNonSecurity")
    def attr_approved_patches_enable_non_security(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApprovedPatchesEnableNonSecurity"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreatedBy: Patch baseline creator.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Patches baseline description information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Whether it is the default patch baseline.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationSystem")
    def attr_operation_system(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OperationSystem: Operating system type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOperationSystem"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineId")
    def attr_patch_baseline_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PatchBaselineId: Patch baseline ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPatchBaselineId"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineName")
    def attr_patch_baseline_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PatchBaselineName: The name of the patch baseline.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPatchBaselineName"))

    @builtins.property
    @jsii.member(jsii_name="attrRejectedPatches")
    def attr_rejected_patches(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RejectedPatches: Reject the name of the patch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRejectedPatches"))

    @builtins.property
    @jsii.member(jsii_name="attrRejectedPatchesAction")
    def attr_rejected_patches_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RejectedPatchesAction: The operation of rejecting the patch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRejectedPatchesAction"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: Approve whether the patch includes updates other than security.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ShareType: Patch baseline sharing type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrSources")
    def attr_sources(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sources: Patch source configuration list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSources"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: Tags of patch baseline.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedBy: Patch baseline updater.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedDate: Update time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedDate"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PatchBaselineProps":
        return typing.cast("PatchBaselineProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPatchBaseline).__jsii_proxy_class__ = lambda : _IPatchBaselineProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-oos.datasource.IPatchBaselines")
class IPatchBaselines(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``PatchBaselines``.'''

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineNames")
    def attr_patch_baseline_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PatchBaselineNames: The list of patch baseline names.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselines")
    def attr_patch_baselines(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PatchBaselines: The list of patch baselines.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PatchBaselinesProps":
        ...


class _IPatchBaselinesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``PatchBaselines``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-oos.datasource.IPatchBaselines"

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineNames")
    def attr_patch_baseline_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PatchBaselineNames: The list of patch baseline names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPatchBaselineNames"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselines")
    def attr_patch_baselines(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PatchBaselines: The list of patch baselines.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPatchBaselines"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PatchBaselinesProps":
        return typing.cast("PatchBaselinesProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPatchBaselines).__jsii_proxy_class__ = lambda : _IPatchBaselinesProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-oos.datasource.ISecretParameter")
class ISecretParameter(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``SecretParameter``.'''

    @builtins.property
    @jsii.member(jsii_name="attrConstraints")
    def attr_constraints(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Constraints: The constraints of the encryption parameter.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreatedBy: The user who created the encryption parameter.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the encryption parameter was created.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the encryption parameter.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrKeyId")
    def attr_key_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KeyId: The ID of the key of Key Management Service (KMS) that is used for encryption.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParameterVersion")
    def attr_parameter_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterVersion: The version number of the encryption parameter.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterId")
    def attr_secret_parameter_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecretParameterId: The ID of the encryption parameter.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterName")
    def attr_secret_parameter_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecretParameterName: The name of the parameter.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ShareType: The share type of the encryption parameter.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the parameter.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: The type of the parameter.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedBy: The user who updated the encryption parameter.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedDate: The time when the encryption parameter was updated.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrValue")
    def attr_value(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Value: The value of the encryption parameter.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SecretParameterProps":
        ...


class _ISecretParameterProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``SecretParameter``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-oos.datasource.ISecretParameter"

    @builtins.property
    @jsii.member(jsii_name="attrConstraints")
    def attr_constraints(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Constraints: The constraints of the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConstraints"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreatedBy: The user who created the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the encryption parameter was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyId")
    def attr_key_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KeyId: The ID of the key of Key Management Service (KMS) that is used for encryption.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterVersion")
    def attr_parameter_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterVersion: The version number of the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterId")
    def attr_secret_parameter_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecretParameterId: The ID of the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecretParameterId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterName")
    def attr_secret_parameter_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecretParameterName: The name of the parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecretParameterName"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ShareType: The share type of the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: The type of the parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedBy: The user who updated the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedDate: The time when the encryption parameter was updated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedDate"))

    @builtins.property
    @jsii.member(jsii_name="attrValue")
    def attr_value(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Value: The value of the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrValue"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SecretParameterProps":
        return typing.cast("SecretParameterProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISecretParameter).__jsii_proxy_class__ = lambda : _ISecretParameterProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-oos.datasource.ISecretParameters")
class ISecretParameters(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``SecretParameters``.'''

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterNames")
    def attr_secret_parameter_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecretParameterNames: The list of secret parameter names.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameters")
    def attr_secret_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecretParameters: The list of secret parameters.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SecretParametersProps":
        ...


class _ISecretParametersProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``SecretParameters``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-oos.datasource.ISecretParameters"

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterNames")
    def attr_secret_parameter_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecretParameterNames: The list of secret parameter names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecretParameterNames"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameters")
    def attr_secret_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecretParameters: The list of secret parameters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecretParameters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SecretParametersProps":
        return typing.cast("SecretParametersProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISecretParameters).__jsii_proxy_class__ = lambda : _ISecretParametersProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-oos.datasource.ITemplate")
class ITemplate(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Template``.'''

    @builtins.property
    @jsii.member(jsii_name="attrContent")
    def attr_content(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Content: The content of the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreatedBy: The creator of the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreatedDate")
    def attr_created_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreatedDate: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHash")
    def attr_hash(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Hash: The SHA-256 value of the template content.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHasTrigger")
    def attr_has_trigger(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HasTrigger: Specifies whether to query the template that is configured with a trigger.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ShareType: The share type of the template.

        Valid values:
        Public
        Private
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tag keys and values.

        The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTemplateFormat")
    def attr_template_format(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateFormat: The format of the template.

        Valid values:
        JSON
        YAML
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateId: The ID of the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTemplateType")
    def attr_template_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateType: The type of the template.

        Valid values:
        Automation: the template for automated tasks.
        State: the template for configuration inventories.
        Package: the template for software packages.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedBy: The user who last updated the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedDate: The time when the template was last updated.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TemplateProps":
        ...


class _ITemplateProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Template``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-oos.datasource.ITemplate"

    @builtins.property
    @jsii.member(jsii_name="attrContent")
    def attr_content(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Content: The content of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrContent"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreatedBy: The creator of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedDate")
    def attr_created_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreatedDate: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreatedDate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrHash")
    def attr_hash(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Hash: The SHA-256 value of the template content.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHash"))

    @builtins.property
    @jsii.member(jsii_name="attrHasTrigger")
    def attr_has_trigger(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HasTrigger: Specifies whether to query the template that is configured with a trigger.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHasTrigger"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ShareType: The share type of the template.

        Valid values:
        Public
        Private
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tag keys and values.

        The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateFormat")
    def attr_template_format(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateFormat: The format of the template.

        Valid values:
        JSON
        YAML
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateFormat"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateId: The ID of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateId"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateType")
    def attr_template_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateType: The type of the template.

        Valid values:
        Automation: the template for automated tasks.
        State: the template for configuration inventories.
        Package: the template for software packages.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateType"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedBy: The user who last updated the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedDate: The time when the template was last updated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedDate"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TemplateProps":
        return typing.cast("TemplateProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITemplate).__jsii_proxy_class__ = lambda : _ITemplateProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-oos.datasource.ITemplates")
class ITemplates(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Templates``.'''

    @builtins.property
    @jsii.member(jsii_name="attrTemplateNames")
    def attr_template_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateNames: The list of template_names.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTemplates")
    def attr_templates(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Templates: The list of templates.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TemplatesProps":
        ...


class _ITemplatesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Templates``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-oos.datasource.ITemplates"

    @builtins.property
    @jsii.member(jsii_name="attrTemplateNames")
    def attr_template_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateNames: The list of template_names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateNames"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplates")
    def attr_templates(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Templates: The list of templates.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplates"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TemplatesProps":
        return typing.cast("TemplatesProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITemplates).__jsii_proxy_class__ = lambda : _ITemplatesProxy


@jsii.implements(IPatchBaseline)
class PatchBaseline(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.PatchBaseline",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::OOS::PatchBaseline``.

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
    def attr_approval_rules(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApprovalRules: Accept the rules.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApprovalRules"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovedPatches")
    def attr_approved_patches(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApprovedPatches: Approved patch list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApprovedPatches"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovedPatchesEnableNonSecurity")
    def attr_approved_patches_enable_non_security(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApprovedPatchesEnableNonSecurity: Approve whether the patch includes updates other than security.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApprovedPatchesEnableNonSecurity"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreatedBy: Patch baseline creator.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Patches baseline description information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Whether it is the default patch baseline.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrOperationSystem")
    def attr_operation_system(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OperationSystem: Operating system type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOperationSystem"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineId")
    def attr_patch_baseline_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PatchBaselineId: Patch baseline ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPatchBaselineId"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselineName")
    def attr_patch_baseline_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PatchBaselineName: The name of the patch baseline.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPatchBaselineName"))

    @builtins.property
    @jsii.member(jsii_name="attrRejectedPatches")
    def attr_rejected_patches(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RejectedPatches: Reject the name of the patch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRejectedPatches"))

    @builtins.property
    @jsii.member(jsii_name="attrRejectedPatchesAction")
    def attr_rejected_patches_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RejectedPatchesAction: The operation of rejecting the patch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRejectedPatchesAction"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: Approve whether the patch includes updates other than security.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ShareType: Patch baseline sharing type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrSources")
    def attr_sources(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Sources: Patch source configuration list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSources"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: Tags of patch baseline.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedBy: Patch baseline updater.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedDate: Update time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedDate"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PatchBaselineProps":
        return typing.cast("PatchBaselineProps", jsii.get(self, "props"))

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
    name_mapping={
        "patch_baseline_name": "patchBaselineName",
        "refresh_options": "refreshOptions",
    },
)
class PatchBaselineProps:
    def __init__(
        self,
        *,
        patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``PatchBaseline``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline

        :param patch_baseline_name: Property patchBaselineName: The name of the patch baseline.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23b114b1c76f38addd5c24958a42d4e136e14743ff31bead632ec48f021fd08a)
            check_type(argname="argument patch_baseline_name", value=patch_baseline_name, expected_type=type_hints["patch_baseline_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "patch_baseline_name": patch_baseline_name,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def patch_baseline_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property patchBaselineName: The name of the patch baseline.'''
        result = self._values.get("patch_baseline_name")
        assert result is not None, "Required property 'patch_baseline_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PatchBaselineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IPatchBaselines)
class PatchBaselines(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.PatchBaselines",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::OOS::PatchBaselines``.

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
    def attr_patch_baseline_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PatchBaselineNames: The list of patch baseline names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPatchBaselineNames"))

    @builtins.property
    @jsii.member(jsii_name="attrPatchBaselines")
    def attr_patch_baselines(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PatchBaselines: The list of patch baselines.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPatchBaselines"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PatchBaselinesProps":
        return typing.cast("PatchBaselinesProps", jsii.get(self, "props"))

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
        "refresh_options": "refreshOptions",
        "share_type": "shareType",
    },
)
class PatchBaselinesProps:
    def __init__(
        self,
        *,
        operation_system: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        patch_baseline_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        share_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``PatchBaselines``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines

        :param operation_system: Property operationSystem: Operating system type.
        :param patch_baseline_name: Property patchBaselineName: The name of the patch baseline.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param share_type: Property shareType: Patch baseline sharing type.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f79ae5ba54508bbe343839e3bf1c4b964a917392beea096e83ee7a425bfd970)
            check_type(argname="argument operation_system", value=operation_system, expected_type=type_hints["operation_system"])
            check_type(argname="argument patch_baseline_name", value=patch_baseline_name, expected_type=type_hints["patch_baseline_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument share_type", value=share_type, expected_type=type_hints["share_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if operation_system is not None:
            self._values["operation_system"] = operation_system
        if patch_baseline_name is not None:
            self._values["patch_baseline_name"] = patch_baseline_name
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
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
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
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


class RosGitCodeRepo(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosGitCodeRepo",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::OOS::GitCodeRepo``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``GitCodeRepo`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-gitcoderepo
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGitCodeRepoProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4986e2ce9746c3de7883c5345431636451e2f1b74bfa6a5c2e0a0fa4eb2bd48b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__26cee8fc77fd75b5d9a2fc8480af1665b6df63f442b7f8cdce5de536a27c833f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthorizedUrl")
    def attr_authorized_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AuthorizedUrl: Authorized url.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuthorizedUrl"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__d6a20d7089a983af3e7810c3726d0a0e6bc4bd746afef4fac014c40a0e90b466)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="owner")
    def owner(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: owner: Git account.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "owner"))

    @owner.setter
    def owner(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df41565e7f29a8ac963a68fcf498d852287dab9ad27fd21b160122955c9ae0d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "owner", value)

    @builtins.property
    @jsii.member(jsii_name="platform")
    def platform(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: platform: Git platform.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "platform"))

    @platform.setter
    def platform(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0ece1c6cac3775fe135cb1d8a8131d6c64c1b867f33aa0fcc2a4c8a5b9b8ccc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "platform", value)

    @builtins.property
    @jsii.member(jsii_name="repository")
    def repository(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repository: Git repository.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "repository"))

    @repository.setter
    def repository(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6706d26c4a67725a6cec624a9af9f9cecc3aa8c8a5d39814c427add804a3633a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repository", value)

    @builtins.property
    @jsii.member(jsii_name="commitId")
    def commit_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commitId: Git commit id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "commitId"))

    @commit_id.setter
    def commit_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ac7e2b345cb37db473a6762450fadda8a90b082c8879aff87d36b40b4df0094)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "commitId", value)

    @builtins.property
    @jsii.member(jsii_name="organization")
    def organization(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: organization: Git organization.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "organization"))

    @organization.setter
    def organization(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71d59900ce977ec85b5ccd6c08f25bc52fd81b2b2324fed2e9422005c5bf10bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "organization", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fe96501095ceb3d5c635e267c8b2f6f6499b05aaffb541f5d995c7ca8095645)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosGitCodeRepoProps",
    jsii_struct_bases=[],
    name_mapping={
        "owner": "owner",
        "platform": "platform",
        "repository": "repository",
        "commit_id": "commitId",
        "organization": "organization",
        "refresh_options": "refreshOptions",
    },
)
class RosGitCodeRepoProps:
    def __init__(
        self,
        *,
        owner: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        platform: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        repository: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        commit_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        organization: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosGitCodeRepo``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-gitcoderepo

        :param owner: 
        :param platform: 
        :param repository: 
        :param commit_id: 
        :param organization: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d7ffa2224848a1e1804161af1273b4ca3f1a10d30a3c0264525d5b3385213c3)
            check_type(argname="argument owner", value=owner, expected_type=type_hints["owner"])
            check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
            check_type(argname="argument repository", value=repository, expected_type=type_hints["repository"])
            check_type(argname="argument commit_id", value=commit_id, expected_type=type_hints["commit_id"])
            check_type(argname="argument organization", value=organization, expected_type=type_hints["organization"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "owner": owner,
            "platform": platform,
            "repository": repository,
        }
        if commit_id is not None:
            self._values["commit_id"] = commit_id
        if organization is not None:
            self._values["organization"] = organization
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def owner(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: owner: Git account.
        '''
        result = self._values.get("owner")
        assert result is not None, "Required property 'owner' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def platform(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: platform: Git platform.
        '''
        result = self._values.get("platform")
        assert result is not None, "Required property 'platform' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def repository(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repository: Git repository.
        '''
        result = self._values.get("repository")
        assert result is not None, "Required property 'repository' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def commit_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commitId: Git commit id.
        '''
        result = self._values.get("commit_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def organization(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: organization: Git organization.
        '''
        result = self._values.get("organization")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGitCodeRepoProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPatchBaseline(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosPatchBaseline",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::OOS::PatchBaseline``.

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

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24e5f06ce6664adbebce34a51c8c15778755db3064994ca2f2a8f3bd9420f131)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosPatchBaselineProps",
    jsii_struct_bases=[],
    name_mapping={
        "patch_baseline_name": "patchBaselineName",
        "refresh_options": "refreshOptions",
    },
)
class RosPatchBaselineProps:
    def __init__(
        self,
        *,
        patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPatchBaseline``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline

        :param patch_baseline_name: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db49e383d57e477a030c507daa69fe6f8226be29cb551a493b11633cac5a98d5)
            check_type(argname="argument patch_baseline_name", value=patch_baseline_name, expected_type=type_hints["patch_baseline_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "patch_baseline_name": patch_baseline_name,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

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

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::OOS::PatchBaselines``.

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
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c3262c47da8418a0cb9e5573e12f114692d1d2e6f3ca1f84a8860b6c799848e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

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
        "refresh_options": "refreshOptions",
        "share_type": "shareType",
    },
)
class RosPatchBaselinesProps:
    def __init__(
        self,
        *,
        operation_system: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        patch_baseline_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        share_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPatchBaselines``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines

        :param operation_system: 
        :param patch_baseline_name: 
        :param refresh_options: 
        :param share_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f35790595e758f49eafb866c98ec5c19d0e6940565aa986facc6b1d13e72cb46)
            check_type(argname="argument operation_system", value=operation_system, expected_type=type_hints["operation_system"])
            check_type(argname="argument patch_baseline_name", value=patch_baseline_name, expected_type=type_hints["patch_baseline_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument share_type", value=share_type, expected_type=type_hints["share_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if operation_system is not None:
            self._values["operation_system"] = operation_system
        if patch_baseline_name is not None:
            self._values["patch_baseline_name"] = patch_baseline_name
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
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
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
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


class RosSecretParameter(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosSecretParameter",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::OOS::SecretParameter``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SecretParameter`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameter
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSecretParameterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ed0dbe68f70dbb9c53393c26c6a7c270ce3555751dd4f0e7a3c88e18a613383)
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
            type_hints = typing.get_type_hints(_typecheckingstub__901e75714b570c59a6c5a003501a47dd0bfd9725e7746ad93f4a321e47d19db8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConstraints")
    def attr_constraints(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Constraints: The constraints of the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConstraints"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreatedBy: The user who created the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the encryption parameter was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyId")
    def attr_key_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KeyId: The ID of the key of Key Management Service (KMS) that is used for encryption.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterVersion")
    def attr_parameter_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParameterVersion: The version number of the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterId")
    def attr_secret_parameter_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecretParameterId: The ID of the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecretParameterId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterName")
    def attr_secret_parameter_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecretParameterName: The name of the parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecretParameterName"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ShareType: The share type of the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of the parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Type: The type of the parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdatedBy: The user who updated the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdatedDate: The time when the encryption parameter was updated.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedDate"))

    @builtins.property
    @jsii.member(jsii_name="attrValue")
    def attr_value(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Value: The value of the encryption parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrValue"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__d241104559e1d5da0340c931df6c916fd69f1ac6e5f0ed17197a668ed28a741a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="secretParameterName")
    def secret_parameter_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: secretParameterName: The name of the parameter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "secretParameterName"))

    @secret_parameter_name.setter
    def secret_parameter_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ffe47b9668e2413b2ef7b05c5c68a7809c4dd3644d69ea38ec2788118228879)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secretParameterName", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ba1c3144749aa39fc9fd4dfc694bb2b970860bd30cbca7867a55203024113fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosSecretParameterProps",
    jsii_struct_bases=[],
    name_mapping={
        "secret_parameter_name": "secretParameterName",
        "refresh_options": "refreshOptions",
    },
)
class RosSecretParameterProps:
    def __init__(
        self,
        *,
        secret_parameter_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosSecretParameter``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameter

        :param secret_parameter_name: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35a6e6bddf82e083906763ef11eec61f7675cfd870f1b7e1453ff9c9de8c664f)
            check_type(argname="argument secret_parameter_name", value=secret_parameter_name, expected_type=type_hints["secret_parameter_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "secret_parameter_name": secret_parameter_name,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def secret_parameter_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: secretParameterName: The name of the parameter.
        '''
        result = self._values.get("secret_parameter_name")
        assert result is not None, "Required property 'secret_parameter_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSecretParameterProps(%s)" % ", ".join(
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
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73e93ce075bbef0f996694a1939864d47a2c63709fc0de953fa9faa02704e1e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

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
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
        "secret_parameter_name": "secretParameterName",
    },
)
class RosSecretParametersProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secret_parameter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosSecretParameters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters

        :param refresh_options: 
        :param resource_group_id: 
        :param secret_parameter_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06fd39aecb52f74a0f144f9ff972203a3c0014c9fa61a4f1595380c5ce409474)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument secret_parameter_name", value=secret_parameter_name, expected_type=type_hints["secret_parameter_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if secret_parameter_name is not None:
            self._values["secret_parameter_name"] = secret_parameter_name

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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


class RosTemplate(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosTemplate",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::OOS::Template``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Template`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-template
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTemplateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a872628804c20fa9a674f5ba71779c0a721b390aae54c7be6e42b2885df4f030)
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
            type_hints = typing.get_type_hints(_typecheckingstub__746ad0a8a609b634513f4af4d2a6dafe2682a2f9847150ab020492643b0a854b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrContent")
    def attr_content(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Content: The content of the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContent"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreatedBy: The creator of the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedDate")
    def attr_created_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreatedDate: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreatedDate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrHash")
    def attr_hash(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Hash: The SHA-256 value of the template content.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHash"))

    @builtins.property
    @jsii.member(jsii_name="attrHasTrigger")
    def attr_has_trigger(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HasTrigger: Specifies whether to query the template that is configured with a trigger.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHasTrigger"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        ShareType: The share type of the template. Valid values:
        Public
        Private
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tag keys and values. The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateFormat")
    def attr_template_format(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        TemplateFormat: The format of the template. Valid values:
        JSON
        YAML
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateFormat"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TemplateId: The ID of the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateId"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateType")
    def attr_template_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        TemplateType: The type of the template. Valid values:
        Automation: the template for automated tasks.
        State: the template for configuration inventories.
        Package: the template for software packages.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateType"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdatedBy: The user who last updated the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdatedDate: The time when the template was last updated.
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
            type_hints = typing.get_type_hints(_typecheckingstub__1ff4845c96f28319dcd97034de303502b8c0ea7e2d7a44ac200c2a70010f55b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="templateName")
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: templateName: The name of the template.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "templateName"))

    @template_name.setter
    def template_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1564188cb85bdfb4efb86c8c320cd282bbae9a5ecf9e9aed739ed510a161f0b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateName", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fcba360e9d6cae98ea5891860b1ab2ce1ca137023bab6853159ea67d8cebf6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="templateVersion")
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateVersion: The version of the template. The default value is the latest version of the template.Format: "v" + number. Value range: v1-v200.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "templateVersion"))

    @template_version.setter
    def template_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36dde11eb1b3291c6ec727613239ef764cbf93eb7923f022c7a8cee4e2f0350a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateVersion", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosTemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "template_name": "templateName",
        "refresh_options": "refreshOptions",
        "template_version": "templateVersion",
    },
)
class RosTemplateProps:
    def __init__(
        self,
        *,
        template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTemplate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-template

        :param template_name: 
        :param refresh_options: 
        :param template_version: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e06b8fa24c0a3fa82de43becf55d7945f59d5c92b743562083924001db22084)
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument template_version", value=template_version, expected_type=type_hints["template_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "template_name": template_name,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if template_version is not None:
            self._values["template_version"] = template_version

    @builtins.property
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: templateName: The name of the template.
        '''
        result = self._values.get("template_name")
        assert result is not None, "Required property 'template_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateVersion: The version of the template. The default value is the latest version of the template.Format: "v" + number. Value range: v1-v200.
        '''
        result = self._values.get("template_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTemplates(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosTemplates",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::OOS::Templates``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Templates`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTemplatesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6274df69f728f0e8ce3acf786763d464c7ebbe08dd59ccd40b0df973fecaaada)
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
            type_hints = typing.get_type_hints(_typecheckingstub__13033d5a55f1fa31eea1c272a164fbc50043283d4be1933a4f5dfc1bca2d635d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateNames")
    def attr_template_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TemplateNames: The list of template_names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateNames"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplates")
    def attr_templates(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Templates: The list of templates.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplates"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__6f874f260cf26a3ce91933f66c1277a0b69bf55bf5d6dde96502ecf50aeb1e89)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: category: The type of the template. Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd819b72aa219e5248a2a92984b59896c72af2f3c23d6b6a87af73508b16e8dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "category", value)

    @builtins.property
    @jsii.member(jsii_name="createdBy")
    def created_by(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: createdBy: The creator of the template.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "createdBy"))

    @created_by.setter
    def created_by(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65d995e3456e3008d5491bca1636e5e756df5b17de1224d55d1ab1a2ef6a742f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "createdBy", value)

    @builtins.property
    @jsii.member(jsii_name="createdDateAfter")
    def created_date_after(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "createdDateAfter"))

    @created_date_after.setter
    def created_date_after(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a68ef7f0c57d0ce8749aa77bc7ac8d1d38df0ee4dfc974c047b148b33fc7c1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "createdDateAfter", value)

    @builtins.property
    @jsii.member(jsii_name="createdDateBefore")
    def created_date_before(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "createdDateBefore"))

    @created_date_before.setter
    def created_date_before(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b9f48c491371b54ef7a4623998890cc3fdfce65863050942198547d2aa5e394)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "createdDateBefore", value)

    @builtins.property
    @jsii.member(jsii_name="hasTrigger")
    def has_trigger(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hasTrigger: Specifies whether to query the template that is configured with a trigger.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hasTrigger"))

    @has_trigger.setter
    def has_trigger(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9dd291b41c2c220e5b1c17905a81e24035083bb0b949e1cef9017b0abfa07e6b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hasTrigger", value)

    @builtins.property
    @jsii.member(jsii_name="isExample")
    def is_example(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isExample: Specifies whether the template is an example template.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isExample"))

    @is_example.setter
    def is_example(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5202f234266d1236a468377ef8e766ae451bc22f49181d8804fff8e4c6938810)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isExample", value)

    @builtins.property
    @jsii.member(jsii_name="isFavorite")
    def is_favorite(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isFavorite: Specifies whether the template is added to favorites.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isFavorite"))

    @is_favorite.setter
    def is_favorite(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e6c8b7ac343ab18914cf8cff0e5665f706aed626088cd05ba1f689a6ad4d1c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isFavorite", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f70c49a05f37069e0d5170cfb4c079c17b4ed3acade05145e3b74f26df00d33e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__8579ce4cb57097f10c7d9d318edb445398b4fd74941aa16b4e01ef420c628c84)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="shareType")
    def share_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shareType: The share type of the template. Valid values:
        Public
        Private
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "shareType"))

    @share_type.setter
    def share_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3acc91a09fecb93e1247486e04354fecb7a60a87091cac04207d6483886502e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "shareType", value)

    @builtins.property
    @jsii.member(jsii_name="sortField")
    def sort_field(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sortField: The field that is used to sort the templates to be queried. Valid values:
        TotalExecutionCount (default): The system sorts the returned templates based on the total number of times that the templates are used.
        Popularity: The system sorts the returned templates based on the popularity of the templates.
        TemplateName: The system sorts the returned templates based on the names of the templates.
        CreatedDate: The system sorts the returned templates based on the points in time when the templates are created.
        UpdatedDate: The system sorts the returned templates based on the points in time when the templates are updated.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sortField"))

    @sort_field.setter
    def sort_field(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b943644eb6e0aecef004baa5b3d4b55107a29ba34e11ffec29ee7251cfb75f08)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sortField", value)

    @builtins.property
    @jsii.member(jsii_name="sortOrder")
    def sort_order(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sortOrder: The order in which you want to sort the results. Valid values:
        Ascending: ascending order.
        Descending: descending order. This is the default value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sortOrder"))

    @sort_order.setter
    def sort_order(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__392774c007e6e8c04f66ca4e3cdb779b9a750cfc5545755958dbe0b02bde47f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sortOrder", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: The tag keys and values. The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
        '''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76baecd0c0b58b4c1c31acdbe7586dfeeae832827a8f6b6b91b87cba00e4cef6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="templateFormat")
    def template_format(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        templateFormat: The format of the template. Valid values:
        JSON
        YAML
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "templateFormat"))

    @template_format.setter
    def template_format(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25a158088bfc14c7eb2a794ae547bb461fedf418168f58fc00b5afe4f9a05352)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateFormat", value)

    @builtins.property
    @jsii.member(jsii_name="templateName")
    def template_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateName: The name of the template.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "templateName"))

    @template_name.setter
    def template_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7d9199ceb61c2243b7b77fed76291457d64d861755a8fcc51c84610891d80bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateName", value)

    @builtins.property
    @jsii.member(jsii_name="templateType")
    def template_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        templateType: The type of the template. Valid values:
        Automation: the template for automated tasks.
        State: the template for configuration inventories.
        Package: the template for software packages.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "templateType"))

    @template_type.setter
    def template_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__582a5e961fc0054f15ee22a6b37eb0b37a60cc09b1be0dbb6d0be014d04e76ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.RosTemplatesProps",
    jsii_struct_bases=[],
    name_mapping={
        "category": "category",
        "created_by": "createdBy",
        "created_date_after": "createdDateAfter",
        "created_date_before": "createdDateBefore",
        "has_trigger": "hasTrigger",
        "is_example": "isExample",
        "is_favorite": "isFavorite",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
        "share_type": "shareType",
        "sort_field": "sortField",
        "sort_order": "sortOrder",
        "tags": "tags",
        "template_format": "templateFormat",
        "template_name": "templateName",
        "template_type": "templateType",
    },
)
class RosTemplatesProps:
    def __init__(
        self,
        *,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        created_by: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        created_date_after: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        created_date_before: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        has_trigger: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_example: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_favorite: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        share_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sort_field: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sort_order: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        template_format: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTemplates``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates

        :param category: 
        :param created_by: 
        :param created_date_after: 
        :param created_date_before: 
        :param has_trigger: 
        :param is_example: 
        :param is_favorite: 
        :param refresh_options: 
        :param resource_group_id: 
        :param share_type: 
        :param sort_field: 
        :param sort_order: 
        :param tags: 
        :param template_format: 
        :param template_name: 
        :param template_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c9d275063c5ede1a9b1f78bd80d3b087e4e24bb558541f1a491c38b4dad7a0a)
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument created_by", value=created_by, expected_type=type_hints["created_by"])
            check_type(argname="argument created_date_after", value=created_date_after, expected_type=type_hints["created_date_after"])
            check_type(argname="argument created_date_before", value=created_date_before, expected_type=type_hints["created_date_before"])
            check_type(argname="argument has_trigger", value=has_trigger, expected_type=type_hints["has_trigger"])
            check_type(argname="argument is_example", value=is_example, expected_type=type_hints["is_example"])
            check_type(argname="argument is_favorite", value=is_favorite, expected_type=type_hints["is_favorite"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument share_type", value=share_type, expected_type=type_hints["share_type"])
            check_type(argname="argument sort_field", value=sort_field, expected_type=type_hints["sort_field"])
            check_type(argname="argument sort_order", value=sort_order, expected_type=type_hints["sort_order"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument template_format", value=template_format, expected_type=type_hints["template_format"])
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument template_type", value=template_type, expected_type=type_hints["template_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if category is not None:
            self._values["category"] = category
        if created_by is not None:
            self._values["created_by"] = created_by
        if created_date_after is not None:
            self._values["created_date_after"] = created_date_after
        if created_date_before is not None:
            self._values["created_date_before"] = created_date_before
        if has_trigger is not None:
            self._values["has_trigger"] = has_trigger
        if is_example is not None:
            self._values["is_example"] = is_example
        if is_favorite is not None:
            self._values["is_favorite"] = is_favorite
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if share_type is not None:
            self._values["share_type"] = share_type
        if sort_field is not None:
            self._values["sort_field"] = sort_field
        if sort_order is not None:
            self._values["sort_order"] = sort_order
        if tags is not None:
            self._values["tags"] = tags
        if template_format is not None:
            self._values["template_format"] = template_format
        if template_name is not None:
            self._values["template_name"] = template_name
        if template_type is not None:
            self._values["template_type"] = template_type

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: category: The type of the template. Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def created_by(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: createdBy: The creator of the template.
        '''
        result = self._values.get("created_by")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def created_date_after(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.
        '''
        result = self._values.get("created_date_after")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def created_date_before(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
        '''
        result = self._values.get("created_date_before")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def has_trigger(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hasTrigger: Specifies whether to query the template that is configured with a trigger.
        '''
        result = self._values.get("has_trigger")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_example(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isExample: Specifies whether the template is an example template.
        '''
        result = self._values.get("is_example")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_favorite(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isFavorite: Specifies whether the template is added to favorites.
        '''
        result = self._values.get("is_favorite")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
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
    def share_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shareType: The share type of the template. Valid values:
        Public
        Private
        '''
        result = self._values.get("share_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sort_field(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sortField: The field that is used to sort the templates to be queried. Valid values:
        TotalExecutionCount (default): The system sorts the returned templates based on the total number of times that the templates are used.
        Popularity: The system sorts the returned templates based on the popularity of the templates.
        TemplateName: The system sorts the returned templates based on the names of the templates.
        CreatedDate: The system sorts the returned templates based on the points in time when the templates are created.
        UpdatedDate: The system sorts the returned templates based on the points in time when the templates are updated.
        '''
        result = self._values.get("sort_field")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sort_order(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sortOrder: The order in which you want to sort the results. Valid values:
        Ascending: ascending order.
        Descending: descending order. This is the default value.
        '''
        result = self._values.get("sort_order")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: The tag keys and values. The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def template_format(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        templateFormat: The format of the template. Valid values:
        JSON
        YAML
        '''
        result = self._values.get("template_format")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateName: The name of the template.
        '''
        result = self._values.get("template_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        templateType: The type of the template. Valid values:
        Automation: the template for automated tasks.
        State: the template for configuration inventories.
        Package: the template for software packages.
        '''
        result = self._values.get("template_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTemplatesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ISecretParameter)
class SecretParameter(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.SecretParameter",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::OOS::SecretParameter``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSecretParameter``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameter
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SecretParameterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0110ea539e59ef7e11289e99bec7b5716ba11c03009309fb674f7b6ce52c661a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConstraints")
    def attr_constraints(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Constraints: The constraints of the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConstraints"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreatedBy: The user who created the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the encryption parameter was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyId")
    def attr_key_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KeyId: The ID of the key of Key Management Service (KMS) that is used for encryption.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrParameterVersion")
    def attr_parameter_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParameterVersion: The version number of the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterId")
    def attr_secret_parameter_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecretParameterId: The ID of the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecretParameterId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameterName")
    def attr_secret_parameter_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecretParameterName: The name of the parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecretParameterName"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ShareType: The share type of the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: The type of the parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedBy: The user who updated the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedDate: The time when the encryption parameter was updated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedDate"))

    @builtins.property
    @jsii.member(jsii_name="attrValue")
    def attr_value(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Value: The value of the encryption parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrValue"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SecretParameterProps":
        return typing.cast("SecretParameterProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db1087a94e6d6e04c0769c4fa0a401beca780098b0a2c815e2e9985a868845cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f71a0342742a86b77271d9cde7dd29fe555f40a175b36ae2054654149a8f5050)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae0de008d8950ee869768bca10af6d165b164e56441ae43b5e162793b68c68ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.SecretParameterProps",
    jsii_struct_bases=[],
    name_mapping={
        "secret_parameter_name": "secretParameterName",
        "refresh_options": "refreshOptions",
    },
)
class SecretParameterProps:
    def __init__(
        self,
        *,
        secret_parameter_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``SecretParameter``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameter

        :param secret_parameter_name: Property secretParameterName: The name of the parameter.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1f0e46ba2329f6ff0970ac931d0dacd4c86b09c420a8f617d6e824e2f6da8e3)
            check_type(argname="argument secret_parameter_name", value=secret_parameter_name, expected_type=type_hints["secret_parameter_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "secret_parameter_name": secret_parameter_name,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def secret_parameter_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property secretParameterName: The name of the parameter.'''
        result = self._values.get("secret_parameter_name")
        assert result is not None, "Required property 'secret_parameter_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SecretParameterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ISecretParameters)
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
    def attr_secret_parameter_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecretParameterNames: The list of secret parameter names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecretParameterNames"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretParameters")
    def attr_secret_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecretParameters: The list of secret parameters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecretParameters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SecretParametersProps":
        return typing.cast("SecretParametersProps", jsii.get(self, "props"))

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
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
        "secret_parameter_name": "secretParameterName",
    },
)
class SecretParametersProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secret_parameter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``SecretParameters``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters

        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param resource_group_id: Property resourceGroupId: The ID of resource group.
        :param secret_parameter_name: Property secretParameterName: The name of the encryption parameter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46e311ed9c39f112728789cc7cbf629884f849f179cebf10a9baab8bf7856204)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument secret_parameter_name", value=secret_parameter_name, expected_type=type_hints["secret_parameter_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if secret_parameter_name is not None:
            self._values["secret_parameter_name"] = secret_parameter_name

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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


@jsii.implements(ITemplate)
class Template(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.Template",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::OOS::Template``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTemplate``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-template
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TemplateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__198b2d70b9151e7ff29451ee205cb138353ea6d5e7691bbad65e1f450d833b39)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrContent")
    def attr_content(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Content: The content of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrContent"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedBy")
    def attr_created_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreatedBy: The creator of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrCreatedDate")
    def attr_created_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreatedDate: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreatedDate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrHash")
    def attr_hash(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Hash: The SHA-256 value of the template content.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHash"))

    @builtins.property
    @jsii.member(jsii_name="attrHasTrigger")
    def attr_has_trigger(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HasTrigger: Specifies whether to query the template that is configured with a trigger.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHasTrigger"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrShareType")
    def attr_share_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ShareType: The share type of the template.

        Valid values:
        Public
        Private
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrShareType"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tag keys and values.

        The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateFormat")
    def attr_template_format(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateFormat: The format of the template.

        Valid values:
        JSON
        YAML
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateFormat"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateId")
    def attr_template_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateId: The ID of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateId"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateType")
    def attr_template_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateType: The type of the template.

        Valid values:
        Automation: the template for automated tasks.
        State: the template for configuration inventories.
        Package: the template for software packages.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateType"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedBy")
    def attr_updated_by(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedBy: The user who last updated the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedBy"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedDate")
    def attr_updated_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedDate: The time when the template was last updated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedDate"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TemplateProps":
        return typing.cast("TemplateProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8b7483f46a5fc787b715203f421723b118ca700619466da9b16124bc94850ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__160a11bfef8628c58422833e9bb4dd0f949a7df0b87ef2042d4230289947d9be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fea5cf03d85bad8a0fc89ec5d053f63d3ceeb35ef91d93d20f28f86ce9458f04)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.TemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "template_name": "templateName",
        "refresh_options": "refreshOptions",
        "template_version": "templateVersion",
    },
)
class TemplateProps:
    def __init__(
        self,
        *,
        template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Template``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-template

        :param template_name: Property templateName: The name of the template.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param template_version: Property templateVersion: The version of the template. The default value is the latest version of the template.Format: "v" + number. Value range: v1-v200.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3d0135a96d3ee471e57365d867dec45c3424ec53f647a3b41bd6a63ab54622f)
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument template_version", value=template_version, expected_type=type_hints["template_version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "template_name": template_name,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if template_version is not None:
            self._values["template_version"] = template_version

    @builtins.property
    def template_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property templateName: The name of the template.'''
        result = self._values.get("template_name")
        assert result is not None, "Required property 'template_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property templateVersion: The version of the template.

        The default value is the latest version of the template.Format: "v" + number. Value range: v1-v200.
        '''
        result = self._values.get("template_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ITemplates)
class Templates(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.Templates",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::OOS::Templates``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTemplates``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["TemplatesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__106e69330a5103b2983887567be4fcbefdb57a34918fa79d6cc7d20d5a3201b7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTemplateNames")
    def attr_template_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateNames: The list of template_names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateNames"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplates")
    def attr_templates(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Templates: The list of templates.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplates"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TemplatesProps":
        return typing.cast("TemplatesProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b625967619b69ff4bc4594d8210f2a70864ed49b22415af472f907a7c66790c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__052e13f305b6f8eb4b101457a9b501338fa2a33bd5d1b84983408a4e0fa32cac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a97bba53f8b3f3080cb3ec2f065b57c8adca3fbe8ad34a57b7f31cba73b1d2d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oos.datasource.TemplatesProps",
    jsii_struct_bases=[],
    name_mapping={
        "category": "category",
        "created_by": "createdBy",
        "created_date_after": "createdDateAfter",
        "created_date_before": "createdDateBefore",
        "has_trigger": "hasTrigger",
        "is_example": "isExample",
        "is_favorite": "isFavorite",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
        "share_type": "shareType",
        "sort_field": "sortField",
        "sort_order": "sortOrder",
        "tags": "tags",
        "template_format": "templateFormat",
        "template_name": "templateName",
        "template_type": "templateType",
    },
)
class TemplatesProps:
    def __init__(
        self,
        *,
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        created_by: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        created_date_after: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        created_date_before: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        has_trigger: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_example: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_favorite: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        share_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sort_field: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sort_order: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        template_format: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Templates``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-templates

        :param category: Property category: The type of the template. Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
        :param created_by: Property createdBy: The creator of the template.
        :param created_date_after: Property createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.
        :param created_date_before: Property createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
        :param has_trigger: Property hasTrigger: Specifies whether to query the template that is configured with a trigger.
        :param is_example: Property isExample: Specifies whether the template is an example template.
        :param is_favorite: Property isFavorite: Specifies whether the template is added to favorites.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param share_type: Property shareType: The share type of the template. Valid values: Public Private
        :param sort_field: Property sortField: The field that is used to sort the templates to be queried. Valid values: TotalExecutionCount (default): The system sorts the returned templates based on the total number of times that the templates are used. Popularity: The system sorts the returned templates based on the popularity of the templates. TemplateName: The system sorts the returned templates based on the names of the templates. CreatedDate: The system sorts the returned templates based on the points in time when the templates are created. UpdatedDate: The system sorts the returned templates based on the points in time when the templates are updated.
        :param sort_order: Property sortOrder: The order in which you want to sort the results. Valid values: Ascending: ascending order. Descending: descending order. This is the default value.
        :param tags: Property tags: The tag keys and values. The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
        :param template_format: Property templateFormat: The format of the template. Valid values: JSON YAML
        :param template_name: Property templateName: The name of the template.
        :param template_type: Property templateType: The type of the template. Valid values: Automation: the template for automated tasks. State: the template for configuration inventories. Package: the template for software packages.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65d7025be149459c4c720cf05653c5173de2b610db5cb0c5a56438901c0b9cc3)
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument created_by", value=created_by, expected_type=type_hints["created_by"])
            check_type(argname="argument created_date_after", value=created_date_after, expected_type=type_hints["created_date_after"])
            check_type(argname="argument created_date_before", value=created_date_before, expected_type=type_hints["created_date_before"])
            check_type(argname="argument has_trigger", value=has_trigger, expected_type=type_hints["has_trigger"])
            check_type(argname="argument is_example", value=is_example, expected_type=type_hints["is_example"])
            check_type(argname="argument is_favorite", value=is_favorite, expected_type=type_hints["is_favorite"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument share_type", value=share_type, expected_type=type_hints["share_type"])
            check_type(argname="argument sort_field", value=sort_field, expected_type=type_hints["sort_field"])
            check_type(argname="argument sort_order", value=sort_order, expected_type=type_hints["sort_order"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument template_format", value=template_format, expected_type=type_hints["template_format"])
            check_type(argname="argument template_name", value=template_name, expected_type=type_hints["template_name"])
            check_type(argname="argument template_type", value=template_type, expected_type=type_hints["template_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if category is not None:
            self._values["category"] = category
        if created_by is not None:
            self._values["created_by"] = created_by
        if created_date_after is not None:
            self._values["created_date_after"] = created_date_after
        if created_date_before is not None:
            self._values["created_date_before"] = created_date_before
        if has_trigger is not None:
            self._values["has_trigger"] = has_trigger
        if is_example is not None:
            self._values["is_example"] = is_example
        if is_favorite is not None:
            self._values["is_favorite"] = is_favorite
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if share_type is not None:
            self._values["share_type"] = share_type
        if sort_field is not None:
            self._values["sort_field"] = sort_field
        if sort_order is not None:
            self._values["sort_order"] = sort_order
        if tags is not None:
            self._values["tags"] = tags
        if template_format is not None:
            self._values["template_format"] = template_format
        if template_name is not None:
            self._values["template_name"] = template_name
        if template_type is not None:
            self._values["template_type"] = template_type

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property category: The type of the template.

        Valid values include TimerTrigger, EventTrigger, AlarmTrigger, and Other.
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def created_by(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property createdBy: The creator of the template.'''
        result = self._values.get("created_by")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def created_date_after(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property createdDateAfter: Specifies to query the template that is created at or later than the specified time.The value must be in the YYYY-MM-DDThh:mm:ssZ format.'''
        result = self._values.get("created_date_after")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def created_date_before(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property createdDateBefore: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.'''
        result = self._values.get("created_date_before")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def has_trigger(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hasTrigger: Specifies whether to query the template that is configured with a trigger.'''
        result = self._values.get("has_trigger")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_example(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isExample: Specifies whether the template is an example template.'''
        result = self._values.get("is_example")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_favorite(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isFavorite: Specifies whether the template is added to favorites.'''
        result = self._values.get("is_favorite")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def share_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property shareType: The share type of the template.

        Valid values:
        Public
        Private
        '''
        result = self._values.get("share_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sort_field(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sortField: The field that is used to sort the templates to be queried.

        Valid values:
        TotalExecutionCount (default): The system sorts the returned templates based on the total number of times that the templates are used.
        Popularity: The system sorts the returned templates based on the popularity of the templates.
        TemplateName: The system sorts the returned templates based on the names of the templates.
        CreatedDate: The system sorts the returned templates based on the points in time when the templates are created.
        UpdatedDate: The system sorts the returned templates based on the points in time when the templates are updated.
        '''
        result = self._values.get("sort_field")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sort_order(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sortOrder: The order in which you want to sort the results.

        Valid values:
        Ascending: ascending order.
        Descending: descending order. This is the default value.
        '''
        result = self._values.get("sort_order")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Property tags: The tag keys and values.

        The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def template_format(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property templateFormat: The format of the template.

        Valid values:
        JSON
        YAML
        '''
        result = self._values.get("template_format")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property templateName: The name of the template.'''
        result = self._values.get("template_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property templateType: The type of the template.

        Valid values:
        Automation: the template for automated tasks.
        State: the template for configuration inventories.
        Package: the template for software packages.
        '''
        result = self._values.get("template_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TemplatesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IGitCodeRepo)
class GitCodeRepo(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oos.datasource.GitCodeRepo",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::OOS::GitCodeRepo``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGitCodeRepo``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-gitcoderepo
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[GitCodeRepoProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__413ac6f84e1ee79f526d1f08eb67bf79e5cd37674a8d5c1a5bcf51d02c6e085a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAuthorizedUrl")
    def attr_authorized_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthorizedUrl: Authorized url.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthorizedUrl"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GitCodeRepoProps:
        return typing.cast(GitCodeRepoProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6af0ee9dafbc3284ca6cd97db113fe366488992f2e58c6621009545ae0ae3c1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f2a33c96fea7b0d7807831fac9c0e53fef08015cdd27dadd7f7d489764242e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f828c0d7556c997a25f6d88ca3aa5ff3fbccfec093e80de92e3e7a955d333b26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "GitCodeRepo",
    "GitCodeRepoProps",
    "IGitCodeRepo",
    "IPatchBaseline",
    "IPatchBaselines",
    "ISecretParameter",
    "ISecretParameters",
    "ITemplate",
    "ITemplates",
    "PatchBaseline",
    "PatchBaselineProps",
    "PatchBaselines",
    "PatchBaselinesProps",
    "RosGitCodeRepo",
    "RosGitCodeRepoProps",
    "RosPatchBaseline",
    "RosPatchBaselineProps",
    "RosPatchBaselines",
    "RosPatchBaselinesProps",
    "RosSecretParameter",
    "RosSecretParameterProps",
    "RosSecretParameters",
    "RosSecretParametersProps",
    "RosTemplate",
    "RosTemplateProps",
    "RosTemplates",
    "RosTemplatesProps",
    "SecretParameter",
    "SecretParameterProps",
    "SecretParameters",
    "SecretParametersProps",
    "Template",
    "TemplateProps",
    "Templates",
    "TemplatesProps",
]

publication.publish()

def _typecheckingstub__600fbe97a1b6ca83d96e5e5d3f0296eeb1d88b1c04c32129bfface34e4cc4147(
    *,
    owner: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    platform: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    repository: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    commit_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    organization: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

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

def _typecheckingstub__fa6fb7d26517b90caa03f4a122f8da429aaeaac3092ed89f89b6e4a341e04dec(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23b114b1c76f38addd5c24958a42d4e136e14743ff31bead632ec48f021fd08a(
    *,
    patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__22b7286587477c7afc1797d15025708ab5700cbf7ebd4fef98e8e144848dd254(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f79ae5ba54508bbe343839e3bf1c4b964a917392beea096e83ee7a425bfd970(
    *,
    operation_system: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    patch_baseline_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    share_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4986e2ce9746c3de7883c5345431636451e2f1b74bfa6a5c2e0a0fa4eb2bd48b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGitCodeRepoProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26cee8fc77fd75b5d9a2fc8480af1665b6df63f442b7f8cdce5de536a27c833f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6a20d7089a983af3e7810c3726d0a0e6bc4bd746afef4fac014c40a0e90b466(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df41565e7f29a8ac963a68fcf498d852287dab9ad27fd21b160122955c9ae0d4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0ece1c6cac3775fe135cb1d8a8131d6c64c1b867f33aa0fcc2a4c8a5b9b8ccc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6706d26c4a67725a6cec624a9af9f9cecc3aa8c8a5d39814c427add804a3633a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ac7e2b345cb37db473a6762450fadda8a90b082c8879aff87d36b40b4df0094(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71d59900ce977ec85b5ccd6c08f25bc52fd81b2b2324fed2e9422005c5bf10bc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fe96501095ceb3d5c635e267c8b2f6f6499b05aaffb541f5d995c7ca8095645(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d7ffa2224848a1e1804161af1273b4ca3f1a10d30a3c0264525d5b3385213c3(
    *,
    owner: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    platform: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    repository: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    commit_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    organization: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__24e5f06ce6664adbebce34a51c8c15778755db3064994ca2f2a8f3bd9420f131(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db49e383d57e477a030c507daa69fe6f8226be29cb551a493b11633cac5a98d5(
    *,
    patch_baseline_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__5c3262c47da8418a0cb9e5573e12f114692d1d2e6f3ca1f84a8860b6c799848e(
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
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    share_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ed0dbe68f70dbb9c53393c26c6a7c270ce3555751dd4f0e7a3c88e18a613383(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSecretParameterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__901e75714b570c59a6c5a003501a47dd0bfd9725e7746ad93f4a321e47d19db8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d241104559e1d5da0340c931df6c916fd69f1ac6e5f0ed17197a668ed28a741a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ffe47b9668e2413b2ef7b05c5c68a7809c4dd3644d69ea38ec2788118228879(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ba1c3144749aa39fc9fd4dfc694bb2b970860bd30cbca7867a55203024113fe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35a6e6bddf82e083906763ef11eec61f7675cfd870f1b7e1453ff9c9de8c664f(
    *,
    secret_parameter_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__73e93ce075bbef0f996694a1939864d47a2c63709fc0de953fa9faa02704e1e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
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
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secret_parameter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a872628804c20fa9a674f5ba71779c0a721b390aae54c7be6e42b2885df4f030(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTemplateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__746ad0a8a609b634513f4af4d2a6dafe2682a2f9847150ab020492643b0a854b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ff4845c96f28319dcd97034de303502b8c0ea7e2d7a44ac200c2a70010f55b2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1564188cb85bdfb4efb86c8c320cd282bbae9a5ecf9e9aed739ed510a161f0b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fcba360e9d6cae98ea5891860b1ab2ce1ca137023bab6853159ea67d8cebf6e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36dde11eb1b3291c6ec727613239ef764cbf93eb7923f022c7a8cee4e2f0350a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e06b8fa24c0a3fa82de43becf55d7945f59d5c92b743562083924001db22084(
    *,
    template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6274df69f728f0e8ce3acf786763d464c7ebbe08dd59ccd40b0df973fecaaada(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTemplatesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13033d5a55f1fa31eea1c272a164fbc50043283d4be1933a4f5dfc1bca2d635d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f874f260cf26a3ce91933f66c1277a0b69bf55bf5d6dde96502ecf50aeb1e89(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd819b72aa219e5248a2a92984b59896c72af2f3c23d6b6a87af73508b16e8dc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65d995e3456e3008d5491bca1636e5e756df5b17de1224d55d1ab1a2ef6a742f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a68ef7f0c57d0ce8749aa77bc7ac8d1d38df0ee4dfc974c047b148b33fc7c1e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b9f48c491371b54ef7a4623998890cc3fdfce65863050942198547d2aa5e394(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9dd291b41c2c220e5b1c17905a81e24035083bb0b949e1cef9017b0abfa07e6b(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5202f234266d1236a468377ef8e766ae451bc22f49181d8804fff8e4c6938810(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e6c8b7ac343ab18914cf8cff0e5665f706aed626088cd05ba1f689a6ad4d1c7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f70c49a05f37069e0d5170cfb4c079c17b4ed3acade05145e3b74f26df00d33e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8579ce4cb57097f10c7d9d318edb445398b4fd74941aa16b4e01ef420c628c84(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3acc91a09fecb93e1247486e04354fecb7a60a87091cac04207d6483886502e5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b943644eb6e0aecef004baa5b3d4b55107a29ba34e11ffec29ee7251cfb75f08(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__392774c007e6e8c04f66ca4e3cdb779b9a750cfc5545755958dbe0b02bde47f2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76baecd0c0b58b4c1c31acdbe7586dfeeae832827a8f6b6b91b87cba00e4cef6(
    value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25a158088bfc14c7eb2a794ae547bb461fedf418168f58fc00b5afe4f9a05352(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7d9199ceb61c2243b7b77fed76291457d64d861755a8fcc51c84610891d80bf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__582a5e961fc0054f15ee22a6b37eb0b37a60cc09b1be0dbb6d0be014d04e76ec(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c9d275063c5ede1a9b1f78bd80d3b087e4e24bb558541f1a491c38b4dad7a0a(
    *,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    created_by: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    created_date_after: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    created_date_before: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    has_trigger: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_example: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_favorite: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    share_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sort_field: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sort_order: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    template_format: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0110ea539e59ef7e11289e99bec7b5716ba11c03009309fb674f7b6ce52c661a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SecretParameterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db1087a94e6d6e04c0769c4fa0a401beca780098b0a2c815e2e9985a868845cc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f71a0342742a86b77271d9cde7dd29fe555f40a175b36ae2054654149a8f5050(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae0de008d8950ee869768bca10af6d165b164e56441ae43b5e162793b68c68ec(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1f0e46ba2329f6ff0970ac931d0dacd4c86b09c420a8f617d6e824e2f6da8e3(
    *,
    secret_parameter_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__e6bd8457f7a77a77372f8d1653d6b73f8fca80bc2ea808d46e3d830c0bc909e4(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46e311ed9c39f112728789cc7cbf629884f849f179cebf10a9baab8bf7856204(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secret_parameter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__198b2d70b9151e7ff29451ee205cb138353ea6d5e7691bbad65e1f450d833b39(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TemplateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8b7483f46a5fc787b715203f421723b118ca700619466da9b16124bc94850ed(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__160a11bfef8628c58422833e9bb4dd0f949a7df0b87ef2042d4230289947d9be(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fea5cf03d85bad8a0fc89ec5d053f63d3ceeb35ef91d93d20f28f86ce9458f04(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3d0135a96d3ee471e57365d867dec45c3424ec53f647a3b41bd6a63ab54622f(
    *,
    template_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__106e69330a5103b2983887567be4fcbefdb57a34918fa79d6cc7d20d5a3201b7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[TemplatesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b625967619b69ff4bc4594d8210f2a70864ed49b22415af472f907a7c66790c3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__052e13f305b6f8eb4b101457a9b501338fa2a33bd5d1b84983408a4e0fa32cac(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a97bba53f8b3f3080cb3ec2f065b57c8adca3fbe8ad34a57b7f31cba73b1d2d1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65d7025be149459c4c720cf05653c5173de2b610db5cb0c5a56438901c0b9cc3(
    *,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    created_by: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    created_date_after: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    created_date_before: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    has_trigger: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_example: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_favorite: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    share_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sort_field: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sort_order: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    template_format: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__413ac6f84e1ee79f526d1f08eb67bf79e5cd37674a8d5c1a5bcf51d02c6e085a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GitCodeRepoProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6af0ee9dafbc3284ca6cd97db113fe366488992f2e58c6621009545ae0ae3c1a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f2a33c96fea7b0d7807831fac9c0e53fef08015cdd27dadd7f7d489764242e9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f828c0d7556c997a25f6d88ca3aa5ff3fbccfec093e80de92e3e7a955d333b26(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
