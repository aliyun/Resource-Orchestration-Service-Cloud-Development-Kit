using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `AttackPathWhitelist`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAttackPathWhitelistProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.AttackPathWhitelistProps")]
    public interface IAttackPathWhitelistProps
    {
        /// <summary>Property pathName: The whitelist path name.</summary>
        [JsiiProperty(name: "pathName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PathName
        {
            get;
        }

        /// <summary>Property pathType: The whitelist path type.</summary>
        [JsiiProperty(name: "pathType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PathType
        {
            get;
        }

        /// <summary>Property whitelistName: The whitelist name.</summary>
        [JsiiProperty(name: "whitelistName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WhitelistName
        {
            get;
        }

        /// <summary>Property whitelistType: The whitelist type.</summary>
        /// <remarks>
        /// Values:
        ///
        /// <list type="bullet">
        /// <description>ALL_ASSET: All assets.</description>
        /// <description>PART_ASSET: Partial assets.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "whitelistType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WhitelistType
        {
            get;
        }

        /// <summary>Property attackPathAssetList: List of attack path assets.</summary>
        [JsiiProperty(name: "attackPathAssetList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosAttackPathWhitelist.AttackPathAssetListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AttackPathAssetList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property remark: Remark information.</summary>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AttackPathWhitelist`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAttackPathWhitelistProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.AttackPathWhitelistProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAttackPathWhitelistProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property pathName: The whitelist path name.</summary>
            [JsiiProperty(name: "pathName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PathName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pathType: The whitelist path type.</summary>
            [JsiiProperty(name: "pathType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PathType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property whitelistName: The whitelist name.</summary>
            [JsiiProperty(name: "whitelistName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WhitelistName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property whitelistType: The whitelist type.</summary>
            /// <remarks>
            /// Values:
            ///
            /// <list type="bullet">
            /// <description>ALL_ASSET: All assets.</description>
            /// <description>PART_ASSET: Partial assets.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "whitelistType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WhitelistType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property attackPathAssetList: List of attack path assets.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "attackPathAssetList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosAttackPathWhitelist.AttackPathAssetListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AttackPathAssetList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property remark: Remark information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
