using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `RosDataset`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-dataset
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDatasetProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosDatasetProps")]
    public interface IRosDatasetProps
    {
        /// <remarks>
        /// <strong>Property</strong>: datasetName: The name of the dataset. The naming rules are as follows:
        /// - Start with a lowercase letter, uppercase letter, number, or Chinese.
        /// - Can contain an underscore (_) or a dash (-).
        /// - 1~127 characters in length.
        /// </remarks>
        [JsiiProperty(name: "datasetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DatasetName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataSourceType: The data source type. The following values are supported:
        /// - OSS: Alibaba Cloud Object Storage (OSS).
        /// - NAS: Alibaba cloud file storage (NAS).
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
        /// - The data source type is OSS:'oss:\/\/ bucket.endpoint\/object'
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
        /// <strong>Property</strong>: workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
        /// If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
        /// </remarks>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accessibility: Workspace visibility. The following values are supported:
        /// - PRIVATE (default): indicates that the workspace is visible to itself and the administrator.
        /// - PUBLIC: The workspace is visible to all users.
        /// </remarks>
        [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Accessibility
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dataType: The dataset type. The default value is COMMON. The following values are supported:
        /// - COMMON: COMMON.
        /// - PIC: picture.
        /// - TEXT: TEXT.
        /// - VIDEO: VIDEO.
        /// - AUDIO: AUDIO.
        /// </remarks>
        [JsiiProperty(name: "dataType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Custom descriptions of datasets to distinguish between different datasets.
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

        /// <summary>Properties for defining a `RosDataset`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-dataset
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDatasetProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosDatasetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IRosDatasetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: datasetName: The name of the dataset. The naming rules are as follows:
            /// - Start with a lowercase letter, uppercase letter, number, or Chinese.
            /// - Can contain an underscore (_) or a dash (-).
            /// - 1~127 characters in length.
            /// </remarks>
            [JsiiProperty(name: "datasetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DatasetName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSourceType: The data source type. The following values are supported:
            /// - OSS: Alibaba Cloud Object Storage (OSS).
            /// - NAS: Alibaba cloud file storage (NAS).
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
            /// - The data source type is OSS:'oss:\/\/ bucket.endpoint\/object'
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
            /// <strong>Property</strong>: workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
            /// If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
            /// </remarks>
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accessibility: Workspace visibility. The following values are supported:
            /// - PRIVATE (default): indicates that the workspace is visible to itself and the administrator.
            /// - PUBLIC: The workspace is visible to all users.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Accessibility
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dataType: The dataset type. The default value is COMMON. The following values are supported:
            /// - COMMON: COMMON.
            /// - PIC: picture.
            /// - TEXT: TEXT.
            /// - VIDEO: VIDEO.
            /// - AUDIO: AUDIO.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Custom descriptions of datasets to distinguish between different datasets.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
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
