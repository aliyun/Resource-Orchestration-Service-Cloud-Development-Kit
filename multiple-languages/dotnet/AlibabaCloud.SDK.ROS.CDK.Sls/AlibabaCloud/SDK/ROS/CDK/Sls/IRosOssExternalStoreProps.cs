using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `RosOssExternalStore`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosOssExternalStoreProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosOssExternalStoreProps")]
    public interface IRosOssExternalStoreProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessId: The AccessKey ID.
        /// </remarks>
        [JsiiProperty(name: "accessId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accessKey: The AccessKey secret.
        /// </remarks>
        [JsiiProperty(name: "accessKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessKey
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bucket: The name of the OSS bucket.
        /// </remarks>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: columns: The associated fields.
        /// </remarks>
        [JsiiProperty(name: "columns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosOssExternalStore.ColumnsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Columns
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endpoint: The OSS endpoint.
        /// </remarks>
        [JsiiProperty(name: "endpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Endpoint
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: externalStoreName: The name of the external store.
        /// </remarks>
        [JsiiProperty(name: "externalStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExternalStoreName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: objects: The associated OSS objects. Valid values of n: 1 to 100.
        /// </remarks>
        [JsiiProperty(name: "objects", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Objects
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: project: A short description of struct
        /// </remarks>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Project
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: storeType: The type of the external store. Set the value to oss.
        /// </remarks>
        [JsiiProperty(name: "storeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StoreType
        {
            get;
        }

        /// <summary>Properties for defining a `RosOssExternalStore`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosOssExternalStoreProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosOssExternalStoreProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IRosOssExternalStoreProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accessId: The AccessKey ID.
            /// </remarks>
            [JsiiProperty(name: "accessId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accessKey: The AccessKey secret.
            /// </remarks>
            [JsiiProperty(name: "accessKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bucket: The name of the OSS bucket.
            /// </remarks>
            [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: columns: The associated fields.
            /// </remarks>
            [JsiiProperty(name: "columns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosOssExternalStore.ColumnsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Columns
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endpoint: The OSS endpoint.
            /// </remarks>
            [JsiiProperty(name: "endpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Endpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: externalStoreName: The name of the external store.
            /// </remarks>
            [JsiiProperty(name: "externalStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExternalStoreName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: objects: The associated OSS objects. Valid values of n: 1 to 100.
            /// </remarks>
            [JsiiProperty(name: "objects", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Objects
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: project: A short description of struct
            /// </remarks>
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Project
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: storeType: The type of the external store. Set the value to oss.
            /// </remarks>
            [JsiiProperty(name: "storeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StoreType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
