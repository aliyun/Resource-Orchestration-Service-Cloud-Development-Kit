using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Graphdatabase
{
    /// <summary>Properties for defining a `RosAccount`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-account
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-graphdatabase.RosAccountProps")]
    public interface IRosAccountProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountName: Account name.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountPassword: Account password.
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountPassword
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: Instance Id.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountDescription: Account description.
        /// </remarks>
        [JsiiProperty(name: "accountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAccount`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-account
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-graphdatabase.RosAccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Graphdatabase.IRosAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accountName: Account name.
            /// </remarks>
            [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accountPassword: Account password.
            /// </remarks>
            [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: Instance Id.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accountDescription: Account description.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountDescription
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
