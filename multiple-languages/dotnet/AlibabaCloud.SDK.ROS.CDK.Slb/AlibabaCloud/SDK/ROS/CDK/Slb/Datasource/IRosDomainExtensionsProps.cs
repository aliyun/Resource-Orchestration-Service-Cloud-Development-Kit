using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::SLB::DomainExtensions`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDomainExtensionsProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.RosDomainExtensionsProps")]
    public interface IRosDomainExtensionsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.
        /// Valid values: 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
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
        /// <strong>Property</strong>: domainExtensionId: The ID of the additional certificate.
        /// </remarks>
        [JsiiProperty(name: "domainExtensionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainExtensionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::SLB::DomainExtensions`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDomainExtensionsProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.RosDomainExtensionsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IRosDomainExtensionsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.
            /// Valid values: 1 to 65535.
            /// </remarks>
            [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
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
            /// <strong>Property</strong>: domainExtensionId: The ID of the additional certificate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainExtensionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainExtensionId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
