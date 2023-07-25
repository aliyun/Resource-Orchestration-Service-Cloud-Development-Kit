using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::SLB::DomainExtensions`.</summary>
    [JsiiInterface(nativeType: typeof(IDomainExtensionsProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.DomainExtensionsProps")]
    public interface IDomainExtensionsProps
    {
        /// <summary>Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.</summary>
        /// <remarks>
        /// Valid values: 1 to 65535.
        /// </remarks>
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

        /// <summary>Property domainExtensionId: The ID of the additional certificate.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IDomainExtensionsProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.DomainExtensionsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IDomainExtensionsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.</summary>
            /// <remarks>
            /// Valid values: 1 to 65535.
            /// </remarks>
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

            /// <summary>Property domainExtensionId: The ID of the additional certificate.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "domainExtensionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainExtensionId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
