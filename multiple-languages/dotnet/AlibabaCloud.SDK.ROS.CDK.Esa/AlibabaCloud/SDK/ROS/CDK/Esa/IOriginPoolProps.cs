using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `OriginPool`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originpool
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IOriginPoolProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.OriginPoolProps")]
    public interface IOriginPoolProps
    {
        /// <summary>Property originPoolName: The source address pool name.</summary>
        [JsiiProperty(name: "originPoolName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OriginPoolName
        {
            get;
        }

        /// <summary>Property siteId: The site ID.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property enabled: Whether the source address pool is enabled: - `true`: Enabled;</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><c>false</c>: Not enabled.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Enabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property origins: The Source station information added to the source address pool.</summary>
        /// <remarks>
        /// Multiple Source stations use arrays to transfer values.
        /// </remarks>
        [JsiiProperty(name: "origins", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosOriginPool.OriginsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Origins
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `OriginPool`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originpool
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IOriginPoolProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.OriginPoolProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IOriginPoolProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property originPoolName: The source address pool name.</summary>
            [JsiiProperty(name: "originPoolName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OriginPoolName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property siteId: The site ID.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property enabled: Whether the source address pool is enabled: - `true`: Enabled;</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description><c>false</c>: Not enabled.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property origins: The Source station information added to the source address pool.</summary>
            /// <remarks>
            /// Multiple Source stations use arrays to transfer values.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "origins", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosOriginPool.OriginsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Origins
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
