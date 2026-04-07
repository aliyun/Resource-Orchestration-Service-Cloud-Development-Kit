using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `AttackPathSensitiveAssetConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAttackPathSensitiveAssetConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.AttackPathSensitiveAssetConfigProps")]
    public interface IAttackPathSensitiveAssetConfigProps
    {
        /// <summary>Property attackPathAssetList: The attack path sensitive asset configuration list.</summary>
        [JsiiProperty(name: "attackPathAssetList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object AttackPathAssetList
        {
            get;
        }

        /// <summary>Properties for defining a `AttackPathSensitiveAssetConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAttackPathSensitiveAssetConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.AttackPathSensitiveAssetConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAttackPathSensitiveAssetConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property attackPathAssetList: The attack path sensitive asset configuration list.</summary>
            [JsiiProperty(name: "attackPathAssetList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosAttackPathSensitiveAssetConfig.AttackPathAssetListProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object AttackPathAssetList
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
