using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `OssExternalStore`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IOssExternalStoreProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.OssExternalStoreProps")]
    public interface IOssExternalStoreProps
    {
        /// <summary>Property accessId: The AccessKey ID.</summary>
        [JsiiProperty(name: "accessId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessId
        {
            get;
        }

        /// <summary>Property accessKey: The AccessKey secret.</summary>
        [JsiiProperty(name: "accessKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessKey
        {
            get;
        }

        /// <summary>Property bucket: The name of the OSS bucket.</summary>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <summary>Property columns: The associated fields.</summary>
        [JsiiProperty(name: "columns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosOssExternalStore.ColumnsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Columns
        {
            get;
        }

        /// <summary>Property endpoint: The OSS endpoint.</summary>
        [JsiiProperty(name: "endpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Endpoint
        {
            get;
        }

        /// <summary>Property externalStoreName: The name of the external store.</summary>
        [JsiiProperty(name: "externalStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExternalStoreName
        {
            get;
        }

        /// <summary>Property objects: The associated OSS objects.</summary>
        /// <remarks>
        /// Valid values of n: 1 to 100.
        /// </remarks>
        [JsiiProperty(name: "objects", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Objects
        {
            get;
        }

        /// <summary>Property project: A short description of struct.</summary>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Project
        {
            get;
        }

        /// <summary>Property storeType: The type of the external store.</summary>
        /// <remarks>
        /// Set the value to oss.
        /// </remarks>
        [JsiiProperty(name: "storeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StoreType
        {
            get;
        }

        /// <summary>Properties for defining a `OssExternalStore`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IOssExternalStoreProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.OssExternalStoreProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IOssExternalStoreProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessId: The AccessKey ID.</summary>
            [JsiiProperty(name: "accessId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accessKey: The AccessKey secret.</summary>
            [JsiiProperty(name: "accessKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bucket: The name of the OSS bucket.</summary>
            [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property columns: The associated fields.</summary>
            [JsiiProperty(name: "columns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosOssExternalStore.ColumnsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Columns
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endpoint: The OSS endpoint.</summary>
            [JsiiProperty(name: "endpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Endpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property externalStoreName: The name of the external store.</summary>
            [JsiiProperty(name: "externalStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExternalStoreName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property objects: The associated OSS objects.</summary>
            /// <remarks>
            /// Valid values of n: 1 to 100.
            /// </remarks>
            [JsiiProperty(name: "objects", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Objects
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property project: A short description of struct.</summary>
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Project
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property storeType: The type of the external store.</summary>
            /// <remarks>
            /// Set the value to oss.
            /// </remarks>
            [JsiiProperty(name: "storeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StoreType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
