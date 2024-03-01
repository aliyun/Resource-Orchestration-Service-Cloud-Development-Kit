using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Properties for defining a `DiskInstanceAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-diskinstanceattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDiskInstanceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.DiskInstanceAttachmentProps")]
    public interface IDiskInstanceAttachmentProps
    {
        /// <summary>Property diskId: The ID of the cloud disk to be mounted.</summary>
        /// <remarks>
        /// The Cloud Disk (DiskId) and the instance (InstanceId) must be on the same node.
        /// </remarks>
        [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DiskId
        {
            get;
        }

        /// <summary>Property instanceId: Instance ID.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property deleteWithInstance: Whether the cloud disk to be mounted is released with the instance Value: true: When the instance is released, the cloud disk is released together with the instance.</summary>
        /// <remarks>
        /// false: When the instance is released, the cloud disk is retained and is not released together with the instance.
        /// Empty means false by default.
        /// </remarks>
        [JsiiProperty(name: "deleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeleteWithInstance
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DiskInstanceAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-diskinstanceattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDiskInstanceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.DiskInstanceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.IDiskInstanceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property diskId: The ID of the cloud disk to be mounted.</summary>
            /// <remarks>
            /// The Cloud Disk (DiskId) and the instance (InstanceId) must be on the same node.
            /// </remarks>
            [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DiskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: Instance ID.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property deleteWithInstance: Whether the cloud disk to be mounted is released with the instance Value: true: When the instance is released, the cloud disk is released together with the instance.</summary>
            /// <remarks>
            /// false: When the instance is released, the cloud disk is retained and is not released together with the instance.
            /// Empty means false by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteWithInstance
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
