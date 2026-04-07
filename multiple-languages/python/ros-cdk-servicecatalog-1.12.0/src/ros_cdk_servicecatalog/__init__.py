'''
## Aliyun ROS SERVICECATALOG Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as SERVICECATALOG from '@alicloud/ros-cdk-servicecatalog';
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
    jsii_type="@alicloud/ros-cdk-servicecatalog.ConstraintProps",
    jsii_struct_bases=[],
    name_mapping={
        "config": "config",
        "constraint_type": "constraintType",
        "portfolio_id": "portfolioId",
        "product_id": "productId",
        "description": "description",
    },
)
class ConstraintProps:
    def __init__(
        self,
        *,
        config: typing.Union[typing.Mapping[builtins.str, typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        constraint_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        portfolio_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        product_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Constraint``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint

        :param config: Property config: The configuration of the constraint.
        :param constraint_type: Property constraintType: The type of the constraint.
        :param portfolio_id: Property portfolioId: The ID of the portfolio.
        :param product_id: Property productId: The ID of the product.
        :param description: Property description: The description of the constraint.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f5df1951bf08bf39c92d0447d1ba07e06cb10cbfc69a557cc171a2dc606ce8b)
            check_type(argname="argument config", value=config, expected_type=type_hints["config"])
            check_type(argname="argument constraint_type", value=constraint_type, expected_type=type_hints["constraint_type"])
            check_type(argname="argument portfolio_id", value=portfolio_id, expected_type=type_hints["portfolio_id"])
            check_type(argname="argument product_id", value=product_id, expected_type=type_hints["product_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "config": config,
            "constraint_type": constraint_type,
            "portfolio_id": portfolio_id,
            "product_id": product_id,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def config(
        self,
    ) -> typing.Union[typing.Mapping[builtins.str, typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property config: The configuration of the constraint.'''
        result = self._values.get("config")
        assert result is not None, "Required property 'config' is missing"
        return typing.cast(typing.Union[typing.Mapping[builtins.str, typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def constraint_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property constraintType: The type of the constraint.'''
        result = self._values.get("constraint_type")
        assert result is not None, "Required property 'constraint_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def portfolio_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property portfolioId: The ID of the portfolio.'''
        result = self._values.get("portfolio_id")
        assert result is not None, "Required property 'portfolio_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property productId: The ID of the product.'''
        result = self._values.get("product_id")
        assert result is not None, "Required property 'product_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the constraint.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ConstraintProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-servicecatalog.IConstraint")
class IConstraint(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Constraint``.'''

    @builtins.property
    @jsii.member(jsii_name="attrConstraintId")
    def attr_constraint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConstraintId: The ID of the constraint.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConstraintProps:
        ...


class _IConstraintProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Constraint``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-servicecatalog.IConstraint"

    @builtins.property
    @jsii.member(jsii_name="attrConstraintId")
    def attr_constraint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConstraintId: The ID of the constraint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConstraintId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConstraintProps:
        return typing.cast(ConstraintProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IConstraint).__jsii_proxy_class__ = lambda : _IConstraintProxy


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-servicecatalog.IProductPortfolioAssociation"
)
class IProductPortfolioAssociation(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ProductPortfolioAssociation``.'''

    @builtins.property
    @jsii.member(jsii_name="attrProductId")
    def attr_product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProductId: The ID of the product.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProductPortfolioAssociationProps":
        ...


class _IProductPortfolioAssociationProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ProductPortfolioAssociation``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-servicecatalog.IProductPortfolioAssociation"

    @builtins.property
    @jsii.member(jsii_name="attrProductId")
    def attr_product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProductId: The ID of the product.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProductId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProductPortfolioAssociationProps":
        return typing.cast("ProductPortfolioAssociationProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IProductPortfolioAssociation).__jsii_proxy_class__ = lambda : _IProductPortfolioAssociationProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-servicecatalog.IProductVersion")
class IProductVersion(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ProductVersion``.'''

    @builtins.property
    @jsii.member(jsii_name="attrActive")
    def attr_active(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Active: Specifies whether the product version is active.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the product version.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the product version.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGuidance")
    def attr_guidance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Guidance: The recommendation information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProductId")
    def attr_product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProductId: The ID of the product to which the product version belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProductVersionId")
    def attr_product_version_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProductVersionId: The ID of the product version.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProductVersionName")
    def attr_product_version_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProductVersionName: The name of the product version.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTemplateType")
    def attr_template_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateType: The type of the product template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTemplateUrl")
    def attr_template_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateUrl: The URL of the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProductVersionProps":
        ...


class _IProductVersionProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ProductVersion``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-servicecatalog.IProductVersion"

    @builtins.property
    @jsii.member(jsii_name="attrActive")
    def attr_active(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Active: Specifies whether the product version is active.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrActive"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the product version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the product version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrGuidance")
    def attr_guidance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Guidance: The recommendation information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGuidance"))

    @builtins.property
    @jsii.member(jsii_name="attrProductId")
    def attr_product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProductId: The ID of the product to which the product version belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProductId"))

    @builtins.property
    @jsii.member(jsii_name="attrProductVersionId")
    def attr_product_version_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProductVersionId: The ID of the product version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProductVersionId"))

    @builtins.property
    @jsii.member(jsii_name="attrProductVersionName")
    def attr_product_version_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProductVersionName: The name of the product version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProductVersionName"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateType")
    def attr_template_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateType: The type of the product template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateType"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateUrl")
    def attr_template_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateUrl: The URL of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateUrl"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProductVersionProps":
        return typing.cast("ProductVersionProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IProductVersion).__jsii_proxy_class__ = lambda : _IProductVersionProxy


@jsii.implements(IProductPortfolioAssociation)
class ProductPortfolioAssociation(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-servicecatalog.ProductPortfolioAssociation",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ServiceCatalog::ProductPortfolioAssociation``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosProductPortfolioAssociation``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProductPortfolioAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__140f8251081eb3fcdba8cb87e7057435a0de31cfc95935dd907ce2576672d3f8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrProductId")
    def attr_product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProductId: The ID of the product.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProductId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProductPortfolioAssociationProps":
        return typing.cast("ProductPortfolioAssociationProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3216f75a9314e58be8385cd3f293b48c5b6efe22667165bad239c44b926c150)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b51f9f924da2b232d907baf181f967a168bb1ce5d5a4c00c6e8221fe7e8faabd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb62af2096aed4d473d43d12fb987ed0795fd2ecf6d6af00f37f28551491e6e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-servicecatalog.ProductPortfolioAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"portfolio_id": "portfolioId", "product_id": "productId"},
)
class ProductPortfolioAssociationProps:
    def __init__(
        self,
        *,
        portfolio_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        product_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ProductPortfolioAssociation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation

        :param portfolio_id: Property portfolioId: The ID of the product portfolio.
        :param product_id: Property productId: The ID of the product.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95cd6929a98a9414e9b9f245e9d856cd78e388b7576124ed7b1e8bd37f9825e1)
            check_type(argname="argument portfolio_id", value=portfolio_id, expected_type=type_hints["portfolio_id"])
            check_type(argname="argument product_id", value=product_id, expected_type=type_hints["product_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "portfolio_id": portfolio_id,
            "product_id": product_id,
        }

    @builtins.property
    def portfolio_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property portfolioId: The ID of the product portfolio.'''
        result = self._values.get("portfolio_id")
        assert result is not None, "Required property 'portfolio_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property productId: The ID of the product.'''
        result = self._values.get("product_id")
        assert result is not None, "Required property 'product_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProductPortfolioAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IProductVersion)
class ProductVersion(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-servicecatalog.ProductVersion",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ServiceCatalog::ProductVersion``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosProductVersion``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProductVersionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d6b1a82f56aa88db5b6f10c55034d6cdae3ec0a5e5141fda17c1a8c8d647f18)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrActive")
    def attr_active(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Active: Specifies whether the product version is active.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrActive"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the product version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the product version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrGuidance")
    def attr_guidance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Guidance: The recommendation information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGuidance"))

    @builtins.property
    @jsii.member(jsii_name="attrProductId")
    def attr_product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProductId: The ID of the product to which the product version belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProductId"))

    @builtins.property
    @jsii.member(jsii_name="attrProductVersionId")
    def attr_product_version_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProductVersionId: The ID of the product version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProductVersionId"))

    @builtins.property
    @jsii.member(jsii_name="attrProductVersionName")
    def attr_product_version_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProductVersionName: The name of the product version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProductVersionName"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateType")
    def attr_template_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateType: The type of the product template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateType"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateUrl")
    def attr_template_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TemplateUrl: The URL of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTemplateUrl"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProductVersionProps":
        return typing.cast("ProductVersionProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__716b88a7c92bf74d365c803c55fd4a3dbd94cf59df58331c9ed6fcc0723cbaeb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e95ed1028197cf6e7d46e76f302b39e0291935ba28620b0f6bf0f435298a837)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f7bf19b24be42de7cbc34fd7ac664c0d05234eb25a66caf531050b9b5720d10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-servicecatalog.ProductVersionProps",
    jsii_struct_bases=[],
    name_mapping={
        "product_id": "productId",
        "product_version_name": "productVersionName",
        "template_type": "templateType",
        "template_url": "templateUrl",
        "active": "active",
        "description": "description",
        "guidance": "guidance",
    },
)
class ProductVersionProps:
    def __init__(
        self,
        *,
        product_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        product_version_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        template_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        template_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        active: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        guidance: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ProductVersion``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion

        :param product_id: Property productId: The ID of the product to which the product version belongs.
        :param product_version_name: Property productVersionName: The name of the product version.
        :param template_type: Property templateType: The type of the product template. Valid values: - RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS). - RosStandardTemplate: the standard ROS template.
        :param template_url: Property templateUrl: The URL of the template.
        :param active: Property active: Specifies whether the product version is active.
        :param description: Property description: The description of the product version. The value must be 1 to 128 characters in length.
        :param guidance: Property guidance: The recommendation information. Valid values: - Default: No recommendation information is provided. This is the default value. - Recommended: the recommendation version. - Latest: the latest version. - Deprecated: the version that is about to be discontinued.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc47587855d34befd1fc6c53e591f6bac27fe6ec92f5befc76dd3121bd2bfc69)
            check_type(argname="argument product_id", value=product_id, expected_type=type_hints["product_id"])
            check_type(argname="argument product_version_name", value=product_version_name, expected_type=type_hints["product_version_name"])
            check_type(argname="argument template_type", value=template_type, expected_type=type_hints["template_type"])
            check_type(argname="argument template_url", value=template_url, expected_type=type_hints["template_url"])
            check_type(argname="argument active", value=active, expected_type=type_hints["active"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument guidance", value=guidance, expected_type=type_hints["guidance"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "product_id": product_id,
            "product_version_name": product_version_name,
            "template_type": template_type,
            "template_url": template_url,
        }
        if active is not None:
            self._values["active"] = active
        if description is not None:
            self._values["description"] = description
        if guidance is not None:
            self._values["guidance"] = guidance

    @builtins.property
    def product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property productId: The ID of the product to which the product version belongs.'''
        result = self._values.get("product_id")
        assert result is not None, "Required property 'product_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def product_version_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property productVersionName: The name of the product version.'''
        result = self._values.get("product_version_name")
        assert result is not None, "Required property 'product_version_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property templateType: The type of the product template.

        Valid values:

        - RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).
        - RosStandardTemplate: the standard ROS template.
        '''
        result = self._values.get("template_type")
        assert result is not None, "Required property 'template_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property templateUrl: The URL of the template.'''
        result = self._values.get("template_url")
        assert result is not None, "Required property 'template_url' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def active(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property active: Specifies whether the product version is active.'''
        result = self._values.get("active")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the product version.

        The value must be 1 to 128 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def guidance(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property guidance: The recommendation information.

        Valid values:

        - Default: No recommendation information is provided. This is the default value.
        - Recommended: the recommendation version.
        - Latest: the latest version.
        - Deprecated: the version that is about to be discontinued.
        '''
        result = self._values.get("guidance")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProductVersionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosConstraint(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-servicecatalog.RosConstraint",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ServiceCatalog::Constraint``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Constraint`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosConstraintProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c0bbe81c160038590289c5f2f482d9d215eb1696a9a0511f362eb5be2e39985)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e3314ab3a85c42cb92944958b34422cda29b052b8259609e00edead39331ff7a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConstraintId")
    def attr_constraint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConstraintId: The ID of the constraint.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConstraintId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="config")
    def config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: config: The configuration of the constraint.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "config"))

    @config.setter
    def config(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95277dd76a29dabbe700938ab9c8a216bcf5ded3c394d9593ef2a0c12f459551)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "config", value)

    @builtins.property
    @jsii.member(jsii_name="constraintType")
    def constraint_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: constraintType: The type of the constraint.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "constraintType"))

    @constraint_type.setter
    def constraint_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6984a34fb62acaea13ba7106bc095a15019d29a62b8f77ccf5f62e11423fd945)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "constraintType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fb4ec997a41247d835b2bd66eb70eaa8d0f954f41d549e9bc9f9fcc763bbd50)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="portfolioId")
    def portfolio_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: portfolioId: The ID of the portfolio.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "portfolioId"))

    @portfolio_id.setter
    def portfolio_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c854276a37648e5f1317f0ccbf3d4b466f3aee59a89c5ee9e968382652587b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "portfolioId", value)

    @builtins.property
    @jsii.member(jsii_name="productId")
    def product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productId: The ID of the product.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "productId"))

    @product_id.setter
    def product_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6dd20c50c28ad973c355c542c694ad3fd3ab075bb0a1bfc5aeac2e1ac9b07378)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the constraint.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ba5c02c49b0fc4477a815eee659a946397829c3a358505290e085a6917d063f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-servicecatalog.RosConstraintProps",
    jsii_struct_bases=[],
    name_mapping={
        "config": "config",
        "constraint_type": "constraintType",
        "portfolio_id": "portfolioId",
        "product_id": "productId",
        "description": "description",
    },
)
class RosConstraintProps:
    def __init__(
        self,
        *,
        config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        constraint_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        portfolio_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        product_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosConstraint``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint

        :param config: 
        :param constraint_type: 
        :param portfolio_id: 
        :param product_id: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b9d0a897ff879c8cfc6e21050786e631b0365daedcbf3dba7d20aa575f8a5d3)
            check_type(argname="argument config", value=config, expected_type=type_hints["config"])
            check_type(argname="argument constraint_type", value=constraint_type, expected_type=type_hints["constraint_type"])
            check_type(argname="argument portfolio_id", value=portfolio_id, expected_type=type_hints["portfolio_id"])
            check_type(argname="argument product_id", value=product_id, expected_type=type_hints["product_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "config": config,
            "constraint_type": constraint_type,
            "portfolio_id": portfolio_id,
            "product_id": product_id,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: config: The configuration of the constraint.
        '''
        result = self._values.get("config")
        assert result is not None, "Required property 'config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def constraint_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: constraintType: The type of the constraint.
        '''
        result = self._values.get("constraint_type")
        assert result is not None, "Required property 'constraint_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def portfolio_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: portfolioId: The ID of the portfolio.
        '''
        result = self._values.get("portfolio_id")
        assert result is not None, "Required property 'portfolio_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productId: The ID of the product.
        '''
        result = self._values.get("product_id")
        assert result is not None, "Required property 'product_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the constraint.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosConstraintProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProductPortfolioAssociation(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-servicecatalog.RosProductPortfolioAssociation",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ServiceCatalog::ProductPortfolioAssociation``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ProductPortfolioAssociation`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProductPortfolioAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f2aa48b15ed19f61aa1e9e47d8dba1c84dd6447e1540a378a1a8f537233c598)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3e6a6b17e8d4c58327e177d2d680cd90a9cec01769d0ed8ac34dcd96c40ce785)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrProductId")
    def attr_product_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProductId: The ID of the product.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProductId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__33590e48e5119b8120c50399ba017c1ddb6dbf145b766a64badf7ad83b374eb9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="portfolioId")
    def portfolio_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: portfolioId: The ID of the product portfolio.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "portfolioId"))

    @portfolio_id.setter
    def portfolio_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05541e26197cde6f018817172d5a89c336144952ca8511b962a2c345e79eda86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "portfolioId", value)

    @builtins.property
    @jsii.member(jsii_name="productId")
    def product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productId: The ID of the product.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "productId"))

    @product_id.setter
    def product_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9792d054a8c9580f17db7ae902c5a4611e0c024b64b5d7a5da4a034bc5a60d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-servicecatalog.RosProductPortfolioAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"portfolio_id": "portfolioId", "product_id": "productId"},
)
class RosProductPortfolioAssociationProps:
    def __init__(
        self,
        *,
        portfolio_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        product_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosProductPortfolioAssociation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation

        :param portfolio_id: 
        :param product_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5794a7d8d2a48e363d406a5d7732403163f49c91b82756d5688fc7f84ccf5bcc)
            check_type(argname="argument portfolio_id", value=portfolio_id, expected_type=type_hints["portfolio_id"])
            check_type(argname="argument product_id", value=product_id, expected_type=type_hints["product_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "portfolio_id": portfolio_id,
            "product_id": product_id,
        }

    @builtins.property
    def portfolio_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: portfolioId: The ID of the product portfolio.
        '''
        result = self._values.get("portfolio_id")
        assert result is not None, "Required property 'portfolio_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productId: The ID of the product.
        '''
        result = self._values.get("product_id")
        assert result is not None, "Required property 'product_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProductPortfolioAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProductVersion(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-servicecatalog.RosProductVersion",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ServiceCatalog::ProductVersion``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ProductVersion`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProductVersionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1bc26cc0578d2669f473232396e64fed42a198ef92bc7658bbdb98b81ae3a557)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e6d1a07a69b0446e9a9ee84e3c111f67a1f44d78bf021fa31aafbbf1befb2f2f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrActive")
    def attr_active(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Active: Specifies whether the product version is active.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrActive"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the product version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the product version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrGuidance")
    def attr_guidance(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Guidance: The recommendation information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGuidance"))

    @builtins.property
    @jsii.member(jsii_name="attrProductId")
    def attr_product_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProductId: The ID of the product to which the product version belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProductId"))

    @builtins.property
    @jsii.member(jsii_name="attrProductVersionId")
    def attr_product_version_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProductVersionId: The ID of the product version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProductVersionId"))

    @builtins.property
    @jsii.member(jsii_name="attrProductVersionName")
    def attr_product_version_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProductVersionName: The name of the product version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProductVersionName"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateType")
    def attr_template_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TemplateType: The type of the product template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateType"))

    @builtins.property
    @jsii.member(jsii_name="attrTemplateUrl")
    def attr_template_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TemplateUrl: The URL of the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTemplateUrl"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8d3d58b727ff24e73084ad495af9b7b3709c0c905d71d4b6084b5fb8ec642274)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="productId")
    def product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productId: The ID of the product to which the product version belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "productId"))

    @product_id.setter
    def product_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4979527222f023df0c33019ec7fdf241880c0a5e0f5ec40cf94affa45aaedcaf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productId", value)

    @builtins.property
    @jsii.member(jsii_name="productVersionName")
    def product_version_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productVersionName: The name of the product version.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "productVersionName"))

    @product_version_name.setter
    def product_version_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2dff457c9efa2d2ab5a8dd3cb16733149c1414afd50e75f33c0f7c0217857925)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productVersionName", value)

    @builtins.property
    @jsii.member(jsii_name="templateType")
    def template_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        templateType: The type of the product template. Valid values:

        - RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).
        - RosStandardTemplate: the standard ROS template.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "templateType"))

    @template_type.setter
    def template_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3c1f37ede5df9e28996ded874b3d1b7b9cea5906ebaed82852aa3b9a501be5e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateType", value)

    @builtins.property
    @jsii.member(jsii_name="templateUrl")
    def template_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: templateUrl: The URL of the template.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "templateUrl"))

    @template_url.setter
    def template_url(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e2ef7ad3b869c9eb232e028c10d2a9c42a9ea45c7161c245581d548a17e19fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateUrl", value)

    @builtins.property
    @jsii.member(jsii_name="active")
    def active(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: active: Specifies whether the product version is active.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "active"))

    @active.setter
    def active(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47fb520a72389da8762b0c0c7627eee919d8e8d38ae7f230c218742d6642b1cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "active", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the product version. The value must be 1 to 128 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__678933628f73d5d1ca3190e6792703db44cdd459a9fd55acf3b4f5a6ac062a52)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="guidance")
    def guidance(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        guidance: The recommendation information. Valid values:

        - Default: No recommendation information is provided. This is the default value.
        - Recommended: the recommendation version.
        - Latest: the latest version.
        - Deprecated: the version that is about to be discontinued.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "guidance"))

    @guidance.setter
    def guidance(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa0a86869bc4967b93a2d99692c77499fcac77f5b38bd8296819dbcbfe58daf2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "guidance", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-servicecatalog.RosProductVersionProps",
    jsii_struct_bases=[],
    name_mapping={
        "product_id": "productId",
        "product_version_name": "productVersionName",
        "template_type": "templateType",
        "template_url": "templateUrl",
        "active": "active",
        "description": "description",
        "guidance": "guidance",
    },
)
class RosProductVersionProps:
    def __init__(
        self,
        *,
        product_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        product_version_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        template_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        template_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        active: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        guidance: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosProductVersion``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion

        :param product_id: 
        :param product_version_name: 
        :param template_type: 
        :param template_url: 
        :param active: 
        :param description: 
        :param guidance: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e18354c7948abda9ec66c93ad185992bdd7e620f2b1232a3d0f5d98009e50ff)
            check_type(argname="argument product_id", value=product_id, expected_type=type_hints["product_id"])
            check_type(argname="argument product_version_name", value=product_version_name, expected_type=type_hints["product_version_name"])
            check_type(argname="argument template_type", value=template_type, expected_type=type_hints["template_type"])
            check_type(argname="argument template_url", value=template_url, expected_type=type_hints["template_url"])
            check_type(argname="argument active", value=active, expected_type=type_hints["active"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument guidance", value=guidance, expected_type=type_hints["guidance"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "product_id": product_id,
            "product_version_name": product_version_name,
            "template_type": template_type,
            "template_url": template_url,
        }
        if active is not None:
            self._values["active"] = active
        if description is not None:
            self._values["description"] = description
        if guidance is not None:
            self._values["guidance"] = guidance

    @builtins.property
    def product_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productId: The ID of the product to which the product version belongs.
        '''
        result = self._values.get("product_id")
        assert result is not None, "Required property 'product_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def product_version_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productVersionName: The name of the product version.
        '''
        result = self._values.get("product_version_name")
        assert result is not None, "Required property 'product_version_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        templateType: The type of the product template. Valid values:

        - RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).
        - RosStandardTemplate: the standard ROS template.
        '''
        result = self._values.get("template_type")
        assert result is not None, "Required property 'template_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: templateUrl: The URL of the template.
        '''
        result = self._values.get("template_url")
        assert result is not None, "Required property 'template_url' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def active(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: active: Specifies whether the product version is active.
        '''
        result = self._values.get("active")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the product version. The value must be 1 to 128 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def guidance(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        guidance: The recommendation information. Valid values:

        - Default: No recommendation information is provided. This is the default value.
        - Recommended: the recommendation version.
        - Latest: the latest version.
        - Deprecated: the version that is about to be discontinued.
        '''
        result = self._values.get("guidance")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProductVersionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IConstraint)
class Constraint(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-servicecatalog.Constraint",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ServiceCatalog::Constraint``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosConstraint``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ConstraintProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__321e3a9da5a0ffd2160c251b1491956f6bb39b299ae75d6cbf0cd22e8515adec)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConstraintId")
    def attr_constraint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConstraintId: The ID of the constraint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConstraintId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConstraintProps:
        return typing.cast(ConstraintProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7ac8db8a9d407992d19a64a76009043eb86e0a220e6d9a7c3e94783c2584e55)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1353e6227a31d4641b420db7a25269d1b9711fecc02ac4c5590f94379426083c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44bfad4748de5a748355fd099449756e10430b438b0846b1a8b92c7f043ef5c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Constraint",
    "ConstraintProps",
    "IConstraint",
    "IProductPortfolioAssociation",
    "IProductVersion",
    "ProductPortfolioAssociation",
    "ProductPortfolioAssociationProps",
    "ProductVersion",
    "ProductVersionProps",
    "RosConstraint",
    "RosConstraintProps",
    "RosProductPortfolioAssociation",
    "RosProductPortfolioAssociationProps",
    "RosProductVersion",
    "RosProductVersionProps",
]

publication.publish()

def _typecheckingstub__1f5df1951bf08bf39c92d0447d1ba07e06cb10cbfc69a557cc171a2dc606ce8b(
    *,
    config: typing.Union[typing.Mapping[builtins.str, typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    constraint_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    portfolio_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    product_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__140f8251081eb3fcdba8cb87e7057435a0de31cfc95935dd907ce2576672d3f8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProductPortfolioAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3216f75a9314e58be8385cd3f293b48c5b6efe22667165bad239c44b926c150(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b51f9f924da2b232d907baf181f967a168bb1ce5d5a4c00c6e8221fe7e8faabd(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb62af2096aed4d473d43d12fb987ed0795fd2ecf6d6af00f37f28551491e6e3(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95cd6929a98a9414e9b9f245e9d856cd78e388b7576124ed7b1e8bd37f9825e1(
    *,
    portfolio_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    product_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d6b1a82f56aa88db5b6f10c55034d6cdae3ec0a5e5141fda17c1a8c8d647f18(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProductVersionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__716b88a7c92bf74d365c803c55fd4a3dbd94cf59df58331c9ed6fcc0723cbaeb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e95ed1028197cf6e7d46e76f302b39e0291935ba28620b0f6bf0f435298a837(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f7bf19b24be42de7cbc34fd7ac664c0d05234eb25a66caf531050b9b5720d10(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc47587855d34befd1fc6c53e591f6bac27fe6ec92f5befc76dd3121bd2bfc69(
    *,
    product_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    product_version_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    active: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    guidance: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c0bbe81c160038590289c5f2f482d9d215eb1696a9a0511f362eb5be2e39985(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosConstraintProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3314ab3a85c42cb92944958b34422cda29b052b8259609e00edead39331ff7a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95277dd76a29dabbe700938ab9c8a216bcf5ded3c394d9593ef2a0c12f459551(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6984a34fb62acaea13ba7106bc095a15019d29a62b8f77ccf5f62e11423fd945(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fb4ec997a41247d835b2bd66eb70eaa8d0f954f41d549e9bc9f9fcc763bbd50(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c854276a37648e5f1317f0ccbf3d4b466f3aee59a89c5ee9e968382652587b3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6dd20c50c28ad973c355c542c694ad3fd3ab075bb0a1bfc5aeac2e1ac9b07378(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ba5c02c49b0fc4477a815eee659a946397829c3a358505290e085a6917d063f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b9d0a897ff879c8cfc6e21050786e631b0365daedcbf3dba7d20aa575f8a5d3(
    *,
    config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    constraint_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    portfolio_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    product_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f2aa48b15ed19f61aa1e9e47d8dba1c84dd6447e1540a378a1a8f537233c598(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProductPortfolioAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e6a6b17e8d4c58327e177d2d680cd90a9cec01769d0ed8ac34dcd96c40ce785(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33590e48e5119b8120c50399ba017c1ddb6dbf145b766a64badf7ad83b374eb9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05541e26197cde6f018817172d5a89c336144952ca8511b962a2c345e79eda86(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9792d054a8c9580f17db7ae902c5a4611e0c024b64b5d7a5da4a034bc5a60d7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5794a7d8d2a48e363d406a5d7732403163f49c91b82756d5688fc7f84ccf5bcc(
    *,
    portfolio_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    product_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1bc26cc0578d2669f473232396e64fed42a198ef92bc7658bbdb98b81ae3a557(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProductVersionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6d1a07a69b0446e9a9ee84e3c111f67a1f44d78bf021fa31aafbbf1befb2f2f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d3d58b727ff24e73084ad495af9b7b3709c0c905d71d4b6084b5fb8ec642274(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4979527222f023df0c33019ec7fdf241880c0a5e0f5ec40cf94affa45aaedcaf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2dff457c9efa2d2ab5a8dd3cb16733149c1414afd50e75f33c0f7c0217857925(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3c1f37ede5df9e28996ded874b3d1b7b9cea5906ebaed82852aa3b9a501be5e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e2ef7ad3b869c9eb232e028c10d2a9c42a9ea45c7161c245581d548a17e19fc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47fb520a72389da8762b0c0c7627eee919d8e8d38ae7f230c218742d6642b1cc(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__678933628f73d5d1ca3190e6792703db44cdd459a9fd55acf3b4f5a6ac062a52(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa0a86869bc4967b93a2d99692c77499fcac77f5b38bd8296819dbcbfe58daf2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e18354c7948abda9ec66c93ad185992bdd7e620f2b1232a3d0f5d98009e50ff(
    *,
    product_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    product_version_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    active: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    guidance: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__321e3a9da5a0ffd2160c251b1491956f6bb39b299ae75d6cbf0cd22e8515adec(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ConstraintProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7ac8db8a9d407992d19a64a76009043eb86e0a220e6d9a7c3e94783c2584e55(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1353e6227a31d4641b420db7a25269d1b9711fecc02ac4c5590f94379426083c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44bfad4748de5a748355fd099449756e10430b438b0846b1a8b92c7f043ef5c6(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
