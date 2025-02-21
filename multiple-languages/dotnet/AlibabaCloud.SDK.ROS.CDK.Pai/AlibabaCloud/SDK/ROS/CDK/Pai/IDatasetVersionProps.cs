using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `DatasetVersion`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-datasetversion
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDatasetVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.DatasetVersionProps")]
    public interface IDatasetVersionProps
    {
        /// <summary>Property datasetId: The ID of the dataset.</summary>
        [JsiiProperty(name: "datasetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DatasetId
        {
            get;
        }

        /// <summary>Property dataSourceType: The data source type.</summary>
        /// <remarks>
        /// The following values are supported:
        ///
        /// <list type="bullet">
        /// <description>OSS: Alibaba Cloud Object Storage (OSS).</description>
        /// <description>NAS: Alibaba cloud file storage (NAS).</description>
        /// <description>CPFS</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "dataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataSourceType
        {
            get;
        }

        /// <summary>Property property: The properties of the dataset.</summary>
        /// <remarks>
        /// The following values are supported:
        ///
        /// <list type="bullet">
        /// <description>FILE: FILE.</description>
        /// <description>DIRECTORY: folder.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "property", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Property
        {
            get;
        }

        /// <summary>Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss:\/\/bucket.endpoint\/object' - The data source type is NAS: The general NAS format is: 'nas:\/\/&lt;nasfisid&gt;.region\/subpath\/to\/dir\/'; CPFS1.0:'nas:\/\/&lt;cpfs-fsid&gt;.region\/subpath\/to\/dir \/'; CPFS2.0:'nas:\/\/&lt;cpfs-fsid&gt;.region\/&lt;protocolserviceid&gt;\/'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-&lt;8-bit ascii characters&gt;;CPFS2.0 is cpfs-&lt;16 ascii characters&gt;.</summary>
        [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Uri
        {
            get;
        }

        /// <summary>Property dataCount: The number of dataset files, in units of pieces.</summary>
        [JsiiProperty(name: "dataCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dataSize: The size of the dataset file in bytes.</summary>
        [JsiiProperty(name: "dataSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: To create a custom description for dataset versions in order to distinguish between different versions of the dataset.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property labels: Dataset version tag list.</summary>
        [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosDatasetVersion.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Labels
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property options: The extended field, which is of the JsonString type.</summary>
        /// <remarks>
        /// When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
        /// </remarks>
        [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Options
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceId: The data source ID.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>When the SourceType is USER, SourceId can be customized.</description>
        /// <description>When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.</description>
        /// <description>When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceType: The data source type.</summary>
        /// <remarks>
        /// The default value is USER. The following values are supported:
        ///
        /// <list type="bullet">
        /// <description>PAI-PUBLIC-DATASET:PAI public dataset.</description>
        /// <description>ITAG: The dataset generated by the iTAG module annotation result.</description>
        /// <description>USER: The data set registered by the USER.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DatasetVersion`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-datasetversion
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDatasetVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.DatasetVersionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IDatasetVersionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property datasetId: The ID of the dataset.</summary>
            [JsiiProperty(name: "datasetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DatasetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dataSourceType: The data source type.</summary>
            /// <remarks>
            /// The following values are supported:
            ///
            /// <list type="bullet">
            /// <description>OSS: Alibaba Cloud Object Storage (OSS).</description>
            /// <description>NAS: Alibaba cloud file storage (NAS).</description>
            /// <description>CPFS</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "dataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataSourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property property: The properties of the dataset.</summary>
            /// <remarks>
            /// The following values are supported:
            ///
            /// <list type="bullet">
            /// <description>FILE: FILE.</description>
            /// <description>DIRECTORY: folder.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "property", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Property
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss:\/\/bucket.endpoint\/object' - The data source type is NAS: The general NAS format is: 'nas:\/\/&lt;nasfisid&gt;.region\/subpath\/to\/dir\/'; CPFS1.0:'nas:\/\/&lt;cpfs-fsid&gt;.region\/subpath\/to\/dir \/'; CPFS2.0:'nas:\/\/&lt;cpfs-fsid&gt;.region\/&lt;protocolserviceid&gt;\/'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-&lt;8-bit ascii characters&gt;;CPFS2.0 is cpfs-&lt;16 ascii characters&gt;.</summary>
            [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Uri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dataCount: The number of dataset files, in units of pieces.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dataSize: The size of the dataset file in bytes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: To create a custom description for dataset versions in order to distinguish between different versions of the dataset.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property labels: Dataset version tag list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosDatasetVersion.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Labels
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property options: The extended field, which is of the JsonString type.</summary>
            /// <remarks>
            /// When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Options
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceId: The data source ID.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>When the SourceType is USER, SourceId can be customized.</description>
            /// <description>When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.</description>
            /// <description>When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceType: The data source type.</summary>
            /// <remarks>
            /// The default value is USER. The following values are supported:
            ///
            /// <list type="bullet">
            /// <description>PAI-PUBLIC-DATASET:PAI public dataset.</description>
            /// <description>ITAG: The dataset generated by the iTAG module annotation result.</description>
            /// <description>USER: The data set registered by the USER.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
