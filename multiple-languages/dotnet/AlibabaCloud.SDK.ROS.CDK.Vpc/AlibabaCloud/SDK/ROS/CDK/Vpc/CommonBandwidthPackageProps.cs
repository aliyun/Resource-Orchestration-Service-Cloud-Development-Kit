using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::CommonBandwidthPackage`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.CommonBandwidthPackageProps")]
    public class CommonBandwidthPackageProps : AlibabaCloud.SDK.ROS.CDK.Vpc.ICommonBandwidthPackageProps
    {
        /// <summary>Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Bandwidth
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length. It must start with a letter,
        /// and cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property internetChargeType: The billing model of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// Allowed values:
        /// PayByBandwidth (default): Billed by bandwidth.
        /// PayBy95: Charged at Enhanced 95.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InternetChargeType
        {
            get;
            set;
        }

        /// <summary>Property isp: Line type of EIP, value: BGP (multi-line).</summary>
        [JsiiOptional]
        [JsiiProperty(name: "isp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Isp
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length and can contain letters, numbers, periods
        /// (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
        /// start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <summary>Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance.</summary>
        /// <remarks>
        /// Default to 100.
        /// Note This parameter is only supported on the China site.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ratio", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Ratio
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property zone: Zone Id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "zone", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Zone
        {
            get;
            set;
        }
    }
}
