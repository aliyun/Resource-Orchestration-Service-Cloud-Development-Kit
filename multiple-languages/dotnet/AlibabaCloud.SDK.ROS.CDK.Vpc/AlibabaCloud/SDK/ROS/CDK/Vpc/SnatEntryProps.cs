using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::SnatEntry`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.SnatEntryProps")]
    public class SnatEntryProps : AlibabaCloud.SDK.ROS.CDK.Vpc.ISnatEntryProps
    {
        /// <summary>Property snatIp: The public IP address.</summary>
        /// <remarks>
        /// Separate multiple EIPs with commas.
        /// </remarks>
        [JsiiProperty(name: "snatIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SnatIp
        {
            get;
            set;
        }

        /// <summary>Property snatTableId: The ID of the SNAT table.</summary>
        [JsiiProperty(name: "snatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SnatTableId
        {
            get;
            set;
        }

        /// <summary>Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "snatEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SnatEntryName
        {
            get;
            set;
        }

        /// <summary>Property sourceCidr: Specifies the network segment of the switch.</summary>
        /// <remarks>
        /// For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SourceCidr
        {
            get;
            set;
        }

        /// <summary>Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "sourceVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SourceVSwitchIds
        {
            get;
            set;
        }
    }
}
