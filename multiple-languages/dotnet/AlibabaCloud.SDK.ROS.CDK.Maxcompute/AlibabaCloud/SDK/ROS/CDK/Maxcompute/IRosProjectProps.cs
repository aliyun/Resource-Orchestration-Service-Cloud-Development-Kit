using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Maxcompute
{
    /// <summary>Properties for defining a `RosProject`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.RosProjectProps")]
    public interface IRosProjectProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: The name of the project.
        /// It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: Quota payment type, support PayAsYouGo, Subscription.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: comment: The comments of project.
        /// </remarks>
        [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Comment
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultQuota: Default Computing Resource Group.
        /// </remarks>
        [JsiiProperty(name: "defaultQuota", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultQuota
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ipWhiteList: IP whitelist.
        /// </remarks>
        [JsiiProperty(name: "ipWhiteList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosProject.IpWhiteListProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpWhiteList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: properties: Project base attributes.
        /// </remarks>
        [JsiiProperty(name: "properties", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosProject.PropertiesProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Properties
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosProject`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.RosProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Maxcompute.IRosProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the project.
            /// It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: chargeType: Quota payment type, support PayAsYouGo, Subscription.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: comment: The comments of project.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Comment
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultQuota: Default Computing Resource Group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultQuota", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultQuota
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipWhiteList: IP whitelist.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipWhiteList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosProject.IpWhiteListProperty\"}]}}", isOptional: true)]
            public object? IpWhiteList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: properties: Project base attributes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "properties", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosProject.PropertiesProperty\"}]}}", isOptional: true)]
            public object? Properties
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
