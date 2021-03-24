using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::SNatEntry`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSNatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSNatEntryProps")]
    public interface IRosSNatEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: sNatIp: Source IP, must belongs to bandwidth package internet IP
        /// </remarks>
        [JsiiProperty(name: "sNatIp", typeJson: "{\"primitive\":\"string\"}")]
        string SNatIp
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sNatTableId: Create SNAT entry in specified SNAT table.
        /// </remarks>
        [JsiiProperty(name: "sNatTableId", typeJson: "{\"primitive\":\"string\"}")]
        string SNatTableId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
        /// </remarks>
        [JsiiProperty(name: "snatEntryName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SnatEntryName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
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

        /// <remarks>
        /// <strong>Property</strong>: sourceVSwitchId: Allow which switch can access internet.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosSNatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSNatEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosSNatEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: sNatIp: Source IP, must belongs to bandwidth package internet IP
            /// </remarks>
            [JsiiProperty(name: "sNatIp", typeJson: "{\"primitive\":\"string\"}")]
            public string SNatIp
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sNatTableId: Create SNAT entry in specified SNAT table.
            /// </remarks>
            [JsiiProperty(name: "sNatTableId", typeJson: "{\"primitive\":\"string\"}")]
            public string SNatTableId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snatEntryName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SnatEntryName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceCidr", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceCidr
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceVSwitchId: Allow which switch can access internet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceVSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceVSwitchId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
