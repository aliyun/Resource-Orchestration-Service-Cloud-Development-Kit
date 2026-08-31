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
        /// <summary>Property reportIds: The IDs of the metrics that you want to include in the report.</summary>
        /// <remarks>
        /// Separate multiple
        /// IDs with commas (,). Valid values:
        ///
        /// <list type="bullet">
        /// <description>1: frequently requested URLs (ranked by the number of requests)</description>
        /// <description>3: frequently requested URLs (ranked by the amount of network traffic)</description>
        /// <description>5: frequently used Referer headers (ranked by the number of requests)</description>
        /// <description>7: frequently used Referer headers (ranked by the amount of network traffic)</description>
        /// <description>9: frequently requested URLs that are redirected to the origin (ranked by the
        /// number of requests)</description>
        /// <description>11: frequently requested URLs that are redirected to the origin (ranked by the
        /// amount of network traffic)</description>
        /// <description>13: top client IP addresses (ranked by the number of requests)</description>
        /// <description>15: top client IP addresses (ranked by the amount of network traffic)</description>
        /// <description>17: domain names ranked by the amount of network traffic</description>
        /// <description>19: page views and unique visitors</description>
        /// <description>21: regions from which requests are initiated</description>
        /// <description>23: Internet service providers (ISPs)</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "reportIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ReportIds
        {
            get;
        }

        /// <summary>Property domainName: The domain names to be tracked.</summary>
        /// <remarks>
        /// Separate multiple domain names with commas (,).
        /// You can specify up to 500 domain names. If you want to specify more than 500
        /// domain names, submit a ticket.
        ///
        ///     If you do not specify a domain name, the custom operations report is created
        ///     for all domain names that belong to your account.
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

            /// <summary>Property reportIds: The IDs of the metrics that you want to include in the report.</summary>
            /// <remarks>
            /// Separate multiple
            /// IDs with commas (,). Valid values:
            ///
            /// <list type="bullet">
            /// <description>1: frequently requested URLs (ranked by the number of requests)</description>
            /// <description>3: frequently requested URLs (ranked by the amount of network traffic)</description>
            /// <description>5: frequently used Referer headers (ranked by the number of requests)</description>
            /// <description>7: frequently used Referer headers (ranked by the amount of network traffic)</description>
            /// <description>9: frequently requested URLs that are redirected to the origin (ranked by the
            /// number of requests)</description>
            /// <description>11: frequently requested URLs that are redirected to the origin (ranked by the
            /// amount of network traffic)</description>
            /// <description>13: top client IP addresses (ranked by the number of requests)</description>
            /// <description>15: top client IP addresses (ranked by the amount of network traffic)</description>
            /// <description>17: domain names ranked by the amount of network traffic</description>
            /// <description>19: page views and unique visitors</description>
            /// <description>21: regions from which requests are initiated</description>
            /// <description>23: Internet service providers (ISPs)</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "reportIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ReportIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property domainName: The domain names to be tracked.</summary>
            /// <remarks>
            /// Separate multiple domain names with commas (,).
            /// You can specify up to 500 domain names. If you want to specify more than 500
            /// domain names, submit a ticket.
            ///
            ///     If you do not specify a domain name, the custom operations report is created
            ///     for all domain names that belong to your account.
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
