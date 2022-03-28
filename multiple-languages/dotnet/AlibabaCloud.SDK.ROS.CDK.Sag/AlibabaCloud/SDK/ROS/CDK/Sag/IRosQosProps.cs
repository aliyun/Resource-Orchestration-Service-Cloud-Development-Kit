using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `ALIYUN::SAG::Qos`.</summary>
    [JsiiInterface(nativeType: typeof(IRosQosProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosQosProps")]
    public interface IRosQosProps
    {
        /// <remarks>
        /// <strong>Property</strong>: qosName: The name of the QoS policy.
        /// The name must be 2 to 100 characters in length and can contain letters, digits, periods
        /// (.), underscores (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "qosName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QosName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: qosDescription: The description of the QoS policy.
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

        /// <summary>Properties for defining a `ALIYUN::SAG::Qos`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosQosProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosQosProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IRosQosProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: qosName: The name of the QoS policy.
            /// The name must be 2 to 100 characters in length and can contain letters, digits, periods
            /// (.), underscores (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "qosName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QosName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: qosDescription: The description of the QoS policy.
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
