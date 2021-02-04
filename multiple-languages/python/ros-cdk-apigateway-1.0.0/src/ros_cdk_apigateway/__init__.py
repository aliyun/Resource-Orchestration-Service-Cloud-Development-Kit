"""
## Aliyun ROS APIGATEWAY Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_apigateway as APIGATEWAY
```
"""
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from ._jsii import *

import ros_cdk_core


class Api(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.Api",
):
    """A ROS resource type:  ``ALIYUN::ApiGateway::Api``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ApiProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::Api``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Api, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrApiId")
    def attr_api_id(self) -> typing.Any:
        """
        :Attribute: ApiId: The id of the API.
        """
        return jsii.get(self, "attrApiId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.ApiProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_name": "apiName",
        "group_id": "groupId",
        "request_config": "requestConfig",
        "result_sample": "resultSample",
        "result_type": "resultType",
        "service_config": "serviceConfig",
        "visibility": "visibility",
        "app_code_auth_type": "appCodeAuthType",
        "auth_type": "authType",
        "const_parameters": "constParameters",
        "description": "description",
        "error_code_samples": "errorCodeSamples",
        "fail_result_sample": "failResultSample",
        "open_id_connect_config": "openIdConnectConfig",
        "request_parameters": "requestParameters",
        "service_parameters": "serviceParameters",
        "service_parameters_map": "serviceParametersMap",
        "system_parameters": "systemParameters",
    },
)
class ApiProps:
    def __init__(
        self,
        *,
        api_name: builtins.str,
        group_id: builtins.str,
        request_config: typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestConfigProperty"],
        result_sample: builtins.str,
        result_type: builtins.str,
        service_config: typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceConfigProperty"],
        visibility: builtins.str,
        app_code_auth_type: typing.Optional[builtins.str] = None,
        auth_type: typing.Optional[builtins.str] = None,
        const_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ConstParametersProperty"]]]] = None,
        description: typing.Optional[builtins.str] = None,
        error_code_samples: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ErrorCodeSamplesProperty"]]]] = None,
        fail_result_sample: typing.Optional[builtins.str] = None,
        open_id_connect_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.OpenIdConnectConfigProperty"]] = None,
        request_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestParametersProperty"]]]] = None,
        service_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersProperty"]]]] = None,
        service_parameters_map: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersMapProperty"]]]] = None,
        system_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.SystemParametersProperty"]]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::Api``.

        :param api_name: 
        :param group_id: 
        :param request_config: 
        :param result_sample: 
        :param result_type: 
        :param service_config: 
        :param visibility: 
        :param app_code_auth_type: 
        :param auth_type: 
        :param const_parameters: 
        :param description: 
        :param error_code_samples: 
        :param fail_result_sample: 
        :param open_id_connect_config: 
        :param request_parameters: 
        :param service_parameters: 
        :param service_parameters_map: 
        :param system_parameters: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "api_name": api_name,
            "group_id": group_id,
            "request_config": request_config,
            "result_sample": result_sample,
            "result_type": result_type,
            "service_config": service_config,
            "visibility": visibility,
        }
        if app_code_auth_type is not None:
            self._values["app_code_auth_type"] = app_code_auth_type
        if auth_type is not None:
            self._values["auth_type"] = auth_type
        if const_parameters is not None:
            self._values["const_parameters"] = const_parameters
        if description is not None:
            self._values["description"] = description
        if error_code_samples is not None:
            self._values["error_code_samples"] = error_code_samples
        if fail_result_sample is not None:
            self._values["fail_result_sample"] = fail_result_sample
        if open_id_connect_config is not None:
            self._values["open_id_connect_config"] = open_id_connect_config
        if request_parameters is not None:
            self._values["request_parameters"] = request_parameters
        if service_parameters is not None:
            self._values["service_parameters"] = service_parameters
        if service_parameters_map is not None:
            self._values["service_parameters_map"] = service_parameters_map
        if system_parameters is not None:
            self._values["system_parameters"] = system_parameters

    @builtins.property
    def api_name(self) -> builtins.str:
        """
        :Property: apiName: The name of the API.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        result = self._values.get("api_name")
        assert result is not None, "Required property 'api_name' is missing"
        return result

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the Group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def request_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestConfigProperty"]:
        """
        :Property: requestConfig: The configuration of the request
        """
        result = self._values.get("request_config")
        assert result is not None, "Required property 'request_config' is missing"
        return result

    @builtins.property
    def result_sample(self) -> builtins.str:
        """
        :Property: resultSample: The sample of the result.
        """
        result = self._values.get("result_sample")
        assert result is not None, "Required property 'result_sample' is missing"
        return result

    @builtins.property
    def result_type(self) -> builtins.str:
        """
        :Property: resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
        """
        result = self._values.get("result_type")
        assert result is not None, "Required property 'result_type' is missing"
        return result

    @builtins.property
    def service_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceConfigProperty"]:
        """
        :Property: serviceConfig: The configuration of the service.
        """
        result = self._values.get("service_config")
        assert result is not None, "Required property 'service_config' is missing"
        return result

    @builtins.property
    def visibility(self) -> builtins.str:
        """
        :Property: visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
        """
        result = self._values.get("visibility")
        assert result is not None, "Required property 'visibility' is missing"
        return result

    @builtins.property
    def app_code_auth_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT:
        DEFAULT: Default (set by group).
        DISABLE: Not allowed
        HEADER: Allow AppCode header authentication
        HEADER_QUERY: Allow AppCode header and query authentication
        """
        result = self._values.get("app_code_auth_type")
        return result

    @builtins.property
    def auth_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
        """
        result = self._values.get("auth_type")
        return result

    @builtins.property
    def const_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ConstParametersProperty"]]]]:
        """
        :Property: constParameters: The const parameters.
        """
        result = self._values.get("const_parameters")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the API, less than 180 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def error_code_samples(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ErrorCodeSamplesProperty"]]]]:
        """
        :Property: errorCodeSamples: The Error Code samples.
        """
        result = self._values.get("error_code_samples")
        return result

    @builtins.property
    def fail_result_sample(self) -> typing.Optional[builtins.str]:
        """
        :Property: failResultSample: The sample of the fail result.
        """
        result = self._values.get("fail_result_sample")
        return result

    @builtins.property
    def open_id_connect_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.OpenIdConnectConfigProperty"]]:
        """
        :Property: openIdConnectConfig: The configuration of the open id.
        """
        result = self._values.get("open_id_connect_config")
        return result

    @builtins.property
    def request_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestParametersProperty"]]]]:
        """
        :Property: requestParameters: The request parameters.
        """
        result = self._values.get("request_parameters")
        return result

    @builtins.property
    def service_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersProperty"]]]]:
        """
        :Property: serviceParameters: The service parameters.
        """
        result = self._values.get("service_parameters")
        return result

    @builtins.property
    def service_parameters_map(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersMapProperty"]]]]:
        """
        :Property: serviceParametersMap: The mapping relation between (request parameters\\const parameters\\system parameters) and service parameters.
        """
        result = self._values.get("service_parameters_map")
        return result

    @builtins.property
    def system_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.SystemParametersProperty"]]]]:
        """
        :Property: systemParameters: The system parameters.
        """
        result = self._values.get("system_parameters")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApiProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class App(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.App",
):
    """A ROS resource type:  ``ALIYUN::ApiGateway::App``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AppProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::App``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(App, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> typing.Any:
        """
        :Attribute: AppId: The id of the created APP
        """
        return jsii.get(self, "attrAppId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAppKey")
    def attr_app_key(self) -> typing.Any:
        """
        :Attribute: AppKey: The key of the APP
        """
        return jsii.get(self, "attrAppKey")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAppSecret")
    def attr_app_secret(self) -> typing.Any:
        """
        :Attribute: AppSecret: The secret of the APP
        """
        return jsii.get(self, "attrAppSecret")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> typing.Any:
        """
        :Attribute: Tags: Tags of app
        """
        return jsii.get(self, "attrTags")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.AppProps",
    jsii_struct_bases=[],
    name_mapping={"app_name": "appName", "description": "description", "tags": "tags"},
)
class AppProps:
    def __init__(
        self,
        *,
        app_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::App``.

        :param app_name: 
        :param description: 
        :param tags: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "app_name": app_name,
        }
        if description is not None:
            self._values["description"] = description
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def app_name(self) -> builtins.str:
        """
        :Property: appName: The name of the App.Need [4, 15] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the App, less than 180 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Authorization(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.Authorization",
):
    """A ROS resource type:  ``ALIYUN::ApiGateway::Authorization``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AuthorizationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::Authorization``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Authorization, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.AuthorizationProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_ids": "apiIds",
        "app_ids": "appIds",
        "group_id": "groupId",
        "stage_name": "stageName",
        "description": "description",
    },
)
class AuthorizationProps:
    def __init__(
        self,
        *,
        api_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        app_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        group_id: builtins.str,
        stage_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::Authorization``.

        :param api_ids: 
        :param app_ids: 
        :param group_id: 
        :param stage_name: 
        :param description: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "api_ids": api_ids,
            "app_ids": app_ids,
            "group_id": group_id,
            "stage_name": stage_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def api_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: apiIds: APIs to authorize.
        """
        result = self._values.get("api_ids")
        assert result is not None, "Required property 'api_ids' is missing"
        return result

    @builtins.property
    def app_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: appIds: APPs are authorized to APIs.
        """
        result = self._values.get("app_ids")
        assert result is not None, "Required property 'app_ids' is missing"
        return result

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: Authorize in this stage.
        """
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the authorization, less than 180 characters.
        """
        result = self._values.get("description")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AuthorizationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CustomDomain(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.CustomDomain",
):
    """A ROS resource type:  ``ALIYUN::ApiGateway::CustomDomain``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CustomDomainProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::CustomDomain``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(CustomDomain, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCertificateId")
    def attr_certificate_id(self) -> typing.Any:
        """
        :Attribute: CertificateId: The id of the certificate.
        """
        return jsii.get(self, "attrCertificateId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.CustomDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "group_id": "groupId",
        "certificate_body": "certificateBody",
        "certificate_name": "certificateName",
        "certificate_private_key": "certificatePrivateKey",
    },
)
class CustomDomainProps:
    def __init__(
        self,
        *,
        domain_name: builtins.str,
        group_id: builtins.str,
        certificate_body: typing.Optional[builtins.str] = None,
        certificate_name: typing.Optional[builtins.str] = None,
        certificate_private_key: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::CustomDomain``.

        :param domain_name: 
        :param group_id: 
        :param certificate_body: 
        :param certificate_name: 
        :param certificate_private_key: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "domain_name": domain_name,
            "group_id": group_id,
        }
        if certificate_body is not None:
            self._values["certificate_body"] = certificate_body
        if certificate_name is not None:
            self._values["certificate_name"] = certificate_name
        if certificate_private_key is not None:
            self._values["certificate_private_key"] = certificate_private_key

    @builtins.property
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: Custom domain name.
        """
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return result

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the Group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def certificate_body(self) -> typing.Optional[builtins.str]:
        """
        :Property: certificateBody: SSL certificate body.
        """
        result = self._values.get("certificate_body")
        return result

    @builtins.property
    def certificate_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: certificateName: SSL certificate name.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        result = self._values.get("certificate_name")
        return result

    @builtins.property
    def certificate_private_key(self) -> typing.Optional[builtins.str]:
        """
        :Property: certificatePrivateKey: SSL certificate key.
        """
        result = self._values.get("certificate_private_key")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CustomDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Deployment(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.Deployment",
):
    """A ROS resource type:  ``ALIYUN::ApiGateway::Deployment``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DeploymentProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::Deployment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Deployment, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.DeploymentProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_id": "apiId",
        "group_id": "groupId",
        "stage_name": "stageName",
        "description": "description",
        "history_version": "historyVersion",
    },
)
class DeploymentProps:
    def __init__(
        self,
        *,
        api_id: builtins.str,
        group_id: builtins.str,
        stage_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        history_version: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::Deployment``.

        :param api_id: 
        :param group_id: 
        :param stage_name: 
        :param description: 
        :param history_version: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "api_id": api_id,
            "group_id": group_id,
            "stage_name": stage_name,
        }
        if description is not None:
            self._values["description"] = description
        if history_version is not None:
            self._values["history_version"] = history_version

    @builtins.property
    def api_id(self) -> builtins.str:
        """
        :Property: apiId: The id of the API.
        """
        result = self._values.get("api_id")
        assert result is not None, "Required property 'api_id' is missing"
        return result

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the Group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: Bind traffic in this stage.
        """
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the deployment, less than 180 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def history_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: historyVersion: The history version.
        """
        result = self._values.get("history_version")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DeploymentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Group(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.Group",
):
    """A ROS resource type:  ``ALIYUN::ApiGateway::Group``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "GroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::Group``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Group, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> typing.Any:
        """
        :Attribute: GroupId: The id of the created Group resource
        """
        return jsii.get(self, "attrGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSubDomain")
    def attr_sub_domain(self) -> typing.Any:
        """
        :Attribute: SubDomain: The sub domain assigned to the Group by the system
        """
        return jsii.get(self, "attrSubDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> typing.Any:
        """
        :Attribute: Tags: Tags of app
        """
        return jsii.get(self, "attrTags")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.GroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "description": "description",
        "instance_id": "instanceId",
        "passthrough_headers": "passthroughHeaders",
        "tags": "tags",
    },
)
class GroupProps:
    def __init__(
        self,
        *,
        group_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        instance_id: typing.Optional[builtins.str] = None,
        passthrough_headers: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::Group``.

        :param group_name: 
        :param description: 
        :param instance_id: 
        :param passthrough_headers: 
        :param tags: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }
        if description is not None:
            self._values["description"] = description
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if passthrough_headers is not None:
            self._values["passthrough_headers"] = passthrough_headers
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: The name of the Group.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the Group, less than 180 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
        """
        result = self._values.get("instance_id")
        return result

    @builtins.property
    def passthrough_headers(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        passthroughHeaders: Pass through headers setting. values:
        host: pass through host headers
        """
        result = self._values.get("passthrough_headers")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class LogConfig(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.LogConfig",
):
    """A ROS resource type:  ``ALIYUN::ApiGateway::LogConfig``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "LogConfigProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::LogConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(LogConfig, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSlsLogStore")
    def attr_sls_log_store(self) -> typing.Any:
        """
        :Attribute: SlsLogStore: Logstore name of SLS
        """
        return jsii.get(self, "attrSlsLogStore")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSlsProject")
    def attr_sls_project(self) -> typing.Any:
        """
        :Attribute: SlsProject: Project name of SLS
        """
        return jsii.get(self, "attrSlsProject")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.LogConfigProps",
    jsii_struct_bases=[],
    name_mapping={"sls_log_store": "slsLogStore", "sls_project": "slsProject"},
)
class LogConfigProps:
    def __init__(
        self,
        *,
        sls_log_store: builtins.str,
        sls_project: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::LogConfig``.

        :param sls_log_store: 
        :param sls_project: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "sls_log_store": sls_log_store,
            "sls_project": sls_project,
        }

    @builtins.property
    def sls_log_store(self) -> builtins.str:
        """
        :Property: slsLogStore: Logstore name of SLS
        """
        result = self._values.get("sls_log_store")
        assert result is not None, "Required property 'sls_log_store' is missing"
        return result

    @builtins.property
    def sls_project(self) -> builtins.str:
        """
        :Property: slsProject: Project name of SLS
        """
        result = self._values.get("sls_project")
        assert result is not None, "Required property 'sls_project' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LogConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApi(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosApi",
):
    """A ROS template type:  ``ALIYUN::ApiGateway::Api``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosApiProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::Api``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosApi, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrApiId")
    def attr_api_id(self) -> typing.Any:
        """
        :Attribute: ApiId: The id of the API.
        """
        return jsii.get(self, "attrApiId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="apiName")
    def api_name(self) -> builtins.str:
        """
        :Property: apiName: The name of the API.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        return jsii.get(self, "apiName")

    @api_name.setter # type: ignore
    def api_name(self, value: builtins.str) -> None:
        jsii.set(self, "apiName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the Group.
        """
        return jsii.get(self, "groupId")

    @group_id.setter # type: ignore
    def group_id(self, value: builtins.str) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="requestConfig")
    def request_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestConfigProperty"]:
        """
        :Property: requestConfig: The configuration of the request
        """
        return jsii.get(self, "requestConfig")

    @request_config.setter # type: ignore
    def request_config(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestConfigProperty"],
    ) -> None:
        jsii.set(self, "requestConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resultSample")
    def result_sample(self) -> builtins.str:
        """
        :Property: resultSample: The sample of the result.
        """
        return jsii.get(self, "resultSample")

    @result_sample.setter # type: ignore
    def result_sample(self, value: builtins.str) -> None:
        jsii.set(self, "resultSample", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resultType")
    def result_type(self) -> builtins.str:
        """
        :Property: resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
        """
        return jsii.get(self, "resultType")

    @result_type.setter # type: ignore
    def result_type(self, value: builtins.str) -> None:
        jsii.set(self, "resultType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceConfig")
    def service_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceConfigProperty"]:
        """
        :Property: serviceConfig: The configuration of the service.
        """
        return jsii.get(self, "serviceConfig")

    @service_config.setter # type: ignore
    def service_config(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceConfigProperty"],
    ) -> None:
        jsii.set(self, "serviceConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="visibility")
    def visibility(self) -> builtins.str:
        """
        :Property: visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
        """
        return jsii.get(self, "visibility")

    @visibility.setter # type: ignore
    def visibility(self, value: builtins.str) -> None:
        jsii.set(self, "visibility", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="appCodeAuthType")
    def app_code_auth_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT:
        DEFAULT: Default (set by group).
        DISABLE: Not allowed
        HEADER: Allow AppCode header authentication
        HEADER_QUERY: Allow AppCode header and query authentication
        """
        return jsii.get(self, "appCodeAuthType")

    @app_code_auth_type.setter # type: ignore
    def app_code_auth_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "appCodeAuthType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="authType")
    def auth_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
        """
        return jsii.get(self, "authType")

    @auth_type.setter # type: ignore
    def auth_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "authType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="constParameters")
    def const_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ConstParametersProperty"]]]]:
        """
        :Property: constParameters: The const parameters.
        """
        return jsii.get(self, "constParameters")

    @const_parameters.setter # type: ignore
    def const_parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ConstParametersProperty"]]]],
    ) -> None:
        jsii.set(self, "constParameters", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the API, less than 180 characters.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="errorCodeSamples")
    def error_code_samples(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ErrorCodeSamplesProperty"]]]]:
        """
        :Property: errorCodeSamples: The Error Code samples.
        """
        return jsii.get(self, "errorCodeSamples")

    @error_code_samples.setter # type: ignore
    def error_code_samples(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ErrorCodeSamplesProperty"]]]],
    ) -> None:
        jsii.set(self, "errorCodeSamples", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="failResultSample")
    def fail_result_sample(self) -> typing.Optional[builtins.str]:
        """
        :Property: failResultSample: The sample of the fail result.
        """
        return jsii.get(self, "failResultSample")

    @fail_result_sample.setter # type: ignore
    def fail_result_sample(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "failResultSample", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="openIdConnectConfig")
    def open_id_connect_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.OpenIdConnectConfigProperty"]]:
        """
        :Property: openIdConnectConfig: The configuration of the open id.
        """
        return jsii.get(self, "openIdConnectConfig")

    @open_id_connect_config.setter # type: ignore
    def open_id_connect_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.OpenIdConnectConfigProperty"]],
    ) -> None:
        jsii.set(self, "openIdConnectConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="requestParameters")
    def request_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestParametersProperty"]]]]:
        """
        :Property: requestParameters: The request parameters.
        """
        return jsii.get(self, "requestParameters")

    @request_parameters.setter # type: ignore
    def request_parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestParametersProperty"]]]],
    ) -> None:
        jsii.set(self, "requestParameters", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceParameters")
    def service_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersProperty"]]]]:
        """
        :Property: serviceParameters: The service parameters.
        """
        return jsii.get(self, "serviceParameters")

    @service_parameters.setter # type: ignore
    def service_parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersProperty"]]]],
    ) -> None:
        jsii.set(self, "serviceParameters", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceParametersMap")
    def service_parameters_map(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersMapProperty"]]]]:
        """
        :Property: serviceParametersMap: The mapping relation between (request parameters\\const parameters\\system parameters) and service parameters.
        """
        return jsii.get(self, "serviceParametersMap")

    @service_parameters_map.setter # type: ignore
    def service_parameters_map(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersMapProperty"]]]],
    ) -> None:
        jsii.set(self, "serviceParametersMap", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="systemParameters")
    def system_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.SystemParametersProperty"]]]]:
        """
        :Property: systemParameters: The system parameters.
        """
        return jsii.get(self, "systemParameters")

    @system_parameters.setter # type: ignore
    def system_parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.SystemParametersProperty"]]]],
    ) -> None:
        jsii.set(self, "systemParameters", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosApi.ConstParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "const_value": "constValue",
            "location": "location",
            "service_parameter_name": "serviceParameterName",
            "description": "description",
        },
    )
    class ConstParametersProperty:
        def __init__(
            self,
            *,
            const_value: builtins.str,
            location: builtins.str,
            service_parameter_name: builtins.str,
            description: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param const_value: 
            :param location: 
            :param service_parameter_name: 
            :param description: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "const_value": const_value,
                "location": location,
                "service_parameter_name": service_parameter_name,
            }
            if description is not None:
                self._values["description"] = description

        @builtins.property
        def const_value(self) -> builtins.str:
            """
            :Property: constValue: The value of the parameter.
            """
            result = self._values.get("const_value")
            assert result is not None, "Required property 'const_value' is missing"
            return result

        @builtins.property
        def location(self) -> builtins.str:
            """
            :Property: location: The location of the parameter. Default is HEAD.
            """
            result = self._values.get("location")
            assert result is not None, "Required property 'location' is missing"
            return result

        @builtins.property
        def service_parameter_name(self) -> builtins.str:
            """
            :Property: serviceParameterName: The service parameter name.
            """
            result = self._values.get("service_parameter_name")
            assert result is not None, "Required property 'service_parameter_name' is missing"
            return result

        @builtins.property
        def description(self) -> typing.Optional[builtins.str]:
            """
            :Property: description: Description of the const parameter, less than 180 characters.
            """
            result = self._values.get("description")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConstParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosApi.ErrorCodeSamplesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "code": "code",
            "message": "message",
            "description": "description",
        },
    )
    class ErrorCodeSamplesProperty:
        def __init__(
            self,
            *,
            code: builtins.str,
            message: builtins.str,
            description: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param code: 
            :param message: 
            :param description: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "code": code,
                "message": message,
            }
            if description is not None:
                self._values["description"] = description

        @builtins.property
        def code(self) -> builtins.str:
            """
            :Property: code: Error code.
            """
            result = self._values.get("code")
            assert result is not None, "Required property 'code' is missing"
            return result

        @builtins.property
        def message(self) -> builtins.str:
            """
            :Property: message: Error message.
            """
            result = self._values.get("message")
            assert result is not None, "Required property 'message' is missing"
            return result

        @builtins.property
        def description(self) -> typing.Optional[builtins.str]:
            """
            :Property: description: Description of the ERROR, less than 180 characters.
            """
            result = self._values.get("description")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ErrorCodeSamplesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosApi.FunctionComputeConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "fc_region_id": "fcRegionId",
            "function_name": "functionName",
            "role_arn": "roleArn",
            "service_name": "serviceName",
            "qualifier": "qualifier",
        },
    )
    class FunctionComputeConfigProperty:
        def __init__(
            self,
            *,
            fc_region_id: builtins.str,
            function_name: builtins.str,
            role_arn: builtins.str,
            service_name: builtins.str,
            qualifier: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param fc_region_id: 
            :param function_name: 
            :param role_arn: 
            :param service_name: 
            :param qualifier: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "fc_region_id": fc_region_id,
                "function_name": function_name,
                "role_arn": role_arn,
                "service_name": service_name,
            }
            if qualifier is not None:
                self._values["qualifier"] = qualifier

        @builtins.property
        def fc_region_id(self) -> builtins.str:
            """
            :Property: fcRegionId: The region id of function compute.
            """
            result = self._values.get("fc_region_id")
            assert result is not None, "Required property 'fc_region_id' is missing"
            return result

        @builtins.property
        def function_name(self) -> builtins.str:
            """
            :Property: functionName: The function name of function compute.
            """
            result = self._values.get("function_name")
            assert result is not None, "Required property 'function_name' is missing"
            return result

        @builtins.property
        def role_arn(self) -> builtins.str:
            """
            :Property: roleArn: Ram authorizes the arn of the API gateway access function compute.
            """
            result = self._values.get("role_arn")
            assert result is not None, "Required property 'role_arn' is missing"
            return result

        @builtins.property
        def service_name(self) -> builtins.str:
            """
            :Property: serviceName: The service name of function compute.
            """
            result = self._values.get("service_name")
            assert result is not None, "Required property 'service_name' is missing"
            return result

        @builtins.property
        def qualifier(self) -> typing.Optional[builtins.str]:
            """
            :Property: qualifier: The service alias name.
            """
            result = self._values.get("qualifier")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FunctionComputeConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosApi.MockHeadersProperty",
        jsii_struct_bases=[],
        name_mapping={"header_name": "headerName", "header_value": "headerValue"},
    )
    class MockHeadersProperty:
        def __init__(
            self,
            *,
            header_name: builtins.str,
            header_value: builtins.str,
        ) -> None:
            """
            :param header_name: 
            :param header_value: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "header_name": header_name,
                "header_value": header_value,
            }

        @builtins.property
        def header_name(self) -> builtins.str:
            """
            :Property: headerName: Response header name
            """
            result = self._values.get("header_name")
            assert result is not None, "Required property 'header_name' is missing"
            return result

        @builtins.property
        def header_value(self) -> builtins.str:
            """
            :Property: headerValue: Response header value
            """
            result = self._values.get("header_value")
            assert result is not None, "Required property 'header_value' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MockHeadersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosApi.OpenIdConnectConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "open_id_api_type": "openIdApiType",
            "id_token_param_name": "idTokenParamName",
            "public_key": "publicKey",
            "public_key_id": "publicKeyId",
        },
    )
    class OpenIdConnectConfigProperty:
        def __init__(
            self,
            *,
            open_id_api_type: builtins.str,
            id_token_param_name: typing.Optional[builtins.str] = None,
            public_key: typing.Optional[builtins.str] = None,
            public_key_id: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param open_id_api_type: 
            :param id_token_param_name: 
            :param public_key: 
            :param public_key_id: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "open_id_api_type": open_id_api_type,
            }
            if id_token_param_name is not None:
                self._values["id_token_param_name"] = id_token_param_name
            if public_key is not None:
                self._values["public_key"] = public_key
            if public_key_id is not None:
                self._values["public_key_id"] = public_key_id

        @builtins.property
        def open_id_api_type(self) -> builtins.str:
            """
            :Property: openIdApiType: The type of the open id. "IDTOKEN" or "BUSINESS". If OpenIdApiType is specified as IDTOKEN, PublicKey and PublicKeyId are required. If OpenIdApiType is specified as BUSINESS, IdTokenParamName is required.
            """
            result = self._values.get("open_id_api_type")
            assert result is not None, "Required property 'open_id_api_type' is missing"
            return result

        @builtins.property
        def id_token_param_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: idTokenParamName: The token's parameter name.
            """
            result = self._values.get("id_token_param_name")
            return result

        @builtins.property
        def public_key(self) -> typing.Optional[builtins.str]:
            """
            :Property: publicKey: The public key.
            """
            result = self._values.get("public_key")
            return result

        @builtins.property
        def public_key_id(self) -> typing.Optional[builtins.str]:
            """
            :Property: publicKeyId: The public key id.
            """
            result = self._values.get("public_key_id")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OpenIdConnectConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosApi.RequestConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "request_http_method": "requestHttpMethod",
            "request_mode": "requestMode",
            "request_path": "requestPath",
            "request_protocol": "requestProtocol",
            "body_format": "bodyFormat",
            "post_body_description": "postBodyDescription",
        },
    )
    class RequestConfigProperty:
        def __init__(
            self,
            *,
            request_http_method: builtins.str,
            request_mode: builtins.str,
            request_path: builtins.str,
            request_protocol: builtins.str,
            body_format: typing.Optional[builtins.str] = None,
            post_body_description: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param request_http_method: 
            :param request_mode: 
            :param request_path: 
            :param request_protocol: 
            :param body_format: 
            :param post_body_description: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "request_http_method": request_http_method,
                "request_mode": request_mode,
                "request_path": request_path,
                "request_protocol": request_protocol,
            }
            if body_format is not None:
                self._values["body_format"] = body_format
            if post_body_description is not None:
                self._values["post_body_description"] = post_body_description

        @builtins.property
        def request_http_method(self) -> builtins.str:
            """
            :Property: requestHttpMethod: The HTTP method of the request. Default is GET.
            """
            result = self._values.get("request_http_method")
            assert result is not None, "Required property 'request_http_method' is missing"
            return result

        @builtins.property
        def request_mode(self) -> builtins.str:
            """
            :Property: requestMode: API request mode. "MAPPING" or "PASSTHROUGH". Default is "MAPPING".
            """
            result = self._values.get("request_mode")
            assert result is not None, "Required property 'request_mode' is missing"
            return result

        @builtins.property
        def request_path(self) -> builtins.str:
            """
            :Property: requestPath: API Path.
            """
            result = self._values.get("request_path")
            assert result is not None, "Required property 'request_path' is missing"
            return result

        @builtins.property
        def request_protocol(self) -> builtins.str:
            """
            :Property: requestProtocol: The protocol of the request, "HTTP", "HTTPS", or "HTTP,HTTPS", Default is "HTTP".
            """
            result = self._values.get("request_protocol")
            assert result is not None, "Required property 'request_protocol' is missing"
            return result

        @builtins.property
        def body_format(self) -> typing.Optional[builtins.str]:
            """
            :Property: bodyFormat: Describe how data transform to the server, "FORM" for k-v and "STREAM" for bit stream.BodyFormat is required if RequestMode is specified as MAPPING and RequestHttpMethod is POST/PUT/PATCH.
            """
            result = self._values.get("body_format")
            return result

        @builtins.property
        def post_body_description(self) -> typing.Optional[builtins.str]:
            """
            :Property: postBodyDescription: Description of the post body.
            """
            result = self._values.get("post_body_description")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RequestConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosApi.RequestParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "api_parameter_name": "apiParameterName",
            "location": "location",
            "parameter_type": "parameterType",
            "required": "required",
            "default_value": "defaultValue",
            "demo_value": "demoValue",
            "description": "description",
            "doc_order": "docOrder",
            "doc_show": "docShow",
            "enum_value": "enumValue",
            "json_scheme": "jsonScheme",
            "max_length": "maxLength",
            "max_value": "maxValue",
            "min_length": "minLength",
            "min_value": "minValue",
            "regular_expression": "regularExpression",
        },
    )
    class RequestParametersProperty:
        def __init__(
            self,
            *,
            api_parameter_name: builtins.str,
            location: builtins.str,
            parameter_type: builtins.str,
            required: builtins.str,
            default_value: typing.Optional[builtins.str] = None,
            demo_value: typing.Optional[builtins.str] = None,
            description: typing.Optional[builtins.str] = None,
            doc_order: typing.Optional[jsii.Number] = None,
            doc_show: typing.Optional[builtins.str] = None,
            enum_value: typing.Optional[builtins.str] = None,
            json_scheme: typing.Optional[builtins.str] = None,
            max_length: typing.Optional[jsii.Number] = None,
            max_value: typing.Optional[jsii.Number] = None,
            min_length: typing.Optional[jsii.Number] = None,
            min_value: typing.Optional[jsii.Number] = None,
            regular_expression: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param api_parameter_name: 
            :param location: 
            :param parameter_type: 
            :param required: 
            :param default_value: 
            :param demo_value: 
            :param description: 
            :param doc_order: 
            :param doc_show: 
            :param enum_value: 
            :param json_scheme: 
            :param max_length: 
            :param max_value: 
            :param min_length: 
            :param min_value: 
            :param regular_expression: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "api_parameter_name": api_parameter_name,
                "location": location,
                "parameter_type": parameter_type,
                "required": required,
            }
            if default_value is not None:
                self._values["default_value"] = default_value
            if demo_value is not None:
                self._values["demo_value"] = demo_value
            if description is not None:
                self._values["description"] = description
            if doc_order is not None:
                self._values["doc_order"] = doc_order
            if doc_show is not None:
                self._values["doc_show"] = doc_show
            if enum_value is not None:
                self._values["enum_value"] = enum_value
            if json_scheme is not None:
                self._values["json_scheme"] = json_scheme
            if max_length is not None:
                self._values["max_length"] = max_length
            if max_value is not None:
                self._values["max_value"] = max_value
            if min_length is not None:
                self._values["min_length"] = min_length
            if min_value is not None:
                self._values["min_value"] = min_value
            if regular_expression is not None:
                self._values["regular_expression"] = regular_expression

        @builtins.property
        def api_parameter_name(self) -> builtins.str:
            """
            :Property: apiParameterName: The name of the request parameter.
            """
            result = self._values.get("api_parameter_name")
            assert result is not None, "Required property 'api_parameter_name' is missing"
            return result

        @builtins.property
        def location(self) -> builtins.str:
            """
            :Property: location: The location of the reqest parameter.
            """
            result = self._values.get("location")
            assert result is not None, "Required property 'location' is missing"
            return result

        @builtins.property
        def parameter_type(self) -> builtins.str:
            """
            :Property: parameterType: The type of the parameter
            """
            result = self._values.get("parameter_type")
            assert result is not None, "Required property 'parameter_type' is missing"
            return result

        @builtins.property
        def required(self) -> builtins.str:
            """
            :Property: required: If required. "REQUIRED", "OPTION"
            """
            result = self._values.get("required")
            assert result is not None, "Required property 'required' is missing"
            return result

        @builtins.property
        def default_value(self) -> typing.Optional[builtins.str]:
            """
            :Property: defaultValue: The default value of the request parameter.
            """
            result = self._values.get("default_value")
            return result

        @builtins.property
        def demo_value(self) -> typing.Optional[builtins.str]:
            """
            :Property: demoValue: The demo value of the request parameter.
            """
            result = self._values.get("demo_value")
            return result

        @builtins.property
        def description(self) -> typing.Optional[builtins.str]:
            """
            :Property: description: Description of the API, less than 180 characters.
            """
            result = self._values.get("description")
            return result

        @builtins.property
        def doc_order(self) -> typing.Optional[jsii.Number]:
            """
            :Property: docOrder: The order of the doc.
            """
            result = self._values.get("doc_order")
            return result

        @builtins.property
        def doc_show(self) -> typing.Optional[builtins.str]:
            """
            :Property: docShow: Visiablity of the Doc. "PUBLIC" or "PRIVATE"
            """
            result = self._values.get("doc_show")
            return result

        @builtins.property
        def enum_value(self) -> typing.Optional[builtins.str]:
            """
            :Property: enumValue: Allowed parameter value, split with ',' like "1,2,3,4"
            """
            result = self._values.get("enum_value")
            return result

        @builtins.property
        def json_scheme(self) -> typing.Optional[builtins.str]:
            """
            :Property: jsonScheme: The json scheme of the parameter when it is String.
            """
            result = self._values.get("json_scheme")
            return result

        @builtins.property
        def max_length(self) -> typing.Optional[jsii.Number]:
            """
            :Property: maxLength: The max length of the parameter when it is String.
            """
            result = self._values.get("max_length")
            return result

        @builtins.property
        def max_value(self) -> typing.Optional[jsii.Number]:
            """
            :Property: maxValue: The max value of the parameter when it is Int, Long, Float or Double.
            """
            result = self._values.get("max_value")
            return result

        @builtins.property
        def min_length(self) -> typing.Optional[jsii.Number]:
            """
            :Property: minLength: The min length of the parameter when it is String.
            """
            result = self._values.get("min_length")
            return result

        @builtins.property
        def min_value(self) -> typing.Optional[jsii.Number]:
            """
            :Property: minValue: The min value of the parameter when it is Int, Long, Float or Double.
            """
            result = self._values.get("min_value")
            return result

        @builtins.property
        def regular_expression(self) -> typing.Optional[builtins.str]:
            """
            :Property: regularExpression: The regular expression of the parameter when it is String.
            """
            result = self._values.get("regular_expression")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RequestParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosApi.ServiceConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "content_type_catagory": "contentTypeCatagory",
            "content_type_value": "contentTypeValue",
            "function_compute_config": "functionComputeConfig",
            "mock": "mock",
            "mock_headers": "mockHeaders",
            "mock_result": "mockResult",
            "mock_status_code": "mockStatusCode",
            "service_address": "serviceAddress",
            "service_http_method": "serviceHttpMethod",
            "service_path": "servicePath",
            "service_protocol": "serviceProtocol",
            "service_time_out": "serviceTimeOut",
            "service_vpc_enable": "serviceVpcEnable",
            "vpc_config": "vpcConfig",
        },
    )
    class ServiceConfigProperty:
        def __init__(
            self,
            *,
            content_type_catagory: typing.Optional[builtins.str] = None,
            content_type_value: typing.Optional[builtins.str] = None,
            function_compute_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.FunctionComputeConfigProperty"]] = None,
            mock: typing.Optional[builtins.str] = None,
            mock_headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.MockHeadersProperty"]]]] = None,
            mock_result: typing.Optional[builtins.str] = None,
            mock_status_code: typing.Optional[jsii.Number] = None,
            service_address: typing.Optional[builtins.str] = None,
            service_http_method: typing.Optional[builtins.str] = None,
            service_path: typing.Optional[builtins.str] = None,
            service_protocol: typing.Optional[builtins.str] = None,
            service_time_out: typing.Optional[jsii.Number] = None,
            service_vpc_enable: typing.Optional[builtins.str] = None,
            vpc_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.VpcConfigProperty"]] = None,
        ) -> None:
            """
            :param content_type_catagory: 
            :param content_type_value: 
            :param function_compute_config: 
            :param mock: 
            :param mock_headers: 
            :param mock_result: 
            :param mock_status_code: 
            :param service_address: 
            :param service_http_method: 
            :param service_path: 
            :param service_protocol: 
            :param service_time_out: 
            :param service_vpc_enable: 
            :param vpc_config: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if content_type_catagory is not None:
                self._values["content_type_catagory"] = content_type_catagory
            if content_type_value is not None:
                self._values["content_type_value"] = content_type_value
            if function_compute_config is not None:
                self._values["function_compute_config"] = function_compute_config
            if mock is not None:
                self._values["mock"] = mock
            if mock_headers is not None:
                self._values["mock_headers"] = mock_headers
            if mock_result is not None:
                self._values["mock_result"] = mock_result
            if mock_status_code is not None:
                self._values["mock_status_code"] = mock_status_code
            if service_address is not None:
                self._values["service_address"] = service_address
            if service_http_method is not None:
                self._values["service_http_method"] = service_http_method
            if service_path is not None:
                self._values["service_path"] = service_path
            if service_protocol is not None:
                self._values["service_protocol"] = service_protocol
            if service_time_out is not None:
                self._values["service_time_out"] = service_time_out
            if service_vpc_enable is not None:
                self._values["service_vpc_enable"] = service_vpc_enable
            if vpc_config is not None:
                self._values["vpc_config"] = vpc_config

        @builtins.property
        def content_type_catagory(self) -> typing.Optional[builtins.str]:
            """
            :Property: contentTypeCatagory: Specify how to determine ContentType header when using service. "DEFAULT" to use API Gateway's default value. "CUSTOM" to use self defined value. "CLIENT" to use client's ContentType header. Default is CLIENT.
            """
            result = self._values.get("content_type_catagory")
            return result

        @builtins.property
        def content_type_value(self) -> typing.Optional[builtins.str]:
            """
            :Property: contentTypeValue: ContentTypeValue is required if ContentTypeCatagory is DEFAULT or CUSTOM.
            """
            result = self._values.get("content_type_value")
            return result

        @builtins.property
        def function_compute_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.FunctionComputeConfigProperty"]]:
            """
            :Property: functionComputeConfig: The configuration of the function compute. FunctionComputeConfig is required if ServiceFunctionComputeEnable is TRUE.
            """
            result = self._values.get("function_compute_config")
            return result

        @builtins.property
        def mock(self) -> typing.Optional[builtins.str]:
            """
            :Property: mock: Whether to use Mock model. "TRUE" or "FALSE". Default is FALSE.
            """
            result = self._values.get("mock")
            return result

        @builtins.property
        def mock_headers(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.MockHeadersProperty"]]]]:
            """
            :Property: mockHeaders: Custom Mock response header related information when Mock is enabled.
            """
            result = self._values.get("mock_headers")
            return result

        @builtins.property
        def mock_result(self) -> typing.Optional[builtins.str]:
            """
            :Property: mockResult: The returned value when using Mock model.
            """
            result = self._values.get("mock_result")
            return result

        @builtins.property
        def mock_status_code(self) -> typing.Optional[jsii.Number]:
            """
            :Property: mockStatusCode: Status code, returned in the format compatible with HTTP 1.1 response status code and its status
            """
            result = self._values.get("mock_status_code")
            return result

        @builtins.property
        def service_address(self) -> typing.Optional[builtins.str]:
            """
            :Property: serviceAddress: Backend service call address. If the complete backend service address is http://api.a.com:8080/object/add?key1=value1&key2=value2, ServiceAddress corresponds to http://api.a.com:8080.
            """
            result = self._values.get("service_address")
            return result

        @builtins.property
        def service_http_method(self) -> typing.Optional[builtins.str]:
            """
            :Property: serviceHttpMethod: The HTTP method to the service. Default is GET.
            """
            result = self._values.get("service_http_method")
            return result

        @builtins.property
        def service_path(self) -> typing.Optional[builtins.str]:
            """
            :Property: servicePath: Backend service call path. If the complete backend service address is http://api.a.com:8080/object/add?key1=value1&key2=value2, ServicePath corresponds to /object/add.
            """
            result = self._values.get("service_path")
            return result

        @builtins.property
        def service_protocol(self) -> typing.Optional[builtins.str]:
            """
            :Property: serviceProtocol: Backend service protocol type, which must be HTTP, HTTPS or FunctionCompute currently.
            """
            result = self._values.get("service_protocol")
            return result

        @builtins.property
        def service_time_out(self) -> typing.Optional[jsii.Number]:
            """
            :Property: serviceTimeOut: Time out (ms) when using service.
            """
            result = self._values.get("service_time_out")
            return result

        @builtins.property
        def service_vpc_enable(self) -> typing.Optional[builtins.str]:
            """
            :Property: serviceVpcEnable: Whether to use VPC. "TRUE" or "FALSE". Default is FALSE.
            """
            result = self._values.get("service_vpc_enable")
            return result

        @builtins.property
        def vpc_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.VpcConfigProperty"]]:
            """
            :Property: vpcConfig: The configuration of the VPC. VpcConfig is required if ServiceVpcEnable is TRUE.
            """
            result = self._values.get("vpc_config")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServiceConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersMapProperty",
        jsii_struct_bases=[],
        name_mapping={
            "request_parameter_name": "requestParameterName",
            "service_parameter_name": "serviceParameterName",
        },
    )
    class ServiceParametersMapProperty:
        def __init__(
            self,
            *,
            request_parameter_name: builtins.str,
            service_parameter_name: builtins.str,
        ) -> None:
            """
            :param request_parameter_name: 
            :param service_parameter_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "request_parameter_name": request_parameter_name,
                "service_parameter_name": service_parameter_name,
            }

        @builtins.property
        def request_parameter_name(self) -> builtins.str:
            """
            :Property: requestParameterName: The corresponding request parameter, system parameter or const parameter.
            """
            result = self._values.get("request_parameter_name")
            assert result is not None, "Required property 'request_parameter_name' is missing"
            return result

        @builtins.property
        def service_parameter_name(self) -> builtins.str:
            """
            :Property: serviceParameterName: The corresponding service parameter.
            """
            result = self._values.get("service_parameter_name")
            assert result is not None, "Required property 'service_parameter_name' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServiceParametersMapProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "location": "location",
            "parameter_type": "parameterType",
            "service_parameter_name": "serviceParameterName",
        },
    )
    class ServiceParametersProperty:
        def __init__(
            self,
            *,
            location: builtins.str,
            parameter_type: builtins.str,
            service_parameter_name: builtins.str,
        ) -> None:
            """
            :param location: 
            :param parameter_type: 
            :param service_parameter_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "location": location,
                "parameter_type": parameter_type,
                "service_parameter_name": service_parameter_name,
            }

        @builtins.property
        def location(self) -> builtins.str:
            """
            :Property: location: The location of the parameter
            """
            result = self._values.get("location")
            assert result is not None, "Required property 'location' is missing"
            return result

        @builtins.property
        def parameter_type(self) -> builtins.str:
            """
            :Property: parameterType: The type of the parameter.
            """
            result = self._values.get("parameter_type")
            assert result is not None, "Required property 'parameter_type' is missing"
            return result

        @builtins.property
        def service_parameter_name(self) -> builtins.str:
            """
            :Property: serviceParameterName: The name of the parameter
            """
            result = self._values.get("service_parameter_name")
            assert result is not None, "Required property 'service_parameter_name' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServiceParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosApi.SystemParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "location": "location",
            "parameter_name": "parameterName",
            "service_parameter_name": "serviceParameterName",
            "demo_value": "demoValue",
            "description": "description",
        },
    )
    class SystemParametersProperty:
        def __init__(
            self,
            *,
            location: builtins.str,
            parameter_name: builtins.str,
            service_parameter_name: builtins.str,
            demo_value: typing.Optional[builtins.str] = None,
            description: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param location: 
            :param parameter_name: 
            :param service_parameter_name: 
            :param demo_value: 
            :param description: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "location": location,
                "parameter_name": parameter_name,
                "service_parameter_name": service_parameter_name,
            }
            if demo_value is not None:
                self._values["demo_value"] = demo_value
            if description is not None:
                self._values["description"] = description

        @builtins.property
        def location(self) -> builtins.str:
            """
            :Property: location: The location of the system parameter. Default is HEAD.
            """
            result = self._values.get("location")
            assert result is not None, "Required property 'location' is missing"
            return result

        @builtins.property
        def parameter_name(self) -> builtins.str:
            """
            :Property: parameterName: The system parameter name.
            """
            result = self._values.get("parameter_name")
            assert result is not None, "Required property 'parameter_name' is missing"
            return result

        @builtins.property
        def service_parameter_name(self) -> builtins.str:
            """
            :Property: serviceParameterName: The service parameter name.
            """
            result = self._values.get("service_parameter_name")
            assert result is not None, "Required property 'service_parameter_name' is missing"
            return result

        @builtins.property
        def demo_value(self) -> typing.Optional[builtins.str]:
            """
            :Property: demoValue: The demo value of the system parameter.
            """
            result = self._values.get("demo_value")
            return result

        @builtins.property
        def description(self) -> typing.Optional[builtins.str]:
            """
            :Property: description: Description of the system parameter, less than 180 characters.
            """
            result = self._values.get("description")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SystemParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosApi.VpcConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"instance_id": "instanceId", "port": "port", "vpc_id": "vpcId"},
    )
    class VpcConfigProperty:
        def __init__(
            self,
            *,
            instance_id: builtins.str,
            port: jsii.Number,
            vpc_id: builtins.str,
        ) -> None:
            """
            :param instance_id: 
            :param port: 
            :param vpc_id: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "instance_id": instance_id,
                "port": port,
                "vpc_id": vpc_id,
            }

        @builtins.property
        def instance_id(self) -> builtins.str:
            """
            :Property: instanceId: The id of the instance (ECS/SLB).
            """
            result = self._values.get("instance_id")
            assert result is not None, "Required property 'instance_id' is missing"
            return result

        @builtins.property
        def port(self) -> jsii.Number:
            """
            :Property: port: The port of the VPC.
            """
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return result

        @builtins.property
        def vpc_id(self) -> builtins.str:
            """
            :Property: vpcId: The id of the VPC.
            """
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VpcConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosApiProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_name": "apiName",
        "group_id": "groupId",
        "request_config": "requestConfig",
        "result_sample": "resultSample",
        "result_type": "resultType",
        "service_config": "serviceConfig",
        "visibility": "visibility",
        "app_code_auth_type": "appCodeAuthType",
        "auth_type": "authType",
        "const_parameters": "constParameters",
        "description": "description",
        "error_code_samples": "errorCodeSamples",
        "fail_result_sample": "failResultSample",
        "open_id_connect_config": "openIdConnectConfig",
        "request_parameters": "requestParameters",
        "service_parameters": "serviceParameters",
        "service_parameters_map": "serviceParametersMap",
        "system_parameters": "systemParameters",
    },
)
class RosApiProps:
    def __init__(
        self,
        *,
        api_name: builtins.str,
        group_id: builtins.str,
        request_config: typing.Union[ros_cdk_core.IResolvable, RosApi.RequestConfigProperty],
        result_sample: builtins.str,
        result_type: builtins.str,
        service_config: typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceConfigProperty],
        visibility: builtins.str,
        app_code_auth_type: typing.Optional[builtins.str] = None,
        auth_type: typing.Optional[builtins.str] = None,
        const_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ConstParametersProperty]]]] = None,
        description: typing.Optional[builtins.str] = None,
        error_code_samples: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ErrorCodeSamplesProperty]]]] = None,
        fail_result_sample: typing.Optional[builtins.str] = None,
        open_id_connect_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosApi.OpenIdConnectConfigProperty]] = None,
        request_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.RequestParametersProperty]]]] = None,
        service_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceParametersProperty]]]] = None,
        service_parameters_map: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceParametersMapProperty]]]] = None,
        system_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.SystemParametersProperty]]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::Api``.

        :param api_name: 
        :param group_id: 
        :param request_config: 
        :param result_sample: 
        :param result_type: 
        :param service_config: 
        :param visibility: 
        :param app_code_auth_type: 
        :param auth_type: 
        :param const_parameters: 
        :param description: 
        :param error_code_samples: 
        :param fail_result_sample: 
        :param open_id_connect_config: 
        :param request_parameters: 
        :param service_parameters: 
        :param service_parameters_map: 
        :param system_parameters: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "api_name": api_name,
            "group_id": group_id,
            "request_config": request_config,
            "result_sample": result_sample,
            "result_type": result_type,
            "service_config": service_config,
            "visibility": visibility,
        }
        if app_code_auth_type is not None:
            self._values["app_code_auth_type"] = app_code_auth_type
        if auth_type is not None:
            self._values["auth_type"] = auth_type
        if const_parameters is not None:
            self._values["const_parameters"] = const_parameters
        if description is not None:
            self._values["description"] = description
        if error_code_samples is not None:
            self._values["error_code_samples"] = error_code_samples
        if fail_result_sample is not None:
            self._values["fail_result_sample"] = fail_result_sample
        if open_id_connect_config is not None:
            self._values["open_id_connect_config"] = open_id_connect_config
        if request_parameters is not None:
            self._values["request_parameters"] = request_parameters
        if service_parameters is not None:
            self._values["service_parameters"] = service_parameters
        if service_parameters_map is not None:
            self._values["service_parameters_map"] = service_parameters_map
        if system_parameters is not None:
            self._values["system_parameters"] = system_parameters

    @builtins.property
    def api_name(self) -> builtins.str:
        """
        :Property: apiName: The name of the API.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        result = self._values.get("api_name")
        assert result is not None, "Required property 'api_name' is missing"
        return result

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the Group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def request_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosApi.RequestConfigProperty]:
        """
        :Property: requestConfig: The configuration of the request
        """
        result = self._values.get("request_config")
        assert result is not None, "Required property 'request_config' is missing"
        return result

    @builtins.property
    def result_sample(self) -> builtins.str:
        """
        :Property: resultSample: The sample of the result.
        """
        result = self._values.get("result_sample")
        assert result is not None, "Required property 'result_sample' is missing"
        return result

    @builtins.property
    def result_type(self) -> builtins.str:
        """
        :Property: resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
        """
        result = self._values.get("result_type")
        assert result is not None, "Required property 'result_type' is missing"
        return result

    @builtins.property
    def service_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceConfigProperty]:
        """
        :Property: serviceConfig: The configuration of the service.
        """
        result = self._values.get("service_config")
        assert result is not None, "Required property 'service_config' is missing"
        return result

    @builtins.property
    def visibility(self) -> builtins.str:
        """
        :Property: visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
        """
        result = self._values.get("visibility")
        assert result is not None, "Required property 'visibility' is missing"
        return result

    @builtins.property
    def app_code_auth_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT:
        DEFAULT: Default (set by group).
        DISABLE: Not allowed
        HEADER: Allow AppCode header authentication
        HEADER_QUERY: Allow AppCode header and query authentication
        """
        result = self._values.get("app_code_auth_type")
        return result

    @builtins.property
    def auth_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
        """
        result = self._values.get("auth_type")
        return result

    @builtins.property
    def const_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ConstParametersProperty]]]]:
        """
        :Property: constParameters: The const parameters.
        """
        result = self._values.get("const_parameters")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the API, less than 180 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def error_code_samples(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ErrorCodeSamplesProperty]]]]:
        """
        :Property: errorCodeSamples: The Error Code samples.
        """
        result = self._values.get("error_code_samples")
        return result

    @builtins.property
    def fail_result_sample(self) -> typing.Optional[builtins.str]:
        """
        :Property: failResultSample: The sample of the fail result.
        """
        result = self._values.get("fail_result_sample")
        return result

    @builtins.property
    def open_id_connect_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosApi.OpenIdConnectConfigProperty]]:
        """
        :Property: openIdConnectConfig: The configuration of the open id.
        """
        result = self._values.get("open_id_connect_config")
        return result

    @builtins.property
    def request_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.RequestParametersProperty]]]]:
        """
        :Property: requestParameters: The request parameters.
        """
        result = self._values.get("request_parameters")
        return result

    @builtins.property
    def service_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceParametersProperty]]]]:
        """
        :Property: serviceParameters: The service parameters.
        """
        result = self._values.get("service_parameters")
        return result

    @builtins.property
    def service_parameters_map(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceParametersMapProperty]]]]:
        """
        :Property: serviceParametersMap: The mapping relation between (request parameters\\const parameters\\system parameters) and service parameters.
        """
        result = self._values.get("service_parameters_map")
        return result

    @builtins.property
    def system_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.SystemParametersProperty]]]]:
        """
        :Property: systemParameters: The system parameters.
        """
        result = self._values.get("system_parameters")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApiProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApp(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosApp",
):
    """A ROS template type:  ``ALIYUN::ApiGateway::App``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAppProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::App``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosApp, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> typing.Any:
        """
        :Attribute: AppId: The id of the created APP
        """
        return jsii.get(self, "attrAppId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAppKey")
    def attr_app_key(self) -> typing.Any:
        """
        :Attribute: AppKey: The key of the APP
        """
        return jsii.get(self, "attrAppKey")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAppSecret")
    def attr_app_secret(self) -> typing.Any:
        """
        :Attribute: AppSecret: The secret of the APP
        """
        return jsii.get(self, "attrAppSecret")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> typing.Any:
        """
        :Attribute: Tags: Tags of app
        """
        return jsii.get(self, "attrTags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
        :Property: tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="appName")
    def app_name(self) -> builtins.str:
        """
        :Property: appName: The name of the App.Need [4, 15] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        return jsii.get(self, "appName")

    @app_name.setter # type: ignore
    def app_name(self, value: builtins.str) -> None:
        jsii.set(self, "appName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the App, less than 180 characters.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosAppProps",
    jsii_struct_bases=[],
    name_mapping={"app_name": "appName", "description": "description", "tags": "tags"},
)
class RosAppProps:
    def __init__(
        self,
        *,
        app_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::App``.

        :param app_name: 
        :param description: 
        :param tags: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "app_name": app_name,
        }
        if description is not None:
            self._values["description"] = description
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def app_name(self) -> builtins.str:
        """
        :Property: appName: The name of the App.Need [4, 15] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the App, less than 180 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
        :Property: tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAuthorization(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosAuthorization",
):
    """A ROS template type:  ``ALIYUN::ApiGateway::Authorization``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAuthorizationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::Authorization``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAuthorization, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="apiIds")
    def api_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: apiIds: APIs to authorize.
        """
        return jsii.get(self, "apiIds")

    @api_ids.setter # type: ignore
    def api_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "apiIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="appIds")
    def app_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: appIds: APPs are authorized to APIs.
        """
        return jsii.get(self, "appIds")

    @app_ids.setter # type: ignore
    def app_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "appIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the group.
        """
        return jsii.get(self, "groupId")

    @group_id.setter # type: ignore
    def group_id(self, value: builtins.str) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="stageName")
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: Authorize in this stage.
        """
        return jsii.get(self, "stageName")

    @stage_name.setter # type: ignore
    def stage_name(self, value: builtins.str) -> None:
        jsii.set(self, "stageName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the authorization, less than 180 characters.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosAuthorizationProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_ids": "apiIds",
        "app_ids": "appIds",
        "group_id": "groupId",
        "stage_name": "stageName",
        "description": "description",
    },
)
class RosAuthorizationProps:
    def __init__(
        self,
        *,
        api_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        app_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        group_id: builtins.str,
        stage_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::Authorization``.

        :param api_ids: 
        :param app_ids: 
        :param group_id: 
        :param stage_name: 
        :param description: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "api_ids": api_ids,
            "app_ids": app_ids,
            "group_id": group_id,
            "stage_name": stage_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def api_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: apiIds: APIs to authorize.
        """
        result = self._values.get("api_ids")
        assert result is not None, "Required property 'api_ids' is missing"
        return result

    @builtins.property
    def app_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: appIds: APPs are authorized to APIs.
        """
        result = self._values.get("app_ids")
        assert result is not None, "Required property 'app_ids' is missing"
        return result

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: Authorize in this stage.
        """
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the authorization, less than 180 characters.
        """
        result = self._values.get("description")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAuthorizationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCustomDomain(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosCustomDomain",
):
    """A ROS template type:  ``ALIYUN::ApiGateway::CustomDomain``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCustomDomainProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::CustomDomain``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCustomDomain, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCertificateId")
    def attr_certificate_id(self) -> typing.Any:
        """
        :Attribute: CertificateId: The id of the certificate.
        """
        return jsii.get(self, "attrCertificateId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="domainName")
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: Custom domain name.
        """
        return jsii.get(self, "domainName")

    @domain_name.setter # type: ignore
    def domain_name(self, value: builtins.str) -> None:
        jsii.set(self, "domainName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the Group.
        """
        return jsii.get(self, "groupId")

    @group_id.setter # type: ignore
    def group_id(self, value: builtins.str) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="certificateBody")
    def certificate_body(self) -> typing.Optional[builtins.str]:
        """
        :Property: certificateBody: SSL certificate body.
        """
        return jsii.get(self, "certificateBody")

    @certificate_body.setter # type: ignore
    def certificate_body(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "certificateBody", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="certificateName")
    def certificate_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: certificateName: SSL certificate name.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        return jsii.get(self, "certificateName")

    @certificate_name.setter # type: ignore
    def certificate_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "certificateName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="certificatePrivateKey")
    def certificate_private_key(self) -> typing.Optional[builtins.str]:
        """
        :Property: certificatePrivateKey: SSL certificate key.
        """
        return jsii.get(self, "certificatePrivateKey")

    @certificate_private_key.setter # type: ignore
    def certificate_private_key(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "certificatePrivateKey", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosCustomDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "group_id": "groupId",
        "certificate_body": "certificateBody",
        "certificate_name": "certificateName",
        "certificate_private_key": "certificatePrivateKey",
    },
)
class RosCustomDomainProps:
    def __init__(
        self,
        *,
        domain_name: builtins.str,
        group_id: builtins.str,
        certificate_body: typing.Optional[builtins.str] = None,
        certificate_name: typing.Optional[builtins.str] = None,
        certificate_private_key: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::CustomDomain``.

        :param domain_name: 
        :param group_id: 
        :param certificate_body: 
        :param certificate_name: 
        :param certificate_private_key: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "domain_name": domain_name,
            "group_id": group_id,
        }
        if certificate_body is not None:
            self._values["certificate_body"] = certificate_body
        if certificate_name is not None:
            self._values["certificate_name"] = certificate_name
        if certificate_private_key is not None:
            self._values["certificate_private_key"] = certificate_private_key

    @builtins.property
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: Custom domain name.
        """
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return result

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the Group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def certificate_body(self) -> typing.Optional[builtins.str]:
        """
        :Property: certificateBody: SSL certificate body.
        """
        result = self._values.get("certificate_body")
        return result

    @builtins.property
    def certificate_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: certificateName: SSL certificate name.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        result = self._values.get("certificate_name")
        return result

    @builtins.property
    def certificate_private_key(self) -> typing.Optional[builtins.str]:
        """
        :Property: certificatePrivateKey: SSL certificate key.
        """
        result = self._values.get("certificate_private_key")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCustomDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDeployment(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosDeployment",
):
    """A ROS template type:  ``ALIYUN::ApiGateway::Deployment``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDeploymentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::Deployment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDeployment, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="apiId")
    def api_id(self) -> builtins.str:
        """
        :Property: apiId: The id of the API.
        """
        return jsii.get(self, "apiId")

    @api_id.setter # type: ignore
    def api_id(self, value: builtins.str) -> None:
        jsii.set(self, "apiId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the Group.
        """
        return jsii.get(self, "groupId")

    @group_id.setter # type: ignore
    def group_id(self, value: builtins.str) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="stageName")
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: Bind traffic in this stage.
        """
        return jsii.get(self, "stageName")

    @stage_name.setter # type: ignore
    def stage_name(self, value: builtins.str) -> None:
        jsii.set(self, "stageName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the deployment, less than 180 characters.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="historyVersion")
    def history_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: historyVersion: The history version.
        """
        return jsii.get(self, "historyVersion")

    @history_version.setter # type: ignore
    def history_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "historyVersion", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosDeploymentProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_id": "apiId",
        "group_id": "groupId",
        "stage_name": "stageName",
        "description": "description",
        "history_version": "historyVersion",
    },
)
class RosDeploymentProps:
    def __init__(
        self,
        *,
        api_id: builtins.str,
        group_id: builtins.str,
        stage_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        history_version: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::Deployment``.

        :param api_id: 
        :param group_id: 
        :param stage_name: 
        :param description: 
        :param history_version: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "api_id": api_id,
            "group_id": group_id,
            "stage_name": stage_name,
        }
        if description is not None:
            self._values["description"] = description
        if history_version is not None:
            self._values["history_version"] = history_version

    @builtins.property
    def api_id(self) -> builtins.str:
        """
        :Property: apiId: The id of the API.
        """
        result = self._values.get("api_id")
        assert result is not None, "Required property 'api_id' is missing"
        return result

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the Group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: Bind traffic in this stage.
        """
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the deployment, less than 180 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def history_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: historyVersion: The history version.
        """
        result = self._values.get("history_version")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDeploymentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosGroup",
):
    """A ROS template type:  ``ALIYUN::ApiGateway::Group``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::Group``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosGroup, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> typing.Any:
        """
        :Attribute: GroupId: The id of the created Group resource
        """
        return jsii.get(self, "attrGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSubDomain")
    def attr_sub_domain(self) -> typing.Any:
        """
        :Attribute: SubDomain: The sub domain assigned to the Group by the system
        """
        return jsii.get(self, "attrSubDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> typing.Any:
        """
        :Attribute: Tags: Tags of app
        """
        return jsii.get(self, "attrTags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
        :Property: tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: The name of the Group.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        return jsii.get(self, "groupName")

    @group_name.setter # type: ignore
    def group_name(self, value: builtins.str) -> None:
        jsii.set(self, "groupName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the Group, less than 180 characters.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="passthroughHeaders")
    def passthrough_headers(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        passthroughHeaders: Pass through headers setting. values:
        host: pass through host headers
        """
        return jsii.get(self, "passthroughHeaders")

    @passthrough_headers.setter # type: ignore
    def passthrough_headers(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "passthroughHeaders", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "description": "description",
        "instance_id": "instanceId",
        "passthrough_headers": "passthroughHeaders",
        "tags": "tags",
    },
)
class RosGroupProps:
    def __init__(
        self,
        *,
        group_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        instance_id: typing.Optional[builtins.str] = None,
        passthrough_headers: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::Group``.

        :param group_name: 
        :param description: 
        :param instance_id: 
        :param passthrough_headers: 
        :param tags: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }
        if description is not None:
            self._values["description"] = description
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if passthrough_headers is not None:
            self._values["passthrough_headers"] = passthrough_headers
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: The name of the Group.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the Group, less than 180 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
        """
        result = self._values.get("instance_id")
        return result

    @builtins.property
    def passthrough_headers(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        passthroughHeaders: Pass through headers setting. values:
        host: pass through host headers
        """
        result = self._values.get("passthrough_headers")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
        :Property: tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLogConfig(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosLogConfig",
):
    """A ROS template type:  ``ALIYUN::ApiGateway::LogConfig``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosLogConfigProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::LogConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosLogConfig, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSlsLogStore")
    def attr_sls_log_store(self) -> typing.Any:
        """
        :Attribute: SlsLogStore: Logstore name of SLS
        """
        return jsii.get(self, "attrSlsLogStore")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSlsProject")
    def attr_sls_project(self) -> typing.Any:
        """
        :Attribute: SlsProject: Project name of SLS
        """
        return jsii.get(self, "attrSlsProject")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="slsLogStore")
    def sls_log_store(self) -> builtins.str:
        """
        :Property: slsLogStore: Logstore name of SLS
        """
        return jsii.get(self, "slsLogStore")

    @sls_log_store.setter # type: ignore
    def sls_log_store(self, value: builtins.str) -> None:
        jsii.set(self, "slsLogStore", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="slsProject")
    def sls_project(self) -> builtins.str:
        """
        :Property: slsProject: Project name of SLS
        """
        return jsii.get(self, "slsProject")

    @sls_project.setter # type: ignore
    def sls_project(self, value: builtins.str) -> None:
        jsii.set(self, "slsProject", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosLogConfigProps",
    jsii_struct_bases=[],
    name_mapping={"sls_log_store": "slsLogStore", "sls_project": "slsProject"},
)
class RosLogConfigProps:
    def __init__(
        self,
        *,
        sls_log_store: builtins.str,
        sls_project: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::LogConfig``.

        :param sls_log_store: 
        :param sls_project: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "sls_log_store": sls_log_store,
            "sls_project": sls_project,
        }

    @builtins.property
    def sls_log_store(self) -> builtins.str:
        """
        :Property: slsLogStore: Logstore name of SLS
        """
        result = self._values.get("sls_log_store")
        assert result is not None, "Required property 'sls_log_store' is missing"
        return result

    @builtins.property
    def sls_project(self) -> builtins.str:
        """
        :Property: slsProject: Project name of SLS
        """
        result = self._values.get("sls_project")
        assert result is not None, "Required property 'sls_project' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLogConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSignature(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosSignature",
):
    """A ROS template type:  ``ALIYUN::ApiGateway::Signature``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSignatureProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::Signature``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosSignature, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSignatureId")
    def attr_signature_id(self) -> typing.Any:
        """
        :Attribute: SignatureId: The id of the created signature
        """
        return jsii.get(self, "attrSignatureId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="signatureKey")
    def signature_key(self) -> builtins.str:
        """
        :Property: signatureKey: The key of the signature.
        """
        return jsii.get(self, "signatureKey")

    @signature_key.setter # type: ignore
    def signature_key(self, value: builtins.str) -> None:
        jsii.set(self, "signatureKey", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="signatureName")
    def signature_name(self) -> builtins.str:
        """
        :Property: signatureName: The name of the Signature.Need [4, 15] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        return jsii.get(self, "signatureName")

    @signature_name.setter # type: ignore
    def signature_name(self, value: builtins.str) -> None:
        jsii.set(self, "signatureName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="signatureSecret")
    def signature_secret(self) -> builtins.str:
        """
        :Property: signatureSecret: The secret of the signature.
        """
        return jsii.get(self, "signatureSecret")

    @signature_secret.setter # type: ignore
    def signature_secret(self, value: builtins.str) -> None:
        jsii.set(self, "signatureSecret", value)


class RosSignatureBinding(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosSignatureBinding",
):
    """A ROS template type:  ``ALIYUN::ApiGateway::SignatureBinding``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSignatureBindingProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::SignatureBinding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosSignatureBinding, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="apiIds")
    def api_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: apiIds: APIs to bind with the signature.
        """
        return jsii.get(self, "apiIds")

    @api_ids.setter # type: ignore
    def api_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "apiIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of group.
        """
        return jsii.get(self, "groupId")

    @group_id.setter # type: ignore
    def group_id(self, value: builtins.str) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="signatureId")
    def signature_id(self) -> builtins.str:
        """
        :Property: signatureId: The id of the Signature.
        """
        return jsii.get(self, "signatureId")

    @signature_id.setter # type: ignore
    def signature_id(self, value: builtins.str) -> None:
        jsii.set(self, "signatureId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="stageName")
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: Bind signature in this stage.
        """
        return jsii.get(self, "stageName")

    @stage_name.setter # type: ignore
    def stage_name(self, value: builtins.str) -> None:
        jsii.set(self, "stageName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosSignatureBindingProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_ids": "apiIds",
        "group_id": "groupId",
        "signature_id": "signatureId",
        "stage_name": "stageName",
    },
)
class RosSignatureBindingProps:
    def __init__(
        self,
        *,
        api_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        group_id: builtins.str,
        signature_id: builtins.str,
        stage_name: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::SignatureBinding``.

        :param api_ids: 
        :param group_id: 
        :param signature_id: 
        :param stage_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "api_ids": api_ids,
            "group_id": group_id,
            "signature_id": signature_id,
            "stage_name": stage_name,
        }

    @builtins.property
    def api_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: apiIds: APIs to bind with the signature.
        """
        result = self._values.get("api_ids")
        assert result is not None, "Required property 'api_ids' is missing"
        return result

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def signature_id(self) -> builtins.str:
        """
        :Property: signatureId: The id of the Signature.
        """
        result = self._values.get("signature_id")
        assert result is not None, "Required property 'signature_id' is missing"
        return result

    @builtins.property
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: Bind signature in this stage.
        """
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSignatureBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosSignatureProps",
    jsii_struct_bases=[],
    name_mapping={
        "signature_key": "signatureKey",
        "signature_name": "signatureName",
        "signature_secret": "signatureSecret",
    },
)
class RosSignatureProps:
    def __init__(
        self,
        *,
        signature_key: builtins.str,
        signature_name: builtins.str,
        signature_secret: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::Signature``.

        :param signature_key: 
        :param signature_name: 
        :param signature_secret: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "signature_key": signature_key,
            "signature_name": signature_name,
            "signature_secret": signature_secret,
        }

    @builtins.property
    def signature_key(self) -> builtins.str:
        """
        :Property: signatureKey: The key of the signature.
        """
        result = self._values.get("signature_key")
        assert result is not None, "Required property 'signature_key' is missing"
        return result

    @builtins.property
    def signature_name(self) -> builtins.str:
        """
        :Property: signatureName: The name of the Signature.Need [4, 15] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        result = self._values.get("signature_name")
        assert result is not None, "Required property 'signature_name' is missing"
        return result

    @builtins.property
    def signature_secret(self) -> builtins.str:
        """
        :Property: signatureSecret: The secret of the signature.
        """
        result = self._values.get("signature_secret")
        assert result is not None, "Required property 'signature_secret' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSignatureProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosStageConfig(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosStageConfig",
):
    """A ROS template type:  ``ALIYUN::ApiGateway::StageConfig``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosStageConfigProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::StageConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosStageConfig, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the Group.
        """
        return jsii.get(self, "groupId")

    @group_id.setter # type: ignore
    def group_id(self, value: builtins.str) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="stageName")
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: The name of the Stage.
        """
        return jsii.get(self, "stageName")

    @stage_name.setter # type: ignore
    def stage_name(self, value: builtins.str) -> None:
        jsii.set(self, "stageName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="variables")
    def variables(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        """
        :Property: variables: Variables in the stage, key-value pairs.
        """
        return jsii.get(self, "variables")

    @variables.setter # type: ignore
    def variables(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        jsii.set(self, "variables", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosStageConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_id": "groupId",
        "stage_name": "stageName",
        "variables": "variables",
    },
)
class RosStageConfigProps:
    def __init__(
        self,
        *,
        group_id: builtins.str,
        stage_name: builtins.str,
        variables: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::StageConfig``.

        :param group_id: 
        :param stage_name: 
        :param variables: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_id": group_id,
            "stage_name": stage_name,
            "variables": variables,
        }

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the Group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: The name of the Stage.
        """
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return result

    @builtins.property
    def variables(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        """
        :Property: variables: Variables in the stage, key-value pairs.
        """
        result = self._values.get("variables")
        assert result is not None, "Required property 'variables' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosStageConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTrafficControl(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosTrafficControl",
):
    """A ROS template type:  ``ALIYUN::ApiGateway::TrafficControl``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTrafficControlProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::TrafficControl``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosTrafficControl, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTrafficControlId")
    def attr_traffic_control_id(self) -> typing.Any:
        """
        :Attribute: TrafficControlId: The id of the traffic control
        """
        return jsii.get(self, "attrTrafficControlId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="apiDefault")
    def api_default(self) -> jsii.Number:
        """
        :Property: apiDefault: Default API traffic value.
        """
        return jsii.get(self, "apiDefault")

    @api_default.setter # type: ignore
    def api_default(self, value: jsii.Number) -> None:
        jsii.set(self, "apiDefault", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="trafficControlName")
    def traffic_control_name(self) -> builtins.str:
        """
        :Property: trafficControlName: The name of the traffic control.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        return jsii.get(self, "trafficControlName")

    @traffic_control_name.setter # type: ignore
    def traffic_control_name(self, value: builtins.str) -> None:
        jsii.set(self, "trafficControlName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="trafficControlUnit")
    def traffic_control_unit(self) -> builtins.str:
        """
        :Property: trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
        """
        return jsii.get(self, "trafficControlUnit")

    @traffic_control_unit.setter # type: ignore
    def traffic_control_unit(self, value: builtins.str) -> None:
        jsii.set(self, "trafficControlUnit", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="appDefault")
    def app_default(self) -> typing.Optional[builtins.str]:
        """
        :Property: appDefault: Default APP traffic value.
        """
        return jsii.get(self, "appDefault")

    @app_default.setter # type: ignore
    def app_default(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "appDefault", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the traffic control, less than 180 characters.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="special")
    def special(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTrafficControl.SpecialProperty"]]]]:
        """
        :Property: special: Special traffic controls.
        """
        return jsii.get(self, "special")

    @special.setter # type: ignore
    def special(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTrafficControl.SpecialProperty"]]]],
    ) -> None:
        jsii.set(self, "special", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="userDefault")
    def user_default(self) -> typing.Optional[builtins.str]:
        """
        :Property: userDefault: Default user traffic value.
        """
        return jsii.get(self, "userDefault")

    @user_default.setter # type: ignore
    def user_default(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "userDefault", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosTrafficControl.SpecialProperty",
        jsii_struct_bases=[],
        name_mapping={
            "special_key": "specialKey",
            "special_type": "specialType",
            "traffic_value": "trafficValue",
        },
    )
    class SpecialProperty:
        def __init__(
            self,
            *,
            special_key: builtins.str,
            special_type: builtins.str,
            traffic_value: jsii.Number,
        ) -> None:
            """
            :param special_key: 
            :param special_type: 
            :param traffic_value: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "special_key": special_key,
                "special_type": special_type,
                "traffic_value": traffic_value,
            }

        @builtins.property
        def special_key(self) -> builtins.str:
            """
            :Property: specialKey: The key of special traffic control.
            """
            result = self._values.get("special_key")
            assert result is not None, "Required property 'special_key' is missing"
            return result

        @builtins.property
        def special_type(self) -> builtins.str:
            """
            :Property: specialType: The type of special traffic control.
            """
            result = self._values.get("special_type")
            assert result is not None, "Required property 'special_type' is missing"
            return result

        @builtins.property
        def traffic_value(self) -> jsii.Number:
            """
            :Property: trafficValue: The value of special traffic control
            """
            result = self._values.get("traffic_value")
            assert result is not None, "Required property 'traffic_value' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SpecialProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosTrafficControlBinding(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosTrafficControlBinding",
):
    """A ROS template type:  ``ALIYUN::ApiGateway::TrafficControlBinding``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTrafficControlBindingProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::TrafficControlBinding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosTrafficControlBinding, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="apiIds")
    def api_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: apiIds: APIs to bind with the traffic control.
        """
        return jsii.get(self, "apiIds")

    @api_ids.setter # type: ignore
    def api_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "apiIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of group.
        """
        return jsii.get(self, "groupId")

    @group_id.setter # type: ignore
    def group_id(self, value: builtins.str) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="stageName")
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: Bind traffic in this stage.
        """
        return jsii.get(self, "stageName")

    @stage_name.setter # type: ignore
    def stage_name(self, value: builtins.str) -> None:
        jsii.set(self, "stageName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="trafficControlId")
    def traffic_control_id(self) -> builtins.str:
        """
        :Property: trafficControlId: The id of traffic control.
        """
        return jsii.get(self, "trafficControlId")

    @traffic_control_id.setter # type: ignore
    def traffic_control_id(self, value: builtins.str) -> None:
        jsii.set(self, "trafficControlId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosTrafficControlBindingProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_ids": "apiIds",
        "group_id": "groupId",
        "stage_name": "stageName",
        "traffic_control_id": "trafficControlId",
    },
)
class RosTrafficControlBindingProps:
    def __init__(
        self,
        *,
        api_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        group_id: builtins.str,
        stage_name: builtins.str,
        traffic_control_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::TrafficControlBinding``.

        :param api_ids: 
        :param group_id: 
        :param stage_name: 
        :param traffic_control_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "api_ids": api_ids,
            "group_id": group_id,
            "stage_name": stage_name,
            "traffic_control_id": traffic_control_id,
        }

    @builtins.property
    def api_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: apiIds: APIs to bind with the traffic control.
        """
        result = self._values.get("api_ids")
        assert result is not None, "Required property 'api_ids' is missing"
        return result

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: Bind traffic in this stage.
        """
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return result

    @builtins.property
    def traffic_control_id(self) -> builtins.str:
        """
        :Property: trafficControlId: The id of traffic control.
        """
        result = self._values.get("traffic_control_id")
        assert result is not None, "Required property 'traffic_control_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTrafficControlBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosTrafficControlProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_default": "apiDefault",
        "traffic_control_name": "trafficControlName",
        "traffic_control_unit": "trafficControlUnit",
        "app_default": "appDefault",
        "description": "description",
        "special": "special",
        "user_default": "userDefault",
    },
)
class RosTrafficControlProps:
    def __init__(
        self,
        *,
        api_default: jsii.Number,
        traffic_control_name: builtins.str,
        traffic_control_unit: builtins.str,
        app_default: typing.Optional[builtins.str] = None,
        description: typing.Optional[builtins.str] = None,
        special: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTrafficControl.SpecialProperty]]]] = None,
        user_default: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::TrafficControl``.

        :param api_default: 
        :param traffic_control_name: 
        :param traffic_control_unit: 
        :param app_default: 
        :param description: 
        :param special: 
        :param user_default: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "api_default": api_default,
            "traffic_control_name": traffic_control_name,
            "traffic_control_unit": traffic_control_unit,
        }
        if app_default is not None:
            self._values["app_default"] = app_default
        if description is not None:
            self._values["description"] = description
        if special is not None:
            self._values["special"] = special
        if user_default is not None:
            self._values["user_default"] = user_default

    @builtins.property
    def api_default(self) -> jsii.Number:
        """
        :Property: apiDefault: Default API traffic value.
        """
        result = self._values.get("api_default")
        assert result is not None, "Required property 'api_default' is missing"
        return result

    @builtins.property
    def traffic_control_name(self) -> builtins.str:
        """
        :Property: trafficControlName: The name of the traffic control.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        result = self._values.get("traffic_control_name")
        assert result is not None, "Required property 'traffic_control_name' is missing"
        return result

    @builtins.property
    def traffic_control_unit(self) -> builtins.str:
        """
        :Property: trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
        """
        result = self._values.get("traffic_control_unit")
        assert result is not None, "Required property 'traffic_control_unit' is missing"
        return result

    @builtins.property
    def app_default(self) -> typing.Optional[builtins.str]:
        """
        :Property: appDefault: Default APP traffic value.
        """
        result = self._values.get("app_default")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the traffic control, less than 180 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def special(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTrafficControl.SpecialProperty]]]]:
        """
        :Property: special: Special traffic controls.
        """
        result = self._values.get("special")
        return result

    @builtins.property
    def user_default(self) -> typing.Optional[builtins.str]:
        """
        :Property: userDefault: Default user traffic value.
        """
        result = self._values.get("user_default")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTrafficControlProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpcAccessConfig(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosVpcAccessConfig",
):
    """A ROS template type:  ``ALIYUN::ApiGateway::VpcAccessConfig``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosVpcAccessConfigProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::VpcAccessConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosVpcAccessConfig, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The id of the instance (ECS/SLB).
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property: name: The name of one VPC access configuration.Need [4, 50] Chinese\\English\\Number characters "-" or "_",and should start with Chinese/English character.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="port")
    def port(self) -> jsii.Number:
        """
        :Property: port: The port of the VPC.
        """
        return jsii.get(self, "port")

    @port.setter # type: ignore
    def port(self, value: jsii.Number) -> None:
        jsii.set(self, "port", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: The id of the VPC.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: builtins.str) -> None:
        jsii.set(self, "vpcId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosVpcAccessConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "name": "name",
        "port": "port",
        "vpc_id": "vpcId",
    },
)
class RosVpcAccessConfigProps:
    def __init__(
        self,
        *,
        instance_id: builtins.str,
        name: builtins.str,
        port: jsii.Number,
        vpc_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::VpcAccessConfig``.

        :param instance_id: 
        :param name: 
        :param port: 
        :param vpc_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "name": name,
            "port": port,
            "vpc_id": vpc_id,
        }

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The id of the instance (ECS/SLB).
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of one VPC access configuration.Need [4, 50] Chinese\\English\\Number characters "-" or "_",and should start with Chinese/English character.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def port(self) -> jsii.Number:
        """
        :Property: port: The port of the VPC.
        """
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return result

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: The id of the VPC.
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpcAccessConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Signature(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.Signature",
):
    """A ROS resource type:  ``ALIYUN::ApiGateway::Signature``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SignatureProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::Signature``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Signature, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSignatureId")
    def attr_signature_id(self) -> typing.Any:
        """
        :Attribute: SignatureId: The id of the created signature
        """
        return jsii.get(self, "attrSignatureId")


class SignatureBinding(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.SignatureBinding",
):
    """A ROS resource type:  ``ALIYUN::ApiGateway::SignatureBinding``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SignatureBindingProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::SignatureBinding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(SignatureBinding, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.SignatureBindingProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_ids": "apiIds",
        "group_id": "groupId",
        "signature_id": "signatureId",
        "stage_name": "stageName",
    },
)
class SignatureBindingProps:
    def __init__(
        self,
        *,
        api_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        group_id: builtins.str,
        signature_id: builtins.str,
        stage_name: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::SignatureBinding``.

        :param api_ids: 
        :param group_id: 
        :param signature_id: 
        :param stage_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "api_ids": api_ids,
            "group_id": group_id,
            "signature_id": signature_id,
            "stage_name": stage_name,
        }

    @builtins.property
    def api_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: apiIds: APIs to bind with the signature.
        """
        result = self._values.get("api_ids")
        assert result is not None, "Required property 'api_ids' is missing"
        return result

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def signature_id(self) -> builtins.str:
        """
        :Property: signatureId: The id of the Signature.
        """
        result = self._values.get("signature_id")
        assert result is not None, "Required property 'signature_id' is missing"
        return result

    @builtins.property
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: Bind signature in this stage.
        """
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SignatureBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.SignatureProps",
    jsii_struct_bases=[],
    name_mapping={
        "signature_key": "signatureKey",
        "signature_name": "signatureName",
        "signature_secret": "signatureSecret",
    },
)
class SignatureProps:
    def __init__(
        self,
        *,
        signature_key: builtins.str,
        signature_name: builtins.str,
        signature_secret: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::Signature``.

        :param signature_key: 
        :param signature_name: 
        :param signature_secret: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "signature_key": signature_key,
            "signature_name": signature_name,
            "signature_secret": signature_secret,
        }

    @builtins.property
    def signature_key(self) -> builtins.str:
        """
        :Property: signatureKey: The key of the signature.
        """
        result = self._values.get("signature_key")
        assert result is not None, "Required property 'signature_key' is missing"
        return result

    @builtins.property
    def signature_name(self) -> builtins.str:
        """
        :Property: signatureName: The name of the Signature.Need [4, 15] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        result = self._values.get("signature_name")
        assert result is not None, "Required property 'signature_name' is missing"
        return result

    @builtins.property
    def signature_secret(self) -> builtins.str:
        """
        :Property: signatureSecret: The secret of the signature.
        """
        result = self._values.get("signature_secret")
        assert result is not None, "Required property 'signature_secret' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SignatureProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class StageConfig(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.StageConfig",
):
    """A ROS resource type:  ``ALIYUN::ApiGateway::StageConfig``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "StageConfigProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::StageConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(StageConfig, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.StageConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_id": "groupId",
        "stage_name": "stageName",
        "variables": "variables",
    },
)
class StageConfigProps:
    def __init__(
        self,
        *,
        group_id: builtins.str,
        stage_name: builtins.str,
        variables: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::StageConfig``.

        :param group_id: 
        :param stage_name: 
        :param variables: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_id": group_id,
            "stage_name": stage_name,
            "variables": variables,
        }

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of the Group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: The name of the Stage.
        """
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return result

    @builtins.property
    def variables(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        """
        :Property: variables: Variables in the stage, key-value pairs.
        """
        result = self._values.get("variables")
        assert result is not None, "Required property 'variables' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StageConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TrafficControl(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.TrafficControl",
):
    """A ROS resource type:  ``ALIYUN::ApiGateway::TrafficControl``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TrafficControlProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::TrafficControl``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(TrafficControl, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTrafficControlId")
    def attr_traffic_control_id(self) -> typing.Any:
        """
        :Attribute: TrafficControlId: The id of the traffic control
        """
        return jsii.get(self, "attrTrafficControlId")


class TrafficControlBinding(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.TrafficControlBinding",
):
    """A ROS resource type:  ``ALIYUN::ApiGateway::TrafficControlBinding``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TrafficControlBindingProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::TrafficControlBinding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(TrafficControlBinding, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.TrafficControlBindingProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_ids": "apiIds",
        "group_id": "groupId",
        "stage_name": "stageName",
        "traffic_control_id": "trafficControlId",
    },
)
class TrafficControlBindingProps:
    def __init__(
        self,
        *,
        api_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        group_id: builtins.str,
        stage_name: builtins.str,
        traffic_control_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::TrafficControlBinding``.

        :param api_ids: 
        :param group_id: 
        :param stage_name: 
        :param traffic_control_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "api_ids": api_ids,
            "group_id": group_id,
            "stage_name": stage_name,
            "traffic_control_id": traffic_control_id,
        }

    @builtins.property
    def api_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: apiIds: APIs to bind with the traffic control.
        """
        result = self._values.get("api_ids")
        assert result is not None, "Required property 'api_ids' is missing"
        return result

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The id of group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def stage_name(self) -> builtins.str:
        """
        :Property: stageName: Bind traffic in this stage.
        """
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return result

    @builtins.property
    def traffic_control_id(self) -> builtins.str:
        """
        :Property: trafficControlId: The id of traffic control.
        """
        result = self._values.get("traffic_control_id")
        assert result is not None, "Required property 'traffic_control_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TrafficControlBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.TrafficControlProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_default": "apiDefault",
        "traffic_control_name": "trafficControlName",
        "traffic_control_unit": "trafficControlUnit",
        "app_default": "appDefault",
        "description": "description",
        "special": "special",
        "user_default": "userDefault",
    },
)
class TrafficControlProps:
    def __init__(
        self,
        *,
        api_default: jsii.Number,
        traffic_control_name: builtins.str,
        traffic_control_unit: builtins.str,
        app_default: typing.Optional[builtins.str] = None,
        description: typing.Optional[builtins.str] = None,
        special: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTrafficControl.SpecialProperty]]]] = None,
        user_default: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::TrafficControl``.

        :param api_default: 
        :param traffic_control_name: 
        :param traffic_control_unit: 
        :param app_default: 
        :param description: 
        :param special: 
        :param user_default: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "api_default": api_default,
            "traffic_control_name": traffic_control_name,
            "traffic_control_unit": traffic_control_unit,
        }
        if app_default is not None:
            self._values["app_default"] = app_default
        if description is not None:
            self._values["description"] = description
        if special is not None:
            self._values["special"] = special
        if user_default is not None:
            self._values["user_default"] = user_default

    @builtins.property
    def api_default(self) -> jsii.Number:
        """
        :Property: apiDefault: Default API traffic value.
        """
        result = self._values.get("api_default")
        assert result is not None, "Required property 'api_default' is missing"
        return result

    @builtins.property
    def traffic_control_name(self) -> builtins.str:
        """
        :Property: trafficControlName: The name of the traffic control.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        """
        result = self._values.get("traffic_control_name")
        assert result is not None, "Required property 'traffic_control_name' is missing"
        return result

    @builtins.property
    def traffic_control_unit(self) -> builtins.str:
        """
        :Property: trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
        """
        result = self._values.get("traffic_control_unit")
        assert result is not None, "Required property 'traffic_control_unit' is missing"
        return result

    @builtins.property
    def app_default(self) -> typing.Optional[builtins.str]:
        """
        :Property: appDefault: Default APP traffic value.
        """
        result = self._values.get("app_default")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the traffic control, less than 180 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def special(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTrafficControl.SpecialProperty]]]]:
        """
        :Property: special: Special traffic controls.
        """
        result = self._values.get("special")
        return result

    @builtins.property
    def user_default(self) -> typing.Optional[builtins.str]:
        """
        :Property: userDefault: Default user traffic value.
        """
        result = self._values.get("user_default")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TrafficControlProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VpcAccessConfig(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.VpcAccessConfig",
):
    """A ROS resource type:  ``ALIYUN::ApiGateway::VpcAccessConfig``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "VpcAccessConfigProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ApiGateway::VpcAccessConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(VpcAccessConfig, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.VpcAccessConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "name": "name",
        "port": "port",
        "vpc_id": "vpcId",
    },
)
class VpcAccessConfigProps:
    def __init__(
        self,
        *,
        instance_id: builtins.str,
        name: builtins.str,
        port: jsii.Number,
        vpc_id: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::ApiGateway::VpcAccessConfig``.

        :param instance_id: 
        :param name: 
        :param port: 
        :param vpc_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "name": name,
            "port": port,
            "vpc_id": vpc_id,
        }

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The id of the instance (ECS/SLB).
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of one VPC access configuration.Need [4, 50] Chinese\\English\\Number characters "-" or "_",and should start with Chinese/English character.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def port(self) -> jsii.Number:
        """
        :Property: port: The port of the VPC.
        """
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return result

    @builtins.property
    def vpc_id(self) -> builtins.str:
        """
        :Property: vpcId: The id of the VPC.
        """
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpcAccessConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Api",
    "ApiProps",
    "App",
    "AppProps",
    "Authorization",
    "AuthorizationProps",
    "CustomDomain",
    "CustomDomainProps",
    "Deployment",
    "DeploymentProps",
    "Group",
    "GroupProps",
    "LogConfig",
    "LogConfigProps",
    "RosApi",
    "RosApiProps",
    "RosApp",
    "RosAppProps",
    "RosAuthorization",
    "RosAuthorizationProps",
    "RosCustomDomain",
    "RosCustomDomainProps",
    "RosDeployment",
    "RosDeploymentProps",
    "RosGroup",
    "RosGroupProps",
    "RosLogConfig",
    "RosLogConfigProps",
    "RosSignature",
    "RosSignatureBinding",
    "RosSignatureBindingProps",
    "RosSignatureProps",
    "RosStageConfig",
    "RosStageConfigProps",
    "RosTrafficControl",
    "RosTrafficControlBinding",
    "RosTrafficControlBindingProps",
    "RosTrafficControlProps",
    "RosVpcAccessConfig",
    "RosVpcAccessConfigProps",
    "Signature",
    "SignatureBinding",
    "SignatureBindingProps",
    "SignatureProps",
    "StageConfig",
    "StageConfigProps",
    "TrafficControl",
    "TrafficControlBinding",
    "TrafficControlBindingProps",
    "TrafficControlProps",
    "VpcAccessConfig",
    "VpcAccessConfigProps",
]

publication.publish()
