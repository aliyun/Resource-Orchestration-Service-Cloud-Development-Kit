using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::SnatEntry`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosSnatEntryProps")]
    public class RosSnatEntryProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosSnatEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: snatIp: The public IP address. Separate multiple EIPs with commas.
        /// </remarks>
        [JsiiProperty(name: "snatIp", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SnatIp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: snatTableId: The ID of the SNAT table.
        /// </remarks>
        [JsiiProperty(name: "snatTableId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SnatTableId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "snatEntryName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SnatEntryName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceCidr", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SourceCidr
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceVSwitchIds: The ID of the VSwitch to access the Internet.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SourceVSwitchIds
        {
            get;
            set;
        }
    }
}
