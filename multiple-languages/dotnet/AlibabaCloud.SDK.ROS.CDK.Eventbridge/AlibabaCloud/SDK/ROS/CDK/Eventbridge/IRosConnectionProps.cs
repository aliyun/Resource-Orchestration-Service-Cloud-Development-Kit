using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eventbridge
{
    /// <summary>Properties for defining a `RosConnection`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-eventbridge.RosConnectionProps")]
    public interface IRosConnectionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
        /// </remarks>
        [JsiiProperty(name: "connectionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConnectionName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkParameters: Network Configuration Data Structure.
        /// </remarks>
        [JsiiProperty(name: "networkParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RosConnection.NetworkParametersProperty\"}]}}")]
        object NetworkParameters
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: authParameters: Authentication Data Structure.
        /// </remarks>
        [JsiiProperty(name: "authParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RosConnection.AuthParametersProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthParameters
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The connection configuration description. The maximum length is 255 characters.
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

        /// <summary>Properties for defining a `RosConnection`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-eventbridge.RosConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eventbridge.IRosConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
            /// </remarks>
            [JsiiProperty(name: "connectionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkParameters: Network Configuration Data Structure.
            /// </remarks>
            [JsiiProperty(name: "networkParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RosConnection.NetworkParametersProperty\"}]}}")]
            public object NetworkParameters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: authParameters: Authentication Data Structure.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "authParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RosConnection.AuthParametersProperty\"}]}}", isOptional: true)]
            public object? AuthParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The connection configuration description. The maximum length is 255 characters.
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
