using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `HttpApi`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHttpApiProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.HttpApiProps")]
    public interface IHttpApiProps
    {
        /// <summary>Property httpApiName: The name of the HTTP API.</summary>
        [JsiiProperty(name: "httpApiName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HttpApiName
        {
            get;
        }

        /// <summary>Property agentProtocols: The agent protocols of the HTTP API.</summary>
        [JsiiProperty(name: "agentProtocols", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AgentProtocols
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property aiProtocols: The AI protocols of the HTTP API.</summary>
        [JsiiProperty(name: "aiProtocols", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AiProtocols
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property authConfig: The authentication configuration.</summary>
        [JsiiProperty(name: "authConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosHttpApi.AuthConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property basePath: The base path of the HTTP API.</summary>
        [JsiiProperty(name: "basePath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BasePath
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property belongGatewayId: The gateway ID that the HTTP API belongs to.</summary>
        [JsiiProperty(name: "belongGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BelongGatewayId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property builtinRouteNames: The builtin route names.</summary>
        [JsiiProperty(name: "builtinRouteNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BuiltinRouteNames
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deployConfigs: The deploy configurations of the HTTP API.</summary>
        [JsiiProperty(name: "deployConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosHttpApi.DeployConfigsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeployConfigs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the HTTP API.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAuth: Whether to enable authentication.</summary>
        [JsiiProperty(name: "enableAuth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAuth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property firstByteTimeout: The first byte timeout.</summary>
        [JsiiProperty(name: "firstByteTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FirstByteTimeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ingressConfig: The ingress configuration of the HTTP API.</summary>
        [JsiiProperty(name: "ingressConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosHttpApi.IngressConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IngressConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property modelCategory: The model category.</summary>
        [JsiiProperty(name: "modelCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ModelCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property onlyChangeConfig: Whether to only change config without triggering redeployment.</summary>
        /// <remarks>
        /// True means only modify configuration without triggering redeployment.
        /// </remarks>
        [JsiiProperty(name: "onlyChangeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OnlyChangeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property protocols: The protocols supported by the HTTP API.</summary>
        [JsiiProperty(name: "protocols", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Protocols
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property removeBasePathOnForward: Whether to remove the base path on forward.</summary>
        [JsiiProperty(name: "removeBasePathOnForward", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RemoveBasePathOnForward
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property strategy: The strategy of the HTTP API.</summary>
        [JsiiProperty(name: "strategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Strategy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property type: The type of the HTTP API.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Type
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property versionConfig: The version configuration of the HTTP API.</summary>
        [JsiiProperty(name: "versionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosHttpApi.VersionConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VersionConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `HttpApi`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHttpApiProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.HttpApiProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IHttpApiProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property httpApiName: The name of the HTTP API.</summary>
            [JsiiProperty(name: "httpApiName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HttpApiName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property agentProtocols: The agent protocols of the HTTP API.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "agentProtocols", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AgentProtocols
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property aiProtocols: The AI protocols of the HTTP API.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "aiProtocols", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AiProtocols
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property authConfig: The authentication configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "authConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosHttpApi.AuthConfigProperty\"}]}}", isOptional: true)]
            public object? AuthConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property basePath: The base path of the HTTP API.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "basePath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BasePath
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property belongGatewayId: The gateway ID that the HTTP API belongs to.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "belongGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BelongGatewayId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property builtinRouteNames: The builtin route names.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "builtinRouteNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BuiltinRouteNames
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deployConfigs: The deploy configurations of the HTTP API.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deployConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosHttpApi.DeployConfigsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DeployConfigs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the HTTP API.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAuth: Whether to enable authentication.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableAuth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAuth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property firstByteTimeout: The first byte timeout.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "firstByteTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FirstByteTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ingressConfig: The ingress configuration of the HTTP API.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ingressConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosHttpApi.IngressConfigProperty\"}]}}", isOptional: true)]
            public object? IngressConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property modelCategory: The model category.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "modelCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ModelCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property onlyChangeConfig: Whether to only change config without triggering redeployment.</summary>
            /// <remarks>
            /// True means only modify configuration without triggering redeployment.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "onlyChangeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OnlyChangeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property protocols: The protocols supported by the HTTP API.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "protocols", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Protocols
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property removeBasePathOnForward: Whether to remove the base path on forward.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "removeBasePathOnForward", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RemoveBasePathOnForward
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property strategy: The strategy of the HTTP API.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "strategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Strategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property type: The type of the HTTP API.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property versionConfig: The version configuration of the HTTP API.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "versionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosHttpApi.VersionConfigProperty\"}]}}", isOptional: true)]
            public object? VersionConfig
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
