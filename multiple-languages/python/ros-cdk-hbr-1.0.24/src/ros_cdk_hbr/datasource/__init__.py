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


class RosVaults(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.datasource.RosVaults",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::HBR::Vaults``, which is used to query the basic information about backup vaults.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Vaults`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVaultsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36fd3d8f5a1cb8ef2cf1f73b7bcf903a8040c80c9c4f07bf984be7bfb6d7b2a9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__74d1502b5b837412dfe3115a8aff4d9c165636f0c6daa1b25bd2d3aeb4588bab)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultIds")
    def attr_vault_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultIds: The list of vault IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultIds"))

    @builtins.property
    @jsii.member(jsii_name="attrVaults")
    def attr_vaults(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Vaults: The list of vaults.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaults"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__ed313cc6219ac7beb1fb18959826bf18496775806bdb4bb9c3c93165dfb5a103)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="vaultId")
    def vault_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vaultId: VaultId.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vaultId"))

    @vault_id.setter
    def vault_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d09633ca823dbcda2d5e9702bdda6f2091ca246d9a743c7e712e17b87974b807)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultId", value)

    @builtins.property
    @jsii.member(jsii_name="vaultType")
    def vault_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vaultType: Vault type. Value

        - **STANDARD**, which indicates a common backup vault.
        - **OTS_BACKUP**, indicating OTS backup vault.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vaultType"))

    @vault_type.setter
    def vault_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__420e826dfbac833b7333aa2a95b33643cd0bbac7a688f39f344c9a96eecb6823)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.datasource.RosVaultsProps",
    jsii_struct_bases=[],
    name_mapping={"vault_id": "vaultId", "vault_type": "vaultType"},
)
class RosVaultsProps:
    def __init__(
        self,
        *,
        vault_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vault_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosVaults``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults

        :param vault_id: 
        :param vault_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d713cd7d2e7d3553124bc02a9bbccb2e21512c91d7da8472f00cdb5e424aafab)
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument vault_type", value=vault_type, expected_type=type_hints["vault_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if vault_id is not None:
            self._values["vault_id"] = vault_id
        if vault_type is not None:
            self._values["vault_type"] = vault_type

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vaultId: VaultId.
        '''
        result = self._values.get("vault_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vault_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vaultType: Vault type. Value

        - **STANDARD**, which indicates a common backup vault.
        - **OTS_BACKUP**, indicating OTS backup vault.
        '''
        result = self._values.get("vault_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVaultsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Vaults(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.datasource.Vaults",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::HBR::Vaults``, which is used to query the basic information about backup vaults.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVaults``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["VaultsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4a5b0d9ebb21c59802115a8130a4d124184ff0747cf8de60866c6409904583c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrVaultIds")
    def attr_vault_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VaultIds: The list of vault IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultIds"))

    @builtins.property
    @jsii.member(jsii_name="attrVaults")
    def attr_vaults(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Vaults: The list of vaults.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaults"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00ad60f775e620f56d3d78e07770aeb3e33e24c330a7053553ff7cd7492d7e70)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc8c6ca3cfdb0bacb6ec07db4552db390232664f411448fbc2ae6f02a95615fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "VaultsProps":
        return typing.cast("VaultsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "VaultsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b00f35506fead0c3ecef84731b0f7a98f5ad3ac822fa3397df37acc4ee756ce1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81f5a7e50a39eade7a79213d7ebdb55d5cbcdace9923a816d31afe6223f5318a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.datasource.VaultsProps",
    jsii_struct_bases=[],
    name_mapping={"vault_id": "vaultId", "vault_type": "vaultType"},
)
class VaultsProps:
    def __init__(
        self,
        *,
        vault_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vault_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Vaults``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults

        :param vault_id: Property vaultId: VaultId.
        :param vault_type: Property vaultType: Vault type. Value - **STANDARD**, which indicates a common backup vault. - **OTS_BACKUP**, indicating OTS backup vault.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f72cccc6308e682825f0211b1b7869b05210124bbf2de7087eb5887118dae5c4)
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument vault_type", value=vault_type, expected_type=type_hints["vault_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if vault_id is not None:
            self._values["vault_id"] = vault_id
        if vault_type is not None:
            self._values["vault_type"] = vault_type

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vaultId: VaultId.'''
        result = self._values.get("vault_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vault_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vaultType: Vault type.

        Value

        - **STANDARD**, which indicates a common backup vault.
        - **OTS_BACKUP**, indicating OTS backup vault.
        '''
        result = self._values.get("vault_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VaultsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "RosVaults",
    "RosVaultsProps",
    "Vaults",
    "VaultsProps",
]

publication.publish()

def _typecheckingstub__36fd3d8f5a1cb8ef2cf1f73b7bcf903a8040c80c9c4f07bf984be7bfb6d7b2a9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVaultsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74d1502b5b837412dfe3115a8aff4d9c165636f0c6daa1b25bd2d3aeb4588bab(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed313cc6219ac7beb1fb18959826bf18496775806bdb4bb9c3c93165dfb5a103(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d09633ca823dbcda2d5e9702bdda6f2091ca246d9a743c7e712e17b87974b807(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__420e826dfbac833b7333aa2a95b33643cd0bbac7a688f39f344c9a96eecb6823(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d713cd7d2e7d3553124bc02a9bbccb2e21512c91d7da8472f00cdb5e424aafab(
    *,
    vault_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vault_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4a5b0d9ebb21c59802115a8130a4d124184ff0747cf8de60866c6409904583c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[VaultsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00ad60f775e620f56d3d78e07770aeb3e33e24c330a7053553ff7cd7492d7e70(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc8c6ca3cfdb0bacb6ec07db4552db390232664f411448fbc2ae6f02a95615fd(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b00f35506fead0c3ecef84731b0f7a98f5ad3ac822fa3397df37acc4ee756ce1(
    value: VaultsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81f5a7e50a39eade7a79213d7ebdb55d5cbcdace9923a816d31afe6223f5318a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f72cccc6308e682825f0211b1b7869b05210124bbf2de7087eb5887118dae5c4(
    *,
    vault_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vault_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
