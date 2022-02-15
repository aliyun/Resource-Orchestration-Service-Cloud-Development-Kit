using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::SNatEntry`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.SNatEntryProps")]
    public class SNatEntryProps : AlibabaCloud.SDK.ROS.CDK.Ecs.ISNatEntryProps
    {
        /// <summary>Property sNatIp: Source IP, must belongs to bandwidth package internet IP.</summary>
        [JsiiProperty(name: "sNatIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SNatIp
        {
            get;
            set;
        }

        /// <summary>Property sNatTableId: Create SNAT entry in specified SNAT table.</summary>
        [JsiiProperty(name: "sNatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SNatTableId
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

        /// <summary>Property sourceVSwitchId: Allow which switch can access internet.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "sourceVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SourceVSwitchId
        {
            get;
            set;
        }
    }
}
