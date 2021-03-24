using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Api`.</summary>
    [JsiiInterface(nativeType: typeof(IRosApiProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApiProps")]
    public interface IRosApiProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
        /// </remarks>
        [JsiiProperty(name: "apiName", typeJson: "{\"primitive\":\"string\"}")]
        string ApiName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of the Group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
        string GroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: requestConfig: The configuration of the request
        /// </remarks>
        [JsiiProperty(name: "requestConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.RequestConfigProperty\"}]}}")]
        object RequestConfig
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resultSample: The sample of the result.
        /// </remarks>
        [JsiiProperty(name: "resultSample", typeJson: "{\"primitive\":\"string\"}")]
        string ResultSample
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
        /// </remarks>
        [JsiiProperty(name: "resultType", typeJson: "{\"primitive\":\"string\"}")]
        string ResultType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceConfig: The configuration of the service.
        /// </remarks>
        [JsiiProperty(name: "serviceConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceConfigProperty\"}]}}")]
        object ServiceConfig
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
        /// </remarks>
        [JsiiProperty(name: "visibility", typeJson: "{\"primitive\":\"string\"}")]
        string Visibility
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT:
        /// DEFAULT: Default (set by group).
        /// DISABLE: Not allowed
        /// HEADER: Allow AppCode header authentication
        /// HEADER_QUERY: Allow AppCode header and query authentication
        /// </remarks>
        [JsiiProperty(name: "appCodeAuthType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AppCodeAuthType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
        /// </remarks>
        [JsiiProperty(name: "authType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AuthType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: constParameters: The const parameters.
        /// </remarks>
        [JsiiProperty(name: "constParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ConstParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConstParameters
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the API, less than 180 characters.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: disableInternet: Set DisableInternet to true, only support intranet to call API. 
        /// Set DisableInternet to false, then the call is not restricted.
        /// </remarks>
        [JsiiProperty(name: "disableInternet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisableInternet
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: errorCodeSamples: The Error Code samples.
        /// </remarks>
        [JsiiProperty(name: "errorCodeSamples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ErrorCodeSamplesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ErrorCodeSamples
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: failResultSample: The sample of the fail result.
        /// </remarks>
        [JsiiProperty(name: "failResultSample", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? FailResultSample
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting, 
        /// this is the unique identifier of the request, generally using UUID to identify. 
        /// The API gateway will verify the validity of this parameter after receiving this parameter. 
        /// The same value can only be used once within 15 minutes. It can effectively prevent API replay attacks.
        /// Set ForceNonceCheck to false, then no check.
        /// </remarks>
        [JsiiProperty(name: "forceNonceCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ForceNonceCheck
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: openIdConnectConfig: The configuration of the open id.
        /// </remarks>
        [JsiiProperty(name: "openIdConnectConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.OpenIdConnectConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OpenIdConnectConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: requestParameters: The request parameters.
        /// </remarks>
        [JsiiProperty(name: "requestParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.RequestParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RequestParameters
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceParameters: The service parameters.
        /// </remarks>
        [JsiiProperty(name: "serviceParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceParameters
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters.
        /// </remarks>
        [JsiiProperty(name: "serviceParametersMap", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersMapProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceParametersMap
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: systemParameters: The system parameters.
        /// </remarks>
        [JsiiProperty(name: "systemParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.SystemParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemParameters
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::Api`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosApiProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApiProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosApiProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
            /// </remarks>
            [JsiiProperty(name: "apiName", typeJson: "{\"primitive\":\"string\"}")]
            public string ApiName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: The id of the Group.
            /// </remarks>
            [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: requestConfig: The configuration of the request
            /// </remarks>
            [JsiiProperty(name: "requestConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.RequestConfigProperty\"}]}}")]
            public object RequestConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resultSample: The sample of the result.
            /// </remarks>
            [JsiiProperty(name: "resultSample", typeJson: "{\"primitive\":\"string\"}")]
            public string ResultSample
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
            /// </remarks>
            [JsiiProperty(name: "resultType", typeJson: "{\"primitive\":\"string\"}")]
            public string ResultType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceConfig: The configuration of the service.
            /// </remarks>
            [JsiiProperty(name: "serviceConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceConfigProperty\"}]}}")]
            public object ServiceConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
            /// </remarks>
            [JsiiProperty(name: "visibility", typeJson: "{\"primitive\":\"string\"}")]
            public string Visibility
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT:
            /// DEFAULT: Default (set by group).
            /// DISABLE: Not allowed
            /// HEADER: Allow AppCode header authentication
            /// HEADER_QUERY: Allow AppCode header and query authentication
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appCodeAuthType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AppCodeAuthType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "authType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AuthType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: constParameters: The const parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "constParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ConstParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ConstParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the API, less than 180 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: disableInternet: Set DisableInternet to true, only support intranet to call API. 
            /// Set DisableInternet to false, then the call is not restricted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disableInternet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisableInternet
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: errorCodeSamples: The Error Code samples.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "errorCodeSamples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ErrorCodeSamplesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ErrorCodeSamples
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: failResultSample: The sample of the fail result.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "failResultSample", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? FailResultSample
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting, 
            /// this is the unique identifier of the request, generally using UUID to identify. 
            /// The API gateway will verify the validity of this parameter after receiving this parameter. 
            /// The same value can only be used once within 15 minutes. It can effectively prevent API replay attacks.
            /// Set ForceNonceCheck to false, then no check.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "forceNonceCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ForceNonceCheck
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: openIdConnectConfig: The configuration of the open id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "openIdConnectConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.OpenIdConnectConfigProperty\"}]}}", isOptional: true)]
            public object? OpenIdConnectConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: requestParameters: The request parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "requestParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.RequestParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RequestParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceParameters: The service parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ServiceParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceParametersMap", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersMapProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ServiceParametersMap
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: systemParameters: The system parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.SystemParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SystemParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]?>();
            }
        }
    }
}
