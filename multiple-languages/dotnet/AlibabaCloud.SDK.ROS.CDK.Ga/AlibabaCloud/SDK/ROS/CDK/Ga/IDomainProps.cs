using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `Domain`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-domain
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.DomainProps")]
    public interface IDomainProps
    {
        /// <summary>Property acceleratorIds: The IDs of the GA instance to be disassociated.</summary>
        /// <remarks>
        /// You can specify up to 50 IDs.
        /// </remarks>
        [JsiiProperty(name: "acceleratorIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object AcceleratorIds
        {
            get;
        }

        /// <summary>Property domain: The accelerated domain name to be disassociated.</summary>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Domain
        {
            get;
        }

        /// <summary>Properties for defining a `Domain`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-domain
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.DomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property acceleratorIds: The IDs of the GA instance to be disassociated.</summary>
            /// <remarks>
            /// You can specify up to 50 IDs.
            /// </remarks>
            [JsiiProperty(name: "acceleratorIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object AcceleratorIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property domain: The accelerated domain name to be disassociated.</summary>
            [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Domain
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
