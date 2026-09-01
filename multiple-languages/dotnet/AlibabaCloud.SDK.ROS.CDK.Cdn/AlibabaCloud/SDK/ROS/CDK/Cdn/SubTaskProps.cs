using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `SubTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cdn.SubTaskProps")]
    public class SubTaskProps : AlibabaCloud.SDK.ROS.CDK.Cdn.ISubTaskProps
    {
        private object _reportIds;

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
            get => _reportIds;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case string cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                }
                            }
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _reportIds = value;
            }
        }

        private object? _domainName;

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
            get => _domainName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _domainName = value;
            }
        }
    }
}
