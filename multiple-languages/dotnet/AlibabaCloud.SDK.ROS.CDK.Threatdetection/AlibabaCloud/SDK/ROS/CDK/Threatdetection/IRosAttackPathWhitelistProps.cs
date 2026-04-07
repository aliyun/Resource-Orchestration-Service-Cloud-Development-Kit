using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `RosAttackPathWhitelist`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAttackPathWhitelistProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosAttackPathWhitelistProps")]
    public interface IRosAttackPathWhitelistProps
    {
        /// <remarks>
        /// <strong>Property</strong>: pathName: The whitelist path name.
        /// </remarks>
        [JsiiProperty(name: "pathName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PathName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: pathType: The whitelist path type.
        /// </remarks>
        [JsiiProperty(name: "pathType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PathType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: whitelistName: The whitelist name.
        /// </remarks>
        [JsiiProperty(name: "whitelistName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WhitelistName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: whitelistType: The whitelist type.  Values:
        /// * ALL_ASSET: All assets.
        /// * PART_ASSET: Partial assets.
        /// </remarks>
        [JsiiProperty(name: "whitelistType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WhitelistType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: attackPathAssetList: List of attack path assets.
        /// </remarks>
        [JsiiProperty(name: "attackPathAssetList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosAttackPathWhitelist.AttackPathAssetListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AttackPathAssetList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: remark: Remark information.
        /// </remarks>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAttackPathWhitelist`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAttackPathWhitelistProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosAttackPathWhitelistProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosAttackPathWhitelistProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: pathName: The whitelist path name.
            /// </remarks>
            [JsiiProperty(name: "pathName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PathName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: pathType: The whitelist path type.
            /// </remarks>
            [JsiiProperty(name: "pathType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PathType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: whitelistName: The whitelist name.
            /// </remarks>
            [JsiiProperty(name: "whitelistName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WhitelistName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: whitelistType: The whitelist type.  Values:
            /// * ALL_ASSET: All assets.
            /// * PART_ASSET: Partial assets.
            /// </remarks>
            [JsiiProperty(name: "whitelistType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WhitelistType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: attackPathAssetList: List of attack path assets.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "attackPathAssetList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosAttackPathWhitelist.AttackPathAssetListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AttackPathAssetList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: remark: Remark information.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
