using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eventbridge
{
    /// <summary>Properties for defining a `Connection`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-eventbridge.ConnectionProps")]
    public interface IConnectionProps
    {
        /// <summary>Property connectionName: The connection configuration name.</summary>
        /// <remarks>
        /// The maximum length is 127 characters. Minimum length 2 characters.
        /// </remarks>
        [JsiiProperty(name: "connectionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConnectionName
        {
            get;
        }

        /// <summary>Property networkParameters: Network Configuration Data Structure.</summary>
        [JsiiProperty(name: "networkParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RosConnection.NetworkParametersProperty\"}]}}")]
        object NetworkParameters
        {
            get;
        }

        /// <summary>Property authParameters: Authentication Data Structure.</summary>
        [JsiiProperty(name: "authParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RosConnection.AuthParametersProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthParameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The connection configuration description.</summary>
        /// <remarks>
        /// The maximum length is 255 characters.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Connection`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-eventbridge.ConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eventbridge.IConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property connectionName: The connection configuration name.</summary>
            /// <remarks>
            /// The maximum length is 127 characters. Minimum length 2 characters.
            /// </remarks>
            [JsiiProperty(name: "connectionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property networkParameters: Network Configuration Data Structure.</summary>
            [JsiiProperty(name: "networkParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RosConnection.NetworkParametersProperty\"}]}}")]
            public object NetworkParameters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property authParameters: Authentication Data Structure.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "authParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RosConnection.AuthParametersProperty\"}]}}", isOptional: true)]
            public object? AuthParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The connection configuration description.</summary>
            /// <remarks>
            /// The maximum length is 255 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
