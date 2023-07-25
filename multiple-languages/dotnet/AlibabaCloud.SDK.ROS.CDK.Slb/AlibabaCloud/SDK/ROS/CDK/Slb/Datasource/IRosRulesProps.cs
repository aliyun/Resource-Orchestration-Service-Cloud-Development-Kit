using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::SLB::Rules`.</summary>
    [JsiiInterface(nativeType: typeof(IRosRulesProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.RosRulesProps")]
    public interface IRosRulesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerPort
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of the CLB instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerProtocol: The frontend listener protocol that is used by the SLB instance.
        /// </remarks>
        [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ListenerProtocol
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::SLB::Rules`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosRulesProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.RosRulesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IRosRulesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
            /// </remarks>
            [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerId: The ID of the CLB instance.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerProtocol: The frontend listener protocol that is used by the SLB instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ListenerProtocol
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
