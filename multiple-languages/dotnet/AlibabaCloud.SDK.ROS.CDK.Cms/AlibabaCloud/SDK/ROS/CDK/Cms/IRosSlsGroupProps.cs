using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `RosSlsGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-slsgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSlsGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosSlsGroupProps")]
    public interface IRosSlsGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: slsGroupConfig: The configurations of the Logstore group.Valid values of N: 1 to 25.
        /// </remarks>
        [JsiiProperty(name: "slsGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosSlsGroup.SlsGroupConfigProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object SlsGroupConfig
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsGroupName: The name of the Logstore group.The name must be 2 to 32 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_). The name must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "slsGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsGroupDescription: The description of the Logstore group.
        /// </remarks>
        [JsiiProperty(name: "slsGroupDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlsGroupDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSlsGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-slsgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSlsGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosSlsGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosSlsGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: slsGroupConfig: The configurations of the Logstore group.Valid values of N: 1 to 25.
            /// </remarks>
            [JsiiProperty(name: "slsGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosSlsGroup.SlsGroupConfigProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object SlsGroupConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: slsGroupName: The name of the Logstore group.The name must be 2 to 32 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_). The name must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "slsGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: slsGroupDescription: The description of the Logstore group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slsGroupDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlsGroupDescription
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
