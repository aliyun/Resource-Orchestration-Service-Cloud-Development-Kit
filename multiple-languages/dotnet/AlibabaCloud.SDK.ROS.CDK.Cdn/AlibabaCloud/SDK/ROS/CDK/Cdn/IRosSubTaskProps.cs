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
        /// <strong>Property</strong>: reportIds: The IDs of the metrics that you want to include in the report. Separate multiple
        /// IDs with commas (,). Valid values:
        /// - 1: frequently requested URLs (ranked by the number of requests)
        /// - 3: frequently requested URLs (ranked by the amount of network traffic)
        /// - 5: frequently used Referer headers (ranked by the number of requests)
        /// - 7: frequently used Referer headers (ranked by the amount of network traffic)
        /// - 9: frequently requested URLs that are redirected to the origin (ranked by the
        /// number of requests)
        /// - 11: frequently requested URLs that are redirected to the origin (ranked by the
        /// amount of network traffic)
        /// - 13: top client IP addresses (ranked by the number of requests)
        /// - 15: top client IP addresses (ranked by the amount of network traffic)
        /// - 17: domain names ranked by the amount of network traffic
        /// - 19: page views and unique visitors
        /// - 21: regions from which requests are initiated
        /// - 23: Internet service providers (ISPs)
        /// </remarks>
        [JsiiProperty(name: "reportIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ReportIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: domainName: The domain names to be tracked. Separate multiple domain names with commas (,).
        /// You can specify up to 500 domain names. If you want to specify more than 500
        /// domain names, submit a ticket.
        /// > If you do not specify a domain name, the custom operations report is created
        /// for all domain names that belong to your account.
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
            /// <strong>Property</strong>: reportIds: The IDs of the metrics that you want to include in the report. Separate multiple
            /// IDs with commas (,). Valid values:
            /// - 1: frequently requested URLs (ranked by the number of requests)
            /// - 3: frequently requested URLs (ranked by the amount of network traffic)
            /// - 5: frequently used Referer headers (ranked by the number of requests)
            /// - 7: frequently used Referer headers (ranked by the amount of network traffic)
            /// - 9: frequently requested URLs that are redirected to the origin (ranked by the
            /// number of requests)
            /// - 11: frequently requested URLs that are redirected to the origin (ranked by the
            /// amount of network traffic)
            /// - 13: top client IP addresses (ranked by the number of requests)
            /// - 15: top client IP addresses (ranked by the amount of network traffic)
            /// - 17: domain names ranked by the amount of network traffic
            /// - 19: page views and unique visitors
            /// - 21: regions from which requests are initiated
            /// - 23: Internet service providers (ISPs)
            /// </remarks>
            [JsiiProperty(name: "reportIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ReportIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: The domain names to be tracked. Separate multiple domain names with commas (,).
            /// You can specify up to 500 domain names. If you want to specify more than 500
            /// domain names, submit a ticket.
            /// > If you do not specify a domain name, the custom operations report is created
            /// for all domain names that belong to your account.
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
