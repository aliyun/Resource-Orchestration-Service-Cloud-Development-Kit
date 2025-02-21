using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `RosDatasetVersion`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-datasetversion
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDatasetVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosDatasetVersionProps")]
    public interface IRosDatasetVersionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: datasetId: The ID of the dataset.
        /// </remarks>
        [JsiiProperty(name: "datasetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DatasetId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataSourceType: The data source type. The following values are supported:
        /// - OSS: Alibaba Cloud Object Storage (OSS).
        /// - NAS: Alibaba cloud file storage (NAS).
        /// - CPFS
        /// </remarks>
        [JsiiProperty(name: "dataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataSourceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: property: The properties of the dataset. The following values are supported:
        /// - FILE: FILE.
        /// - DIRECTORY: folder.
        /// </remarks>
        [JsiiProperty(name: "property", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Property
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: uri: The Uri configuration sample is as follows:
        /// - The data source type is OSS:'oss:\/\/bucket.endpoint\/object'
        /// - The data source type is NAS:
        /// The general NAS format is: 'nas:\/\/<nasfisid>.region\/subpath\/to\/dir\/';
        /// CPFS1.0:'nas:\/\/<cpfs-fsid>.region\/subpath\/to\/dir \/';
        /// CPFS2.0:'nas:\/\/<cpfs-fsid>.region\/<protocolserviceid>\/'.
        /// CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.
        /// </remarks>
        [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Uri
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataCount: The number of dataset files, in units of pieces.
        /// </remarks>
        [JsiiProperty(name: "dataCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dataSize: The size of the dataset file in bytes.
        /// </remarks>
        [JsiiProperty(name: "dataSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataSize
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: To create a custom description for dataset versions in order to distinguish between different versions of the dataset.
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

        /// <remarks>
        /// <strong>Property</strong>: labels: Dataset version tag list.
        /// </remarks>
        [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosDatasetVersion.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Labels
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: options: The extended field, which is of the JsonString type.
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

        /// <remarks>
        /// <strong>Property</strong>: sourceId: The data source ID.
        /// - When the SourceType is USER, SourceId can be customized.
        /// - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
        /// - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
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

        /// <remarks>
        /// <strong>Property</strong>: sourceType: The data source type. The default value is USER. The following values are supported:
        /// - PAI-PUBLIC-DATASET:PAI public dataset.
        /// - ITAG: The dataset generated by the iTAG module annotation result.
        /// - USER: The data set registered by the USER.
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

        /// <summary>Properties for defining a `RosDatasetVersion`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-datasetversion
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDatasetVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosDatasetVersionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IRosDatasetVersionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: datasetId: The ID of the dataset.
            /// </remarks>
            [JsiiProperty(name: "datasetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DatasetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSourceType: The data source type. The following values are supported:
            /// - OSS: Alibaba Cloud Object Storage (OSS).
            /// - NAS: Alibaba cloud file storage (NAS).
            /// - CPFS
            /// </remarks>
            [JsiiProperty(name: "dataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataSourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: property: The properties of the dataset. The following values are supported:
            /// - FILE: FILE.
            /// - DIRECTORY: folder.
            /// </remarks>
            [JsiiProperty(name: "property", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Property
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: uri: The Uri configuration sample is as follows:
            /// - The data source type is OSS:'oss:\/\/bucket.endpoint\/object'
            /// - The data source type is NAS:
            /// The general NAS format is: 'nas:\/\/<nasfisid>.region\/subpath\/to\/dir\/';
            /// CPFS1.0:'nas:\/\/<cpfs-fsid>.region\/subpath\/to\/dir \/';
            /// CPFS2.0:'nas:\/\/<cpfs-fsid>.region\/<protocolserviceid>\/'.
            /// CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.
            /// </remarks>
            [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Uri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataCount: The number of dataset files, in units of pieces.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSize: The size of the dataset file in bytes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: To create a custom description for dataset versions in order to distinguish between different versions of the dataset.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: labels: Dataset version tag list.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosDatasetVersion.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Labels
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: options: The extended field, which is of the JsonString type.
            /// When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Options
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceId: The data source ID.
            /// - When the SourceType is USER, SourceId can be customized.
            /// - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
            /// - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceType: The data source type. The default value is USER. The following values are supported:
            /// - PAI-PUBLIC-DATASET:PAI public dataset.
            /// - ITAG: The dataset generated by the iTAG module annotation result.
            /// - USER: The data set registered by the USER.
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
