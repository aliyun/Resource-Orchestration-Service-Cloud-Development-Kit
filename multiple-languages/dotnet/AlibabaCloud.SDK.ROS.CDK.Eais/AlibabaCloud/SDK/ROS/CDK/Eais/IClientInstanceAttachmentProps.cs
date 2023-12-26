using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eais
{
    /// <summary>Properties for defining a `ClientInstanceAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-clientinstanceattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IClientInstanceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-eais.ClientInstanceAttachmentProps")]
    public interface IClientInstanceAttachmentProps
    {
        /// <summary>Property clientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.</summary>
        [JsiiProperty(name: "clientInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClientInstanceId
        {
            get;
        }

        /// <summary>Property instanceId: The EAIS instance ID.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `ClientInstanceAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-clientinstanceattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IClientInstanceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-eais.ClientInstanceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eais.IClientInstanceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.</summary>
            [JsiiProperty(name: "clientInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClientInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The EAIS instance ID.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
