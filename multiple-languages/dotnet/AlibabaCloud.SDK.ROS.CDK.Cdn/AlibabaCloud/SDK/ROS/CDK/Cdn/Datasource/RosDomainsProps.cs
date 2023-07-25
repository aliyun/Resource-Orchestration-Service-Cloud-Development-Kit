using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn.Datasource
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `DATASOURCE::CDN::Domains`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cdn.datasource.RosDomainsProps")]
    public class RosDomainsProps : AlibabaCloud.SDK.ROS.CDK.Cdn.Datasource.IRosDomainsProps
    {
        private object _domainName;

        /// <remarks>
        /// <strong>Property</strong>: domainName: The accelerated domain name. You can specify only one domain name.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DomainName
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
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _domainName = value;
            }
        }
    }
}
