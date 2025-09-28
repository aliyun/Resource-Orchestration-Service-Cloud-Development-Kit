using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Amqp
{
    /// <summary>Properties for defining a `RosAccount`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-account
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.RosAccountProps")]
    public interface IRosAccountProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountAccessKey: Your Alibaba Cloud account or RAM user's AccessKey ID. For obtaining it, visit RAM console.
        /// If you use the static username and password created by the AccessKey of the RAM user to access the RabbitMQ version of the message queue and send and receive messages, make sure that the RAM user has been granted the permission of sending and receiving messages. For more information, see RAM permissions policy.
        /// </remarks>
        [JsiiProperty(name: "accountAccessKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountAccessKey
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountAccessKeySecret: Your Alibaba Cloud account or RAM user's AccessKeySecret.
        /// </remarks>
        [JsiiProperty(name: "accountAccessKeySecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountAccessKeySecret
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: Message Queue The ID of the RabbitMQ version instance, indicating which instance you need to create a static username and password.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `RosAccount`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-account
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.RosAccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Amqp.IRosAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accountAccessKey: Your Alibaba Cloud account or RAM user's AccessKey ID. For obtaining it, visit RAM console.
            /// If you use the static username and password created by the AccessKey of the RAM user to access the RabbitMQ version of the message queue and send and receive messages, make sure that the RAM user has been granted the permission of sending and receiving messages. For more information, see RAM permissions policy.
            /// </remarks>
            [JsiiProperty(name: "accountAccessKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountAccessKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accountAccessKeySecret: Your Alibaba Cloud account or RAM user's AccessKeySecret.
            /// </remarks>
            [JsiiProperty(name: "accountAccessKeySecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountAccessKeySecret
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Message Queue The ID of the RabbitMQ version instance, indicating which instance you need to create a static username and password.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
