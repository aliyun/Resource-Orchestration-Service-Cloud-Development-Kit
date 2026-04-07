using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `RosAttackPathSensitiveAssetConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAttackPathSensitiveAssetConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosAttackPathSensitiveAssetConfigProps")]
    public interface IRosAttackPathSensitiveAssetConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: attackPathAssetList: The attack path sensitive asset configuration list.
        /// </remarks>
        [JsiiProperty(name: "attackPathAssetList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object AttackPathAssetList
        {
            get;
        }

        /// <summary>Properties for defining a `RosAttackPathSensitiveAssetConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAttackPathSensitiveAssetConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosAttackPathSensitiveAssetConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosAttackPathSensitiveAssetConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: attackPathAssetList: The attack path sensitive asset configuration list.
            /// </remarks>
            [JsiiProperty(name: "attackPathAssetList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object AttackPathAssetList
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
