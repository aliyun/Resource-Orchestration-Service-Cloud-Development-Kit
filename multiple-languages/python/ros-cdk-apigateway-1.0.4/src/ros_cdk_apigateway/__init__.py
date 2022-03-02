'''
## Aliyun ROS APIGATEWAY Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as APIGATEWAY from '@alicloud/ros-cdk-apigateway';
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

from ._jsii import *

import ros_cdk_core


class Api(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.Api",
):
    '''A ROS resource type:  ``ALIYUN::ApiGateway::Api``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ApiProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::Api``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrApiId")
    def attr_api_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ApiId: The id of the API.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrApiId"))


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
        "disable_internet": "disableInternet",
        "error_code_samples": "errorCodeSamples",
        "fail_result_sample": "failResultSample",
        "force_nonce_check": "forceNonceCheck",
        "open_id_connect_config": "openIdConnectConfig",
        "request_parameters": "requestParameters",
        "service_parameters": "serviceParameters",
        "service_parameters_map": "serviceParametersMap",
        "system_parameters": "systemParameters",
        "tags": "tags",
    },
)
class ApiProps:
    def __init__(
        self,
        *,
        api_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        request_config: typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestConfigProperty"],
        result_sample: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        result_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_config: typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceConfigProperty"],
        visibility: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        app_code_auth_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auth_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        const_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosApi.ConstParametersProperty"]]]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        disable_internet: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        error_code_samples: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosApi.ErrorCodeSamplesProperty"]]]] = None,
        fail_result_sample: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        force_nonce_check: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        open_id_connect_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.OpenIdConnectConfigProperty"]] = None,
        request_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestParametersProperty"]]]] = None,
        service_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersProperty"]]]] = None,
        service_parameters_map: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersMapProperty"]]]] = None,
        system_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosApi.SystemParametersProperty"]]]] = None,
        tags: typing.Optional[typing.Sequence["RosApi.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::Api``.

        :param api_name: Property apiName: The name of the API.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        :param group_id: Property groupId: The id of the Group.
        :param request_config: Property requestConfig: The configuration of the request.
        :param result_sample: Property resultSample: The sample of the result.
        :param result_type: Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
        :param service_config: Property serviceConfig: The configuration of the service.
        :param visibility: Property visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
        :param app_code_auth_type: Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT: DEFAULT: Default (set by group). DISABLE: Not allowed HEADER: Allow AppCode header authentication HEADER_QUERY: Allow AppCode header and query authentication
        :param auth_type: Property authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
        :param const_parameters: Property constParameters: The const parameters.
        :param description: Property description: Description of the API, less than 180 characters.
        :param disable_internet: Property disableInternet: Set DisableInternet to true, only support intranet to call API. Set DisableInternet to false, then the call is not restricted.
        :param error_code_samples: Property errorCodeSamples: The Error Code samples.
        :param fail_result_sample: Property failResultSample: The sample of the fail result.
        :param force_nonce_check: Property forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting, this is the unique identifier of the request, generally using UUID to identify. The API gateway will verify the validity of this parameter after receiving this parameter. The same value can only be used once within 15 minutes. It can effectively prevent API replay attacks. Set ForceNonceCheck to false, then no check.
        :param open_id_connect_config: Property openIdConnectConfig: The configuration of the open id.
        :param request_parameters: Property requestParameters: The request parameters.
        :param service_parameters: Property serviceParameters: The service parameters.
        :param service_parameters_map: Property serviceParametersMap: The mapping relation between (request parameters\\const parameters\\system parameters) and service parameters.
        :param system_parameters: Property systemParameters: The system parameters.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
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
        if disable_internet is not None:
            self._values["disable_internet"] = disable_internet
        if error_code_samples is not None:
            self._values["error_code_samples"] = error_code_samples
        if fail_result_sample is not None:
            self._values["fail_result_sample"] = fail_result_sample
        if force_nonce_check is not None:
            self._values["force_nonce_check"] = force_nonce_check
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
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def api_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property apiName: The name of the API.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.'''
        result = self._values.get("api_name")
        assert result is not None, "Required property 'api_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupId: The id of the Group.'''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def request_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestConfigProperty"]:
        '''Property requestConfig: The configuration of the request.'''
        result = self._values.get("request_config")
        assert result is not None, "Required property 'request_config' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestConfigProperty"], result)

    @builtins.property
    def result_sample(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property resultSample: The sample of the result.'''
        result = self._values.get("result_sample")
        assert result is not None, "Required property 'result_sample' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def result_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH".

        Default is "JSON".
        '''
        result = self._values.get("result_type")
        assert result is not None, "Required property 'result_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceConfigProperty"]:
        '''Property serviceConfig: The configuration of the service.'''
        result = self._values.get("service_config")
        assert result is not None, "Required property 'service_config' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceConfigProperty"], result)

    @builtins.property
    def visibility(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property visibility: Whether to make the API public.

        "PUBLIC" or "PRIVATE".
        '''
        result = self._values.get("visibility")
        assert result is not None, "Required property 'visibility' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def app_code_auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT: DEFAULT: Default (set by group).

        DISABLE: Not allowed
        HEADER: Allow AppCode header authentication
        HEADER_QUERY: Allow AppCode header and query authentication
        '''
        result = self._values.get("app_code_auth_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property authType: Type of authorization of the API .

        "APP","ANONYMOUS", or "APPOPENID"
        '''
        result = self._values.get("auth_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def const_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ConstParametersProperty"]]]]:
        '''Property constParameters: The const parameters.'''
        result = self._values.get("const_parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ConstParametersProperty"]]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Description of the API, less than 180 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def disable_internet(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property disableInternet: Set DisableInternet to true, only support intranet to call API.

        Set DisableInternet to false, then the call is not restricted.
        '''
        result = self._values.get("disable_internet")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def error_code_samples(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ErrorCodeSamplesProperty"]]]]:
        '''Property errorCodeSamples: The Error Code samples.'''
        result = self._values.get("error_code_samples")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ErrorCodeSamplesProperty"]]]], result)

    @builtins.property
    def fail_result_sample(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property failResultSample: The sample of the fail result.'''
        result = self._values.get("fail_result_sample")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def force_nonce_check(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting,  this is the unique identifier of the request, generally using UUID to identify.

        The API gateway will verify the validity of this parameter after receiving this parameter.
        The same value can only be used once within 15 minutes. It can effectively prevent API replay attacks.
        Set ForceNonceCheck to false, then no check.
        '''
        result = self._values.get("force_nonce_check")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def open_id_connect_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.OpenIdConnectConfigProperty"]]:
        '''Property openIdConnectConfig: The configuration of the open id.'''
        result = self._values.get("open_id_connect_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.OpenIdConnectConfigProperty"]], result)

    @builtins.property
    def request_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestParametersProperty"]]]]:
        '''Property requestParameters: The request parameters.'''
        result = self._values.get("request_parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestParametersProperty"]]]], result)

    @builtins.property
    def service_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersProperty"]]]]:
        '''Property serviceParameters: The service parameters.'''
        result = self._values.get("service_parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersProperty"]]]], result)

    @builtins.property
    def service_parameters_map(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersMapProperty"]]]]:
        '''Property serviceParametersMap: The mapping relation between (request parameters\\const parameters\\system parameters) and service parameters.'''
        result = self._values.get("service_parameters_map")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersMapProperty"]]]], result)

    @builtins.property
    def system_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.SystemParametersProperty"]]]]:
        '''Property systemParameters: The system parameters.'''
        result = self._values.get("system_parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.SystemParametersProperty"]]]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosApi.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosApi.TagsProperty"]], result)

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
    '''A ROS resource type:  ``ALIYUN::ApiGateway::App``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AppProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::App``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AppId: The id of the created APP.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAppKey")
    def attr_app_key(self) -> ros_cdk_core.IResolvable:
        '''Attribute AppKey: The key of the APP.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppKey"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAppSecret")
    def attr_app_secret(self) -> ros_cdk_core.IResolvable:
        '''Attribute AppSecret: The secret of the APP.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppSecret"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> ros_cdk_core.IResolvable:
        '''Attribute Tags: Tags of app.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTags"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.AppProps",
    jsii_struct_bases=[],
    name_mapping={"app_name": "appName", "description": "description", "tags": "tags"},
)
class AppProps:
    def __init__(
        self,
        *,
        app_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosApp.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::App``.

        :param app_name: Property appName: The name of the App.Need [4, 15] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        :param description: Property description: Description of the App, less than 180 characters.
        :param tags: Property tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "app_name": app_name,
        }
        if description is not None:
            self._values["description"] = description
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def app_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property appName: The name of the App.Need [4, 15] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.'''
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Description of the App, less than 180 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosApp.TagsProperty"]]:
        '''Property tags: Tags to attach to app.

        Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosApp.TagsProperty"]], result)

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
    '''A ROS resource type:  ``ALIYUN::ApiGateway::Authorization``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AuthorizationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::Authorization``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


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
        api_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        app_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        stage_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::Authorization``.

        :param api_ids: Property apiIds: APIs to authorize.
        :param app_ids: Property appIds: APPs are authorized to APIs.
        :param group_id: Property groupId: The id of the group.
        :param stage_name: Property stageName: Authorize in this stage.
        :param description: Property description: Description of the authorization, less than 180 characters.
        '''
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
        '''Property apiIds: APIs to authorize.'''
        result = self._values.get("api_ids")
        assert result is not None, "Required property 'api_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def app_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''Property appIds: APPs are authorized to APIs.'''
        result = self._values.get("app_ids")
        assert result is not None, "Required property 'app_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupId: The id of the group.'''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property stageName: Authorize in this stage.'''
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Description of the authorization, less than 180 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS resource type:  ``ALIYUN::ApiGateway::CustomDomain``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CustomDomainProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::CustomDomain``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCertificateId")
    def attr_certificate_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CertificateId: The id of the certificate.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCertificateId"))


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
        domain_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        certificate_body: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        certificate_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        certificate_private_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::CustomDomain``.

        :param domain_name: Property domainName: Custom domain name.
        :param group_id: Property groupId: The id of the Group.
        :param certificate_body: Property certificateBody: SSL certificate body.
        :param certificate_name: Property certificateName: SSL certificate name.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        :param certificate_private_key: Property certificatePrivateKey: SSL certificate key.
        '''
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
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property domainName: Custom domain name.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupId: The id of the Group.'''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def certificate_body(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property certificateBody: SSL certificate body.'''
        result = self._values.get("certificate_body")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property certificateName: SSL certificate name.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.'''
        result = self._values.get("certificate_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def certificate_private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property certificatePrivateKey: SSL certificate key.'''
        result = self._values.get("certificate_private_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS resource type:  ``ALIYUN::ApiGateway::Deployment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DeploymentProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::Deployment``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


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
        api_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        stage_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        history_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::Deployment``.

        :param api_id: Property apiId: The id of the API.
        :param group_id: Property groupId: The id of the Group.
        :param stage_name: Property stageName: Bind traffic in this stage.
        :param description: Property description: Description of the deployment, less than 180 characters.
        :param history_version: Property historyVersion: The history version.
        '''
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
    def api_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property apiId: The id of the API.'''
        result = self._values.get("api_id")
        assert result is not None, "Required property 'api_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupId: The id of the Group.'''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property stageName: Bind traffic in this stage.'''
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Description of the deployment, less than 180 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def history_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property historyVersion: The history version.'''
        result = self._values.get("history_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS resource type:  ``ALIYUN::ApiGateway::Group``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "GroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::Group``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute GroupId: The id of the created Group resource.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSubDomain")
    def attr_sub_domain(self) -> ros_cdk_core.IResolvable:
        '''Attribute SubDomain: The sub domain assigned to the Group by the system.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSubDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> ros_cdk_core.IResolvable:
        '''Attribute Tags: Tags of app.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTags"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.GroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "description": "description",
        "instance_id": "instanceId",
        "internet_enable": "internetEnable",
        "passthrough_headers": "passthroughHeaders",
        "tags": "tags",
        "vpc_intranet_enable": "vpcIntranetEnable",
    },
)
class GroupProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        passthrough_headers: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosGroup.TagsProperty"]] = None,
        vpc_intranet_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::Group``.

        :param group_name: Property groupName: The name of the Group.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        :param description: Property description: Description of the Group, less than 180 characters.
        :param instance_id: Property instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
        :param internet_enable: Property internetEnable: Enable or disable internet subdomain. True for enable.
        :param passthrough_headers: Property passthroughHeaders: Pass through headers setting. values: host: pass through host headers
        :param tags: Property tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
        :param vpc_intranet_enable: Property vpcIntranetEnable: Enable or disable VPC intranet subdomain. True for enable.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }
        if description is not None:
            self._values["description"] = description
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if internet_enable is not None:
            self._values["internet_enable"] = internet_enable
        if passthrough_headers is not None:
            self._values["passthrough_headers"] = passthrough_headers
        if tags is not None:
            self._values["tags"] = tags
        if vpc_intranet_enable is not None:
            self._values["vpc_intranet_enable"] = vpc_intranet_enable

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupName: The name of the Group.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.'''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Description of the Group, less than 180 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceId: API gateway instance ID.

        For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property internetEnable: Enable or disable internet subdomain.

        True for enable.
        '''
        result = self._values.get("internet_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def passthrough_headers(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property passthroughHeaders: Pass through headers setting.

        values:
        host: pass through host headers
        '''
        result = self._values.get("passthrough_headers")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosGroup.TagsProperty"]]:
        '''Property tags: Tags to attach to group.

        Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosGroup.TagsProperty"]], result)

    @builtins.property
    def vpc_intranet_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property vpcIntranetEnable: Enable or disable VPC intranet subdomain.

        True for enable.
        '''
        result = self._values.get("vpc_intranet_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.Instance",
):
    '''A ROS resource type:  ``ALIYUN::ApiGateway::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::Instance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEgressIpv6Enable")
    def attr_egress_ipv6_enable(self) -> ros_cdk_core.IResolvable:
        '''Attribute EgressIpv6Enable: Whether enable egress IPV6.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEgressIpv6Enable"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: Instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceType: Instance type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetEgressAddress")
    def attr_internet_egress_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute InternetEgressAddress: Internet egress dddress.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetEgressAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSupportIpv6")
    def attr_support_ipv6(self) -> ros_cdk_core.IResolvable:
        '''Attribute SupportIpv6: Whether support IPV6.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSupportIpv6"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcEgressAddress")
    def attr_vpc_egress_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcEgressAddress: VPC network egress address.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcEgressAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcIntranetEnable")
    def attr_vpc_intranet_enable(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcIntranetEnable: Whether enable VPC intranet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcIntranetEnable"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcSlbIntranetEnable")
    def attr_vpc_slb_intranet_enable(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcSlbIntranetEnable: Whether enable VPC SLB intranet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcSlbIntranetEnable"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "https_policy": "httpsPolicy",
        "instance_name": "instanceName",
        "instance_spec": "instanceSpec",
        "zone_id": "zoneId",
        "auto_pay": "autoPay",
        "charge_type": "chargeType",
        "deletion_force": "deletionForce",
        "duration": "duration",
        "pricing_cycle": "pricingCycle",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        https_policy: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::Instance``.

        :param https_policy: Property httpsPolicy: HTTPS security policy. Valid values: HTTPS2_TLS1_0, HTTPS2_TLS1_2, HTTPS1_1_TLS1_0
        :param instance_name: Property instanceName: Instance name.
        :param instance_spec: Property instanceSpec: Instance specification. For example: api.s1.small
        :param zone_id: Property zoneId: Zone to which the instance belongs. For example: cn-beijing-MAZ2(f,g). Pleas call DescribeZones to get supported zone list.
        :param auto_pay: Property autoPay: Indicates whether automatic payment is enabled. Valid values: false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made.
        :param charge_type: Property chargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go). Default value: PostPaid.
        :param deletion_force: Property deletionForce: Whether force delete the instance even if its status is START_FAILED. Default value is false.
        :param duration: Property duration: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
        :param pricing_cycle: Property pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "https_policy": https_policy,
            "instance_name": instance_name,
            "instance_spec": instance_spec,
            "zone_id": zone_id,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if duration is not None:
            self._values["duration"] = duration
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle

    @builtins.property
    def https_policy(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property httpsPolicy: HTTPS security policy.

        Valid values: HTTPS2_TLS1_0, HTTPS2_TLS1_2, HTTPS1_1_TLS1_0
        '''
        result = self._values.get("https_policy")
        assert result is not None, "Required property 'https_policy' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceName: Instance name.'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceSpec: Instance specification.

        For example: api.s1.small
        '''
        result = self._values.get("instance_spec")
        assert result is not None, "Required property 'instance_spec' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property zoneId: Zone to which the instance belongs.

        For example: cn-beijing-MAZ2(f,g).
        Pleas call DescribeZones to get supported zone list.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoPay: Indicates whether automatic payment is enabled.

        Valid values:
        false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
        true: Automatic payment is enabled. The payment is automatically made.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property chargeType: The billing method of the router interface.

        Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go). Default value: PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionForce: Whether force delete the instance even if its status is START_FAILED.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property duration: Prepaid time period.

        It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pricingCycle: Unit of the payment cycle.

        It could be Month (default) or Year.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class LogConfig(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.LogConfig",
):
    '''A ROS resource type:  ``ALIYUN::ApiGateway::LogConfig``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "LogConfigProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::LogConfig``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSlsLogStore")
    def attr_sls_log_store(self) -> ros_cdk_core.IResolvable:
        '''Attribute SlsLogStore: Logstore name of SLS.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSlsLogStore"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSlsProject")
    def attr_sls_project(self) -> ros_cdk_core.IResolvable:
        '''Attribute SlsProject: Project name of SLS.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSlsProject"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.LogConfigProps",
    jsii_struct_bases=[],
    name_mapping={"sls_log_store": "slsLogStore", "sls_project": "slsProject"},
)
class LogConfigProps:
    def __init__(
        self,
        *,
        sls_log_store: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        sls_project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::LogConfig``.

        :param sls_log_store: Property slsLogStore: Logstore name of SLS.
        :param sls_project: Property slsProject: Project name of SLS.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "sls_log_store": sls_log_store,
            "sls_project": sls_project,
        }

    @builtins.property
    def sls_log_store(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property slsLogStore: Logstore name of SLS.'''
        result = self._values.get("sls_log_store")
        assert result is not None, "Required property 'sls_log_store' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def sls_project(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property slsProject: Project name of SLS.'''
        result = self._values.get("sls_project")
        assert result is not None, "Required property 'sls_project' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LogConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Plugin(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.Plugin",
):
    '''A ROS resource type:  ``ALIYUN::ApiGateway::Plugin``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "PluginProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::Plugin``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute Description: The description of the plug-in, which cannot exceed 200 characters.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPluginData")
    def attr_plugin_data(self) -> ros_cdk_core.IResolvable:
        '''Attribute PluginData: The definition statement of the plug-in.

        Plug-in definition statements in the JSON and YAML formats are supported.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPluginData"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPluginId")
    def attr_plugin_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PluginId: The generated plugin ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPluginId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPluginName")
    def attr_plugin_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute PluginName: The name of the plug-in that you want to create.

        It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPluginName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPluginType")
    def attr_plugin_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute PluginType: The type of the plug-in.

        Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPluginType"))


class PluginAttachment(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.PluginAttachment",
):
    '''A ROS resource type:  ``ALIYUN::ApiGateway::PluginAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "PluginAttachmentProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::PluginAttachment``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrApiId")
    def attr_api_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ApiId: The api id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrApiId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPluginId")
    def attr_plugin_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PluginId: The plugin id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPluginId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.PluginAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_id": "apiId",
        "plugin_id": "pluginId",
        "stage_name": "stageName",
    },
)
class PluginAttachmentProps:
    def __init__(
        self,
        *,
        api_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        plugin_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        stage_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::PluginAttachment``.

        :param api_id: Property apiId: The ID of the API to which you want to bind the plug-in.
        :param plugin_id: Property pluginId: The ID of the plugin that you want to bind.
        :param stage_name: Property stageName: The name of the runtime environment. Valid values: RELEASE: indicates the release environment. PRE: indicates the pre-release environment. TEST: indicates the test environment.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "api_id": api_id,
            "plugin_id": plugin_id,
            "stage_name": stage_name,
        }

    @builtins.property
    def api_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property apiId: The ID of the API to which you want to bind the plug-in.'''
        result = self._values.get("api_id")
        assert result is not None, "Required property 'api_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def plugin_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property pluginId: The ID of the plugin that you want to bind.'''
        result = self._values.get("plugin_id")
        assert result is not None, "Required property 'plugin_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property stageName: The name of the runtime environment.

        Valid values:
        RELEASE: indicates the release environment.
        PRE: indicates the pre-release environment.
        TEST: indicates the test environment.
        '''
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PluginAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.PluginProps",
    jsii_struct_bases=[],
    name_mapping={
        "plugin_data": "pluginData",
        "plugin_name": "pluginName",
        "plugin_type": "pluginType",
        "description": "description",
    },
)
class PluginProps:
    def __init__(
        self,
        *,
        plugin_data: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        plugin_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        plugin_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::Plugin``.

        :param plugin_data: Property pluginData: The definition statement of the plug-in. Plug-in definition statements in the JSON and YAML formats are supported.
        :param plugin_name: Property pluginName: The name of the plug-in that you want to create. It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
        :param plugin_type: Property pluginType: The type of the plug-in. Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
        :param description: Property description: The description of the plug-in, which cannot exceed 200 characters.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "plugin_data": plugin_data,
            "plugin_name": plugin_name,
            "plugin_type": plugin_type,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def plugin_data(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property pluginData: The definition statement of the plug-in.

        Plug-in definition statements in the JSON and YAML formats are supported.
        '''
        result = self._values.get("plugin_data")
        assert result is not None, "Required property 'plugin_data' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def plugin_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property pluginName: The name of the plug-in that you want to create.

        It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
        '''
        result = self._values.get("plugin_name")
        assert result is not None, "Required property 'plugin_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def plugin_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property pluginType: The type of the plug-in.

        Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
        '''
        result = self._values.get("plugin_type")
        assert result is not None, "Required property 'plugin_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the plug-in, which cannot exceed 200 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PluginProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApi(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosApi",
):
    '''A ROS template type:  ``ALIYUN::ApiGateway::Api``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosApiProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::Api``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrApiId")
    def attr_api_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ApiId: The id of the API.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrApiId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="apiName")
    def api_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: apiName: The name of the API.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "apiName"))

    @api_name.setter
    def api_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "apiName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupId: The id of the Group.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="requestConfig")
    def request_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestConfigProperty"]:
        '''
        :Property: requestConfig: The configuration of the request
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestConfigProperty"], jsii.get(self, "requestConfig"))

    @request_config.setter
    def request_config(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestConfigProperty"],
    ) -> None:
        jsii.set(self, "requestConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resultSample")
    def result_sample(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: resultSample: The sample of the result.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "resultSample"))

    @result_sample.setter
    def result_sample(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "resultSample", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resultType")
    def result_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "resultType"))

    @result_type.setter
    def result_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "resultType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceConfig")
    def service_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceConfigProperty"]:
        '''
        :Property: serviceConfig: The configuration of the service.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceConfigProperty"], jsii.get(self, "serviceConfig"))

    @service_config.setter
    def service_config(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceConfigProperty"],
    ) -> None:
        jsii.set(self, "serviceConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="visibility")
    def visibility(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "visibility"))

    @visibility.setter
    def visibility(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "visibility", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="appCodeAuthType")
    def app_code_auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT:
        DEFAULT: Default (set by group).
        DISABLE: Not allowed
        HEADER: Allow AppCode header authentication
        HEADER_QUERY: Allow AppCode header and query authentication
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "appCodeAuthType"))

    @app_code_auth_type.setter
    def app_code_auth_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "appCodeAuthType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="authType")
    def auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "authType"))

    @auth_type.setter
    def auth_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "authType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="constParameters")
    def const_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ConstParametersProperty"]]]]:
        '''
        :Property: constParameters: The const parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ConstParametersProperty"]]]], jsii.get(self, "constParameters"))

    @const_parameters.setter
    def const_parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ConstParametersProperty"]]]],
    ) -> None:
        jsii.set(self, "constParameters", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the API, less than 180 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="disableInternet")
    def disable_internet(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        disableInternet: Set DisableInternet to true, only support intranet to call API.
        Set DisableInternet to false, then the call is not restricted.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "disableInternet"))

    @disable_internet.setter
    def disable_internet(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "disableInternet", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="errorCodeSamples")
    def error_code_samples(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ErrorCodeSamplesProperty"]]]]:
        '''
        :Property: errorCodeSamples: The Error Code samples.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ErrorCodeSamplesProperty"]]]], jsii.get(self, "errorCodeSamples"))

    @error_code_samples.setter
    def error_code_samples(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ErrorCodeSamplesProperty"]]]],
    ) -> None:
        jsii.set(self, "errorCodeSamples", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="failResultSample")
    def fail_result_sample(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: failResultSample: The sample of the fail result.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "failResultSample"))

    @fail_result_sample.setter
    def fail_result_sample(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "failResultSample", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="forceNonceCheck")
    def force_nonce_check(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting,
        this is the unique identifier of the request, generally using UUID to identify.
        The API gateway will verify the validity of this parameter after receiving this parameter.
        The same value can only be used once within 15 minutes. It can effectively prevent API replay attacks.
        Set ForceNonceCheck to false, then no check.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "forceNonceCheck"))

    @force_nonce_check.setter
    def force_nonce_check(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "forceNonceCheck", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="openIdConnectConfig")
    def open_id_connect_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.OpenIdConnectConfigProperty"]]:
        '''
        :Property: openIdConnectConfig: The configuration of the open id.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.OpenIdConnectConfigProperty"]], jsii.get(self, "openIdConnectConfig"))

    @open_id_connect_config.setter
    def open_id_connect_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.OpenIdConnectConfigProperty"]],
    ) -> None:
        jsii.set(self, "openIdConnectConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="requestParameters")
    def request_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestParametersProperty"]]]]:
        '''
        :Property: requestParameters: The request parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestParametersProperty"]]]], jsii.get(self, "requestParameters"))

    @request_parameters.setter
    def request_parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.RequestParametersProperty"]]]],
    ) -> None:
        jsii.set(self, "requestParameters", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceParameters")
    def service_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersProperty"]]]]:
        '''
        :Property: serviceParameters: The service parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersProperty"]]]], jsii.get(self, "serviceParameters"))

    @service_parameters.setter
    def service_parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersProperty"]]]],
    ) -> None:
        jsii.set(self, "serviceParameters", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceParametersMap")
    def service_parameters_map(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersMapProperty"]]]]:
        '''
        :Property: serviceParametersMap: The mapping relation between (request parameters\\const parameters\\system parameters) and service parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersMapProperty"]]]], jsii.get(self, "serviceParametersMap"))

    @service_parameters_map.setter
    def service_parameters_map(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.ServiceParametersMapProperty"]]]],
    ) -> None:
        jsii.set(self, "serviceParametersMap", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="systemParameters")
    def system_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.SystemParametersProperty"]]]]:
        '''
        :Property: systemParameters: The system parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.SystemParametersProperty"]]]], jsii.get(self, "systemParameters"))

    @system_parameters.setter
    def system_parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.SystemParametersProperty"]]]],
    ) -> None:
        jsii.set(self, "systemParameters", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosApi.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosApi.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(self, value: typing.Optional[typing.List["RosApi.TagsProperty"]]) -> None:
        jsii.set(self, "tags", value)

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
            const_value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            location: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            service_parameter_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param const_value: 
            :param location: 
            :param service_parameter_name: 
            :param description: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "const_value": const_value,
                "location": location,
                "service_parameter_name": service_parameter_name,
            }
            if description is not None:
                self._values["description"] = description

        @builtins.property
        def const_value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: constValue: The value of the parameter.
            '''
            result = self._values.get("const_value")
            assert result is not None, "Required property 'const_value' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def location(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: location: The location of the parameter. Default is HEAD.
            '''
            result = self._values.get("location")
            assert result is not None, "Required property 'location' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def service_parameter_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serviceParameterName: The service parameter name.
            '''
            result = self._values.get("service_parameter_name")
            assert result is not None, "Required property 'service_parameter_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: Description of the const parameter, less than 180 characters.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            code: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            message: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param code: 
            :param message: 
            :param description: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "code": code,
                "message": message,
            }
            if description is not None:
                self._values["description"] = description

        @builtins.property
        def code(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: code: Error code.
            '''
            result = self._values.get("code")
            assert result is not None, "Required property 'code' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def message(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: message: Error message.
            '''
            result = self._values.get("message")
            assert result is not None, "Required property 'message' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: Description of the ERROR, less than 180 characters.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            "content_type_catagory": "contentTypeCatagory",
            "content_type_value": "contentTypeValue",
            "fc_base_url": "fcBaseUrl",
            "fc_region_id": "fcRegionId",
            "fc_type": "fcType",
            "function_name": "functionName",
            "method": "method",
            "only_business_path": "onlyBusinessPath",
            "path": "path",
            "qualifier": "qualifier",
            "role_arn": "roleArn",
            "service_name": "serviceName",
        },
    )
    class FunctionComputeConfigProperty:
        def __init__(
            self,
            *,
            content_type_catagory: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            content_type_value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            fc_base_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            fc_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            fc_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            function_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            method: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            only_business_path: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            qualifier: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            role_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            service_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param content_type_catagory: 
            :param content_type_value: 
            :param fc_base_url: 
            :param fc_region_id: 
            :param fc_type: 
            :param function_name: 
            :param method: 
            :param only_business_path: 
            :param path: 
            :param qualifier: 
            :param role_arn: 
            :param service_name: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if content_type_catagory is not None:
                self._values["content_type_catagory"] = content_type_catagory
            if content_type_value is not None:
                self._values["content_type_value"] = content_type_value
            if fc_base_url is not None:
                self._values["fc_base_url"] = fc_base_url
            if fc_region_id is not None:
                self._values["fc_region_id"] = fc_region_id
            if fc_type is not None:
                self._values["fc_type"] = fc_type
            if function_name is not None:
                self._values["function_name"] = function_name
            if method is not None:
                self._values["method"] = method
            if only_business_path is not None:
                self._values["only_business_path"] = only_business_path
            if path is not None:
                self._values["path"] = path
            if qualifier is not None:
                self._values["qualifier"] = qualifier
            if role_arn is not None:
                self._values["role_arn"] = role_arn
            if service_name is not None:
                self._values["service_name"] = service_name

        @builtins.property
        def content_type_catagory(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: contentTypeCatagory: Specify how to determine ContentType header when using function. "DEFAULT" to use API Gateway's default value. "CUSTOM" to use self defined value. "CLIENT" to use client's ContentType header. Default is CLIENT.
            '''
            result = self._values.get("content_type_catagory")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def content_type_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: contentTypeValue: ContentTypeValue is required if ContentTypeCatagory is DEFAULT or CUSTOM.
            '''
            result = self._values.get("content_type_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def fc_base_url(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: fcBaseUrl: Trigger path. Starts with http:// or https://
            '''
            result = self._values.get("fc_base_url")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def fc_region_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: fcRegionId: The region id of function compute.
            '''
            result = self._values.get("fc_region_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def fc_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            fcType: Function type. Default: FCEvent.
            Valid values: FCEvent, HttpTrigger.
            '''
            result = self._values.get("fc_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def function_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: functionName: The function name of function compute.
            '''
            result = self._values.get("function_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def method(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: method: The HTTP method of the function. Default is GET.
            '''
            result = self._values.get("method")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def only_business_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: onlyBusinessPath: If set true. The path in the trigger path (for example, /2016-08-15/proxy/xxx/xxx) will not be passed to the backend, and the backend will only receive the customized backend request path.
            '''
            result = self._values.get("only_business_path")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: path: The backend request path must contain the Parameter Path in the backend service parameter within brackets ([]). For example: /getUserInfo/[userId].
            '''
            result = self._values.get("path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def qualifier(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: qualifier: The service alias name.
            '''
            result = self._values.get("qualifier")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def role_arn(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: roleArn: Ram authorizes the arn of the API gateway access function compute.
            '''
            result = self._values.get("role_arn")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def service_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serviceName: The service name of function compute.
            '''
            result = self._values.get("service_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            header_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            header_value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param header_name: 
            :param header_value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "header_name": header_name,
                "header_value": header_value,
            }

        @builtins.property
        def header_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: headerName: Response header name
            '''
            result = self._values.get("header_name")
            assert result is not None, "Required property 'header_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def header_value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: headerValue: Response header value
            '''
            result = self._values.get("header_value")
            assert result is not None, "Required property 'header_value' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
            open_id_api_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            id_token_param_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            public_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            public_key_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param open_id_api_type: 
            :param id_token_param_name: 
            :param public_key: 
            :param public_key_id: 
            '''
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
        def open_id_api_type(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: openIdApiType: The type of the open id. "IDTOKEN" or "BUSINESS". If OpenIdApiType is specified as IDTOKEN, PublicKey and PublicKeyId are required. If OpenIdApiType is specified as BUSINESS, IdTokenParamName is required.
            '''
            result = self._values.get("open_id_api_type")
            assert result is not None, "Required property 'open_id_api_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def id_token_param_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: idTokenParamName: The token's parameter name.
            '''
            result = self._values.get("id_token_param_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def public_key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: publicKey: The public key.
            '''
            result = self._values.get("public_key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def public_key_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: publicKeyId: The public key id.
            '''
            result = self._values.get("public_key_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            request_http_method: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            request_mode: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            request_path: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            request_protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            body_format: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            post_body_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param request_http_method: 
            :param request_mode: 
            :param request_path: 
            :param request_protocol: 
            :param body_format: 
            :param post_body_description: 
            '''
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
        def request_http_method(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: requestHttpMethod: The HTTP method of the request. Default is GET.
            '''
            result = self._values.get("request_http_method")
            assert result is not None, "Required property 'request_http_method' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def request_mode(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: requestMode: API request mode. "MAPPING" or "PASSTHROUGH". Default is "MAPPING".
            '''
            result = self._values.get("request_mode")
            assert result is not None, "Required property 'request_mode' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def request_path(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: requestPath: API Path.
            '''
            result = self._values.get("request_path")
            assert result is not None, "Required property 'request_path' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def request_protocol(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: requestProtocol: The protocol of the request, "HTTP", "HTTPS", or "HTTP,HTTPS", Default is "HTTP".
            '''
            result = self._values.get("request_protocol")
            assert result is not None, "Required property 'request_protocol' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def body_format(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: bodyFormat: Describe how data transform to the server, "FORM" for k-v and "STREAM" for bit stream.BodyFormat is required if RequestMode is specified as MAPPING and RequestHttpMethod is POST/PUT/PATCH.
            '''
            result = self._values.get("body_format")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def post_body_description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: postBodyDescription: Description of the post body.
            '''
            result = self._values.get("post_body_description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            api_parameter_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            location: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            parameter_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            required: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            default_value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            demo_value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            doc_order: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            doc_show: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            enum_value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            json_scheme: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            max_length: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            max_value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            min_length: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            min_value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            regular_expression: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
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
            '''
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
        def api_parameter_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: apiParameterName: The name of the request parameter.
            '''
            result = self._values.get("api_parameter_name")
            assert result is not None, "Required property 'api_parameter_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def location(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: location: The location of the reqest parameter.
            '''
            result = self._values.get("location")
            assert result is not None, "Required property 'location' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def parameter_type(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: parameterType: The type of the parameter
            '''
            result = self._values.get("parameter_type")
            assert result is not None, "Required property 'parameter_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def required(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: required: If required. "REQUIRED", "OPTION"
            '''
            result = self._values.get("required")
            assert result is not None, "Required property 'required' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def default_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: defaultValue: The default value of the request parameter.
            '''
            result = self._values.get("default_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def demo_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: demoValue: The demo value of the request parameter.
            '''
            result = self._values.get("demo_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: Description of the API, less than 180 characters.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def doc_order(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: docOrder: The order of the doc.
            '''
            result = self._values.get("doc_order")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def doc_show(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: docShow: Visiablity of the Doc. "PUBLIC" or "PRIVATE"
            '''
            result = self._values.get("doc_show")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def enum_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: enumValue: Allowed parameter value, split with ',' like "1,2,3,4"
            '''
            result = self._values.get("enum_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def json_scheme(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: jsonScheme: The json scheme of the parameter when it is String.
            '''
            result = self._values.get("json_scheme")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def max_length(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: maxLength: The max length of the parameter when it is String.
            '''
            result = self._values.get("max_length")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def max_value(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: maxValue: The max value of the parameter when it is Int, Long, Float or Double.
            '''
            result = self._values.get("max_value")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def min_length(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: minLength: The min length of the parameter when it is String.
            '''
            result = self._values.get("min_length")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def min_value(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: minValue: The min value of the parameter when it is Int, Long, Float or Double.
            '''
            result = self._values.get("min_value")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def regular_expression(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: regularExpression: The regular expression of the parameter when it is String.
            '''
            result = self._values.get("regular_expression")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            content_type_catagory: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            content_type_value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            function_compute_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.FunctionComputeConfigProperty"]] = None,
            mock: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            mock_headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosApi.MockHeadersProperty"]]]] = None,
            mock_result: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            mock_status_code: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            service_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            service_http_method: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            service_path: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            service_protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            service_time_out: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            service_vpc_enable: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            vpc_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.VpcConfigProperty"]] = None,
        ) -> None:
            '''
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
            '''
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
        def content_type_catagory(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: contentTypeCatagory: Specify how to determine ContentType header when using service. "DEFAULT" to use API Gateway's default value. "CUSTOM" to use self defined value. "CLIENT" to use client's ContentType header. Default is CLIENT.
            '''
            result = self._values.get("content_type_catagory")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def content_type_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: contentTypeValue: ContentTypeValue is required if ContentTypeCatagory is DEFAULT or CUSTOM.
            '''
            result = self._values.get("content_type_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def function_compute_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.FunctionComputeConfigProperty"]]:
            '''
            :Property: functionComputeConfig: The configuration of the function compute. FunctionComputeConfig is required if ServiceFunctionComputeEnable is TRUE.
            '''
            result = self._values.get("function_compute_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.FunctionComputeConfigProperty"]], result)

        @builtins.property
        def mock(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: mock: Whether to use Mock model. "TRUE" or "FALSE". Default is FALSE.
            '''
            result = self._values.get("mock")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def mock_headers(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.MockHeadersProperty"]]]]:
            '''
            :Property: mockHeaders: Custom Mock response header related information when Mock is enabled.
            '''
            result = self._values.get("mock_headers")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosApi.MockHeadersProperty"]]]], result)

        @builtins.property
        def mock_result(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: mockResult: The returned value when using Mock model.
            '''
            result = self._values.get("mock_result")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def mock_status_code(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: mockStatusCode: Status code, returned in the format compatible with HTTP 1.1 response status code and its status
            '''
            result = self._values.get("mock_status_code")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def service_address(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serviceAddress: Backend service call address. If the complete backend service address is http://api.a.com:8080/object/add?key1=value1&key2=value2, ServiceAddress corresponds to http://api.a.com:8080.
            '''
            result = self._values.get("service_address")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def service_http_method(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serviceHttpMethod: The HTTP method to the service. Default is GET.
            '''
            result = self._values.get("service_http_method")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def service_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: servicePath: Backend service call path. If the complete backend service address is http://api.a.com:8080/object/add?key1=value1&key2=value2, ServicePath corresponds to /object/add.
            '''
            result = self._values.get("service_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def service_protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serviceProtocol: Backend service protocol type, which must be HTTP, HTTPS or FunctionCompute currently.
            '''
            result = self._values.get("service_protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def service_time_out(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: serviceTimeOut: Time out (ms) when using service.
            '''
            result = self._values.get("service_time_out")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def service_vpc_enable(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serviceVpcEnable: Whether to use VPC. "TRUE" or "FALSE". Default is FALSE.
            '''
            result = self._values.get("service_vpc_enable")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def vpc_config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.VpcConfigProperty"]]:
            '''
            :Property: vpcConfig: The configuration of the VPC. VpcConfig is required if ServiceVpcEnable is TRUE.
            '''
            result = self._values.get("vpc_config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosApi.VpcConfigProperty"]], result)

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
            request_parameter_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            service_parameter_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param request_parameter_name: 
            :param service_parameter_name: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "request_parameter_name": request_parameter_name,
                "service_parameter_name": service_parameter_name,
            }

        @builtins.property
        def request_parameter_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: requestParameterName: The corresponding request parameter, system parameter or const parameter.
            '''
            result = self._values.get("request_parameter_name")
            assert result is not None, "Required property 'request_parameter_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def service_parameter_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serviceParameterName: The corresponding service parameter.
            '''
            result = self._values.get("service_parameter_name")
            assert result is not None, "Required property 'service_parameter_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
            location: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            parameter_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            service_parameter_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param location: 
            :param parameter_type: 
            :param service_parameter_name: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "location": location,
                "parameter_type": parameter_type,
                "service_parameter_name": service_parameter_name,
            }

        @builtins.property
        def location(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: location: The location of the parameter
            '''
            result = self._values.get("location")
            assert result is not None, "Required property 'location' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def parameter_type(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: parameterType: The type of the parameter.
            '''
            result = self._values.get("parameter_type")
            assert result is not None, "Required property 'parameter_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def service_parameter_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serviceParameterName: The name of the parameter
            '''
            result = self._values.get("service_parameter_name")
            assert result is not None, "Required property 'service_parameter_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
            location: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            parameter_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            service_parameter_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            demo_value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param location: 
            :param parameter_name: 
            :param service_parameter_name: 
            :param demo_value: 
            :param description: 
            '''
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
        def location(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: location: The location of the system parameter. Default is HEAD.
            '''
            result = self._values.get("location")
            assert result is not None, "Required property 'location' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def parameter_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: parameterName: The system parameter name.
            '''
            result = self._values.get("parameter_name")
            assert result is not None, "Required property 'parameter_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def service_parameter_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serviceParameterName: The service parameter name.
            '''
            result = self._values.get("service_parameter_name")
            assert result is not None, "Required property 'service_parameter_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def demo_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: demoValue: The demo value of the system parameter.
            '''
            result = self._values.get("demo_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: Description of the system parameter, less than 180 characters.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SystemParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosApi.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
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
            instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param instance_id: 
            :param port: 
            :param vpc_id: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "instance_id": instance_id,
                "port": port,
                "vpc_id": vpc_id,
            }

        @builtins.property
        def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: instanceId: The id of the instance (ECS/SLB).
            '''
            result = self._values.get("instance_id")
            assert result is not None, "Required property 'instance_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: port: The port of the VPC.
            '''
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: vpcId: The id of the VPC.
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        "disable_internet": "disableInternet",
        "error_code_samples": "errorCodeSamples",
        "fail_result_sample": "failResultSample",
        "force_nonce_check": "forceNonceCheck",
        "open_id_connect_config": "openIdConnectConfig",
        "request_parameters": "requestParameters",
        "service_parameters": "serviceParameters",
        "service_parameters_map": "serviceParametersMap",
        "system_parameters": "systemParameters",
        "tags": "tags",
    },
)
class RosApiProps:
    def __init__(
        self,
        *,
        api_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        request_config: typing.Union[ros_cdk_core.IResolvable, RosApi.RequestConfigProperty],
        result_sample: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        result_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_config: typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceConfigProperty],
        visibility: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        app_code_auth_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auth_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        const_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosApi.ConstParametersProperty]]]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        disable_internet: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        error_code_samples: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosApi.ErrorCodeSamplesProperty]]]] = None,
        fail_result_sample: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        force_nonce_check: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        open_id_connect_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosApi.OpenIdConnectConfigProperty]] = None,
        request_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosApi.RequestParametersProperty]]]] = None,
        service_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceParametersProperty]]]] = None,
        service_parameters_map: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceParametersMapProperty]]]] = None,
        system_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosApi.SystemParametersProperty]]]] = None,
        tags: typing.Optional[typing.Sequence[RosApi.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::Api``.

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
        :param disable_internet: 
        :param error_code_samples: 
        :param fail_result_sample: 
        :param force_nonce_check: 
        :param open_id_connect_config: 
        :param request_parameters: 
        :param service_parameters: 
        :param service_parameters_map: 
        :param system_parameters: 
        :param tags: 
        '''
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
        if disable_internet is not None:
            self._values["disable_internet"] = disable_internet
        if error_code_samples is not None:
            self._values["error_code_samples"] = error_code_samples
        if fail_result_sample is not None:
            self._values["fail_result_sample"] = fail_result_sample
        if force_nonce_check is not None:
            self._values["force_nonce_check"] = force_nonce_check
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
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def api_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: apiName: The name of the API.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        '''
        result = self._values.get("api_name")
        assert result is not None, "Required property 'api_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupId: The id of the Group.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def request_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosApi.RequestConfigProperty]:
        '''
        :Property: requestConfig: The configuration of the request
        '''
        result = self._values.get("request_config")
        assert result is not None, "Required property 'request_config' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosApi.RequestConfigProperty], result)

    @builtins.property
    def result_sample(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: resultSample: The sample of the result.
        '''
        result = self._values.get("result_sample")
        assert result is not None, "Required property 'result_sample' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def result_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
        '''
        result = self._values.get("result_type")
        assert result is not None, "Required property 'result_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceConfigProperty]:
        '''
        :Property: serviceConfig: The configuration of the service.
        '''
        result = self._values.get("service_config")
        assert result is not None, "Required property 'service_config' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceConfigProperty], result)

    @builtins.property
    def visibility(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
        '''
        result = self._values.get("visibility")
        assert result is not None, "Required property 'visibility' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def app_code_auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT:
        DEFAULT: Default (set by group).
        DISABLE: Not allowed
        HEADER: Allow AppCode header authentication
        HEADER_QUERY: Allow AppCode header and query authentication
        '''
        result = self._values.get("app_code_auth_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
        '''
        result = self._values.get("auth_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def const_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ConstParametersProperty]]]]:
        '''
        :Property: constParameters: The const parameters.
        '''
        result = self._values.get("const_parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ConstParametersProperty]]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the API, less than 180 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def disable_internet(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        disableInternet: Set DisableInternet to true, only support intranet to call API.
        Set DisableInternet to false, then the call is not restricted.
        '''
        result = self._values.get("disable_internet")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def error_code_samples(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ErrorCodeSamplesProperty]]]]:
        '''
        :Property: errorCodeSamples: The Error Code samples.
        '''
        result = self._values.get("error_code_samples")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ErrorCodeSamplesProperty]]]], result)

    @builtins.property
    def fail_result_sample(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: failResultSample: The sample of the fail result.
        '''
        result = self._values.get("fail_result_sample")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def force_nonce_check(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting,
        this is the unique identifier of the request, generally using UUID to identify.
        The API gateway will verify the validity of this parameter after receiving this parameter.
        The same value can only be used once within 15 minutes. It can effectively prevent API replay attacks.
        Set ForceNonceCheck to false, then no check.
        '''
        result = self._values.get("force_nonce_check")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def open_id_connect_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosApi.OpenIdConnectConfigProperty]]:
        '''
        :Property: openIdConnectConfig: The configuration of the open id.
        '''
        result = self._values.get("open_id_connect_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosApi.OpenIdConnectConfigProperty]], result)

    @builtins.property
    def request_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.RequestParametersProperty]]]]:
        '''
        :Property: requestParameters: The request parameters.
        '''
        result = self._values.get("request_parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.RequestParametersProperty]]]], result)

    @builtins.property
    def service_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceParametersProperty]]]]:
        '''
        :Property: serviceParameters: The service parameters.
        '''
        result = self._values.get("service_parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceParametersProperty]]]], result)

    @builtins.property
    def service_parameters_map(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceParametersMapProperty]]]]:
        '''
        :Property: serviceParametersMap: The mapping relation between (request parameters\\const parameters\\system parameters) and service parameters.
        '''
        result = self._values.get("service_parameters_map")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.ServiceParametersMapProperty]]]], result)

    @builtins.property
    def system_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.SystemParametersProperty]]]]:
        '''
        :Property: systemParameters: The system parameters.
        '''
        result = self._values.get("system_parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosApi.SystemParametersProperty]]]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosApi.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosApi.TagsProperty]], result)

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
    '''A ROS template type:  ``ALIYUN::ApiGateway::App``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAppProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::App``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AppId: The id of the created APP
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAppKey")
    def attr_app_key(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AppKey: The key of the APP
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppKey"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAppSecret")
    def attr_app_secret(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AppSecret: The secret of the APP
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppSecret"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Tags: Tags of app
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="appName")
    def app_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: appName: The name of the App.Need [4, 15] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "appName"))

    @app_name.setter
    def app_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "appName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the App, less than 180 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosApp.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosApp.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(self, value: typing.Optional[typing.List["RosApp.TagsProperty"]]) -> None:
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosApp.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosAppProps",
    jsii_struct_bases=[],
    name_mapping={"app_name": "appName", "description": "description", "tags": "tags"},
)
class RosAppProps:
    def __init__(
        self,
        *,
        app_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosApp.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::App``.

        :param app_name: 
        :param description: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "app_name": app_name,
        }
        if description is not None:
            self._values["description"] = description
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def app_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: appName: The name of the App.Need [4, 15] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        '''
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the App, less than 180 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosApp.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosApp.TagsProperty]], result)

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
    '''A ROS template type:  ``ALIYUN::ApiGateway::Authorization``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAuthorizationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::Authorization``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="apiIds")
    def api_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: apiIds: APIs to authorize.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], jsii.get(self, "apiIds"))

    @api_ids.setter
    def api_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "apiIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="appIds")
    def app_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: appIds: APPs are authorized to APIs.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], jsii.get(self, "appIds"))

    @app_ids.setter
    def app_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "appIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupId: The id of the group.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="stageName")
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: stageName: Authorize in this stage.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "stageName"))

    @stage_name.setter
    def stage_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "stageName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the authorization, less than 180 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        api_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        app_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        stage_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::Authorization``.

        :param api_ids: 
        :param app_ids: 
        :param group_id: 
        :param stage_name: 
        :param description: 
        '''
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
        '''
        :Property: apiIds: APIs to authorize.
        '''
        result = self._values.get("api_ids")
        assert result is not None, "Required property 'api_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def app_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: appIds: APPs are authorized to APIs.
        '''
        result = self._values.get("app_ids")
        assert result is not None, "Required property 'app_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupId: The id of the group.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: stageName: Authorize in this stage.
        '''
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the authorization, less than 180 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::ApiGateway::CustomDomain``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCustomDomainProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::CustomDomain``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCertificateId")
    def attr_certificate_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CertificateId: The id of the certificate.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCertificateId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="domainName")
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domainName: Custom domain name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "domainName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupId: The id of the Group.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="certificateBody")
    def certificate_body(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: certificateBody: SSL certificate body.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "certificateBody"))

    @certificate_body.setter
    def certificate_body(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "certificateBody", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="certificateName")
    def certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: certificateName: SSL certificate name.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "certificateName"))

    @certificate_name.setter
    def certificate_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "certificateName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="certificatePrivateKey")
    def certificate_private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: certificatePrivateKey: SSL certificate key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "certificatePrivateKey"))

    @certificate_private_key.setter
    def certificate_private_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        domain_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        certificate_body: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        certificate_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        certificate_private_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::CustomDomain``.

        :param domain_name: 
        :param group_id: 
        :param certificate_body: 
        :param certificate_name: 
        :param certificate_private_key: 
        '''
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
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domainName: Custom domain name.
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupId: The id of the Group.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def certificate_body(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: certificateBody: SSL certificate body.
        '''
        result = self._values.get("certificate_body")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: certificateName: SSL certificate name.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        '''
        result = self._values.get("certificate_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def certificate_private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: certificatePrivateKey: SSL certificate key.
        '''
        result = self._values.get("certificate_private_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::ApiGateway::Deployment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDeploymentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::Deployment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="apiId")
    def api_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: apiId: The id of the API.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "apiId"))

    @api_id.setter
    def api_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "apiId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupId: The id of the Group.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="stageName")
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: stageName: Bind traffic in this stage.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "stageName"))

    @stage_name.setter
    def stage_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "stageName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the deployment, less than 180 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="historyVersion")
    def history_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: historyVersion: The history version.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "historyVersion"))

    @history_version.setter
    def history_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        api_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        stage_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        history_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::Deployment``.

        :param api_id: 
        :param group_id: 
        :param stage_name: 
        :param description: 
        :param history_version: 
        '''
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
    def api_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: apiId: The id of the API.
        '''
        result = self._values.get("api_id")
        assert result is not None, "Required property 'api_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupId: The id of the Group.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: stageName: Bind traffic in this stage.
        '''
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the deployment, less than 180 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def history_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: historyVersion: The history version.
        '''
        result = self._values.get("history_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::ApiGateway::Group``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::Group``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: GroupId: The id of the created Group resource
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSubDomain")
    def attr_sub_domain(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SubDomain: The sub domain assigned to the Group by the system
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSubDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Tags: Tags of app
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: The name of the Group.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the Group, less than 180 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="internetEnable")
    def internet_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetEnable: Enable or disable internet subdomain. True for enable.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "internetEnable"))

    @internet_enable.setter
    def internet_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "internetEnable", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="passthroughHeaders")
    def passthrough_headers(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        passthroughHeaders: Pass through headers setting. values:
        host: pass through host headers
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "passthroughHeaders"))

    @passthrough_headers.setter
    def passthrough_headers(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "passthroughHeaders", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosGroup.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosGroup.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosGroup.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcIntranetEnable")
    def vpc_intranet_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcIntranetEnable: Enable or disable VPC intranet subdomain. True for enable.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "vpcIntranetEnable"))

    @vpc_intranet_enable.setter
    def vpc_intranet_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcIntranetEnable", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-apigateway.RosGroup.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "description": "description",
        "instance_id": "instanceId",
        "internet_enable": "internetEnable",
        "passthrough_headers": "passthroughHeaders",
        "tags": "tags",
        "vpc_intranet_enable": "vpcIntranetEnable",
    },
)
class RosGroupProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        passthrough_headers: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosGroup.TagsProperty]] = None,
        vpc_intranet_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::Group``.

        :param group_name: 
        :param description: 
        :param instance_id: 
        :param internet_enable: 
        :param passthrough_headers: 
        :param tags: 
        :param vpc_intranet_enable: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }
        if description is not None:
            self._values["description"] = description
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if internet_enable is not None:
            self._values["internet_enable"] = internet_enable
        if passthrough_headers is not None:
            self._values["passthrough_headers"] = passthrough_headers
        if tags is not None:
            self._values["tags"] = tags
        if vpc_intranet_enable is not None:
            self._values["vpc_intranet_enable"] = vpc_intranet_enable

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: The name of the Group.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the Group, less than 180 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetEnable: Enable or disable internet subdomain. True for enable.
        '''
        result = self._values.get("internet_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def passthrough_headers(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        passthroughHeaders: Pass through headers setting. values:
        host: pass through host headers
        '''
        result = self._values.get("passthrough_headers")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosGroup.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosGroup.TagsProperty]], result)

    @builtins.property
    def vpc_intranet_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcIntranetEnable: Enable or disable VPC intranet subdomain. True for enable.
        '''
        result = self._values.get("vpc_intranet_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::ApiGateway::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEgressIpv6Enable")
    def attr_egress_ipv6_enable(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EgressIpv6Enable: Whether enable egress IPV6.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEgressIpv6Enable"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: Instance ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceType: Instance type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetEgressAddress")
    def attr_internet_egress_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InternetEgressAddress: Internet egress dddress.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetEgressAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSupportIpv6")
    def attr_support_ipv6(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SupportIpv6: Whether support IPV6.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSupportIpv6"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcEgressAddress")
    def attr_vpc_egress_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcEgressAddress: VPC network egress address.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcEgressAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcIntranetEnable")
    def attr_vpc_intranet_enable(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcIntranetEnable: Whether enable VPC intranet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcIntranetEnable"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcSlbIntranetEnable")
    def attr_vpc_slb_intranet_enable(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcSlbIntranetEnable: Whether enable VPC SLB intranet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcSlbIntranetEnable"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="httpsPolicy")
    def https_policy(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: httpsPolicy: HTTPS security policy. Valid values: HTTPS2_TLS1_0, HTTPS2_TLS1_2, HTTPS1_1_TLS1_0
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "httpsPolicy"))

    @https_policy.setter
    def https_policy(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "httpsPolicy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceName: Instance name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceSpec")
    def instance_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceSpec: Instance specification. For example: api.s1.small
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceSpec"))

    @instance_spec.setter
    def instance_spec(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceSpec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        zoneId: Zone to which the instance belongs. For example: cn-beijing-MAZ2(f,g).
        Pleas call DescribeZones to get supported zone list.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoPay: Indicates whether automatic payment is enabled. Valid values:
        false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
        true: Automatic payment is enabled. The payment is automatically made.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: chargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go). Default value: PostPaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the instance even if its status is START_FAILED. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionForce", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="duration")
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: duration: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "duration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pricingCycle", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "https_policy": "httpsPolicy",
        "instance_name": "instanceName",
        "instance_spec": "instanceSpec",
        "zone_id": "zoneId",
        "auto_pay": "autoPay",
        "charge_type": "chargeType",
        "deletion_force": "deletionForce",
        "duration": "duration",
        "pricing_cycle": "pricingCycle",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        https_policy: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::Instance``.

        :param https_policy: 
        :param instance_name: 
        :param instance_spec: 
        :param zone_id: 
        :param auto_pay: 
        :param charge_type: 
        :param deletion_force: 
        :param duration: 
        :param pricing_cycle: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "https_policy": https_policy,
            "instance_name": instance_name,
            "instance_spec": instance_spec,
            "zone_id": zone_id,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if duration is not None:
            self._values["duration"] = duration
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle

    @builtins.property
    def https_policy(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: httpsPolicy: HTTPS security policy. Valid values: HTTPS2_TLS1_0, HTTPS2_TLS1_2, HTTPS1_1_TLS1_0
        '''
        result = self._values.get("https_policy")
        assert result is not None, "Required property 'https_policy' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceName: Instance name
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceSpec: Instance specification. For example: api.s1.small
        '''
        result = self._values.get("instance_spec")
        assert result is not None, "Required property 'instance_spec' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        zoneId: Zone to which the instance belongs. For example: cn-beijing-MAZ2(f,g).
        Pleas call DescribeZones to get supported zone list.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoPay: Indicates whether automatic payment is enabled. Valid values:
        false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
        true: Automatic payment is enabled. The payment is automatically made.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: chargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go). Default value: PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the instance even if its status is START_FAILED. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: duration: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLogConfig(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosLogConfig",
):
    '''A ROS template type:  ``ALIYUN::ApiGateway::LogConfig``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosLogConfigProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::LogConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSlsLogStore")
    def attr_sls_log_store(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SlsLogStore: Logstore name of SLS
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSlsLogStore"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSlsProject")
    def attr_sls_project(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SlsProject: Project name of SLS
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSlsProject"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="slsLogStore")
    def sls_log_store(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: slsLogStore: Logstore name of SLS
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "slsLogStore"))

    @sls_log_store.setter
    def sls_log_store(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "slsLogStore", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="slsProject")
    def sls_project(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: slsProject: Project name of SLS
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "slsProject"))

    @sls_project.setter
    def sls_project(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        sls_log_store: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        sls_project: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::LogConfig``.

        :param sls_log_store: 
        :param sls_project: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "sls_log_store": sls_log_store,
            "sls_project": sls_project,
        }

    @builtins.property
    def sls_log_store(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: slsLogStore: Logstore name of SLS
        '''
        result = self._values.get("sls_log_store")
        assert result is not None, "Required property 'sls_log_store' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def sls_project(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: slsProject: Project name of SLS
        '''
        result = self._values.get("sls_project")
        assert result is not None, "Required property 'sls_project' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLogConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPlugin(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosPlugin",
):
    '''A ROS template type:  ``ALIYUN::ApiGateway::Plugin``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosPluginProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::Plugin``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Description: The description of the plug-in, which cannot exceed 200 characters.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPluginData")
    def attr_plugin_data(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PluginData: The definition statement of the plug-in. Plug-in definition statements in the JSON and YAML formats are supported.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPluginData"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPluginId")
    def attr_plugin_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PluginId: The generated plugin ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPluginId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPluginName")
    def attr_plugin_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PluginName: The name of the plug-in that you want to create. It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPluginName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPluginType")
    def attr_plugin_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PluginType: The type of the plug-in. Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPluginType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pluginData")
    def plugin_data(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pluginData: The definition statement of the plug-in. Plug-in definition statements in the JSON and YAML formats are supported.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "pluginData"))

    @plugin_data.setter
    def plugin_data(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "pluginData", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pluginName")
    def plugin_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pluginName: The name of the plug-in that you want to create. It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "pluginName"))

    @plugin_name.setter
    def plugin_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "pluginName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pluginType")
    def plugin_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pluginType: The type of the plug-in. Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "pluginType"))

    @plugin_type.setter
    def plugin_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "pluginType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the plug-in, which cannot exceed 200 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)


class RosPluginAttachment(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosPluginAttachment",
):
    '''A ROS template type:  ``ALIYUN::ApiGateway::PluginAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosPluginAttachmentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::PluginAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrApiId")
    def attr_api_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ApiId: The api id.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrApiId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPluginId")
    def attr_plugin_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PluginId: The plugin id.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPluginId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="apiId")
    def api_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: apiId: The ID of the API to which you want to bind the plug-in.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "apiId"))

    @api_id.setter
    def api_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "apiId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pluginId")
    def plugin_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pluginId: The ID of the plugin that you want to bind.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "pluginId"))

    @plugin_id.setter
    def plugin_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "pluginId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="stageName")
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        stageName: The name of the runtime environment. Valid values:
        RELEASE: indicates the release environment.
        PRE: indicates the pre-release environment.
        TEST: indicates the test environment.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "stageName"))

    @stage_name.setter
    def stage_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "stageName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosPluginAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_id": "apiId",
        "plugin_id": "pluginId",
        "stage_name": "stageName",
    },
)
class RosPluginAttachmentProps:
    def __init__(
        self,
        *,
        api_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        plugin_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        stage_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::PluginAttachment``.

        :param api_id: 
        :param plugin_id: 
        :param stage_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "api_id": api_id,
            "plugin_id": plugin_id,
            "stage_name": stage_name,
        }

    @builtins.property
    def api_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: apiId: The ID of the API to which you want to bind the plug-in.
        '''
        result = self._values.get("api_id")
        assert result is not None, "Required property 'api_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def plugin_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pluginId: The ID of the plugin that you want to bind.
        '''
        result = self._values.get("plugin_id")
        assert result is not None, "Required property 'plugin_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        stageName: The name of the runtime environment. Valid values:
        RELEASE: indicates the release environment.
        PRE: indicates the pre-release environment.
        TEST: indicates the test environment.
        '''
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPluginAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.RosPluginProps",
    jsii_struct_bases=[],
    name_mapping={
        "plugin_data": "pluginData",
        "plugin_name": "pluginName",
        "plugin_type": "pluginType",
        "description": "description",
    },
)
class RosPluginProps:
    def __init__(
        self,
        *,
        plugin_data: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        plugin_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        plugin_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::Plugin``.

        :param plugin_data: 
        :param plugin_name: 
        :param plugin_type: 
        :param description: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "plugin_data": plugin_data,
            "plugin_name": plugin_name,
            "plugin_type": plugin_type,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def plugin_data(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pluginData: The definition statement of the plug-in. Plug-in definition statements in the JSON and YAML formats are supported.
        '''
        result = self._values.get("plugin_data")
        assert result is not None, "Required property 'plugin_data' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def plugin_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pluginName: The name of the plug-in that you want to create. It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
        '''
        result = self._values.get("plugin_name")
        assert result is not None, "Required property 'plugin_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def plugin_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pluginType: The type of the plug-in. Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
        '''
        result = self._values.get("plugin_type")
        assert result is not None, "Required property 'plugin_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the plug-in, which cannot exceed 200 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPluginProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSignature(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosSignature",
):
    '''A ROS template type:  ``ALIYUN::ApiGateway::Signature``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSignatureProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::Signature``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSignatureId")
    def attr_signature_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SignatureId: The id of the created signature
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSignatureId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="signatureKey")
    def signature_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: signatureKey: The key of the signature.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "signatureKey"))

    @signature_key.setter
    def signature_key(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "signatureKey", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="signatureName")
    def signature_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: signatureName: The name of the Signature.Need [4, 15] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "signatureName"))

    @signature_name.setter
    def signature_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "signatureName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="signatureSecret")
    def signature_secret(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: signatureSecret: The secret of the signature.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "signatureSecret"))

    @signature_secret.setter
    def signature_secret(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "signatureSecret", value)


class RosSignatureBinding(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.RosSignatureBinding",
):
    '''A ROS template type:  ``ALIYUN::ApiGateway::SignatureBinding``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSignatureBindingProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::SignatureBinding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="apiIds")
    def api_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: apiIds: APIs to bind with the signature.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], jsii.get(self, "apiIds"))

    @api_ids.setter
    def api_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "apiIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupId: The id of group.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="signatureId")
    def signature_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: signatureId: The id of the Signature.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "signatureId"))

    @signature_id.setter
    def signature_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "signatureId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="stageName")
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: stageName: Bind signature in this stage.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "stageName"))

    @stage_name.setter
    def stage_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        api_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        signature_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        stage_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::SignatureBinding``.

        :param api_ids: 
        :param group_id: 
        :param signature_id: 
        :param stage_name: 
        '''
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
        '''
        :Property: apiIds: APIs to bind with the signature.
        '''
        result = self._values.get("api_ids")
        assert result is not None, "Required property 'api_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupId: The id of group.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def signature_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: signatureId: The id of the Signature.
        '''
        result = self._values.get("signature_id")
        assert result is not None, "Required property 'signature_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: stageName: Bind signature in this stage.
        '''
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        signature_key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        signature_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        signature_secret: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::Signature``.

        :param signature_key: 
        :param signature_name: 
        :param signature_secret: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "signature_key": signature_key,
            "signature_name": signature_name,
            "signature_secret": signature_secret,
        }

    @builtins.property
    def signature_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: signatureKey: The key of the signature.
        '''
        result = self._values.get("signature_key")
        assert result is not None, "Required property 'signature_key' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def signature_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: signatureName: The name of the Signature.Need [4, 15] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        '''
        result = self._values.get("signature_name")
        assert result is not None, "Required property 'signature_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def signature_secret(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: signatureSecret: The secret of the signature.
        '''
        result = self._values.get("signature_secret")
        assert result is not None, "Required property 'signature_secret' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
    '''A ROS template type:  ``ALIYUN::ApiGateway::StageConfig``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosStageConfigProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::StageConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupId: The id of the Group.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="stageName")
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: stageName: The name of the Stage.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "stageName"))

    @stage_name.setter
    def stage_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "stageName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="variables")
    def variables(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: variables: Variables in the stage, key-value pairs.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "variables"))

    @variables.setter
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
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        stage_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        variables: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::StageConfig``.

        :param group_id: 
        :param stage_name: 
        :param variables: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "group_id": group_id,
            "stage_name": stage_name,
            "variables": variables,
        }

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupId: The id of the Group.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: stageName: The name of the Stage.
        '''
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def variables(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: variables: Variables in the stage, key-value pairs.
        '''
        result = self._values.get("variables")
        assert result is not None, "Required property 'variables' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

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
    '''A ROS template type:  ``ALIYUN::ApiGateway::TrafficControl``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTrafficControlProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::TrafficControl``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTrafficControlId")
    def attr_traffic_control_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TrafficControlId: The id of the traffic control
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTrafficControlId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="apiDefault")
    def api_default(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: apiDefault: Default API traffic value.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "apiDefault"))

    @api_default.setter
    def api_default(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "apiDefault", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="trafficControlName")
    def traffic_control_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: trafficControlName: The name of the traffic control.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "trafficControlName"))

    @traffic_control_name.setter
    def traffic_control_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "trafficControlName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="trafficControlUnit")
    def traffic_control_unit(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "trafficControlUnit"))

    @traffic_control_unit.setter
    def traffic_control_unit(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "trafficControlUnit", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="appDefault")
    def app_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: appDefault: Default APP traffic value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "appDefault"))

    @app_default.setter
    def app_default(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "appDefault", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the traffic control, less than 180 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="special")
    def special(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTrafficControl.SpecialProperty"]]]]:
        '''
        :Property: special: Special traffic controls.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTrafficControl.SpecialProperty"]]]], jsii.get(self, "special"))

    @special.setter
    def special(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTrafficControl.SpecialProperty"]]]],
    ) -> None:
        jsii.set(self, "special", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="userDefault")
    def user_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userDefault: Default user traffic value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "userDefault"))

    @user_default.setter
    def user_default(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
            special_key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            special_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            traffic_value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param special_key: 
            :param special_type: 
            :param traffic_value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "special_key": special_key,
                "special_type": special_type,
                "traffic_value": traffic_value,
            }

        @builtins.property
        def special_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: specialKey: The key of special traffic control.
            '''
            result = self._values.get("special_key")
            assert result is not None, "Required property 'special_key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def special_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: specialType: The type of special traffic control.
            '''
            result = self._values.get("special_type")
            assert result is not None, "Required property 'special_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def traffic_value(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: trafficValue: The value of special traffic control
            '''
            result = self._values.get("traffic_value")
            assert result is not None, "Required property 'traffic_value' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

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
    '''A ROS template type:  ``ALIYUN::ApiGateway::TrafficControlBinding``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTrafficControlBindingProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::TrafficControlBinding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="apiIds")
    def api_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: apiIds: APIs to bind with the traffic control.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], jsii.get(self, "apiIds"))

    @api_ids.setter
    def api_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "apiIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupId: The id of group.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="stageName")
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: stageName: Bind traffic in this stage.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "stageName"))

    @stage_name.setter
    def stage_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "stageName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="trafficControlId")
    def traffic_control_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: trafficControlId: The id of traffic control.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "trafficControlId"))

    @traffic_control_id.setter
    def traffic_control_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        api_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        stage_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        traffic_control_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::TrafficControlBinding``.

        :param api_ids: 
        :param group_id: 
        :param stage_name: 
        :param traffic_control_id: 
        '''
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
        '''
        :Property: apiIds: APIs to bind with the traffic control.
        '''
        result = self._values.get("api_ids")
        assert result is not None, "Required property 'api_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupId: The id of group.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: stageName: Bind traffic in this stage.
        '''
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def traffic_control_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: trafficControlId: The id of traffic control.
        '''
        result = self._values.get("traffic_control_id")
        assert result is not None, "Required property 'traffic_control_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        api_default: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        traffic_control_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        traffic_control_unit: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        app_default: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        special: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosTrafficControl.SpecialProperty]]]] = None,
        user_default: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::TrafficControl``.

        :param api_default: 
        :param traffic_control_name: 
        :param traffic_control_unit: 
        :param app_default: 
        :param description: 
        :param special: 
        :param user_default: 
        '''
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
    def api_default(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: apiDefault: Default API traffic value.
        '''
        result = self._values.get("api_default")
        assert result is not None, "Required property 'api_default' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def traffic_control_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: trafficControlName: The name of the traffic control.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        '''
        result = self._values.get("traffic_control_name")
        assert result is not None, "Required property 'traffic_control_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def traffic_control_unit(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
        '''
        result = self._values.get("traffic_control_unit")
        assert result is not None, "Required property 'traffic_control_unit' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def app_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: appDefault: Default APP traffic value.
        '''
        result = self._values.get("app_default")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the traffic control, less than 180 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def special(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTrafficControl.SpecialProperty]]]]:
        '''
        :Property: special: Special traffic controls.
        '''
        result = self._values.get("special")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTrafficControl.SpecialProperty]]]], result)

    @builtins.property
    def user_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userDefault: Default user traffic value.
        '''
        result = self._values.get("user_default")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::ApiGateway::VpcAccessConfig``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosVpcAccessConfigProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::VpcAccessConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: The id of the instance (ECS/SLB).
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: The name of one VPC access configuration.Need [4, 50] Chinese\\English\\Number characters "-" or "_",and should start with Chinese/English character.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="port")
    def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: port: The port of the VPC.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "port"))

    @port.setter
    def port(self, value: typing.Union[jsii.Number, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "port", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The id of the VPC.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::VpcAccessConfig``.

        :param instance_id: 
        :param name: 
        :param port: 
        :param vpc_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "name": name,
            "port": port,
            "vpc_id": vpc_id,
        }

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: The id of the instance (ECS/SLB).
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: The name of one VPC access configuration.Need [4, 50] Chinese\\English\\Number characters "-" or "_",and should start with Chinese/English character.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: port: The port of the VPC.
        '''
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The id of the VPC.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
    '''A ROS resource type:  ``ALIYUN::ApiGateway::Signature``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SignatureProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::Signature``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSignatureId")
    def attr_signature_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute SignatureId: The id of the created signature.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSignatureId"))


class SignatureBinding(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.SignatureBinding",
):
    '''A ROS resource type:  ``ALIYUN::ApiGateway::SignatureBinding``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SignatureBindingProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::SignatureBinding``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


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
        api_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        signature_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        stage_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::SignatureBinding``.

        :param api_ids: Property apiIds: APIs to bind with the signature.
        :param group_id: Property groupId: The id of group.
        :param signature_id: Property signatureId: The id of the Signature.
        :param stage_name: Property stageName: Bind signature in this stage.
        '''
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
        '''Property apiIds: APIs to bind with the signature.'''
        result = self._values.get("api_ids")
        assert result is not None, "Required property 'api_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupId: The id of group.'''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def signature_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property signatureId: The id of the Signature.'''
        result = self._values.get("signature_id")
        assert result is not None, "Required property 'signature_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property stageName: Bind signature in this stage.'''
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        signature_key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        signature_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        signature_secret: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::Signature``.

        :param signature_key: Property signatureKey: The key of the signature.
        :param signature_name: Property signatureName: The name of the Signature.Need [4, 15] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        :param signature_secret: Property signatureSecret: The secret of the signature.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "signature_key": signature_key,
            "signature_name": signature_name,
            "signature_secret": signature_secret,
        }

    @builtins.property
    def signature_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property signatureKey: The key of the signature.'''
        result = self._values.get("signature_key")
        assert result is not None, "Required property 'signature_key' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def signature_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property signatureName: The name of the Signature.Need [4, 15] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.'''
        result = self._values.get("signature_name")
        assert result is not None, "Required property 'signature_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def signature_secret(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property signatureSecret: The secret of the signature.'''
        result = self._values.get("signature_secret")
        assert result is not None, "Required property 'signature_secret' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
    '''A ROS resource type:  ``ALIYUN::ApiGateway::StageConfig``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "StageConfigProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::StageConfig``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


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
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        stage_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        variables: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::StageConfig``.

        :param group_id: Property groupId: The id of the Group.
        :param stage_name: Property stageName: The name of the Stage.
        :param variables: Property variables: Variables in the stage, key-value pairs.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "group_id": group_id,
            "stage_name": stage_name,
            "variables": variables,
        }

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupId: The id of the Group.'''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property stageName: The name of the Stage.'''
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def variables(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property variables: Variables in the stage, key-value pairs.'''
        result = self._values.get("variables")
        assert result is not None, "Required property 'variables' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

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
    '''A ROS resource type:  ``ALIYUN::ApiGateway::TrafficControl``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TrafficControlProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::TrafficControl``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTrafficControlId")
    def attr_traffic_control_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TrafficControlId: The id of the traffic control.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTrafficControlId"))


class TrafficControlBinding(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.TrafficControlBinding",
):
    '''A ROS resource type:  ``ALIYUN::ApiGateway::TrafficControlBinding``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TrafficControlBindingProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::TrafficControlBinding``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


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
        api_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        stage_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        traffic_control_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::TrafficControlBinding``.

        :param api_ids: Property apiIds: APIs to bind with the traffic control.
        :param group_id: Property groupId: The id of group.
        :param stage_name: Property stageName: Bind traffic in this stage.
        :param traffic_control_id: Property trafficControlId: The id of traffic control.
        '''
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
        '''Property apiIds: APIs to bind with the traffic control.'''
        result = self._values.get("api_ids")
        assert result is not None, "Required property 'api_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupId: The id of group.'''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def stage_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property stageName: Bind traffic in this stage.'''
        result = self._values.get("stage_name")
        assert result is not None, "Required property 'stage_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def traffic_control_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property trafficControlId: The id of traffic control.'''
        result = self._values.get("traffic_control_id")
        assert result is not None, "Required property 'traffic_control_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        api_default: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        traffic_control_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        traffic_control_unit: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        app_default: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        special: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosTrafficControl.SpecialProperty]]]] = None,
        user_default: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::TrafficControl``.

        :param api_default: Property apiDefault: Default API traffic value.
        :param traffic_control_name: Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.
        :param traffic_control_unit: Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
        :param app_default: Property appDefault: Default APP traffic value.
        :param description: Property description: Description of the traffic control, less than 180 characters.
        :param special: Property special: Special traffic controls.
        :param user_default: Property userDefault: Default user traffic value.
        '''
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
    def api_default(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property apiDefault: Default API traffic value.'''
        result = self._values.get("api_default")
        assert result is not None, "Required property 'api_default' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def traffic_control_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\\English\\Number characters or "_",and should start with Chinese/English character.'''
        result = self._values.get("traffic_control_name")
        assert result is not None, "Required property 'traffic_control_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def traffic_control_unit(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.'''
        result = self._values.get("traffic_control_unit")
        assert result is not None, "Required property 'traffic_control_unit' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def app_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property appDefault: Default APP traffic value.'''
        result = self._values.get("app_default")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Description of the traffic control, less than 180 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def special(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTrafficControl.SpecialProperty]]]]:
        '''Property special: Special traffic controls.'''
        result = self._values.get("special")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTrafficControl.SpecialProperty]]]], result)

    @builtins.property
    def user_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property userDefault: Default user traffic value.'''
        result = self._values.get("user_default")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS resource type:  ``ALIYUN::ApiGateway::VpcAccessConfig``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "VpcAccessConfigProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ApiGateway::VpcAccessConfig``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


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
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ApiGateway::VpcAccessConfig``.

        :param instance_id: Property instanceId: The id of the instance (ECS/SLB).
        :param name: Property name: The name of one VPC access configuration.Need [4, 50] Chinese\\English\\Number characters "-" or "_",and should start with Chinese/English character.
        :param port: Property port: The port of the VPC.
        :param vpc_id: Property vpcId: The id of the VPC.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "name": name,
            "port": port,
            "vpc_id": vpc_id,
        }

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: The id of the instance (ECS/SLB).'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: The name of one VPC access configuration.Need [4, 50] Chinese\\English\\Number characters "-" or "_",and should start with Chinese/English character.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property port: The port of the VPC.'''
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: The id of the VPC.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
    "Instance",
    "InstanceProps",
    "LogConfig",
    "LogConfigProps",
    "Plugin",
    "PluginAttachment",
    "PluginAttachmentProps",
    "PluginProps",
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
    "RosInstance",
    "RosInstanceProps",
    "RosLogConfig",
    "RosLogConfigProps",
    "RosPlugin",
    "RosPluginAttachment",
    "RosPluginAttachmentProps",
    "RosPluginProps",
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
