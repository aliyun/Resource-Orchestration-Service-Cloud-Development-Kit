using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `CustomScenePolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICustomScenePolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.CustomScenePolicyProps")]
    public interface ICustomScenePolicyProps
    {
        /// <summary>Property createTime: The time when the policy takes effect.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "createTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CreateTime
        {
            get;
        }

        /// <summary>Property customScenePolicyName: The policy name.</summary>
        [JsiiProperty(name: "customScenePolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CustomScenePolicyName
        {
            get;
        }

        /// <summary>Property endTime: The time when the policy expires.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EndTime
        {
            get;
        }

        /// <summary>Property objects: The IDs of the websites that you want to associate with the policy.</summary>
        /// <remarks>
        /// Separate multiple IDs with commas (,).
        /// </remarks>
        [JsiiProperty(name: "objects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Objects
        {
            get;
        }

        /// <summary>Property template: The name of the policy template.</summary>
        /// <remarks>
        /// Valid value:
        /// promotion: major events.
        /// </remarks>
        [JsiiProperty(name: "template", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Template
        {
            get;
        }

        /// <summary>Properties for defining a `CustomScenePolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICustomScenePolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.CustomScenePolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.ICustomScenePolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property createTime: The time when the policy takes effect.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "createTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property customScenePolicyName: The policy name.</summary>
            [JsiiProperty(name: "customScenePolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CustomScenePolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endTime: The time when the policy expires.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property objects: The IDs of the websites that you want to associate with the policy.</summary>
            /// <remarks>
            /// Separate multiple IDs with commas (,).
            /// </remarks>
            [JsiiProperty(name: "objects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Objects
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property template: The name of the policy template.</summary>
            /// <remarks>
            /// Valid value:
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
