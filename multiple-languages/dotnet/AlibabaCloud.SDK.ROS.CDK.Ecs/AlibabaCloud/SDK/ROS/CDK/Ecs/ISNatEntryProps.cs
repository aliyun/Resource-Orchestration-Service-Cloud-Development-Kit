using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::SNatEntry`.</summary>
    [JsiiInterface(nativeType: typeof(ISNatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SNatEntryProps")]
    public interface ISNatEntryProps
    {
        /// <summary>Property sNatIp: Source IP, must belongs to bandwidth package internet IP.</summary>
        [JsiiProperty(name: "sNatIp", typeJson: "{\"primitive\":\"string\"}")]
        string SNatIp
        {
            get;
        }

        /// <summary>Property sNatTableId: Create SNAT entry in specified SNAT table.</summary>
        [JsiiProperty(name: "sNatTableId", typeJson: "{\"primitive\":\"string\"}")]
        string SNatTableId
        {
            get;
        }

        /// <summary>Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.</summary>
        [JsiiProperty(name: "snatEntryName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SnatEntryName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceCidr: Specifies the network segment of the switch.</summary>
        /// <remarks>
        /// For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
        /// </remarks>
        [JsiiProperty(name: "sourceCidr", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SourceCidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceVSwitchId: Allow which switch can access internet.</summary>
        [JsiiProperty(name: "sourceVSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SourceVSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::SNatEntry`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISNatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SNatEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ISNatEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property sNatIp: Source IP, must belongs to bandwidth package internet IP.</summary>
            [JsiiProperty(name: "sNatIp", typeJson: "{\"primitive\":\"string\"}")]
            public string SNatIp
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property sNatTableId: Create SNAT entry in specified SNAT table.</summary>
            [JsiiProperty(name: "sNatTableId", typeJson: "{\"primitive\":\"string\"}")]
            public string SNatTableId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "snatEntryName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SnatEntryName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property sourceCidr: Specifies the network segment of the switch.</summary>
            /// <remarks>
            /// For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceCidr", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceCidr
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property sourceVSwitchId: Allow which switch can access internet.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceVSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceVSwitchId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
