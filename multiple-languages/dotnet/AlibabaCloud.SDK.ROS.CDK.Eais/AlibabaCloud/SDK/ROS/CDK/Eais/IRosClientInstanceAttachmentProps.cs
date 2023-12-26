using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eais
{
    /// <summary>Properties for defining a `RosClientInstanceAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-clientinstanceattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosClientInstanceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-eais.RosClientInstanceAttachmentProps")]
    public interface IRosClientInstanceAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
        /// </remarks>
        [JsiiProperty(name: "clientInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClientInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The EAIS instance ID.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `RosClientInstanceAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-clientinstanceattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosClientInstanceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-eais.RosClientInstanceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eais.IRosClientInstanceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
            /// </remarks>
            [JsiiProperty(name: "clientInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClientInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The EAIS instance ID.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
