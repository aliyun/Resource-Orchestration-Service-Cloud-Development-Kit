using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Api`.</summary>
    [JsiiInterface(nativeType: typeof(IApiProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.ApiProps")]
    public interface IApiProps
    {
        /// <summary>Property apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
        [JsiiProperty(name: "apiName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApiName
        {
            get;
        }

        /// <summary>Property groupId: The id of the Group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <summary>Property requestConfig: The configuration of the request.</summary>
        [JsiiProperty(name: "requestConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.RequestConfigProperty\"}]}}")]
        object RequestConfig
        {
            get;
        }

        /// <summary>Property resultSample: The sample of the result.</summary>
        [JsiiProperty(name: "resultSample", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResultSample
        {
            get;
        }

        /// <summary>Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH".</summary>
        /// <remarks>
        /// Default is "JSON".
        /// </remarks>
        [JsiiProperty(name: "resultType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResultType
        {
            get;
        }

        /// <summary>Property serviceConfig: The configuration of the service.</summary>
        [JsiiProperty(name: "serviceConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceConfigProperty\"}]}}")]
        object ServiceConfig
        {
            get;
        }

        /// <summary>Property visibility: Whether to make the API public.</summary>
        /// <remarks>
        /// "PUBLIC" or "PRIVATE".
        /// </remarks>
        [JsiiProperty(name: "visibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Visibility
        {
            get;
        }

        /// <summary>Property allowSignatureMethod: If the AuthType is APP authentication, you need to pass this value to specify the signature algorithm.</summary>
        /// <remarks>
        /// If you do not specify this parameter, the default value HmacSHA256 is used. Valid values:
        /// HmacSHA256
        /// HmacSHA1,HmacSHA256
        /// </remarks>
        [JsiiProperty(name: "allowSignatureMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllowSignatureMethod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT: DEFAULT: Default (set by group).</summary>
        /// <remarks>
        /// DISABLE: Not allowed
        /// HEADER: Allow AppCode header authentication
        /// HEADER_QUERY: Allow AppCode header and query authentication
        /// </remarks>
        [JsiiProperty(name: "appCodeAuthType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppCodeAuthType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property authType: Type of authorization of the API .</summary>
        /// <remarks>
        /// "APP","ANONYMOUS", or "APPOPENID"
        /// </remarks>
        [JsiiProperty(name: "authType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property constParameters: The const parameters.</summary>
        [JsiiProperty(name: "constParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ConstParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConstParameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Description of the API, less than 180 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property disableInternet: Set DisableInternet to true, only support intranet to call API.</summary>
        /// <remarks>
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

        /// <summary>Property errorCodeSamples: The Error Code samples.</summary>
        [JsiiProperty(name: "errorCodeSamples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ErrorCodeSamplesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ErrorCodeSamples
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property failResultSample: The sample of the fail result.</summary>
        [JsiiProperty(name: "failResultSample", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailResultSample
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting,  this is the unique identifier of the request, generally using UUID to identify.</summary>
        /// <remarks>
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

        /// <summary>Property openIdConnectConfig: The configuration of the open id.</summary>
        [JsiiProperty(name: "openIdConnectConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.OpenIdConnectConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OpenIdConnectConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property requestParameters: The request parameters.</summary>
        [JsiiProperty(name: "requestParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.RequestParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RequestParameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resultBodyModel: The return result of the API.</summary>
        [JsiiProperty(name: "resultBodyModel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResultBodyModel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resultDescriptions: The return description of the API.</summary>
        [JsiiProperty(name: "resultDescriptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResultDescriptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serviceParameters: The service parameters.</summary>
        [JsiiProperty(name: "serviceParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceParameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters.</summary>
        [JsiiProperty(name: "serviceParametersMap", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersMapProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceParametersMap
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property systemParameters: The system parameters.</summary>
        [JsiiProperty(name: "systemParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.SystemParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemParameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property webSocketApiType: The type of the two-way communication API.</summary>
        /// <remarks>
        /// COMMON: common API
        /// REGISTER: registered API
        /// UNREGISTER: unregistered API
        /// NOTIFY: downstream notification API
        /// </remarks>
        [JsiiProperty(name: "webSocketApiType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WebSocketApiType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::Api`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IApiProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.ApiProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IApiProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
            [JsiiProperty(name: "apiName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApiName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property groupId: The id of the Group.</summary>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property requestConfig: The configuration of the request.</summary>
            [JsiiProperty(name: "requestConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.RequestConfigProperty\"}]}}")]
            public object RequestConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resultSample: The sample of the result.</summary>
            [JsiiProperty(name: "resultSample", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResultSample
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH".</summary>
            /// <remarks>
            /// Default is "JSON".
            /// </remarks>
            [JsiiProperty(name: "resultType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResultType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceConfig: The configuration of the service.</summary>
            [JsiiProperty(name: "serviceConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceConfigProperty\"}]}}")]
            public object ServiceConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property visibility: Whether to make the API public.</summary>
            /// <remarks>
            /// "PUBLIC" or "PRIVATE".
            /// </remarks>
            [JsiiProperty(name: "visibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Visibility
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property allowSignatureMethod: If the AuthType is APP authentication, you need to pass this value to specify the signature algorithm.</summary>
            /// <remarks>
            /// If you do not specify this parameter, the default value HmacSHA256 is used. Valid values:
            /// HmacSHA256
            /// HmacSHA1,HmacSHA256
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowSignatureMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowSignatureMethod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT: DEFAULT: Default (set by group).</summary>
            /// <remarks>
            /// DISABLE: Not allowed
            /// HEADER: Allow AppCode header authentication
            /// HEADER_QUERY: Allow AppCode header and query authentication
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appCodeAuthType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppCodeAuthType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property authType: Type of authorization of the API .</summary>
            /// <remarks>
            /// "APP","ANONYMOUS", or "APPOPENID"
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "authType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property constParameters: The const parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "constParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ConstParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ConstParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Description of the API, less than 180 characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property disableInternet: Set DisableInternet to true, only support intranet to call API.</summary>
            /// <remarks>
            /// Set DisableInternet to false, then the call is not restricted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disableInternet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisableInternet
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property errorCodeSamples: The Error Code samples.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "errorCodeSamples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ErrorCodeSamplesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ErrorCodeSamples
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property failResultSample: The sample of the fail result.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "failResultSample", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FailResultSample
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting,  this is the unique identifier of the request, generally using UUID to identify.</summary>
            /// <remarks>
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

            /// <summary>Property openIdConnectConfig: The configuration of the open id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "openIdConnectConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.OpenIdConnectConfigProperty\"}]}}", isOptional: true)]
            public object? OpenIdConnectConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property requestParameters: The request parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "requestParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.RequestParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RequestParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resultBodyModel: The return result of the API.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resultBodyModel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResultBodyModel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resultDescriptions: The return description of the API.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resultDescriptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResultDescriptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serviceParameters: The service parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serviceParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ServiceParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serviceParametersMap", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersMapProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ServiceParametersMap
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property systemParameters: The system parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "systemParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.SystemParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SystemParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.ITagsProperty[]?>();
            }

            /// <summary>Property webSocketApiType: The type of the two-way communication API.</summary>
            /// <remarks>
            /// COMMON: common API
            /// REGISTER: registered API
            /// UNREGISTER: unregistered API
            /// NOTIFY: downstream notification API
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "webSocketApiType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WebSocketApiType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
