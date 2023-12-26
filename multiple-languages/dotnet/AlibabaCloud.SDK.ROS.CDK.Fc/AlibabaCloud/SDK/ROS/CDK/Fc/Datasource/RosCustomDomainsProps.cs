using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc.Datasource
{
    /// <summary>Properties for defining a `RosCustomDomains`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-customdomains
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.datasource.RosCustomDomainsProps")]
    public class RosCustomDomainsProps : AlibabaCloud.SDK.ROS.CDK.Fc.Datasource.IRosCustomDomainsProps
    {
        private object? _prefix;

        /// <remarks>
        /// <strong>Property</strong>: prefix: Qualified returned custom domain names must be prefixed with Prefix. For example, if the Prefix is "a", the returned custom domain names should be started with "a".
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "prefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Prefix
        {
            get => _prefix;
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
                _prefix = value;
            }
        }
    }
}
