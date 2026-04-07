using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `OriginProtection`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originprotection
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IOriginProtectionProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.OriginProtectionProps")]
    public interface IOriginProtectionProps
    {
        /// <summary>Property siteId: Site Id.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property originConverge: The IP convergence status.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>on</description>
        /// <description>off.</description>
        /// </list>
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

        /// <summary>Properties for defining a `OriginProtection`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originprotection
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IOriginProtectionProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.OriginProtectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IOriginProtectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property siteId: Site Id.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property originConverge: The IP convergence status.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>on</description>
            /// <description>off.</description>
            /// </list>
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
