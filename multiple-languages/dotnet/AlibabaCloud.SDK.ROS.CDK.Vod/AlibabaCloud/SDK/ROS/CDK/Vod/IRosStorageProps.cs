using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vod
{
    /// <summary>Properties for defining a `ALIYUN::VOD::Storage`.</summary>
    [JsiiInterface(nativeType: typeof(IRosStorageProps), fullyQualifiedName: "@alicloud/ros-cdk-vod.RosStorageProps")]
    public interface IRosStorageProps
    {
        /// <remarks>
        /// <strong>Property</strong>: storageLocation: Storage address.
        /// </remarks>
        [JsiiProperty(name: "storageLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StorageLocation
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: storageType: Storage Type.
        /// </remarks>
        [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StorageType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultUpload: Whether to upload by default.
        /// </remarks>
        [JsiiProperty(name: "defaultUpload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultUpload
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VOD::Storage`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosStorageProps), fullyQualifiedName: "@alicloud/ros-cdk-vod.RosStorageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vod.IRosStorageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: storageLocation: Storage address.
            /// </remarks>
            [JsiiProperty(name: "storageLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StorageLocation
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: storageType: Storage Type.
            /// </remarks>
            [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultUpload: Whether to upload by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultUpload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultUpload
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
