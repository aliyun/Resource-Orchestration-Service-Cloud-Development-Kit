using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::CenInstanceAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(ICenInstanceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenInstanceAttachmentProps")]
    public interface ICenInstanceAttachmentProps
    {
        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
        string CenId
        {
            get;
        }

        /// <summary>Property childInstanceId: The ID of the network to attach.</summary>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string ChildInstanceId
        {
            get;
        }

        /// <summary>Property childInstanceRegionId: The ID of the region where the network is located.</summary>
        /// <remarks>
        /// The ID of the region where the network is located.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"primitive\":\"string\"}")]
        string ChildInstanceRegionId
        {
            get;
        }

        /// <summary>Property childInstanceType: The type of the network to attach.</summary>
        /// <remarks>
        /// Support VPC, VBR or CCN.
        /// </remarks>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"primitive\":\"string\"}")]
        string ChildInstanceType
        {
            get;
        }

        /// <summary>Property childInstanceOwnerId: The account ID to which the network belongs.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(ICenInstanceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenInstanceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ICenInstanceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
            public string CenId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property childInstanceId: The ID of the network to attach.</summary>
            [JsiiProperty(name: "childInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string ChildInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property childInstanceRegionId: The ID of the region where the network is located.</summary>
            /// <remarks>
            /// The ID of the region where the network is located.
            /// </remarks>
            [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"primitive\":\"string\"}")]
            public string ChildInstanceRegionId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property childInstanceType: The type of the network to attach.</summary>
            /// <remarks>
            /// Support VPC, VBR or CCN.
            /// </remarks>
            [JsiiProperty(name: "childInstanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string ChildInstanceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property childInstanceOwnerId: The account ID to which the network belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "childInstanceOwnerId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? ChildInstanceOwnerId
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
