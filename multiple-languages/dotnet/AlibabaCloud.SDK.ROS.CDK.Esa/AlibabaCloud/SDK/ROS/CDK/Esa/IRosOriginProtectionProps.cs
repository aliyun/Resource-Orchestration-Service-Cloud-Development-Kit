using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosOriginProtection`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originprotection
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosOriginProtectionProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosOriginProtectionProps")]
    public interface IRosOriginProtectionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: siteId: Site Id.
        /// </remarks>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: originConverge: The IP convergence status.
        /// *   on
        /// *   off.
        /// </remarks>
        [JsiiProperty(name: "originConverge", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginConverge
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosOriginProtection`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originprotection
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosOriginProtectionProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosOriginProtectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosOriginProtectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: siteId: Site Id.
            /// </remarks>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: originConverge: The IP convergence status.
            /// *   on
            /// *   off.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "originConverge", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginConverge
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
