using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ddospro
{
    /// <summary>Properties for defining a `RosSceneDefensePolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-scenedefensepolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSceneDefensePolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ddospro.RosSceneDefensePolicyProps")]
    public interface IRosSceneDefensePolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: endTime: The end time of the policy. This value is a UNIX timestamp. Units: milliseconds.
        /// </remarks>
        [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndTime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the policy.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: startTime: The start time of the policy. This value is a UNIX timestamp. Units: milliseconds.
        /// </remarks>
        [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StartTime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: template: The template of the policy. Valid values:
        /// promotion: important activity
        /// bypass: all traffic forwarded
        /// </remarks>
        [JsiiProperty(name: "template", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Template
        {
            get;
        }

        /// <summary>Properties for defining a `RosSceneDefensePolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-scenedefensepolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSceneDefensePolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-ddospro.RosSceneDefensePolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ddospro.IRosSceneDefensePolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: endTime: The end time of the policy. This value is a UNIX timestamp. Units: milliseconds.
            /// </remarks>
            [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the policy.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: startTime: The start time of the policy. This value is a UNIX timestamp. Units: milliseconds.
            /// </remarks>
            [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: template: The template of the policy. Valid values:
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
