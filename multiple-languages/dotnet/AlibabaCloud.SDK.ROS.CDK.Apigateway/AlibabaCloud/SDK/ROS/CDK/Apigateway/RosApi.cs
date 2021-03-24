using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>A ROS template type:  `ALIYUN::ApiGateway::Api`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApiProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosApi : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ApiGateway::Api`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosApi(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosApiProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosApi(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosApi(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ApiId: The id of the API.
        /// </remarks>
        [JsiiProperty(name: "attrApiId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrApiId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.TagManager\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.TagManager Tags
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.TagManager>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
        /// </remarks>
        [JsiiProperty(name: "apiName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ApiName
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of the Group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string GroupId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: requestConfig: The configuration of the request
        /// </remarks>
        [JsiiProperty(name: "requestConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.RequestConfigProperty\"}]}}")]
        public virtual object RequestConfig
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: resultSample: The sample of the result.
        /// </remarks>
        [JsiiProperty(name: "resultSample", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ResultSample
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
        /// </remarks>
        [JsiiProperty(name: "resultType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ResultType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceConfig: The configuration of the service.
        /// </remarks>
        [JsiiProperty(name: "serviceConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceConfigProperty\"}]}}")]
        public virtual object ServiceConfig
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
        /// </remarks>
        [JsiiProperty(name: "visibility", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Visibility
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
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
        public virtual string? AppCodeAuthType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "authType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AuthType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: constParameters: The const parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "constParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ConstParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? ConstParameters
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the API, less than 180 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Description
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: disableInternet: Set DisableInternet to true, only support intranet to call API. 
        /// Set DisableInternet to false, then the call is not restricted.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "disableInternet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DisableInternet
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: errorCodeSamples: The Error Code samples.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "errorCodeSamples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ErrorCodeSamplesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? ErrorCodeSamples
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: failResultSample: The sample of the fail result.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "failResultSample", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? FailResultSample
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
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
        public virtual object? ForceNonceCheck
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: openIdConnectConfig: The configuration of the open id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "openIdConnectConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.OpenIdConnectConfigProperty\"}]}}", isOptional: true)]
        public virtual object? OpenIdConnectConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: requestParameters: The request parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "requestParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.RequestParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? RequestParameters
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceParameters: The service parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serviceParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? ServiceParameters
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serviceParametersMap", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersMapProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? ServiceParametersMap
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: systemParameters: The system parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.SystemParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? SystemParameters
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IConstParametersProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.ConstParametersProperty")]
        public interface IConstParametersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: constValue: The value of the parameter.
            /// </remarks>
            [JsiiProperty(name: "constValue", typeJson: "{\"primitive\":\"string\"}")]
            string ConstValue
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: location: The location of the parameter. Default is HEAD.
            /// </remarks>
            [JsiiProperty(name: "location", typeJson: "{\"primitive\":\"string\"}")]
            string Location
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceParameterName: The service parameter name.
            /// </remarks>
            [JsiiProperty(name: "serviceParameterName", typeJson: "{\"primitive\":\"string\"}")]
            string ServiceParameterName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the const parameter, less than 180 characters.
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

            [JsiiTypeProxy(nativeType: typeof(IConstParametersProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.ConstParametersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IConstParametersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: constValue: The value of the parameter.
                /// </remarks>
                [JsiiProperty(name: "constValue", typeJson: "{\"primitive\":\"string\"}")]
                public string ConstValue
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: location: The location of the parameter. Default is HEAD.
                /// </remarks>
                [JsiiProperty(name: "location", typeJson: "{\"primitive\":\"string\"}")]
                public string Location
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: serviceParameterName: The service parameter name.
                /// </remarks>
                [JsiiProperty(name: "serviceParameterName", typeJson: "{\"primitive\":\"string\"}")]
                public string ServiceParameterName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: description: Description of the const parameter, less than 180 characters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Description
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosApi.ConstParametersProperty")]
        public class ConstParametersProperty : AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IConstParametersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: constValue: The value of the parameter.
            /// </remarks>
            [JsiiProperty(name: "constValue", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string ConstValue
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: location: The location of the parameter. Default is HEAD.
            /// </remarks>
            [JsiiProperty(name: "location", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Location
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceParameterName: The service parameter name.
            /// </remarks>
            [JsiiProperty(name: "serviceParameterName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string ServiceParameterName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the const parameter, less than 180 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Description
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IErrorCodeSamplesProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.ErrorCodeSamplesProperty")]
        public interface IErrorCodeSamplesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: code: Error code.
            /// </remarks>
            [JsiiProperty(name: "code", typeJson: "{\"primitive\":\"string\"}")]
            string Code
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: message: Error message.
            /// </remarks>
            [JsiiProperty(name: "message", typeJson: "{\"primitive\":\"string\"}")]
            string Message
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the ERROR, less than 180 characters.
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

            [JsiiTypeProxy(nativeType: typeof(IErrorCodeSamplesProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.ErrorCodeSamplesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IErrorCodeSamplesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: code: Error code.
                /// </remarks>
                [JsiiProperty(name: "code", typeJson: "{\"primitive\":\"string\"}")]
                public string Code
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: message: Error message.
                /// </remarks>
                [JsiiProperty(name: "message", typeJson: "{\"primitive\":\"string\"}")]
                public string Message
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: description: Description of the ERROR, less than 180 characters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Description
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosApi.ErrorCodeSamplesProperty")]
        public class ErrorCodeSamplesProperty : AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IErrorCodeSamplesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: code: Error code.
            /// </remarks>
            [JsiiProperty(name: "code", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Code
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: message: Error message.
            /// </remarks>
            [JsiiProperty(name: "message", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Message
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the ERROR, less than 180 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Description
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IFunctionComputeConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.FunctionComputeConfigProperty")]
        public interface IFunctionComputeConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: contentTypeCatagory: Specify how to determine ContentType header when using function. "DEFAULT" to use API Gateway's default value. "CUSTOM" to use self defined value. "CLIENT" to use client's ContentType header. Default is CLIENT.
            /// </remarks>
            [JsiiProperty(name: "contentTypeCatagory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ContentTypeCatagory
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: contentTypeValue: ContentTypeValue is required if ContentTypeCatagory is DEFAULT or CUSTOM.
            /// </remarks>
            [JsiiProperty(name: "contentTypeValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ContentTypeValue
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: fcBaseUrl: Trigger path. Starts with http:// or https://
            /// </remarks>
            [JsiiProperty(name: "fcBaseUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? FcBaseUrl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: fcRegionId: The region id of function compute.
            /// </remarks>
            [JsiiProperty(name: "fcRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? FcRegionId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: fcType: Function type. Default: FCEvent.
            /// Valid values: FCEvent, HttpTrigger.
            /// </remarks>
            [JsiiProperty(name: "fcType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? FcType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: functionName: The function name of function compute.
            /// </remarks>
            [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? FunctionName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: method: The HTTP method of the function. Default is GET.
            /// </remarks>
            [JsiiProperty(name: "method", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Method
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: onlyBusinessPath: If set true. The path in the trigger path (for example, /2016-08-15/proxy/xxx/xxx) will not be passed to the backend, and the backend will only receive the customized backend request path.
            /// </remarks>
            [JsiiProperty(name: "onlyBusinessPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OnlyBusinessPath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: path: The backend request path must contain the Parameter Path in the backend service parameter within brackets ([]). For example: /getUserInfo/[userId].
            /// </remarks>
            [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Path
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: qualifier: The service alias name.
            /// </remarks>
            [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Qualifier
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: roleArn: Ram authorizes the arn of the API gateway access function compute.
            /// </remarks>
            [JsiiProperty(name: "roleArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? RoleArn
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: The service name of function compute.
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ServiceName
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IFunctionComputeConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.FunctionComputeConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IFunctionComputeConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: contentTypeCatagory: Specify how to determine ContentType header when using function. "DEFAULT" to use API Gateway's default value. "CUSTOM" to use self defined value. "CLIENT" to use client's ContentType header. Default is CLIENT.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "contentTypeCatagory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ContentTypeCatagory
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: contentTypeValue: ContentTypeValue is required if ContentTypeCatagory is DEFAULT or CUSTOM.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "contentTypeValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ContentTypeValue
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: fcBaseUrl: Trigger path. Starts with http:// or https://
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fcBaseUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? FcBaseUrl
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: fcRegionId: The region id of function compute.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fcRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? FcRegionId
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: fcType: Function type. Default: FCEvent.
                /// Valid values: FCEvent, HttpTrigger.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fcType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? FcType
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: functionName: The function name of function compute.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? FunctionName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: method: The HTTP method of the function. Default is GET.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "method", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Method
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: onlyBusinessPath: If set true. The path in the trigger path (for example, /2016-08-15/proxy/xxx/xxx) will not be passed to the backend, and the backend will only receive the customized backend request path.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "onlyBusinessPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OnlyBusinessPath
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: path: The backend request path must contain the Parameter Path in the backend service parameter within brackets ([]). For example: /getUserInfo/[userId].
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Path
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: qualifier: The service alias name.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Qualifier
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: roleArn: Ram authorizes the arn of the API gateway access function compute.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "roleArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? RoleArn
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: serviceName: The service name of function compute.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ServiceName
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosApi.FunctionComputeConfigProperty")]
        public class FunctionComputeConfigProperty : AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IFunctionComputeConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: contentTypeCatagory: Specify how to determine ContentType header when using function. "DEFAULT" to use API Gateway's default value. "CUSTOM" to use self defined value. "CLIENT" to use client's ContentType header. Default is CLIENT.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contentTypeCatagory", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ContentTypeCatagory
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: contentTypeValue: ContentTypeValue is required if ContentTypeCatagory is DEFAULT or CUSTOM.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contentTypeValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ContentTypeValue
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: fcBaseUrl: Trigger path. Starts with http:// or https://
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fcBaseUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? FcBaseUrl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: fcRegionId: The region id of function compute.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fcRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? FcRegionId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: fcType: Function type. Default: FCEvent.
            /// Valid values: FCEvent, HttpTrigger.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fcType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? FcType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: functionName: The function name of function compute.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? FunctionName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: method: The HTTP method of the function. Default is GET.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "method", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Method
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: onlyBusinessPath: If set true. The path in the trigger path (for example, /2016-08-15/proxy/xxx/xxx) will not be passed to the backend, and the backend will only receive the customized backend request path.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "onlyBusinessPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OnlyBusinessPath
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: path: The backend request path must contain the Parameter Path in the backend service parameter within brackets ([]). For example: /getUserInfo/[userId].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Path
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: qualifier: The service alias name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Qualifier
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: roleArn: Ram authorizes the arn of the API gateway access function compute.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "roleArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? RoleArn
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: The service name of function compute.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ServiceName
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IMockHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.MockHeadersProperty")]
        public interface IMockHeadersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: headerName: Response header name
            /// </remarks>
            [JsiiProperty(name: "headerName", typeJson: "{\"primitive\":\"string\"}")]
            string HeaderName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: headerValue: Response header value
            /// </remarks>
            [JsiiProperty(name: "headerValue", typeJson: "{\"primitive\":\"string\"}")]
            string HeaderValue
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IMockHeadersProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.MockHeadersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IMockHeadersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: headerName: Response header name
                /// </remarks>
                [JsiiProperty(name: "headerName", typeJson: "{\"primitive\":\"string\"}")]
                public string HeaderName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: headerValue: Response header value
                /// </remarks>
                [JsiiProperty(name: "headerValue", typeJson: "{\"primitive\":\"string\"}")]
                public string HeaderValue
                {
                    get => GetInstanceProperty<string>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosApi.MockHeadersProperty")]
        public class MockHeadersProperty : AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IMockHeadersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: headerName: Response header name
            /// </remarks>
            [JsiiProperty(name: "headerName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string HeaderName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: headerValue: Response header value
            /// </remarks>
            [JsiiProperty(name: "headerValue", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string HeaderValue
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IOpenIdConnectConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.OpenIdConnectConfigProperty")]
        public interface IOpenIdConnectConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: openIdApiType: The type of the open id. "IDTOKEN" or "BUSINESS". If OpenIdApiType is specified as IDTOKEN, PublicKey and PublicKeyId are required. If OpenIdApiType is specified as BUSINESS, IdTokenParamName is required.
            /// </remarks>
            [JsiiProperty(name: "openIdApiType", typeJson: "{\"primitive\":\"string\"}")]
            string OpenIdApiType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: idTokenParamName: The token's parameter name.
            /// </remarks>
            [JsiiProperty(name: "idTokenParamName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? IdTokenParamName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: publicKey: The public key.
            /// </remarks>
            [JsiiProperty(name: "publicKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? PublicKey
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: publicKeyId: The public key id.
            /// </remarks>
            [JsiiProperty(name: "publicKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? PublicKeyId
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IOpenIdConnectConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.OpenIdConnectConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IOpenIdConnectConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: openIdApiType: The type of the open id. "IDTOKEN" or "BUSINESS". If OpenIdApiType is specified as IDTOKEN, PublicKey and PublicKeyId are required. If OpenIdApiType is specified as BUSINESS, IdTokenParamName is required.
                /// </remarks>
                [JsiiProperty(name: "openIdApiType", typeJson: "{\"primitive\":\"string\"}")]
                public string OpenIdApiType
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: idTokenParamName: The token's parameter name.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "idTokenParamName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? IdTokenParamName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: publicKey: The public key.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "publicKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? PublicKey
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: publicKeyId: The public key id.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "publicKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? PublicKeyId
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosApi.OpenIdConnectConfigProperty")]
        public class OpenIdConnectConfigProperty : AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IOpenIdConnectConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: openIdApiType: The type of the open id. "IDTOKEN" or "BUSINESS". If OpenIdApiType is specified as IDTOKEN, PublicKey and PublicKeyId are required. If OpenIdApiType is specified as BUSINESS, IdTokenParamName is required.
            /// </remarks>
            [JsiiProperty(name: "openIdApiType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string OpenIdApiType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: idTokenParamName: The token's parameter name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "idTokenParamName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? IdTokenParamName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: publicKey: The public key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "publicKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? PublicKey
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: publicKeyId: The public key id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "publicKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? PublicKeyId
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IRequestConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.RequestConfigProperty")]
        public interface IRequestConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: requestHttpMethod: The HTTP method of the request. Default is GET.
            /// </remarks>
            [JsiiProperty(name: "requestHttpMethod", typeJson: "{\"primitive\":\"string\"}")]
            string RequestHttpMethod
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: requestMode: API request mode. "MAPPING" or "PASSTHROUGH". Default is "MAPPING".
            /// </remarks>
            [JsiiProperty(name: "requestMode", typeJson: "{\"primitive\":\"string\"}")]
            string RequestMode
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: requestPath: API Path.
            /// </remarks>
            [JsiiProperty(name: "requestPath", typeJson: "{\"primitive\":\"string\"}")]
            string RequestPath
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: requestProtocol: The protocol of the request, "HTTP", "HTTPS", or "HTTP,HTTPS", Default is "HTTP".
            /// </remarks>
            [JsiiProperty(name: "requestProtocol", typeJson: "{\"primitive\":\"string\"}")]
            string RequestProtocol
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: bodyFormat: Describe how data transform to the server, "FORM" for k-v and "STREAM" for bit stream.BodyFormat is required if RequestMode is specified as MAPPING and RequestHttpMethod is POST/PUT/PATCH.
            /// </remarks>
            [JsiiProperty(name: "bodyFormat", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? BodyFormat
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: postBodyDescription: Description of the post body.
            /// </remarks>
            [JsiiProperty(name: "postBodyDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? PostBodyDescription
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IRequestConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.RequestConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IRequestConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: requestHttpMethod: The HTTP method of the request. Default is GET.
                /// </remarks>
                [JsiiProperty(name: "requestHttpMethod", typeJson: "{\"primitive\":\"string\"}")]
                public string RequestHttpMethod
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: requestMode: API request mode. "MAPPING" or "PASSTHROUGH". Default is "MAPPING".
                /// </remarks>
                [JsiiProperty(name: "requestMode", typeJson: "{\"primitive\":\"string\"}")]
                public string RequestMode
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: requestPath: API Path.
                /// </remarks>
                [JsiiProperty(name: "requestPath", typeJson: "{\"primitive\":\"string\"}")]
                public string RequestPath
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: requestProtocol: The protocol of the request, "HTTP", "HTTPS", or "HTTP,HTTPS", Default is "HTTP".
                /// </remarks>
                [JsiiProperty(name: "requestProtocol", typeJson: "{\"primitive\":\"string\"}")]
                public string RequestProtocol
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: bodyFormat: Describe how data transform to the server, "FORM" for k-v and "STREAM" for bit stream.BodyFormat is required if RequestMode is specified as MAPPING and RequestHttpMethod is POST/PUT/PATCH.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "bodyFormat", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? BodyFormat
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: postBodyDescription: Description of the post body.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "postBodyDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? PostBodyDescription
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosApi.RequestConfigProperty")]
        public class RequestConfigProperty : AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IRequestConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: requestHttpMethod: The HTTP method of the request. Default is GET.
            /// </remarks>
            [JsiiProperty(name: "requestHttpMethod", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string RequestHttpMethod
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: requestMode: API request mode. "MAPPING" or "PASSTHROUGH". Default is "MAPPING".
            /// </remarks>
            [JsiiProperty(name: "requestMode", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string RequestMode
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: requestPath: API Path.
            /// </remarks>
            [JsiiProperty(name: "requestPath", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string RequestPath
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: requestProtocol: The protocol of the request, "HTTP", "HTTPS", or "HTTP,HTTPS", Default is "HTTP".
            /// </remarks>
            [JsiiProperty(name: "requestProtocol", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string RequestProtocol
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: bodyFormat: Describe how data transform to the server, "FORM" for k-v and "STREAM" for bit stream.BodyFormat is required if RequestMode is specified as MAPPING and RequestHttpMethod is POST/PUT/PATCH.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bodyFormat", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? BodyFormat
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: postBodyDescription: Description of the post body.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "postBodyDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? PostBodyDescription
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IRequestParametersProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.RequestParametersProperty")]
        public interface IRequestParametersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: apiParameterName: The name of the request parameter.
            /// </remarks>
            [JsiiProperty(name: "apiParameterName", typeJson: "{\"primitive\":\"string\"}")]
            string ApiParameterName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: location: The location of the reqest parameter.
            /// </remarks>
            [JsiiProperty(name: "location", typeJson: "{\"primitive\":\"string\"}")]
            string Location
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: parameterType: The type of the parameter
            /// </remarks>
            [JsiiProperty(name: "parameterType", typeJson: "{\"primitive\":\"string\"}")]
            string ParameterType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: required: If required. "REQUIRED", "OPTION"
            /// </remarks>
            [JsiiProperty(name: "required", typeJson: "{\"primitive\":\"string\"}")]
            string Required
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultValue: The default value of the request parameter.
            /// </remarks>
            [JsiiProperty(name: "defaultValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? DefaultValue
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: demoValue: The demo value of the request parameter.
            /// </remarks>
            [JsiiProperty(name: "demoValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? DemoValue
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
            /// <strong>Property</strong>: docOrder: The order of the doc.
            /// </remarks>
            [JsiiProperty(name: "docOrder", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? DocOrder
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: docShow: Visiablity of the Doc. "PUBLIC" or "PRIVATE"
            /// </remarks>
            [JsiiProperty(name: "docShow", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? DocShow
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: enumValue: Allowed parameter value, split with ',' like "1,2,3,4"
            /// </remarks>
            [JsiiProperty(name: "enumValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? EnumValue
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: jsonScheme: The json scheme of the parameter when it is String.
            /// </remarks>
            [JsiiProperty(name: "jsonScheme", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? JsonScheme
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: maxLength: The max length of the parameter when it is String.
            /// </remarks>
            [JsiiProperty(name: "maxLength", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? MaxLength
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: maxValue: The max value of the parameter when it is Int, Long, Float or Double.
            /// </remarks>
            [JsiiProperty(name: "maxValue", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? MaxValue
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: minLength: The min length of the parameter when it is String.
            /// </remarks>
            [JsiiProperty(name: "minLength", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? MinLength
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: minValue: The min value of the parameter when it is Int, Long, Float or Double.
            /// </remarks>
            [JsiiProperty(name: "minValue", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? MinValue
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: regularExpression: The regular expression of the parameter when it is String.
            /// </remarks>
            [JsiiProperty(name: "regularExpression", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? RegularExpression
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IRequestParametersProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.RequestParametersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IRequestParametersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: apiParameterName: The name of the request parameter.
                /// </remarks>
                [JsiiProperty(name: "apiParameterName", typeJson: "{\"primitive\":\"string\"}")]
                public string ApiParameterName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: location: The location of the reqest parameter.
                /// </remarks>
                [JsiiProperty(name: "location", typeJson: "{\"primitive\":\"string\"}")]
                public string Location
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: parameterType: The type of the parameter
                /// </remarks>
                [JsiiProperty(name: "parameterType", typeJson: "{\"primitive\":\"string\"}")]
                public string ParameterType
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: required: If required. "REQUIRED", "OPTION"
                /// </remarks>
                [JsiiProperty(name: "required", typeJson: "{\"primitive\":\"string\"}")]
                public string Required
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: defaultValue: The default value of the request parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "defaultValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? DefaultValue
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: demoValue: The demo value of the request parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "demoValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? DemoValue
                {
                    get => GetInstanceProperty<string?>();
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
                /// <strong>Property</strong>: docOrder: The order of the doc.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "docOrder", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? DocOrder
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: docShow: Visiablity of the Doc. "PUBLIC" or "PRIVATE"
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "docShow", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? DocShow
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: enumValue: Allowed parameter value, split with ',' like "1,2,3,4"
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "enumValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? EnumValue
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: jsonScheme: The json scheme of the parameter when it is String.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "jsonScheme", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? JsonScheme
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maxLength: The max length of the parameter when it is String.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maxLength", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? MaxLength
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maxValue: The max value of the parameter when it is Int, Long, Float or Double.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maxValue", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? MaxValue
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: minLength: The min length of the parameter when it is String.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "minLength", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? MinLength
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: minValue: The min value of the parameter when it is Int, Long, Float or Double.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "minValue", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? MinValue
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: regularExpression: The regular expression of the parameter when it is String.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "regularExpression", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? RegularExpression
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosApi.RequestParametersProperty")]
        public class RequestParametersProperty : AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IRequestParametersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: apiParameterName: The name of the request parameter.
            /// </remarks>
            [JsiiProperty(name: "apiParameterName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string ApiParameterName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: location: The location of the reqest parameter.
            /// </remarks>
            [JsiiProperty(name: "location", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Location
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: parameterType: The type of the parameter
            /// </remarks>
            [JsiiProperty(name: "parameterType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string ParameterType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: required: If required. "REQUIRED", "OPTION"
            /// </remarks>
            [JsiiProperty(name: "required", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Required
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultValue: The default value of the request parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? DefaultValue
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: demoValue: The demo value of the request parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "demoValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? DemoValue
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the API, less than 180 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Description
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: docOrder: The order of the doc.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "docOrder", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? DocOrder
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: docShow: Visiablity of the Doc. "PUBLIC" or "PRIVATE"
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "docShow", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? DocShow
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: enumValue: Allowed parameter value, split with ',' like "1,2,3,4"
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enumValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? EnumValue
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: jsonScheme: The json scheme of the parameter when it is String.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "jsonScheme", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? JsonScheme
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: maxLength: The max length of the parameter when it is String.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxLength", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? MaxLength
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: maxValue: The max value of the parameter when it is Int, Long, Float or Double.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxValue", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? MaxValue
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: minLength: The min length of the parameter when it is String.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minLength", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? MinLength
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: minValue: The min value of the parameter when it is Int, Long, Float or Double.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minValue", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? MinValue
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: regularExpression: The regular expression of the parameter when it is String.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regularExpression", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? RegularExpression
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IServiceConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.ServiceConfigProperty")]
        public interface IServiceConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: contentTypeCatagory: Specify how to determine ContentType header when using service. "DEFAULT" to use API Gateway's default value. "CUSTOM" to use self defined value. "CLIENT" to use client's ContentType header. Default is CLIENT.
            /// </remarks>
            [JsiiProperty(name: "contentTypeCatagory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ContentTypeCatagory
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: contentTypeValue: ContentTypeValue is required if ContentTypeCatagory is DEFAULT or CUSTOM.
            /// </remarks>
            [JsiiProperty(name: "contentTypeValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ContentTypeValue
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: functionComputeConfig: The configuration of the function compute. FunctionComputeConfig is required if ServiceFunctionComputeEnable is TRUE.
            /// </remarks>
            [JsiiProperty(name: "functionComputeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.FunctionComputeConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FunctionComputeConfig
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: mock: Whether to use Mock model. "TRUE" or "FALSE". Default is FALSE.
            /// </remarks>
            [JsiiProperty(name: "mock", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Mock
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: mockHeaders: Custom Mock response header related information when Mock is enabled.
            /// </remarks>
            [JsiiProperty(name: "mockHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.MockHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MockHeaders
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: mockResult: The returned value when using Mock model.
            /// </remarks>
            [JsiiProperty(name: "mockResult", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? MockResult
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: mockStatusCode: Status code, returned in the format compatible with HTTP 1.1 response status code and its status
            /// </remarks>
            [JsiiProperty(name: "mockStatusCode", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? MockStatusCode
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceAddress: Backend service call address. If the complete backend service address is http://api.a.com:8080/object/add?key1=value1&key2=value2, ServiceAddress corresponds to http://api.a.com:8080.
            /// </remarks>
            [JsiiProperty(name: "serviceAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ServiceAddress
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceHttpMethod: The HTTP method to the service. Default is GET.
            /// </remarks>
            [JsiiProperty(name: "serviceHttpMethod", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ServiceHttpMethod
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: servicePath: Backend service call path. If the complete backend service address is http://api.a.com:8080/object/add?key1=value1&key2=value2, ServicePath corresponds to /object/add.
            /// </remarks>
            [JsiiProperty(name: "servicePath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ServicePath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceProtocol: Backend service protocol type, which must be HTTP, HTTPS or FunctionCompute currently.
            /// </remarks>
            [JsiiProperty(name: "serviceProtocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ServiceProtocol
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceTimeOut: Time out (ms) when using service.
            /// </remarks>
            [JsiiProperty(name: "serviceTimeOut", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? ServiceTimeOut
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceVpcEnable: Whether to use VPC. "TRUE" or "FALSE". Default is FALSE.
            /// </remarks>
            [JsiiProperty(name: "serviceVpcEnable", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ServiceVpcEnable
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcConfig: The configuration of the VPC. VpcConfig is required if ServiceVpcEnable is TRUE.
            /// </remarks>
            [JsiiProperty(name: "vpcConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.VpcConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? VpcConfig
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IServiceConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.ServiceConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IServiceConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: contentTypeCatagory: Specify how to determine ContentType header when using service. "DEFAULT" to use API Gateway's default value. "CUSTOM" to use self defined value. "CLIENT" to use client's ContentType header. Default is CLIENT.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "contentTypeCatagory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ContentTypeCatagory
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: contentTypeValue: ContentTypeValue is required if ContentTypeCatagory is DEFAULT or CUSTOM.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "contentTypeValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ContentTypeValue
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: functionComputeConfig: The configuration of the function compute. FunctionComputeConfig is required if ServiceFunctionComputeEnable is TRUE.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "functionComputeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.FunctionComputeConfigProperty\"}]}}", isOptional: true)]
                public object? FunctionComputeConfig
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: mock: Whether to use Mock model. "TRUE" or "FALSE". Default is FALSE.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "mock", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Mock
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: mockHeaders: Custom Mock response header related information when Mock is enabled.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "mockHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.MockHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? MockHeaders
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: mockResult: The returned value when using Mock model.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "mockResult", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? MockResult
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: mockStatusCode: Status code, returned in the format compatible with HTTP 1.1 response status code and its status
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "mockStatusCode", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? MockStatusCode
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: serviceAddress: Backend service call address. If the complete backend service address is http://api.a.com:8080/object/add?key1=value1&key2=value2, ServiceAddress corresponds to http://api.a.com:8080.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "serviceAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ServiceAddress
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: serviceHttpMethod: The HTTP method to the service. Default is GET.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "serviceHttpMethod", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ServiceHttpMethod
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: servicePath: Backend service call path. If the complete backend service address is http://api.a.com:8080/object/add?key1=value1&key2=value2, ServicePath corresponds to /object/add.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "servicePath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ServicePath
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: serviceProtocol: Backend service protocol type, which must be HTTP, HTTPS or FunctionCompute currently.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "serviceProtocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ServiceProtocol
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: serviceTimeOut: Time out (ms) when using service.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "serviceTimeOut", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? ServiceTimeOut
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: serviceVpcEnable: Whether to use VPC. "TRUE" or "FALSE". Default is FALSE.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "serviceVpcEnable", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ServiceVpcEnable
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: vpcConfig: The configuration of the VPC. VpcConfig is required if ServiceVpcEnable is TRUE.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "vpcConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.VpcConfigProperty\"}]}}", isOptional: true)]
                public object? VpcConfig
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosApi.ServiceConfigProperty")]
        public class ServiceConfigProperty : AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IServiceConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: contentTypeCatagory: Specify how to determine ContentType header when using service. "DEFAULT" to use API Gateway's default value. "CUSTOM" to use self defined value. "CLIENT" to use client's ContentType header. Default is CLIENT.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contentTypeCatagory", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ContentTypeCatagory
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: contentTypeValue: ContentTypeValue is required if ContentTypeCatagory is DEFAULT or CUSTOM.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contentTypeValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ContentTypeValue
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: functionComputeConfig: The configuration of the function compute. FunctionComputeConfig is required if ServiceFunctionComputeEnable is TRUE.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "functionComputeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.FunctionComputeConfigProperty\"}]}}", isOptional: true, isOverride: true)]
            public object? FunctionComputeConfig
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: mock: Whether to use Mock model. "TRUE" or "FALSE". Default is FALSE.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mock", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Mock
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: mockHeaders: Custom Mock response header related information when Mock is enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mockHeaders", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.MockHeadersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? MockHeaders
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: mockResult: The returned value when using Mock model.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mockResult", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? MockResult
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: mockStatusCode: Status code, returned in the format compatible with HTTP 1.1 response status code and its status
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mockStatusCode", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? MockStatusCode
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceAddress: Backend service call address. If the complete backend service address is http://api.a.com:8080/object/add?key1=value1&key2=value2, ServiceAddress corresponds to http://api.a.com:8080.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ServiceAddress
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceHttpMethod: The HTTP method to the service. Default is GET.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceHttpMethod", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ServiceHttpMethod
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: servicePath: Backend service call path. If the complete backend service address is http://api.a.com:8080/object/add?key1=value1&key2=value2, ServicePath corresponds to /object/add.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "servicePath", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ServicePath
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceProtocol: Backend service protocol type, which must be HTTP, HTTPS or FunctionCompute currently.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceProtocol", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ServiceProtocol
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceTimeOut: Time out (ms) when using service.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceTimeOut", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? ServiceTimeOut
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceVpcEnable: Whether to use VPC. "TRUE" or "FALSE". Default is FALSE.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceVpcEnable", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ServiceVpcEnable
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcConfig: The configuration of the VPC. VpcConfig is required if ServiceVpcEnable is TRUE.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.VpcConfigProperty\"}]}}", isOptional: true, isOverride: true)]
            public object? VpcConfig
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IServiceParametersMapProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersMapProperty")]
        public interface IServiceParametersMapProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: requestParameterName: The corresponding request parameter, system parameter or const parameter.
            /// </remarks>
            [JsiiProperty(name: "requestParameterName", typeJson: "{\"primitive\":\"string\"}")]
            string RequestParameterName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceParameterName: The corresponding service parameter.
            /// </remarks>
            [JsiiProperty(name: "serviceParameterName", typeJson: "{\"primitive\":\"string\"}")]
            string ServiceParameterName
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IServiceParametersMapProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersMapProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IServiceParametersMapProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: requestParameterName: The corresponding request parameter, system parameter or const parameter.
                /// </remarks>
                [JsiiProperty(name: "requestParameterName", typeJson: "{\"primitive\":\"string\"}")]
                public string RequestParameterName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: serviceParameterName: The corresponding service parameter.
                /// </remarks>
                [JsiiProperty(name: "serviceParameterName", typeJson: "{\"primitive\":\"string\"}")]
                public string ServiceParameterName
                {
                    get => GetInstanceProperty<string>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersMapProperty")]
        public class ServiceParametersMapProperty : AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IServiceParametersMapProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: requestParameterName: The corresponding request parameter, system parameter or const parameter.
            /// </remarks>
            [JsiiProperty(name: "requestParameterName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string RequestParameterName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceParameterName: The corresponding service parameter.
            /// </remarks>
            [JsiiProperty(name: "serviceParameterName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string ServiceParameterName
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IServiceParametersProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersProperty")]
        public interface IServiceParametersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: location: The location of the parameter
            /// </remarks>
            [JsiiProperty(name: "location", typeJson: "{\"primitive\":\"string\"}")]
            string Location
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: parameterType: The type of the parameter.
            /// </remarks>
            [JsiiProperty(name: "parameterType", typeJson: "{\"primitive\":\"string\"}")]
            string ParameterType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceParameterName: The name of the parameter
            /// </remarks>
            [JsiiProperty(name: "serviceParameterName", typeJson: "{\"primitive\":\"string\"}")]
            string ServiceParameterName
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IServiceParametersProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IServiceParametersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: location: The location of the parameter
                /// </remarks>
                [JsiiProperty(name: "location", typeJson: "{\"primitive\":\"string\"}")]
                public string Location
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: parameterType: The type of the parameter.
                /// </remarks>
                [JsiiProperty(name: "parameterType", typeJson: "{\"primitive\":\"string\"}")]
                public string ParameterType
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: serviceParameterName: The name of the parameter
                /// </remarks>
                [JsiiProperty(name: "serviceParameterName", typeJson: "{\"primitive\":\"string\"}")]
                public string ServiceParameterName
                {
                    get => GetInstanceProperty<string>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersProperty")]
        public class ServiceParametersProperty : AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IServiceParametersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: location: The location of the parameter
            /// </remarks>
            [JsiiProperty(name: "location", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Location
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: parameterType: The type of the parameter.
            /// </remarks>
            [JsiiProperty(name: "parameterType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string ParameterType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceParameterName: The name of the parameter
            /// </remarks>
            [JsiiProperty(name: "serviceParameterName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string ServiceParameterName
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ISystemParametersProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.SystemParametersProperty")]
        public interface ISystemParametersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: location: The location of the system parameter. Default is HEAD.
            /// </remarks>
            [JsiiProperty(name: "location", typeJson: "{\"primitive\":\"string\"}")]
            string Location
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: parameterName: The system parameter name.
            /// </remarks>
            [JsiiProperty(name: "parameterName", typeJson: "{\"primitive\":\"string\"}")]
            string ParameterName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceParameterName: The service parameter name.
            /// </remarks>
            [JsiiProperty(name: "serviceParameterName", typeJson: "{\"primitive\":\"string\"}")]
            string ServiceParameterName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: demoValue: The demo value of the system parameter.
            /// </remarks>
            [JsiiProperty(name: "demoValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? DemoValue
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the system parameter, less than 180 characters.
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

            [JsiiTypeProxy(nativeType: typeof(ISystemParametersProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.SystemParametersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.ISystemParametersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: location: The location of the system parameter. Default is HEAD.
                /// </remarks>
                [JsiiProperty(name: "location", typeJson: "{\"primitive\":\"string\"}")]
                public string Location
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: parameterName: The system parameter name.
                /// </remarks>
                [JsiiProperty(name: "parameterName", typeJson: "{\"primitive\":\"string\"}")]
                public string ParameterName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: serviceParameterName: The service parameter name.
                /// </remarks>
                [JsiiProperty(name: "serviceParameterName", typeJson: "{\"primitive\":\"string\"}")]
                public string ServiceParameterName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: demoValue: The demo value of the system parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "demoValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? DemoValue
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: description: Description of the system parameter, less than 180 characters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Description
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosApi.SystemParametersProperty")]
        public class SystemParametersProperty : AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.ISystemParametersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: location: The location of the system parameter. Default is HEAD.
            /// </remarks>
            [JsiiProperty(name: "location", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Location
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: parameterName: The system parameter name.
            /// </remarks>
            [JsiiProperty(name: "parameterName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string ParameterName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceParameterName: The service parameter name.
            /// </remarks>
            [JsiiProperty(name: "serviceParameterName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string ServiceParameterName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: demoValue: The demo value of the system parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "demoValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? DemoValue
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the system parameter, less than 180 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Description
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IVpcConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.VpcConfigProperty")]
        public interface IVpcConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceId: The id of the instance (ECS/SLB).
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            string InstanceId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The port of the VPC.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
            double Port
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The id of the VPC.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
            string VpcId
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IVpcConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosApi.VpcConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IVpcConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceId: The id of the instance (ECS/SLB).
                /// </remarks>
                [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
                public string InstanceId
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The port of the VPC.
                /// </remarks>
                [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
                public double Port
                {
                    get => GetInstanceProperty<double>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: vpcId: The id of the VPC.
                /// </remarks>
                [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
                public string VpcId
                {
                    get => GetInstanceProperty<string>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosApi.VpcConfigProperty")]
        public class VpcConfigProperty : AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.IVpcConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceId: The id of the instance (ECS/SLB).
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string InstanceId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The port of the VPC.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The id of the VPC.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string VpcId
            {
                get;
                set;
            }
        }
    }
}
