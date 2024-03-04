using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros.Datasource
{
    /// <summary>Properties for defining a `StackInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IStackInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.datasource.StackInstanceProps")]
    public interface IStackInstanceProps
    {
        /// <summary>Property stackGroupName: Resource stack group name.</summary>
        /// <remarks>
        /// Names are unique within a single region.
        /// The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
        /// </remarks>
        [JsiiProperty(name: "stackGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StackGroupName
        {
            get;
        }

        /// <summary>Property stackInstanceAccountId: The target account ID to which the resource stack belongs.</summary>
        /// <remarks>
        /// In the self-service management permission mode, the account is an Alibaba Cloud account.
        /// In service management permission mode, this account is a member account of the resource directory.
        /// </remarks>
        [JsiiProperty(name: "stackInstanceAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StackInstanceAccountId
        {
            get;
        }

        /// <summary>Property stackInstanceRegionId: The region to which the resource stack belongs.</summary>
        [JsiiProperty(name: "stackInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StackInstanceRegionId
        {
            get;
        }

        /// <summary>Property outputOption: Whether to return the Outputs parameter resource stack output list.</summary>
        [JsiiProperty(name: "outputOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OutputOption
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `StackInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IStackInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.datasource.StackInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.Datasource.IStackInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property stackGroupName: Resource stack group name.</summary>
            /// <remarks>
            /// Names are unique within a single region.
            /// The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
            /// </remarks>
            [JsiiProperty(name: "stackGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StackGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property stackInstanceAccountId: The target account ID to which the resource stack belongs.</summary>
            /// <remarks>
            /// In the self-service management permission mode, the account is an Alibaba Cloud account.
            /// In service management permission mode, this account is a member account of the resource directory.
            /// </remarks>
            [JsiiProperty(name: "stackInstanceAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StackInstanceAccountId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property stackInstanceRegionId: The region to which the resource stack belongs.</summary>
            [JsiiProperty(name: "stackInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StackInstanceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property outputOption: Whether to return the Outputs parameter resource stack output list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "outputOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OutputOption
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
