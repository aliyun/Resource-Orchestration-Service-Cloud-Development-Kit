using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosCenInstanceAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstanceattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCenInstanceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosCenInstanceAttachmentProps")]
    public interface IRosCenInstanceAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceId: The ID of the network to attach.
        /// </remarks>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChildInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChildInstanceRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
        /// </remarks>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChildInstanceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceOwnerId: The account ID to which the network belongs.
        /// </remarks>
        [JsiiProperty(name: "childInstanceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChildInstanceOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosCenInstanceAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstanceattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCenInstanceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosCenInstanceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosCenInstanceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: The ID of the CEN instance.
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceId: The ID of the network to attach.
            /// </remarks>
            [JsiiProperty(name: "childInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChildInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
            /// </remarks>
            [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChildInstanceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
            /// </remarks>
            [JsiiProperty(name: "childInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChildInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceOwnerId: The account ID to which the network belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "childInstanceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChildInstanceOwnerId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
