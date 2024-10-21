using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>Properties for defining a `LoadBalancerTCPListener`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILoadBalancerTCPListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListenerProps")]
    public interface ILoadBalancerTCPListenerProps
    {
        /// <summary>Property listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535.</summary>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerPort
        {
            get;
        }

        /// <summary>Property loadBalancerId: The ID of the CLB instance.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
        /// <description>Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `LoadBalancerTCPListener`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILoadBalancerTCPListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListenerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListenerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535.</summary>
            [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property loadBalancerId: The ID of the CLB instance.</summary>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
            /// <description>Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
