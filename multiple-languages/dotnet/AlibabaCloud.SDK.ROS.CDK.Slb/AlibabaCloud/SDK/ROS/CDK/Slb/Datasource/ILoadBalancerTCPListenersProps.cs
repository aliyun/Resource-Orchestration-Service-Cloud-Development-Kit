using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>Properties for defining a `LoadBalancerTCPListeners`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplisteners
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILoadBalancerTCPListenersProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListenersProps")]
    public interface ILoadBalancerTCPListenersProps
    {
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

        /// <summary>Properties for defining a `LoadBalancerTCPListeners`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplisteners
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILoadBalancerTCPListenersProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListenersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListenersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
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
