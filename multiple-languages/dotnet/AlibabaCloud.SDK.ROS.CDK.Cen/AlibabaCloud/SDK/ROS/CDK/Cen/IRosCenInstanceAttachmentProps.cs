using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::CenInstanceAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IRosCenInstanceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosCenInstanceAttachmentProps")]
    public interface IRosCenInstanceAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
        string CenId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceId: The ID of the network to attach.
        /// </remarks>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string ChildInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"primitive\":\"string\"}")]
        string ChildInstanceRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
        /// </remarks>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"primitive\":\"string\"}")]
        string ChildInstanceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceOwnerId: The account ID to which the network belongs.
        /// </remarks>
        [JsiiProperty(name: "childInstanceOwnerId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? ChildInstanceOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CEN::CenInstanceAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosCenInstanceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosCenInstanceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosCenInstanceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: The ID of the CEN instance.
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
            public string CenId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceId: The ID of the network to attach.
            /// </remarks>
            [JsiiProperty(name: "childInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string ChildInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceRegionId: The ID of the region where the network is located. The ID of the region where the network is located.
            /// </remarks>
            [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"primitive\":\"string\"}")]
            public string ChildInstanceRegionId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceType: The type of the network to attach. Support VPC, VBR or CCN.
            /// </remarks>
            [JsiiProperty(name: "childInstanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string ChildInstanceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceOwnerId: The account ID to which the network belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "childInstanceOwnerId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? ChildInstanceOwnerId
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
