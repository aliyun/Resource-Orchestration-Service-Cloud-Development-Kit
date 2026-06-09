using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eventbridge
{
    /// <summary>Properties for defining a `ApiDestination`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IApiDestinationProps), fullyQualifiedName: "@alicloud/ros-cdk-eventbridge.ApiDestinationProps")]
    public interface IApiDestinationProps
    {
        /// <summary>Property apiDestinationName: The name of the api.</summary>
        /// <remarks>
        /// The maximum length is 127 characters. Minimum length 2 characters.
        /// </remarks>
        [JsiiProperty(name: "apiDestinationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApiDestinationName
        {
            get;
        }

        /// <summary>Property connectionName: The connection configuration name.</summary>
        /// <remarks>
        /// The maximum length is 127 characters. Minimum length 2 characters.
        ///
        /// <list type="bullet">
        /// <description>Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "connectionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConnectionName
        {
            get;
        }

        /// <summary>Property httpApiParameters: Configuration information for API endpoints.</summary>
        [JsiiProperty(name: "httpApiParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RosApiDestination.HttpApiParametersProperty\"}]}}")]
        object HttpApiParameters
        {
            get;
        }

        /// <summary>Property description: The description of the api.</summary>
        /// <remarks>
        /// It must be no more than 255 characters.
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

        /// <summary>Properties for defining a `ApiDestination`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IApiDestinationProps), fullyQualifiedName: "@alicloud/ros-cdk-eventbridge.ApiDestinationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eventbridge.IApiDestinationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property apiDestinationName: The name of the api.</summary>
            /// <remarks>
            /// The maximum length is 127 characters. Minimum length 2 characters.
            /// </remarks>
            [JsiiProperty(name: "apiDestinationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApiDestinationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property connectionName: The connection configuration name.</summary>
            /// <remarks>
            /// The maximum length is 127 characters. Minimum length 2 characters.
            ///
            /// <list type="bullet">
            /// <description>Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "connectionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property httpApiParameters: Configuration information for API endpoints.</summary>
            [JsiiProperty(name: "httpApiParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RosApiDestination.HttpApiParametersProperty\"}]}}")]
            public object HttpApiParameters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the api.</summary>
            /// <remarks>
            /// It must be no more than 255 characters.
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
