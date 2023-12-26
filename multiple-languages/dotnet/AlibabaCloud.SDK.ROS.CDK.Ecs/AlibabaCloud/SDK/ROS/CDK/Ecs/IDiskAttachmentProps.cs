using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `DiskAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-diskattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDiskAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.DiskAttachmentProps")]
    public interface IDiskAttachmentProps
    {
        /// <summary>Property diskId: The disk id to attached.</summary>
        [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DiskId
        {
            get;
        }

        /// <summary>Property instanceId: The instanceId to attach the disk.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.</summary>
        /// <remarks>
        /// Default to true.
        /// </remarks>
        [JsiiProperty(name: "deleteAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeleteAutoSnapshot
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.</summary>
        [JsiiProperty(name: "deleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeleteWithInstance
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property device: The device where the volume is exposed on the instance.</summary>
        /// <remarks>
        /// could be /dev/xvd[b-z]. If not specification, will use default value.
        /// </remarks>
        [JsiiProperty(name: "device", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Device
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DiskAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-diskattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDiskAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.DiskAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IDiskAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property diskId: The disk id to attached.</summary>
            [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DiskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The instanceId to attach the disk.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.</summary>
            /// <remarks>
            /// Default to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deleteAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteAutoSnapshot
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteWithInstance
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property device: The device where the volume is exposed on the instance.</summary>
            /// <remarks>
            /// could be /dev/xvd[b-z]. If not specification, will use default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "device", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Device
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
