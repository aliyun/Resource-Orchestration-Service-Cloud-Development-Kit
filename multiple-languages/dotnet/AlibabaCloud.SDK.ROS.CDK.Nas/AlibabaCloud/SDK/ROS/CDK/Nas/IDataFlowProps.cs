using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `DataFlow`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDataFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.DataFlowProps")]
    public interface IDataFlowProps
    {
        /// <summary>Property fileSystemId: File system ID.</summary>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FileSystemId
        {
            get;
        }

        /// <summary>Property fsetId: Fileset ID.</summary>
        [JsiiProperty(name: "fsetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FsetId
        {
            get;
        }

        /// <summary>Property sourceStorage: Access path stored at the source.Format: &lt;storage Type&gt;: \/\/ &lt;PATH&gt;. in: Storage Type: Currently only supports OSS. PATH: OSS's bucket name.Limit the following. Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number. The length is 8 ~ 128 English characters. Use UTF-8 encoding. Can't start with http: \/\/ and https: \/\/. Explain that the OSS BUCKET must be the bucket that exists in the region.</summary>
        [JsiiProperty(name: "sourceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceStorage
        {
            get;
        }

        /// <summary>Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB\/s. Value:  600 1200 1500.</summary>
        /// <remarks>
        /// Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
        /// </remarks>
        [JsiiProperty(name: "throughput", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Throughput
        {
            get;
        }

        /// <summary>Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory.</summary>
        /// <remarks>
        /// If there is data update, start the automatic update task, unit: minute.
        /// Scope of value: 5 ~ 525600, default value: 10.
        /// </remarks>
        [JsiiProperty(name: "autoRefreshInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRefreshInterval
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy.</summary>
        /// <remarks>
        /// None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks.
        /// Importchanged: The data update at the source automatically imports CPFS.
        /// </remarks>
        [JsiiProperty(name: "autoRefreshPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRefreshPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRefreshs:.</summary>
        [JsiiProperty(name: "autoRefreshs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nas.RosDataFlow.AutoRefreshsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRefreshs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Description of data flow.</summary>
        /// <remarks>
        /// limit:
        /// The length is 2 to 128 English or Chinese characters.
        /// Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
        /// It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceSecurityType: The type of safety protection types of the source storage.</summary>
        /// <remarks>
        /// If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
        /// No (default value): It means that the source storage does not need to be accessed by safe protection.
        /// SSL: Protective access through SSL certificates.
        /// </remarks>
        [JsiiProperty(name: "sourceSecurityType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceSecurityType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DataFlow`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDataFlowProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.DataFlowProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IDataFlowProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property fileSystemId: File system ID.</summary>
            [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FileSystemId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property fsetId: Fileset ID.</summary>
            [JsiiProperty(name: "fsetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FsetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceStorage: Access path stored at the source.Format: &lt;storage Type&gt;: \/\/ &lt;PATH&gt;. in: Storage Type: Currently only supports OSS. PATH: OSS's bucket name.Limit the following. Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number. The length is 8 ~ 128 English characters. Use UTF-8 encoding. Can't start with http: \/\/ and https: \/\/. Explain that the OSS BUCKET must be the bucket that exists in the region.</summary>
            [JsiiProperty(name: "sourceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceStorage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB\/s. Value:  600 1200 1500.</summary>
            /// <remarks>
            /// Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
            /// </remarks>
            [JsiiProperty(name: "throughput", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Throughput
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory.</summary>
            /// <remarks>
            /// If there is data update, start the automatic update task, unit: minute.
            /// Scope of value: 5 ~ 525600, default value: 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRefreshInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRefreshInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy.</summary>
            /// <remarks>
            /// None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks.
            /// Importchanged: The data update at the source automatically imports CPFS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRefreshPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRefreshPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRefreshs:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRefreshs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nas.RosDataFlow.AutoRefreshsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AutoRefreshs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Description of data flow.</summary>
            /// <remarks>
            /// limit:
            /// The length is 2 to 128 English or Chinese characters.
            /// Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
            /// It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceSecurityType: The type of safety protection types of the source storage.</summary>
            /// <remarks>
            /// If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
            /// No (default value): It means that the source storage does not need to be accessed by safe protection.
            /// SSL: Protective access through SSL certificates.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceSecurityType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceSecurityType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
