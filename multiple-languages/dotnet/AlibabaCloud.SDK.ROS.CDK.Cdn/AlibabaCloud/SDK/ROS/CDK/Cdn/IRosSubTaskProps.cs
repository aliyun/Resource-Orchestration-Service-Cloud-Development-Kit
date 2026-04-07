using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    /// <summary>Properties for defining a `RosSubTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSubTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.RosSubTaskProps")]
    public interface IRosSubTaskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: reportIds: The report IDs.
        /// The value can be up to 128 bytes in length.
        /// </remarks>
        [JsiiProperty(name: "reportIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ReportIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: domainName: The domain name.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSubTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSubTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.RosSubTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cdn.IRosSubTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: reportIds: The report IDs.
            /// The value can be up to 128 bytes in length.
            /// </remarks>
            [JsiiProperty(name: "reportIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ReportIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: The domain name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
