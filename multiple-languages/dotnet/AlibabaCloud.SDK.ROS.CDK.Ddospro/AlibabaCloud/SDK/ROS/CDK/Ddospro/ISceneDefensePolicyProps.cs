using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ddospro
{
    /// <summary>Properties for defining a `SceneDefensePolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-scenedefensepolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISceneDefensePolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ddospro.SceneDefensePolicyProps")]
    public interface ISceneDefensePolicyProps
    {
        /// <summary>Property endTime: The end time of the policy.</summary>
        /// <remarks>
        /// This value is a UNIX timestamp. Units: milliseconds.
        /// </remarks>
        [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndTime
        {
            get;
        }

        /// <summary>Property name: The name of the policy.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property startTime: The start time of the policy.</summary>
        /// <remarks>
        /// This value is a UNIX timestamp. Units: milliseconds.
        /// </remarks>
        [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StartTime
        {
            get;
        }

        /// <summary>Property template: The template of the policy.</summary>
        /// <remarks>
        /// Valid values:
        /// promotion: important activity
        /// bypass: all traffic forwarded
        /// </remarks>
        [JsiiProperty(name: "template", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Template
        {
            get;
        }

        /// <summary>Properties for defining a `SceneDefensePolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-scenedefensepolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISceneDefensePolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ddospro.SceneDefensePolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ddospro.ISceneDefensePolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property endTime: The end time of the policy.</summary>
            /// <remarks>
            /// This value is a UNIX timestamp. Units: milliseconds.
            /// </remarks>
            [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the policy.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property startTime: The start time of the policy.</summary>
            /// <remarks>
            /// This value is a UNIX timestamp. Units: milliseconds.
            /// </remarks>
            [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property template: The template of the policy.</summary>
            /// <remarks>
            /// Valid values:
            /// promotion: important activity
            /// bypass: all traffic forwarded
            /// </remarks>
            [JsiiProperty(name: "template", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Template
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
