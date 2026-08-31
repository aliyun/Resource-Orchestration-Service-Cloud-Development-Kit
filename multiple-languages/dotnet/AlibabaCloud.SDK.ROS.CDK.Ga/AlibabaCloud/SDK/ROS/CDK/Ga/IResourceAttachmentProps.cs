using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `ResourceAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-resourceattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IResourceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.ResourceAttachmentProps")]
    public interface IResourceAttachmentProps
    {
        /// <summary>Property acceleratorId: The ID of the GA instance.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <summary>Property associatedResourceId: The ID of the associated resource.</summary>
        [JsiiProperty(name: "associatedResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AssociatedResourceId
        {
            get;
        }

        /// <summary>Property associatedResourceRegionId: The region ID of the associated resource.</summary>
        [JsiiProperty(name: "associatedResourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AssociatedResourceRegionId
        {
            get;
        }

        /// <summary>Property associatedResourceType: The type of the associated resource.</summary>
        [JsiiProperty(name: "associatedResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AssociatedResourceType
        {
            get;
        }

        /// <summary>Property associatedMode: The mode of the association.</summary>
        [JsiiProperty(name: "associatedMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AssociatedMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ResourceAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-resourceattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IResourceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.ResourceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IResourceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property acceleratorId: The ID of the GA instance.</summary>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property associatedResourceId: The ID of the associated resource.</summary>
            [JsiiProperty(name: "associatedResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AssociatedResourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property associatedResourceRegionId: The region ID of the associated resource.</summary>
            [JsiiProperty(name: "associatedResourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AssociatedResourceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property associatedResourceType: The type of the associated resource.</summary>
            [JsiiProperty(name: "associatedResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AssociatedResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property associatedMode: The mode of the association.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "associatedMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AssociatedMode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
