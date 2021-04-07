using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::CenInstanceAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(ICenInstanceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenInstanceAttachmentProps")]
    public interface ICenInstanceAttachmentProps
    {
        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Property childInstanceId: The ID of the network to attach.</summary>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChildInstanceId
        {
            get;
        }

        /// <summary>Property childInstanceRegionId: The ID of the region where the network is located.</summary>
        /// <remarks>
        /// The ID of the region where the network is located.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChildInstanceRegionId
        {
            get;
        }

        /// <summary>Property childInstanceType: The type of the network to attach.</summary>
        /// <remarks>
        /// Support VPC, VBR or CCN.
        /// </remarks>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChildInstanceType
        {
            get;
        }

        /// <summary>Property childInstanceOwnerId: The account ID to which the network belongs.</summary>
        [JsiiProperty(name: "childInstanceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChildInstanceOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CEN::CenInstanceAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICenInstanceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenInstanceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ICenInstanceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property childInstanceId: The ID of the network to attach.</summary>
            [JsiiProperty(name: "childInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChildInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property childInstanceRegionId: The ID of the region where the network is located.</summary>
            /// <remarks>
            /// The ID of the region where the network is located.
            /// </remarks>
            [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChildInstanceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property childInstanceType: The type of the network to attach.</summary>
            /// <remarks>
            /// Support VPC, VBR or CCN.
            /// </remarks>
            [JsiiProperty(name: "childInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChildInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property childInstanceOwnerId: The account ID to which the network belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "childInstanceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChildInstanceOwnerId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
