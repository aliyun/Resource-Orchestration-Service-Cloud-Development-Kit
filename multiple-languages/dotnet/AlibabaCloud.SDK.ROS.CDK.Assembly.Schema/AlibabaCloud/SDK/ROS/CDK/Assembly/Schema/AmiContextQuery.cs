using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Query to AMI context provider.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.AmiContextQuery")]
    public class AmiContextQuery : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAmiContextQuery
    {
        /// <summary>Account to query.</summary>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Account
        {
            get;
            set;
        }

        /// <summary>Filters to DescribeImages call.</summary>
        [JsiiProperty(name: "filters", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}},\"kind\":\"map\"}}", isOverride: true)]
        public System.Collections.Generic.IDictionary<string, string[]> Filters
        {
            get;
            set;
        }

        /// <summary>Region to query.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Region
        {
            get;
            set;
        }

        /// <summary>Owners to DescribeImages call.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - All owners
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "owners", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? Owners
        {
            get;
            set;
        }
    }
}
