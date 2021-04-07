using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Query to hosted zone context provider.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.HostedZoneContextQuery")]
    public class HostedZoneContextQuery : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IHostedZoneContextQuery
    {
        /// <summary>Query account.</summary>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Account
        {
            get;
            set;
        }

        /// <summary>The domain name e.g. example.com to lookup.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DomainName
        {
            get;
            set;
        }

        /// <summary>Query region.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Region
        {
            get;
            set;
        }

        /// <summary>True if the zone you want to find is a private hosted zone.</summary>
        /// <remarks>
        /// <strong>Default</strong>: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateZone", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true, isOverride: true)]
        public bool? PrivateZone
        {
            get;
            set;
        }

        /// <summary>The VPC ID to that the private zone must be associated with.</summary>
        /// <remarks>
        /// If you provide VPC ID and privateZone is false, this will return no results
        /// and raise an error.
        ///
        /// <strong>Default</strong>: - Required if privateZone=true
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }
    }
}
