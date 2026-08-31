using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `RosResourceAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-resourceattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosResourceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosResourceAttachmentProps")]
    public interface IRosResourceAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the GA instance.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: associatedResourceId: The ID of the associated resource.
        /// </remarks>
        [JsiiProperty(name: "associatedResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AssociatedResourceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: associatedResourceRegionId: The region ID of the associated resource.
        /// </remarks>
        [JsiiProperty(name: "associatedResourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AssociatedResourceRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: associatedResourceType: The type of the associated resource.
        /// </remarks>
        [JsiiProperty(name: "associatedResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AssociatedResourceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: associatedMode: The mode of the association.
        /// </remarks>
        [JsiiProperty(name: "associatedMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AssociatedMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosResourceAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-resourceattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosResourceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosResourceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IRosResourceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: acceleratorId: The ID of the GA instance.
            /// </remarks>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: associatedResourceId: The ID of the associated resource.
            /// </remarks>
            [JsiiProperty(name: "associatedResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AssociatedResourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: associatedResourceRegionId: The region ID of the associated resource.
            /// </remarks>
            [JsiiProperty(name: "associatedResourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AssociatedResourceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: associatedResourceType: The type of the associated resource.
            /// </remarks>
            [JsiiProperty(name: "associatedResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AssociatedResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: associatedMode: The mode of the association.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "associatedMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AssociatedMode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
