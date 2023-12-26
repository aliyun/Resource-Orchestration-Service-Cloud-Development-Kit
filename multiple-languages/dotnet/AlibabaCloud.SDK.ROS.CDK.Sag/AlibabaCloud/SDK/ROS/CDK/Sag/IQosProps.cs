using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `Qos`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qos
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IQosProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.QosProps")]
    public interface IQosProps
    {
        /// <summary>Property qosName: The name of the QoS policy.</summary>
        /// <remarks>
        /// The name must be 2 to 100 characters in length and can contain letters, digits, periods
        /// (.), underscores (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "qosName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QosName
        {
            get;
        }

        /// <summary>Property qosDescription: The description of the QoS policy.</summary>
        /// <remarks>
        /// The description must be 1 to 512 characters in length and can contain letters, digits,
        /// underscores (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "qosDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QosDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Qos`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qos
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IQosProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.QosProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IQosProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property qosName: The name of the QoS policy.</summary>
            /// <remarks>
            /// The name must be 2 to 100 characters in length and can contain letters, digits, periods
            /// (.), underscores (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "qosName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QosName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property qosDescription: The description of the QoS policy.</summary>
            /// <remarks>
            /// The description must be 1 to 512 characters in length and can contain letters, digits,
            /// underscores (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "qosDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QosDescription
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
