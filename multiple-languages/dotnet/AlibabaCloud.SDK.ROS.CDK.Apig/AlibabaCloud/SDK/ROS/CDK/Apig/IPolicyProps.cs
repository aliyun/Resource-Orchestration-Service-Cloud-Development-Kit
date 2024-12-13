using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `Policy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.PolicyProps")]
    public interface IPolicyProps
    {
        /// <summary>Property attachResourceIds: The Mount point id list.</summary>
        [JsiiProperty(name: "attachResourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object AttachResourceIds
        {
            get;
        }

        /// <summary>Property attachResourceType: Policies support mount point types.</summary>
        /// <remarks>
        /// HttpApi:HttpApi.
        /// Operation: the Operation of the HttpApi.
        /// GatewayRoute: Gateway route.
        /// GatewayService: Gateway service.
        /// GatewayServicePort: The Gateway service port.
        /// Domain: The Gateway Domain name.
        /// Gateway: Gateway.
        /// </remarks>
        [JsiiProperty(name: "attachResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttachResourceType
        {
            get;
        }

        /// <summary>Property environmentId: The id of the environment.</summary>
        [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvironmentId
        {
            get;
        }

        /// <summary>Property gatewayId: The ID of the Gateway.</summary>
        [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayId
        {
            get;
        }

        /// <summary>Property policyClassName: The name of the policy class.</summary>
        [JsiiProperty(name: "policyClassName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyClassName
        {
            get;
        }

        /// <summary>Property policyConfig: Policy Configuration.</summary>
        [JsiiProperty(name: "policyConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyConfig
        {
            get;
        }

        /// <summary>Property policyName: The name of the policy.</summary>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PolicyName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Policy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.PolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property attachResourceIds: The Mount point id list.</summary>
            [JsiiProperty(name: "attachResourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object AttachResourceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property attachResourceType: Policies support mount point types.</summary>
            /// <remarks>
            /// HttpApi:HttpApi.
            /// Operation: the Operation of the HttpApi.
            /// GatewayRoute: Gateway route.
            /// GatewayService: Gateway service.
            /// GatewayServicePort: The Gateway service port.
            /// Domain: The Gateway Domain name.
            /// Gateway: Gateway.
            /// </remarks>
            [JsiiProperty(name: "attachResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttachResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property environmentId: The id of the environment.</summary>
            [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvironmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property gatewayId: The ID of the Gateway.</summary>
            [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property policyClassName: The name of the policy class.</summary>
            [JsiiProperty(name: "policyClassName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyClassName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property policyConfig: Policy Configuration.</summary>
            [JsiiProperty(name: "policyConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property policyName: The name of the policy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PolicyName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
