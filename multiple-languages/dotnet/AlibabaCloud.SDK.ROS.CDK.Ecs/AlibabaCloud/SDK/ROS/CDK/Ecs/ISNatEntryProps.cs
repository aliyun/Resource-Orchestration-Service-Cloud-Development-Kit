using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `SNatEntry`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snatentry
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISNatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SNatEntryProps")]
    public interface ISNatEntryProps
    {
        /// <summary>Property sNatIp: Source IP, must belongs to bandwidth package internet IP.</summary>
        [JsiiProperty(name: "sNatIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SNatIp
        {
            get;
        }

        /// <summary>Property sNatTableId: Create SNAT entry in specified SNAT table.</summary>
        [JsiiProperty(name: "sNatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SNatTableId
        {
            get;
        }

        /// <summary>Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.</summary>
        [JsiiProperty(name: "snatEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnatEntryName
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
        [JsiiProperty(name: "sourceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceCidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceVSwitchId: Allow which switch can access internet.</summary>
        [JsiiProperty(name: "sourceVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceVSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SNatEntry`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snatentry
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISNatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SNatEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ISNatEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property sNatIp: Source IP, must belongs to bandwidth package internet IP.</summary>
            [JsiiProperty(name: "sNatIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SNatIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sNatTableId: Create SNAT entry in specified SNAT table.</summary>
            [JsiiProperty(name: "sNatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SNatTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "snatEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnatEntryName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceCidr: Specifies the network segment of the switch.</summary>
            /// <remarks>
            /// For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceCidr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceVSwitchId: Allow which switch can access internet.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceVSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
