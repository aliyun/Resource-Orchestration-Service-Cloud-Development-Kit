using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vod
{
    /// <summary>Properties for defining a `ALIYUN::VOD::Storage`.</summary>
    [JsiiInterface(nativeType: typeof(IStorageProps), fullyQualifiedName: "@alicloud/ros-cdk-vod.StorageProps")]
    public interface IStorageProps
    {
        /// <summary>Property storageLocation: Storage address.</summary>
        [JsiiProperty(name: "storageLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StorageLocation
        {
            get;
        }

        /// <summary>Property storageType: Storage Type.</summary>
        [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StorageType
        {
            get;
        }

        /// <summary>Property defaultUpload: Whether to upload by default.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IStorageProps), fullyQualifiedName: "@alicloud/ros-cdk-vod.StorageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vod.IStorageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property storageLocation: Storage address.</summary>
            [JsiiProperty(name: "storageLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StorageLocation
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property storageType: Storage Type.</summary>
            [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property defaultUpload: Whether to upload by default.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "defaultUpload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultUpload
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
