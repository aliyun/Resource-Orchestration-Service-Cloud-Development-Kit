using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosCustomScenePolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCustomScenePolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosCustomScenePolicyProps")]
    public interface IRosCustomScenePolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: createTime: The time when the policy takes effect.
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "createTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CreateTime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: customScenePolicyName: The policy name.
        /// </remarks>
        [JsiiProperty(name: "customScenePolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CustomScenePolicyName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endTime: The time when the policy expires.
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndTime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: objects: The IDs of the websites that you want to associate with the policy. Separate multiple IDs with commas (,).
        /// </remarks>
        [JsiiProperty(name: "objects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Objects
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: template: The name of the policy template. Valid value:
        /// promotion: major events.
        /// </remarks>
        [JsiiProperty(name: "template", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Template
        {
            get;
        }

        /// <summary>Properties for defining a `RosCustomScenePolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCustomScenePolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosCustomScenePolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosCustomScenePolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: createTime: The time when the policy takes effect.
            /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "createTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: customScenePolicyName: The policy name.
            /// </remarks>
            [JsiiProperty(name: "customScenePolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CustomScenePolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endTime: The time when the policy expires.
            /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: objects: The IDs of the websites that you want to associate with the policy. Separate multiple IDs with commas (,).
            /// </remarks>
            [JsiiProperty(name: "objects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Objects
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: template: The name of the policy template. Valid value:
            /// promotion: major events.
            /// </remarks>
            [JsiiProperty(name: "template", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Template
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
