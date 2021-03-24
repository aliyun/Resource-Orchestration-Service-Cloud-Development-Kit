using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Query input for looking up a VPC.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.VpcContextQuery")]
    public class VpcContextQuery : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IVpcContextQuery
    {
        /// <summary>Query account.</summary>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Account
        {
            get;
            set;
        }

        /// <summary>Filters to apply to the VPC&#xD; &#xD; Filter parameters are the same as passed to DescribeVpcs.</summary>
        [JsiiProperty(name: "filter", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOverride: true)]
        public System.Collections.Generic.IDictionary<string, string> Filter
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

        /// <summary>Whether to populate the subnetGroups field of the {@link VpcContextResponse},&#xD; which contains potentially asymmetric subnet groups.</summary>
        /// <remarks>
        /// <strong>Default</strong>: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "returnAsymmetricSubnets", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true, isOverride: true)]
        public bool? ReturnAsymmetricSubnets
        {
            get;
            set;
        }

        /// <summary>Optional tag for subnet group name.</summary>
        /// <remarks>
        /// If not provided, we'll look at the ros-cdk:subnet-name tag.
        /// If the subnet does not have the specified tag,
        /// we'll use its type as the name.
        /// 
        /// <strong>Default</strong>: 'ros-cdk:subnet-name'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "subnetGroupNameTag", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SubnetGroupNameTag
        {
            get;
            set;
        }
    }
}
