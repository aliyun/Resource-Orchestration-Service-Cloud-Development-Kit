using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `RosPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.RosPolicyProps")]
    public interface IRosPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: attachResourceIds: The Mount point id list.
        /// </remarks>
        [JsiiProperty(name: "attachResourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object AttachResourceIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: attachResourceType: Policies support mount point types.
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

        /// <remarks>
        /// <strong>Property</strong>: environmentId: The id of the environment.
        /// </remarks>
        [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvironmentId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: gatewayId: The ID of the Gateway.
        /// </remarks>
        [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyClassName: The name of the policy class.
        /// </remarks>
        [JsiiProperty(name: "policyClassName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyClassName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyConfig: Policy Configuration.
        /// </remarks>
        [JsiiProperty(name: "policyConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyConfig
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyName: The name of the policy.
        /// </remarks>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PolicyName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.RosPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IRosPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: attachResourceIds: The Mount point id list.
            /// </remarks>
            [JsiiProperty(name: "attachResourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object AttachResourceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: attachResourceType: Policies support mount point types.
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

            /// <remarks>
            /// <strong>Property</strong>: environmentId: The id of the environment.
            /// </remarks>
            [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvironmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: gatewayId: The ID of the Gateway.
            /// </remarks>
            [JsiiProperty(name: "gatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyClassName: The name of the policy class.
            /// </remarks>
            [JsiiProperty(name: "policyClassName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyClassName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyConfig: Policy Configuration.
            /// </remarks>
            [JsiiProperty(name: "policyConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyName: The name of the policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PolicyName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
