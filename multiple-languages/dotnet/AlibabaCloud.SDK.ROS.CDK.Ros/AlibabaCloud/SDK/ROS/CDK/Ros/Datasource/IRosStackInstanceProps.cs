using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros.Datasource
{
    /// <summary>Properties for defining a `RosStackInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosStackInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.datasource.RosStackInstanceProps")]
    public interface IRosStackInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: stackGroupName: Resource stack group name. Names are unique within a single region.
        /// The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
        /// </remarks>
        [JsiiProperty(name: "stackGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StackGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: stackInstanceAccountId: The target account ID to which the resource stack belongs.
        /// In the self-service management permission mode, the account is an Alibaba Cloud account.
        /// In service management permission mode, this account is a member account of the resource directory.
        /// </remarks>
        [JsiiProperty(name: "stackInstanceAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StackInstanceAccountId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: stackInstanceRegionId: The region to which the resource stack belongs.
        /// </remarks>
        [JsiiProperty(name: "stackInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StackInstanceRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: outputOption: Whether to return the Outputs parameter resource stack output list.
        /// </remarks>
        [JsiiProperty(name: "outputOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OutputOption
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosStackInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosStackInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.datasource.RosStackInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.Datasource.IRosStackInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: stackGroupName: Resource stack group name. Names are unique within a single region.
            /// The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
            /// </remarks>
            [JsiiProperty(name: "stackGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StackGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: stackInstanceAccountId: The target account ID to which the resource stack belongs.
            /// In the self-service management permission mode, the account is an Alibaba Cloud account.
            /// In service management permission mode, this account is a member account of the resource directory.
            /// </remarks>
            [JsiiProperty(name: "stackInstanceAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StackInstanceAccountId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: stackInstanceRegionId: The region to which the resource stack belongs.
            /// </remarks>
            [JsiiProperty(name: "stackInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StackInstanceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: outputOption: Whether to return the Outputs parameter resource stack output list.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "outputOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OutputOption
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
