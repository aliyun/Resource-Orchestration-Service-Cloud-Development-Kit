using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    /// <summary>Properties for defining a `SubTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISubTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.SubTaskProps")]
    public interface ISubTaskProps
    {
        /// <summary>Property reportIds: The report IDs.</summary>
        /// <remarks>
        /// The value can be up to 128 bytes in length.
        /// </remarks>
        [JsiiProperty(name: "reportIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ReportIds
        {
            get;
        }

        /// <summary>Property domainName: The domain name.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SubTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISubTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.SubTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cdn.ISubTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property reportIds: The report IDs.</summary>
            /// <remarks>
            /// The value can be up to 128 bytes in length.
            /// </remarks>
            [JsiiProperty(name: "reportIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ReportIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property domainName: The domain name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
